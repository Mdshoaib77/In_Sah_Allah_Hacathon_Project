import React, { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- IMAGE FIX: Using direct URLs/placeholder to ensure compilation ---
// The original asset imports are replaced with URLs.
const DISTRIBUTE_IMAGE = "https://childvikasfoundation.org/assets/images/food-distribution/2.jpg"; 
const DONATE_IMAGE = "https://plus.unsplash.com/premium_photo-1683140538884-07fb31428ca6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"; 
const VOLUNTEER_IMAGE = "https://plus.unsplash.com/premium_photo-1682088326537-a065aa9ff002?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"; 

// --- WEB3FORMS CONFIGURATION ---
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

// --- REUSABLE FORM COMPONENT (Internal) ---

const FormContent = ({ formType, onClose }) => {
  const [formData, setFormData] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  const formDetails = {
    'DISTRIBUTE': {
      title: 'Food Distribution/Donor Sign-up',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'organization', label: 'Organization/Business Name', type: 'text', required: false },
        { name: 'foodType', label: 'Type of Food Available (e.g., Excess Produce, Canned Goods)', type: 'text', required: true },
        { name: 'address', label: 'Pickup Address', type: 'text', required: true },
      ],
      submitText: 'Submit Distribution Request',
    },
    'DONATE': {
      title: 'Make a Donation',
      fields: [
        { name: 'name', label: 'Full Name (Optional)', type: 'text', required: false },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'donationType', label: 'Donation Type', type: 'select', options: ['Financial Contribution', 'Goods/Non-Perishables', 'Time/Service'], required: true },
        { name: 'amountDescription', label: 'Amount/Details (e.g., $50 or 5 bags of rice)', type: 'text', required: true },
      ],
      submitText: 'Submit Donation Interest',
    },
    'VOLUNTEER': {
      title: 'Join Our Volunteer Team',
      fields: [
        { name: 'name', label: 'Full Name', type: 'text', required: true },
        { name: 'email', label: 'Email Address', type: 'email', required: true },
        { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
        { name: 'areaOfInterest', label: 'Area of Interest', type: 'select', options: ['Food Rescuer (Driver)', 'Food Sorter', 'Event Organizer', 'Admin Support'], required: true },
      ],
      submitText: 'Apply to Volunteer',
    },
  };

  const currentForm = formDetails[formType];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    const formKey = formType.toLowerCase();
    
    // Prepare data for Web3Forms
    const data = {
      ...formData,
      access_key: WEB3FORMS_ACCESS_KEY,
      subject: `New Submission: ${currentForm.title}`,
      'Form-Source': `CommunityImpact-${formKey}`,
    };

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setMessage('Thank you! Your request has been successfully submitted. We will contact you soon.');
        setFormData({}); // Clear form
        setTimeout(onClose, 3000); // Close modal after success
      } else {
        setMessage(result.message || 'An error occurred during submission. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      setMessage('Network error or server issue. Please check your connection.');
    } finally {
      setLoading(false);
    }
  };

  if (!currentForm) return <p>Loading form...</p>;

  return (
    <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="w-full max-w-lg p-8 mx-auto transition-all transform bg-white shadow-2xl rounded-xl"
    >
      <h3 className="pb-2 mb-6 text-3xl font-bold text-gray-900 border-b border-red-100">{currentForm.title}</h3>
      
      {message && (
        <div className={`p-3 mb-4 rounded-lg text-sm font-semibold ${message.includes('successfully') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
          {message}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {currentForm.fields.map((field) => (
          <div key={field.name} className="mb-4">
            <label htmlFor={field.name} className="block mb-1 text-sm font-medium text-gray-700">
              {field.label} {field.required && <span className="text-red-500">*</span>}
            </label>
            
            {field.type === 'select' ? (
              <select
                id={field.name}
                name={field.name}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
              >
                <option value="" disabled>Select an option</option>
                {field.options.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name] || ''}
                onChange={handleChange}
                required={field.required}
                className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"
                placeholder={field.label.includes('(Optional)') ? field.label.replace(' (Optional)', '') : field.label}
              />
            )}
          </div>
        ))}
        
        <div className="flex justify-end mt-6 space-x-3">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 text-gray-700 transition duration-150 border border-gray-300 rounded-full hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            className="flex items-center justify-center px-6 py-2 font-semibold text-white transition duration-150 bg-red-600 rounded-full hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? (
              <svg className="w-5 h-5 mr-3 text-white animate-spin" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : currentForm.submitText}
          </button>
        </div>
      </form>
    </motion.div>
  );
};


// --- MODAL WRAPPER COMPONENT (Internal) ---

const Modal = ({ formType, onClose }) => {
  if (!formType) return null;

  // Backdrop animation
  const backdropVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  return (
    <AnimatePresence>
      <motion.div
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto bg-gray-900 bg-opacity-75"
      >
        <div onClick={e => e.stopPropagation()} className="relative w-full max-w-lg mx-auto">
          <FormContent formType={formType} onClose={onClose} />
        </div>
      </motion.div>
    </AnimatePresence>
  );
};


// --- MAIN CommunityImpact COMPONENT ---

const CommunityImpact = () => {
  // State for Modal Management
  const [modalOpen, setModalOpen] = useState(false);
  const [formType, setFormType] = useState(null); // 'DISTRIBUTE', 'DONATE', 'VOLUNTEER'

  // Function to open modal
  const openModal = useCallback((type) => {
    setFormType(type);
    setModalOpen(true);
  }, []);

  // Function to close modal
  const closeModal = useCallback(() => {
    setModalOpen(false);
    // Give a moment before clearing formType to allow exit animation
    setTimeout(() => setFormType(null), 300); 
  }, []);

  // Common styles for the red links/buttons
  const linkClasses = "block mt-4 text-red-600 font-bold hover:text-red-700 transition duration-150 text-base cursor-pointer";

  // Framer Motion variants for fade-in-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <>
      <div className="py-10 bg-white sm:py-16">
        {/* Section Header */}
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            OUR CORE ACTIVITIES
          </h2>
          {/* Red Underline */}
          <div className="w-16 h-1 mx-auto mt-2 mb-10 bg-red-600 rounded-full"></div>
        </div>

        {/* Three Column Grid Container */}
        <motion.div
          className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="show" 
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
            
            {/* Column 1: WE DISTRIBUTE FREE FOOD */}
            <motion.div className="text-center group" variants={itemVariants}>
              <h3 className="mb-4 text-xl font-bold text-red-600 uppercase">
                WE DISTRIBUTE FREE FOOD
              </h3>
              
              {/* Image Card with subtle hover effect */}
              <div className="mb-4 overflow-hidden transition duration-500 shadow-2xl rounded-xl group-hover:shadow-red-300/50">
                <img 
                  src={DISTRIBUTE_IMAGE} 
                  alt="Volunteers distributing food boxes" 
                  className="object-cover w-full h-64 transition duration-500 transform group-hover:scale-105"
                />
              </div>
              
              <p className="text-base leading-relaxed text-gray-700 ">
                We organize scheduled events and delivery routes to ensure fresh, nutritious food 
                reaches families and individuals facing food insecurity.
              </p>
              {/* Updated to open the modal */}
              {/* <button  onClick={() => openModal('DISTRIBUTE')} className={linkClasses}>
                FIND A DISTRIBUTION POINT
              </button> */}
              <button 
  onClick={() => openModal('DISTRIBUTE')} 
  className="px-6 py-2 mt-4 mr-10 text-lg font-semibold text-white transition duration-300 ease-in-out transform rounded-full shadow-lg bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
>
  FIND A DISTRIBUTION POINT
</button>
            </motion.div>

            {/* Column 2: WE COLLECT DONATIONS */}
            <motion.div className="text-center group" variants={itemVariants}>
              <h3 className="mb-4 text-xl font-bold text-red-600 uppercase">
                WE COLLECT DONATIONS
              </h3>
              
              {/* Image Card with subtle hover effect */}
              <div className="mb-4 overflow-hidden transition duration-500 shadow-2xl rounded-xl group-hover:shadow-red-300/50">
                <img 
                  src={DONATE_IMAGE} 
                  alt="A box of food donations" 
                  className="object-cover w-full h-64 transition duration-500 transform group-hover:scale-105"
                />
              </div>
              
              <p className="text-base leading-relaxed text-gray-700">
                Financial contributions, food drives, and surplus produce donations are essential 
                to powering our operations and expanding our reach to more.
              </p>
              {/* Updated to open the modal */}
              {/* <button onClick={() => openModal('DONATE')} className={linkClasses}>
                DONATE NOW
              </button> */}
              <button 
  onClick={() => openModal('DONATE')} 
  className="block px-6 py-2 mt-4 text-lg font-semibold text-white transition duration-300 transform bg-red-600 rounded-full shadow-xl ml-22 hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
>
  DONATE NOW
</button>

            </motion.div>

            {/* Column 3: WE ADD VOLUNTEERS */}
            <motion.div className="text-center group" variants={itemVariants}>
              <h3 className="mb-4 text-xl font-bold text-red-600 uppercase">
                WE ADD VOLUNTEERS
              </h3>
              
              {/* Image Card with subtle hover effect */}
              <div className="mb-4 overflow-hidden transition duration-500 shadow-2xl rounded-xl group-hover:shadow-red-300/50">
                <img 
                  src={VOLUNTEER_IMAGE} 
                  alt="Group of happy volunteers working together" 
                  className="object-cover w-full h-64 transition duration-500 transform group-hover:scale-105"
                />
              </div>
              
              <p className="text-base leading-relaxed text-gray-700">
                Volunteers are the backbone of our operation, helping with everything from food 
                sorting and delivery to event planning and administrative.
              </p>
              {/* Updated to open the modal */}
              {/* <button onClick={() => openModal('VOLUNTEER')} className={linkClasses}>
                BECOME A VOLUNTEER
              </button> */}

              <button 
  onClick={() => openModal('VOLUNTEER')} 
  className="block px-6 py-2 mt-4 ml-auto mr-20 text-lg font-semibold text-white transition duration-300 transform bg-green-600 rounded-full shadow-xl hover:bg-green-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-300"
>
  BECOME A VOLUNTEER
</button>

            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Modal is rendered here */}
      <Modal formType={formType} onClose={closeModal} />
    </>
  );
};

export default CommunityImpact;