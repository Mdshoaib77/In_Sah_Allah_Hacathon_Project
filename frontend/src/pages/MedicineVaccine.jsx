// // src/pages/MedicineVaccine.jsx

// import React from 'react';

// const MedicineVaccine = () => {
//   return (
//     <div className="p-6">
//       <h1 className="text-3xl font-bold">Free Medicine and Vaccine</h1>
//       <p className="mt-4">Details about our free medicine and vaccine distribution services.</p>
//     </div>
//   );
// };

// export default MedicineVaccine;


// import React from 'react';
// import { motion } from 'framer-motion';
// // Icons from Lucide for a modern look
// import { Mail, Shield, Heart, Droplet, Users, BookOpen } from 'lucide-react'; 
// // Note: Framer Motion is used for subtle scroll-based animations.

// // --- Helper Variables and Configuration ---

// // Reusable Tailwind classes for consistent styling
// const buttonClasses = "px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center";
// const secondaryButtonClasses = "px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition duration-300 inline-flex items-center justify-center";
// const linkClasses = "text-red-600 font-bold hover:text-red-700 transition duration-150 text-base cursor-pointer";

// // Framer Motion variants for fade-in-up animation on scroll
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // Delay between children animations
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
// };

// // --- Campaign Data (Services) ---
// const campaigns = [
//   {
//     icon: Heart,
//     title: "Essential Medicine Supply",
//     description: "We provide regular access to vital prescription and over-the-counter medicines for chronic conditions like diabetes and hypertension, ensuring continuous care.",
//     cta: "Request Medicine",
//     altImage: "https://images.unsplash.com/photo-1646956141627-ef880b3ef654?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
//   },
//   {
//     icon: Shield,
//     title: "Community Vaccination Drives",
//     description: "Organizing free vaccination camps, including seasonal flu shots and primary immunizations, to build herd immunity and protect vulnerable populations.",
//     cta: "Find a Vaccine Site",
//     altImage: "https://images.unsplash.com/photo-1578307985320-34b61a66c195?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1178",
//   },
//   {
//     icon: BookOpen,
//     title: "Health Screening & Education",
//     description: "Conducting free health screenings (BP, blood sugar, BMI) and workshops on hygiene, nutrition, and disease prevention for better long-term health outcomes.",
//     cta: "See Next Camp",
//     altImage: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
//   },
// ];


// // --- MAIN MedicineVaccine COMPONENT (The Page) ---

// const MedicineVaccine = () => {
//   return (
//     <div className="min-h-screen font-sans bg-gray-50">
      
//       {/* 1. Header/Hero Section */}
//       <motion.header 
//         className="py-16 text-white bg-red-600 sm:py-24"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
//           <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
//             Health Access for All
//           </h1>
//           <p className="max-w-3xl mx-auto mb-8 text-xl font-light sm:text-2xl">
//             Providing free, life-saving medicines and essential vaccines to underserved communities to ensure fundamental public health.
//           </p>
//           <div className="space-y-4 sm:space-y-0 sm:space-x-6">
//             <a href="#campaigns" className={buttonClasses}>
//               <Users className="w-5 h-5 mr-2" />
//               Explore Our Campaigns
//             </a>
//             <a href="#contact" className={secondaryButtonClasses + " bg-transparent border-white text-white hover:bg-white hover:text-red-600"}>
//               <Droplet className="w-5 h-5 mr-2" />
//               Support Our Mission
//             </a>
//           </div>
//         </div>
//       </motion.header>

//       {/* 2. About Us Section */}
//       <motion.section 
//         className="py-16 bg-white sm:py-24"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.2 }}
//         variants={containerVariants}
//       >
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <motion.div className="mb-12 text-center" variants={itemVariants}>
//             <h2 className="text-sm font-semibold tracking-wide text-red-600 uppercase">ABOUT OUR INITIATIVE</h2>
//             <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Bridging the Healthcare Gap
//             </p>
//             <div className="w-16 h-1 mx-auto mt-2 bg-red-600 rounded-full"></div>
//           </motion.div>

//           <div className="lg:flex lg:items-center lg:space-x-12">
//             <motion.div className="lg:w-1/2" variants={itemVariants}>
//               {/* Placeholder image for visual interest */}
//               <img 
//                 className="object-cover w-full mb-8 shadow-2xl rounded-xl h-80 lg:mb-0"
//                 src="https://plus.unsplash.com/premium_photo-1678836048286-a511c8c07cc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
//                 alt="Community health workers helping a family"
//               />
//             </motion.div>
//             <motion.div className="space-y-6 text-gray-700 lg:w-1/2" variants={itemVariants}>
//               <p className="text-lg">
//                 Our Free Medicine and Vaccine program operates on the belief that basic healthcare is a human right. We work tirelessly to eliminate the financial barriers that prevent thousands of individuals from receiving necessary treatments and preventative care.
//               </p>
//               <p className="text-lg font-medium">
//                 By focusing on **disease prevention** through vaccines and consistent **medication management** for long-term health, we aim to drastically reduce health crises within vulnerable neighborhoods.
//               </p>
//               <ul className="ml-4 space-y-2 list-disc list-inside text-md">
//                 <li>Focus on high-impact essential medicines.</li>
//                 <li>Partnerships with local clinics and pharmacies.</li>
//                 <li>Ensuring cold-chain integrity for all vaccines.</li>
//               </ul>
//             </motion.div>
//           </div>
//         </div>
//       </motion.section>

//       {/* 3. Our Campaigns Section (Main Services) */}
//       <motion.section 
//         className="py-16 bg-gray-100 sm:py-24" 
//         id="campaigns"
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.1 }}
//         variants={containerVariants}
//       >
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <motion.div className="mb-12 text-center" variants={itemVariants}>
//             <h2 className="text-sm font-semibold tracking-wide text-red-600 uppercase">THREE PILLARS OF HEALTH</h2>
//             <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Our Impactful Campaigns
//             </p>
//             <div className="w-16 h-1 mx-auto mt-2 bg-red-600 rounded-full"></div>
//           </motion.div>

//           <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
//             {campaigns.map((campaign, index) => (
//               <motion.div 
//                 key={index} 
//                 className="flex flex-col p-6 text-center transition duration-300 bg-white shadow-xl sm:p-8 rounded-xl hover:shadow-2xl hover:shadow-red-200/50" 
//                 variants={itemVariants}
//               >
//                 <div className="inline-block p-4 mx-auto mb-4 bg-red-100 rounded-full">
//                   <campaign.icon className="w-8 h-8 text-red-600" />
//                 </div>
                
//                 <h3 className="mb-3 text-xl font-bold text-gray-900">{campaign.title}</h3>
                
//                 <div className="mb-4 overflow-hidden rounded-lg shadow-md">
//                     {/* Placeholder campaign image */}
//                     <img 
//                         src={campaign.altImage} 
//                         alt={`Visual for ${campaign.title}`} 
//                         className="object-cover w-full h-40"
//                     />
//                 </div>

//                 <p className="flex-grow mb-4 text-base leading-relaxed text-gray-700">
//                   {campaign.description}
//                 </p>
                
//                 <button className={linkClasses + " mt-auto"}>
//                   {campaign.cta} &rarr;
//                 </button>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </motion.section>

//       {/* 4. Call to Action / Footer */}
//       <motion.footer 
//         className="py-12 bg-gray-800"
//         id="contact"
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         viewport={{ once: true, amount: 0.5 }}
//       >
//         <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
//           <h3 className="mb-4 text-3xl font-bold">Ready to help us save lives?</h3>
//           <p className="mb-8 text-lg text-gray-300">
//             Every donation and every volunteer hour directly funds medicine and secures vaccines for those who need it most.
//           </p>
//           <a href="#" className={buttonClasses + " bg-red-500 hover:bg-red-600"}>
//             <Mail className="w-5 h-5 mr-2" />
//             Contact Our Team
//           </a>
//         </div>
//       </motion.footer>
//     </div>
//   );
// };

// export default MedicineVaccine;


import React, { useState } from 'react';
import { motion } from 'framer-motion';
// Icons from Lucide for a modern look
import { Mail, Shield, Heart, Droplet, Users, BookOpen, X, Send, CheckCircle, AlertTriangle } from 'lucide-react'; 

// --- Configuration ---
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
const WEB3FORMS_ACTION_URL = "https://api.web3forms.com/submit";

// Reusable Tailwind classes for consistent styling
const buttonClasses = "px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center";
const secondaryButtonClasses = "px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition duration-300 inline-flex items-center justify-center";
const linkClasses = "text-red-600 font-bold hover:text-red-700 transition duration-150 text-base cursor-pointer";

// Framer Motion variants
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
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- Campaign Data (Services) ---
const campaigns = [
  {
    icon: Heart,
    title: "Essential Medicine Supply",
    description: "We provide regular access to vital prescription and over-the-counter medicines for chronic conditions like diabetes and hypertension, ensuring continuous care.",
    cta: "Request Medicine",
    formType: "medicine",
    altImage: "https://images.unsplash.com/photo-1646956141627-ef880b3ef654?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
  },
  {
    icon: Shield,
    title: "Community Vaccination Drives",
    description: "Organizing free vaccination camps, including seasonal flu shots and primary immunizations, to build herd immunity and protect vulnerable populations.",
    cta: "Find a Vaccine Site",
    formType: "vaccine",
    altImage: "https://images.unsplash.com/photo-1578307985320-34b61a66c195?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1178",
  },
  {
    icon: BookOpen,
    title: "Health Screening & Education",
    description: "Conducting free health screenings (BP, blood sugar, BMI) and workshops on hygiene, nutrition, and disease prevention for better long-term health outcomes.",
    cta: "See Next Camp",
    formType: "camp",
    altImage: "https://images.unsplash.com/photo-1589104759909-e355f8999f7e?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1167",
  },
];

// --- Sub-Components (Forms) ---

// Generic component to handle Web3Forms submission
const Web3Form = ({ title, children, formName, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null); // 'success' or 'error'

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult(null);

    const formData = new FormData(event.target);
    // Add form name for easy identification in your email
    formData.append("Form Name", formName);

    try {
      const response = await fetch(WEB3FORMS_ACTION_URL, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      const json = await response.json();

      if (json.success) {
        setResult('success');
        event.target.reset(); // Clear form on success
        setTimeout(onClose, 3000); // Close modal after 3 seconds
      } else {
        console.error("Web3Forms Error:", json);
        setResult('error');
      }
    } catch (e) {
      console.error("Submission Failed:", e);
      setResult('error');
    } finally {
      setLoading(false);
    }
  };

  if (result === 'success') {
    return (
      <div className="p-8 text-center rounded-lg shadow-inner bg-green-50">
        <CheckCircle className="w-12 h-12 mx-auto mb-4 text-green-500" />
        <h3 className="mb-2 text-xl font-bold text-gray-800">Success!</h3>
        <p className="text-gray-600">Your request has been successfully submitted. We will contact you soon!</p>
      </div>
    );
  }

  if (result === 'error') {
    return (
      <div className="p-8 text-center rounded-lg shadow-inner bg-red-50">
        <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-red-500" />
        <h3 className="mb-2 text-xl font-bold text-gray-800">Error!</h3>
        <p className="text-gray-600">Something went wrong during submission. Please try again or contact us directly.</p>
        <button onClick={() => setResult(null)} className="px-4 py-2 mt-4 text-sm text-white bg-red-600 rounded-full hover:bg-red-700">Try Again</button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
      <h2 className="pb-2 mb-6 text-2xl font-bold text-gray-900 border-b">{title}</h2>
      
      {children}
      
      <button 
        type="submit" 
        disabled={loading}
        className={`${buttonClasses} w-full ${loading ? 'opacity-60 cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <span className="flex items-center">
            <svg className="w-5 h-5 mr-3 -ml-1 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
            Submitting...
          </span>
        ) : (
          <span className="inline-flex items-center">
            <Send className="w-5 h-5 mr-2" />
            Send Request
          </span>
        )}
      </button>
    </form>
  );
};

// --- Specific Form Content ---

const RequestMedicineForm = ({ onClose }) => (
  <Web3Form title="Request Essential Medicine Supply" formName="Medicine Request" onClose={onClose}>
    <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="email" name="email" placeholder="Your Email (for confirmation)" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="tel" name="phone" placeholder="Phone Number" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <textarea name="medicine_details" placeholder="List of required medicines and dosage (e.g., Insulin 10 units/day, Metformin 500mg)" rows="4" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"></textarea>
    <p className="text-sm text-gray-500">Note: Please specify the exact medicine name and frequency.</p>
  </Web3Form>
);

const FindVaccineSiteForm = ({ onClose }) => (
  <Web3Form title="Find a Vaccine Site / Register" formName="Vaccine Registration" onClose={onClose}>
    <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="email" name="email" placeholder="Your Email" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <select name="vaccine_interest" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
      <option value="">Select Vaccine Type of Interest</option>
      <option value="Flu Shot">Seasonal Flu Shot</option>
      <option value="Routine Immunization">Routine Immunization (Child/Adult)</option>
      <option value="COVID-19 Booster">COVID-19 Booster</option>
      <option value="Other">Other</option>
    </select>
    <input type="text" name="area" placeholder="Your Current City/Area (for site location)" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
  </Web3Form>
);

const CampSubscriptionForm = ({ onClose }) => (
  <Web3Form title="Subscribe for Next Camp Information" formName="Camp Subscription" onClose={onClose}>
    <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="tel" name="phone" placeholder="Phone Number (Optional)" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <select name="preferred_service" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
      <option value="">Interested in which service?</option>
      <option value="Health Screening">Health Screening</option>
      <option value="Health Education">Health Education</option>
      <option value="Both">Both Screening and Education</option>
    </select>
  </Web3Form>
);

const SupportMissionForm = ({ onClose }) => (
  <Web3Form title="Volunteer or Donation Inquiry" formName="Mission Support Inquiry" onClose={onClose}>
    <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <select name="interest_type" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500">
      <option value="">I want to...</option>
      <option value="Donate Funds">Donate Funds</option>
      <option value="Donate Resources (Medicine/Supplies)">Donate Resources (Medicine/Supplies)</option>
      <option value="Volunteer Time">Volunteer My Time</option>
    </select>
    <textarea name="message" placeholder="Tell us more about how you want to help." rows="3" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"></textarea>
  </Web3Form>
);

const GeneralContactForm = ({ onClose }) => (
  <Web3Form title="General Contact & Inquiry" formName="General Contact" onClose={onClose}>
    <input type="text" name="name" placeholder="Full Name" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <input type="email" name="email" placeholder="Email Address" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"/>
    <textarea name="message" placeholder="Your Message or Question" rows="4" required className="w-full p-3 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500"></textarea>
  </Web3Form>
);


// --- Generic Modal Component ---

const Modal = ({ isOpen, title, children, onClose }) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-gray-900 bg-opacity-75"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose} // Close modal when clicking backdrop
    >
      {/* Modal Content */}
      <motion.div
        className="relative w-full max-w-lg p-6 mx-auto bg-white shadow-2xl rounded-xl sm:p-8"
        initial={{ y: -50, scale: 0.8 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: -50, scale: 0.8 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <button
          onClick={onClose}
          className="absolute text-gray-500 transition top-4 right-4 hover:text-red-600"
          aria-label="Close Modal"
        >
          <X className="w-6 h-6" />
        </button>
        {children}
      </motion.div>
    </motion.div>
  );
};


// --- MAIN MedicineVaccine COMPONENT (The Page) ---

const MedicineVaccine = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  const openModal = (content) => {
    setModalContent(content);
    setModalOpen(true);
    // Optional: Lock body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalContent(null);
    document.body.style.overflow = 'unset';
  };
  
  // Function to map formType to the correct Component
  const getFormComponent = (type) => {
    switch (type) {
      case 'medicine':
        return <RequestMedicineForm onClose={closeModal} />;
      case 'vaccine':
        return <FindVaccineSiteForm onClose={closeModal} />;
      case 'camp':
        return <CampSubscriptionForm onClose={closeModal} />;
      case 'support':
        return <SupportMissionForm onClose={closeModal} />;
      case 'contact':
        return <GeneralContactForm onClose={closeModal} />;
      default:
        return null;
    }
  };


  return (
    <div className="min-h-screen font-sans bg-gray-50">
      
      {/* 1. Header/Hero Section */}
      <motion.header 
        className="py-16 text-white bg-red-600 sm:py-24"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Health Access for All
          </h1>
          <p className="max-w-3xl mx-auto mb-8 text-xl font-light sm:text-2xl">
            Providing free, life-saving medicines and essential vaccines to underserved communities to ensure fundamental public health.
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-6">
            <a href="#campaigns" className={buttonClasses}>
              <Users className="w-5 h-5 mr-2" />
              Explore Our Campaigns
            </a>
            {/* BUTTON 1: Support Our Mission (Hero CTA) */}
            <button 
              onClick={() => openModal('support')} 
              className={secondaryButtonClasses + " bg-transparent border-white text-white hover:bg-white hover:text-red-600"}
            >
              <Droplet className="w-5 h-5 mr-2" />
              Support Our Mission
            </button>
          </div>
        </div>
      </motion.header>

      {/* 2. About Us Section (Unchanged) */}
      <motion.section 
        className="py-16 bg-white sm:py-24"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-sm font-semibold tracking-wide text-red-600 uppercase">ABOUT OUR INITIATIVE</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Bridging the Healthcare Gap
            </p>
            <div className="w-16 h-1 mx-auto mt-2 bg-red-600 rounded-full"></div>
          </motion.div>

          <div className="lg:flex lg:items-center lg:space-x-12">
            <motion.div className="lg:w-1/2" variants={itemVariants}>
              <img 
                className="object-cover w-full mb-8 shadow-2xl rounded-xl h-80 lg:mb-0"
                src="https://plus.unsplash.com/premium_photo-1678836048286-a511c8c07cc7?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
                alt="Community health workers helping a family"
              />
            </motion.div>
            <motion.div className="space-y-6 text-gray-700 lg:w-1/2" variants={itemVariants}>
              <p className="text-lg">
                Our Free Medicine and Vaccine program operates on the belief that basic healthcare is a human right. We work tirelessly to eliminate the financial barriers that prevent thousands of individuals from receiving necessary treatments and preventative care.
              </p>
              <p className="text-lg font-medium">
                By focusing on **disease prevention** through vaccines and consistent **medication management** for long-term health, we aim to drastically reduce health crises within vulnerable neighborhoods.
              </p>
              <ul className="ml-4 space-y-2 list-disc list-inside text-md">
                <li>Focus on high-impact essential medicines.</li>
                <li>Partnerships with local clinics and pharmacies.</li>
                <li>Ensuring cold-chain integrity for all vaccines.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* 3. Our Campaigns Section (Main Services) */}
      <motion.section 
        className="py-16 bg-gray-100 sm:py-24" 
        id="campaigns"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        variants={containerVariants}
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <motion.div className="mb-12 text-center" variants={itemVariants}>
            <h2 className="text-sm font-semibold tracking-wide text-red-600 uppercase">THREE PILLARS OF HEALTH</h2>
            <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Impactful Campaigns
            </p>
            <div className="w-16 h-1 mx-auto mt-2 bg-red-600 rounded-full"></div>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
            {campaigns.map((campaign, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col p-6 text-center transition duration-300 bg-white shadow-xl sm:p-8 rounded-xl hover:shadow-2xl hover:shadow-red-200/50" 
                variants={itemVariants}
              >
                <div className="inline-block p-4 mx-auto mb-4 bg-red-100 rounded-full">
                  <campaign.icon className="w-8 h-8 text-red-600" />
                </div>
                
                <h3 className="mb-3 text-xl font-bold text-gray-900">{campaign.title}</h3>
                
                <div className="mb-4 overflow-hidden rounded-lg shadow-md">
                    <img 
                        src={campaign.altImage} 
                        alt={`Visual for ${campaign.title}`} 
                        className="object-cover w-full h-40"
                    />
                </div>

                <p className="flex-grow mb-4 text-base leading-relaxed text-gray-700">
                  {campaign.description}
                </p>
                
                {/* BUTTONS 2, 3, 4: Campaign CTAs (now modals) */}
                <button 
                  onClick={() => openModal(campaign.formType)} 
                  className={linkClasses + " mt-auto"}
                >
                  {campaign.cta} &rarr;
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* 4. Call to Action / Footer */}
      <motion.footer 
        className="py-12 bg-gray-800"
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="px-4 mx-auto text-center text-white max-w-7xl sm:px-6 lg:px-8">
          <h3 className="mb-4 text-3xl font-bold">Ready to help us save lives?</h3>
          <p className="mb-8 text-lg text-gray-300">
            Every donation and every volunteer hour directly funds medicine and secures vaccines for those who need it most.
          </p>
          {/* BUTTON 5: Contact Our Team (Footer CTA) */}
          <button 
            onClick={() => openModal('contact')} 
            className={buttonClasses + " bg-red-500 hover:bg-red-600"}
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Our Team
          </button>
        </div>
      </motion.footer>

      {/* Modal Container */}
      <Modal isOpen={modalOpen} onClose={closeModal}>
        {getFormComponent(modalContent)}
      </Modal>

    </div>
  );
};

export default MedicineVaccine;