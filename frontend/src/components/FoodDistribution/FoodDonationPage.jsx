// // // // import React, { useState } from 'react';
// // // // import { motion, AnimatePresence } from 'framer-motion';

// // // // // Component for the multi-step donation form
// // // // const FoodDonationPage = () => {
// // // //   // State for form data, errors, and current step
// // // //   const [step, setStep] = useState(1);
// // // //   const [formData, setFormData] = useState({
// // // //     name: '',
// // // //     email: '',
// // // //     phone: '',
// // // //     city: '',
// // // //     foodType: 'non-perishable',
// // // //     quantity: 10,
// // // //     pickupDate: '',
// // // //     notes: '',
// // // //   });
// // // //   const [errors, setErrors] = useState({});
// // // //   const [isSubmitted, setIsSubmitted] = useState(false);

// // // //   // Framer Motion variants for step transition
// // // //   const stepVariants = {
// // // //     initial: { opacity: 0, x: 50, scale: 0.95 },
// // // //     in: { opacity: 1, x: 0, scale: 1 },
// // // //     out: { opacity: 0, x: -50, scale: 0.95 },
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setFormData((prev) => ({ ...prev, [name]: value }));
// // // //     // Clear error for the field being edited
// // // //     if (errors[name]) {
// // // //       setErrors((prev) => ({ ...prev, [name]: null }));
// // // //     }
// // // //   };

// // // //   const validateStep = (currentStep) => {
// // // //     let newErrors = {};
// // // //     let isValid = true;

// // // //     if (currentStep === 1) {
// // // //       if (!formData.name.trim()) newErrors.name = 'Full name is required.';
// // // //       if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
// // // //       if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
// // // //       if (!formData.city.trim()) newErrors.city = 'City/Area is required.';
// // // //     }

// // // //     if (currentStep === 2) {
// // // //       if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero.';
// // // //       if (!formData.pickupDate) newErrors.pickupDate = 'Preferred pickup date is required.';
      
// // // //       // Check if pickup date is in the future or today
// // // //       const today = new Date().toISOString().split('T')[0];
// // // //       if (formData.pickupDate < today) {
// // // //           newErrors.pickupDate = 'Pickup date cannot be in the past.';
// // // //       }
// // // //     }

// // // //     setErrors(newErrors);
// // // //     isValid = Object.keys(newErrors).length === 0;
// // // //     return isValid;
// // // //   };

// // // //   const handleNext = () => {
// // // //     if (validateStep(step)) {
// // // //       setStep((prev) => prev + 1);
// // // //     }
// // // //   };

// // // //   const handleBack = () => {
// // // //     setStep((prev) => prev - 1);
// // // //   };

// // // //   const handleSubmit = (e) => {
// // // //     e.preventDefault();
// // // //     if (step === 3) {
// // // //       // Final submission logic here
// // // //       console.log('Donation Submitted:', formData);
// // // //       setIsSubmitted(true);
// // // //       // In a real app, you would call an API here
// // // //     }
// // // //   };

// // // //   // Common input field component
// // // //   const InputField = ({ label, name, type = 'text', value, onChange, error, ...props }) => (
// // // //     <div className="mb-6">
// // // //       <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
// // // //         {label}
// // // //       </label>
// // // //       <input
// // // //         type={type}
// // // //         id={name}
// // // //         name={name}
// // // //         value={value}
// // // //         onChange={onChange}
// // // //         className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ${
// // // //           error ? 'border-red-500' : 'border-gray-300'
// // // //         }`}
// // // //         {...props}
// // // //       />
// // // //       {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
// // // //     </div>
// // // //   );

// // // //   // --- Step Components ---

// // // //   const Step1 = () => (
// // // //     <motion.div
// // // //       key="step1"
// // // //       variants={stepVariants}
// // // //       initial="initial"
// // // //       animate="in"
// // // //       exit="out"
// // // //       transition={{ duration: 0.3 }}
// // // //     >
// // // //       <h3 className="mb-6 text-2xl font-semibold text-gray-800">1. Your Contact Information</h3>
// // // //       <InputField
// // // //         label="Full Name"
// // // //         name="name"
// // // //         value={formData.name}
// // // //         onChange={handleChange}
// // // //         error={errors.name}
// // // //       />
// // // //       <InputField
// // // //         label="Email Address"
// // // //         name="email"
// // // //         type="email"
// // // //         value={formData.email}
// // // //         onChange={handleChange}
// // // //         error={errors.email}
// // // //       />
// // // //       <InputField
// // // //         label="Phone Number"
// // // //         name="phone"
// // // //         type="tel"
// // // //         value={formData.phone}
// // // //         onChange={handleChange}
// // // //         error={errors.phone}
// // // //         placeholder="e.g., 555-123-4567"
// // // //       />
// // // //       <InputField
// // // //         label="City/Area"
// // // //         name="city"
// // // //         value={formData.city}
// // // //         onChange={handleChange}
// // // //         error={errors.city}
// // // //       />
// // // //     </motion.div>
// // // //   );

// // // //   const Step2 = () => (
// // // //     <motion.div
// // // //       key="step2"
// // // //       variants={stepVariants}
// // // //       initial="initial"
// // // //       animate="in"
// // // //       exit="out"
// // // //       transition={{ duration: 0.3 }}
// // // //     >
// // // //       <h3 className="mb-6 text-2xl font-semibold text-gray-800">2. Details of Your Donation</h3>
      
// // // //       {/* Food Type Select */}
// // // //       <div className="mb-6">
// // // //         <label htmlFor="foodType" className="block mb-1 text-sm font-medium text-gray-700">
// // // //           Type of Food
// // // //         </label>
// // // //         <select
// // // //           id="foodType"
// // // //           name="foodType"
// // // //           value={formData.foodType}
// // // //           onChange={handleChange}
// // // //           className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
// // // //         >
// // // //           <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, etc.)</option>
// // // //           <option value="perishable">Fresh/Perishable (Produce, meat, dairy - subject to inspection)</option>
// // // //           <option value="prepared">Prepared Meals (From certified kitchens only)</option>
// // // //         </select>
// // // //       </div>

// // // //       {/* Quantity Input */}
// // // //       <InputField
// // // //         label="Estimated Quantity (in kg or number of boxes)"
// // // //         name="quantity"
// // // //         type="number"
// // // //         value={formData.quantity}
// // // //         onChange={handleChange}
// // // //         error={errors.quantity}
// // // //         min="1"
// // // //       />
      
// // // //       {/* Pickup Date Input */}
// // // //       <InputField
// // // //         label="Preferred Pickup Date"
// // // //         name="pickupDate"
// // // //         type="date"
// // // //         value={formData.pickupDate}
// // // //         onChange={handleChange}
// // // //         error={errors.pickupDate}
// // // //       />

// // // //       {/* Notes Textarea */}
// // // //       <div className="mb-6">
// // // //         <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
// // // //           Additional Notes (e.g., specific items, storage needs)
// // // //         </label>
// // // //         <textarea
// // // //           id="notes"
// // // //           name="notes"
// // // //           rows="3"
// // // //           value={formData.notes}
// // // //           onChange={handleChange}
// // // //           className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
// // // //         ></textarea>
// // // //       </div>
// // // //     </motion.div>
// // // //   );

// // // //   const Step3 = () => (
// // // //     <motion.div
// // // //       key="step3"
// // // //       variants={stepVariants}
// // // //       initial="initial"
// // // //       animate="in"
// // // //       exit="out"
// // // //       transition={{ duration: 0.3 }}
// // // //       className="space-y-6"
// // // //     >
// // // //       <h3 className="mb-6 text-2xl font-semibold text-gray-800">3. Review and Confirm</h3>
      
// // // //       <div className="p-5 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
// // // //         <h4 className="mb-3 font-bold text-red-700">Review Details:</h4>
// // // //         <ul className="space-y-2 text-sm text-gray-700">
// // // //           <li><strong>Donor:</strong> {formData.name} ({formData.email})</li>
// // // //           <li><strong>Contact:</strong> {formData.phone}</li>
// // // //           <li><strong>Location:</strong> {formData.city}</li>
// // // //           <li><strong>Food Type:</strong> <span className="capitalize">{formData.foodType}</span></li>
// // // //           <li><strong>Quantity:</strong> {formData.quantity} unit(s)</li>
// // // //           <li><strong>Preferred Pickup:</strong> {formData.pickupDate || 'N/A'}</li>
// // // //           <li><strong>Notes:</strong> {formData.notes || 'None provided'}</li>
// // // //         </ul>
// // // //       </div>

// // // //       <div className="flex items-start p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50">
// // // //         <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
// // // //         <p>
// // // //           By clicking **"Confirm Donation,"** you confirm that all items are safe for consumption, correctly stored, and you are ready for us to arrange the pickup on the preferred date.
// // // //         </p>
// // // //       </div>
// // // //     </motion.div>
// // // //   );
  
// // // //   // --- Success State ---

// // // //   if (isSubmitted) {
// // // //     return (
// // // //       <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
// // // //         <motion.div 
// // // //           className="w-full max-w-xl p-10 text-center bg-white shadow-2xl rounded-xl"
// // // //           initial={{ scale: 0.8, opacity: 0 }}
// // // //           animate={{ scale: 1, opacity: 1 }}
// // // //           transition={{ type: "spring", stiffness: 100 }}
// // // //         >
// // // //           <motion.div
// // // //             initial={{ y: -20, opacity: 0 }}
// // // //             animate={{ y: 0, opacity: 1 }}
// // // //             transition={{ delay: 0.5 }}
// // // //           >
// // // //             <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full">
// // // //                 <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
// // // //             </div>
// // // //             <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Donation Successfully Logged!</h2>
// // // //             <p className="mb-6 text-lg text-gray-600">
// // // //               Thank you, {formData.name}, for your incredible generosity. Our team will contact you at {formData.phone} or {formData.email} within 24 hours to finalize the pickup logistics.
// // // //             </p>
// // // //             <button
// // // //               onClick={() => {
// // // //                 setIsSubmitted(false);
// // // //                 setStep(1);
// // // //                 setFormData({
// // // //                   name: '', email: '', phone: '', city: '',
// // // //                   foodType: 'non-perishable', quantity: 10, pickupDate: '', notes: '',
// // // //                 });
// // // //               }}
// // // //               className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
// // // //             >
// // // //               Log Another Donation
// // // //             </button>
// // // //           </motion.div>
// // // //         </motion.div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   // --- Main Form Layout ---

// // // //   return (
// // // //     <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gray-100 sm:p-8">
// // // //       <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl">
        
// // // //         {/* Header */}
// // // //         <div className="p-8 text-white bg-red-600">
// // // //           <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
// // // //             Donate Food, Create Impact
// // // //           </h1>
// // // //           <p className="mt-1 text-red-100/80">
// // // //             Fill out the form below in 3 quick steps to schedule a food donation pickup.
// // // //           </p>
// // // //         </div>

// // // //         {/* Step Indicator */}
// // // //         <div className="p-6 border-b border-gray-200">
// // // //           <div className="flex items-center justify-between text-center">
// // // //             {[1, 2, 3].map((s) => (
// // // //               <div key={s} className="flex-1 min-w-0">
// // // //                 <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold transition-all duration-300 ${
// // // //                   s <= step ? 'bg-red-600 shadow-md transform scale-105' : 'bg-gray-300'
// // // //                 }`}>
// // // //                   {s}
// // // //                 </div>
// // // //                 <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
// // // //                   s === step ? 'text-red-600' : 'text-gray-500'
// // // //                 }`}>
// // // //                   {s === 1 ? 'Contact' : s === 2 ? 'Details' : 'Confirm'}
// // // //                 </p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Form Body */}
// // // //         <form onSubmit={handleSubmit} className="p-8">
// // // //           <div className="relative min-h-[400px]">
// // // //             <AnimatePresence mode="wait">
// // // //               {step === 1 && <Step1 />}
// // // //               {step === 2 && <Step2 />}
// // // //               {step === 3 && <Step3 />}
// // // //             </AnimatePresence>
// // // //           </div>
          
// // // //           {/* Navigation Buttons */}
// // // //           <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
// // // //             <button
// // // //               type="button"
// // // //               onClick={handleBack}
// // // //               disabled={step === 1}
// // // //               className={`px-5 py-2 rounded-lg font-semibold transition duration-150 ${
// // // //                 step > 1 ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
// // // //               }`}
// // // //             >
// // // //               ← Back
// // // //             </button>

// // // //             {step < 3 ? (
// // // //               <motion.button
// // // //                 type="button"
// // // //                 onClick={handleNext}
// // // //                 className="px-5 py-2 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
// // // //                 whileHover={{ scale: 1.05 }}
// // // //                 whileTap={{ scale: 0.95 }}
// // // //               >
// // // //                 Next Step →
// // // //               </motion.button>
// // // //             ) : (
// // // //               <motion.button
// // // //                 type="submit"
// // // //                 className="px-5 py-2 font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 hover:scale-105"
// // // //                 whileHover={{ scale: 1.05 }}
// // // //                 whileTap={{ scale: 0.95 }}
// // // //               >
// // // //                 Confirm Donation
// // // //               </motion.button>
// // // //             )}
// // // //           </div>
// // // //         </form>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default FoodDonationPage;

// // // import React, { useState } from 'react';
// // // import { motion, AnimatePresence } from 'framer-motion';
// // // // ⚠️ Web3Forms ফিডব্যাক দেখানোর জন্য react-toastify ব্যবহার করা হয়েছে
// // // import { ToastContainer, toast } from 'react-toastify';
// // // import 'react-toastify/dist/ReactToastify.css';

// // // // Component for the multi-step donation form
// // // const FoodDonationPage = () => {
// // //     // Web3Forms Access Key
// // //     const ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// // //     // State for form data, errors, and current step
// // //     const [step, setStep] = useState(1);
// // //     const [formData, setFormData] = useState({
// // //         name: '',
// // //         email: '',
// // //         phone: '',
// // //         city: '',
// // //         foodType: 'non-perishable',
// // //         quantity: 10,
// // //         pickupDate: '',
// // //         notes: '',
// // //         // Web3Forms Hidden Field for service
// // //         'subject': 'New Food Donation Pickup Request',
// // //         'access_key': ACCESS_KEY, 
// // //     });
// // //     const [errors, setErrors] = useState({});
// // //     const [isSubmitted, setIsSubmitted] = useState(false);
// // //     const [isSubmitting, setIsSubmitting] = useState(false); // New state for loading

// // //     // Framer Motion variants for step transition
// // //     const stepVariants = {
// // //         initial: { opacity: 0, x: 50, scale: 0.95 },
// // //         in: { opacity: 1, x: 0, scale: 1 },
// // //         out: { opacity: 0, x: -50, scale: 0.95 },
// // //     };

// // //     const handleChange = (e) => {
// // //         const { name, value } = e.target;
// // //         setFormData((prev) => ({ ...prev, [name]: value }));
// // //         // Clear error for the field being edited
// // //         if (errors[name]) {
// // //             setErrors((prev) => ({ ...prev, [name]: null }));
// // //         }
// // //     };

// // //     const validateStep = (currentStep) => {
// // //         let newErrors = {};
// // //         let isValid = true;

// // //         if (currentStep === 1) {
// // //             if (!formData.name.trim()) newErrors.name = 'Full name is required.';
// // //             if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
// // //             if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
// // //             if (!formData.city.trim()) newErrors.city = 'City/Area is required.';
// // //         }

// // //         if (currentStep === 2) {
// // //             if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero.';
// // //             if (!formData.pickupDate) newErrors.pickupDate = 'Preferred pickup date is required.';
            
// // //             // Check if pickup date is in the future or today
// // //             const today = new Date().toISOString().split('T')[0];
// // //             if (formData.pickupDate < today) {
// // //                 newErrors.pickupDate = 'Pickup date cannot be in the past.';
// // //             }
// // //         }

// // //         setErrors(newErrors);
// // //         isValid = Object.keys(newErrors).length === 0;
// // //         return isValid;
// // //     };

// // //     const handleNext = () => {
// // //         if (validateStep(step)) {
// // //             setStep((prev) => prev + 1);
// // //         }
// // //     };

// // //     const handleBack = () => {
// // //         setStep((prev) => prev - 1);
// // //     };

// // //     // 🌟 Web3Forms Submission Logic 🌟
// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();

// // //         // Ensure we are on the final step
// // //         if (step !== 3) return;

// // //         setIsSubmitting(true);
// // //         toast.info("Submitting your donation request...", { autoClose: 3000 });

// // //         try {
// // //             const response = await fetch("https://api.web3forms.com/submit", {
// // //                 method: "POST",
// // //                 headers: {
// // //                     "Content-Type": "application/json",
// // //                     "Accept": "application/json"
// // //                 },
// // //                 body: JSON.stringify(formData)
// // //             });

// // //             const result = await response.json();

// // //             if (result.success) {
// // //                 toast.success("Donation successfully submitted! We'll contact you soon.", { autoClose: 5000 });
// // //                 setIsSubmitted(true);
// // //             } else {
// // //                 console.error("Web3Forms Error:", result);
// // //                 toast.error(`Submission failed: ${result.message || 'Please try again later.'}`);
// // //             }
// // //         } catch (error) {
// // //             console.error("Fetch Error:", error);
// // //             toast.error("An unexpected error occurred. Check your internet connection.");
// // //         } finally {
// // //             setIsSubmitting(false);
// // //         }
// // //     };
// // //     // 🌟 END Web3Forms Submission Logic 🌟

// // //     // Common input field component (No changes here)
// // //     const InputField = ({ label, name, type = 'text', value, onChange, error, ...props }) => (
// // //         <div className="mb-6">
// // //             <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
// // //                 {label}
// // //             </label>
// // //             <input
// // //                 type={type}
// // //                 id={name}
// // //                 name={name}
// // //                 value={value}
// // //                 onChange={onChange}
// // //                 className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ${
// // //                     error ? 'border-red-500' : 'border-gray-300'
// // //                 }`}
// // //                 {...props}
// // //             />
// // //             {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
// // //         </div>
// // //     );

// // //     // --- Step Components (No changes here) ---

// // //     const Step1 = () => (
// // //         <motion.div
// // //             key="step1"
// // //             variants={stepVariants}
// // //             initial="initial"
// // //             animate="in"
// // //             exit="out"
// // //             transition={{ duration: 0.3 }}
// // //         >
// // //             <h3 className="mb-6 text-2xl font-semibold text-gray-800">1. Your Contact Information</h3>
// // //             <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
// // //             <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
// // //             <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="e.g., 555-123-4567" />
// // //             <InputField label="City/Area" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
// // //         </motion.div>
// // //     );

// // //     const Step2 = () => (
// // //         <motion.div
// // //             key="step2"
// // //             variants={stepVariants}
// // //             initial="initial"
// // //             animate="in"
// // //             exit="out"
// // //             transition={{ duration: 0.3 }}
// // //         >
// // //             <h3 className="mb-6 text-2xl font-semibold text-gray-800">2. Details of Your Donation</h3>
            
// // //             {/* Food Type Select */}
// // //             <div className="mb-6">
// // //                 <label htmlFor="foodType" className="block mb-1 text-sm font-medium text-gray-700">
// // //                     Type of Food
// // //                 </label>
// // //                 <select
// // //                     id="foodType"
// // //                     name="foodType"
// // //                     value={formData.foodType}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
// // //                 >
// // //                     <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, etc.)</option>
// // //                     <option value="perishable">Fresh/Perishable (Produce, meat, dairy - subject to inspection)</option>
// // //                     <option value="prepared">Prepared Meals (From certified kitchens only)</option>
// // //                 </select>
// // //             </div>

// // //             {/* Quantity Input */}
// // //             <InputField label="Estimated Quantity (in kg or number of boxes)" name="quantity" type="number" value={formData.quantity} onChange={handleChange} error={errors.quantity} min="1" />
            
// // //             {/* Pickup Date Input */}
// // //             <InputField label="Preferred Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} error={errors.pickupDate} />

// // //             {/* Notes Textarea */}
// // //             <div className="mb-6">
// // //                 <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
// // //                     Additional Notes (e.g., specific items, storage needs)
// // //                 </label>
// // //                 <textarea
// // //                     id="notes"
// // //                     name="notes"
// // //                     rows="3"
// // //                     value={formData.notes}
// // //                     onChange={handleChange}
// // //                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
// // //                 ></textarea>
// // //             </div>
// // //         </motion.div>
// // //     );

// // //     const Step3 = () => (
// // //         <motion.div
// // //             key="step3"
// // //             variants={stepVariants}
// // //             initial="initial"
// // //             animate="in"
// // //             exit="out"
// // //             transition={{ duration: 0.3 }}
// // //             className="space-y-6"
// // //         >
// // //             <h3 className="mb-6 text-2xl font-semibold text-gray-800">3. Review and Confirm</h3>
            
// // //             <div className="p-5 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
// // //                 <h4 className="mb-3 font-bold text-red-700">Review Details:</h4>
// // //                 <ul className="space-y-2 text-sm text-gray-700">
// // //                     <li><strong>Donor:</strong> {formData.name} ({formData.email})</li>
// // //                     <li><strong>Contact:</strong> {formData.phone}</li>
// // //                     <li><strong>Location:</strong> {formData.city}</li>
// // //                     <li><strong>Food Type:</strong> <span className="capitalize">{formData.foodType}</span></li>
// // //                     <li><strong>Quantity:</strong> {formData.quantity} unit(s)</li>
// // //                     <li><strong>Preferred Pickup:</strong> {formData.pickupDate || 'N/A'}</li>
// // //                     <li><strong>Notes:</strong> {formData.notes || 'None provided'}</li>
// // //                 </ul>
// // //             </div>

// // //             <div className="flex items-start p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50">
// // //                 <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
// // //                 <p>
// // //                     By clicking **"Confirm Donation,"** you confirm that all items are safe for consumption, correctly stored, and you are ready for us to arrange the pickup on the preferred date.
// // //                 </p>
// // //             </div>
// // //         </motion.div>
// // //     );
    
// // //     // --- Success State ---

// // //     if (isSubmitted) {
// // //         return (
// // //             <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
// // //                 <motion.div 
// // //                     className="w-full max-w-xl p-10 text-center bg-white shadow-2xl rounded-xl"
// // //                     initial={{ scale: 0.8, opacity: 0 }}
// // //                     animate={{ scale: 1, opacity: 1 }}
// // //                     transition={{ type: "spring", stiffness: 100 }}
// // //                 >
// // //                     <motion.div
// // //                         initial={{ y: -20, opacity: 0 }}
// // //                         animate={{ y: 0, opacity: 1 }}
// // //                         transition={{ delay: 0.5 }}
// // //                     >
// // //                         <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full">
// // //                             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
// // //                         </div>
// // //                         <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Donation Successfully Logged!</h2>
// // //                         <p className="mb-6 text-lg text-gray-600">
// // //                             Thank you, **{formData.name}**, for your incredible generosity. Our team will contact you at **{formData.phone}** or **{formData.email}** within 24 hours to finalize the pickup logistics.
// // //                         </p>
// // //                         <button
// // //                             onClick={() => {
// // //                                 setIsSubmitted(false);
// // //                                 setStep(1);
// // //                                 setFormData((prev) => ({
// // //                                     ...prev,
// // //                                     name: '', email: '', phone: '', city: '',
// // //                                     foodType: 'non-perishable', quantity: 10, pickupDate: '', notes: '',
// // //                                 }));
// // //                             }}
// // //                             className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
// // //                         >
// // //                             Log Another Donation
// // //                         </button>
// // //                     </motion.div>
// // //                 </motion.div>
// // //             </div>
// // //         );
// // //     }

// // //     // --- Main Form Layout ---

// // //     return (
// // //         <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gray-100 sm:p-8">
// // //             <ToastContainer position="bottom-right" /> {/* 🌟 Toast Container added */}
// // //             <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl">
                
// // //                 {/* Header */}
// // //                 <div className="p-8 text-white bg-red-600">
// // //                     <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
// // //                         Donate Food, Create Impact
// // //                     </h1>
// // //                     <p className="mt-1 text-red-100/80">
// // //                         Fill out the form below in 3 quick steps to schedule a food donation pickup.
// // //                     </p>
// // //                 </div>

// // //                 {/* Step Indicator */}
// // //                 <div className="p-6 border-b border-gray-200">
// // //                     <div className="flex items-center justify-between text-center">
// // //                         {[1, 2, 3].map((s) => (
// // //                             <div key={s} className="flex-1 min-w-0">
// // //                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold transition-all duration-300 ${
// // //                                     s <= step ? 'bg-red-600 shadow-md transform scale-105' : 'bg-gray-300'
// // //                                 }`}>
// // //                                     {s}
// // //                                 </div>
// // //                                 <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
// // //                                     s === step ? 'text-red-600' : 'text-gray-500'
// // //                                 }`}>
// // //                                     {s === 1 ? 'Contact' : s === 2 ? 'Details' : 'Confirm'}
// // //                                 </p>
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 </div>

// // //                 {/* Form Body */}
// // //                 <form onSubmit={handleSubmit} className="p-8">
// // //                     <div className="relative min-h-[400px]">
// // //                         <AnimatePresence mode="wait">
// // //                             {step === 1 && <Step1 />}
// // //                             {step === 2 && <Step2 />}
// // //                             {step === 3 && <Step3 />}
// // //                         </AnimatePresence>
// // //                     </div>
                    
// // //                     {/* Navigation Buttons */}
// // //                     <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
// // //                         <button
// // //                             type="button"
// // //                             onClick={handleBack}
// // //                             disabled={step === 1 || isSubmitting}
// // //                             className={`px-5 py-2 rounded-lg font-semibold transition duration-150 ${
// // //                                 step > 1 && !isSubmitting ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
// // //                             }`}
// // //                         >
// // //                             ← Back
// // //                         </button>

// // //                         {step < 3 ? (
// // //                             <motion.button
// // //                                 type="button"
// // //                                 onClick={handleNext}
// // //                                 disabled={isSubmitting}
// // //                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
// // //                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
// // //                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
// // //                             >
// // //                                 Next Step →
// // //                             </motion.button>
// // //                         ) : (
// // //                             <motion.button
// // //                                 type="submit"
// // //                                 disabled={isSubmitting}
// // //                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
// // //                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
// // //                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
// // //                             >
// // //                                 {isSubmitting ? (
// // //                                     'Submitting...' // Show loading state text
// // //                                 ) : (
// // //                                     'Confirm Donation'
// // //                                 )}
// // //                             </motion.button>
// // //                         )}
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // export default FoodDonationPage;

// // import React, { useState } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import { ToastContainer, toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // // Component for the multi-step donation form
// // const FoodDonationPage = () => {
// //     // Web3Forms Access Key
// //     const ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// //     // State for form data, errors, and current step
// //     const [step, setStep] = useState(1);
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         phone: '',
// //         city: '',
// //         foodType: 'non-perishable',
// //         quantity: 10,
// //         pickupDate: '',
// //         notes: '',
// //         // Web3Forms Hidden Field for service
// //         'subject': 'New Food Donation Pickup Request',
// //         'access_key': ACCESS_KEY, 
// //     });
// //     const [errors, setErrors] = useState({});
// //     const [isSubmitted, setIsSubmitted] = useState(false);
// //     const [isSubmitting, setIsSubmitting] = useState(false);

// //     // Framer Motion variants for step transition
// //     const stepVariants = {
// //         initial: { opacity: 0, x: 50, scale: 0.95 },
// //         in: { opacity: 1, x: 0, scale: 1 },
// //         out: { opacity: 0, x: -50, scale: 0.95 },
// //     };

// //     const handleChange = (e) => {
// //         const { name, value } = e.target;
// //         setFormData((prev) => ({ ...prev, [name]: value }));
// //         // Clear error for the field being edited
// //         if (errors[name]) {
// //             setErrors((prev) => ({ ...prev, [name]: null }));
// //         }
// //     };

// //     const validateStep = (currentStep) => {
// //         let newErrors = {};
// //         let isValid = true;

// //         if (currentStep === 1) {
// //             if (!formData.name.trim()) newErrors.name = 'Full name is required.';
// //             if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
// //             if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
// //             if (!formData.city.trim()) newErrors.city = 'City/Area is required.';
// //         }

// //         if (currentStep === 2) {
// //             if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero.';
// //             if (!formData.pickupDate) newErrors.pickupDate = 'Preferred pickup date is required.';
            
// //             // Check if pickup date is in the future or today
// //             const today = new Date().toISOString().split('T')[0];
// //             if (formData.pickupDate < today) {
// //                 newErrors.pickupDate = 'Pickup date cannot be in the past.';
// //             }
// //         }

// //         setErrors(newErrors);
// //         isValid = Object.keys(newErrors).length === 0;
// //         return isValid;
// //     };

// //     const handleNext = () => {
// //         if (validateStep(step)) {
// //             setStep((prev) => prev + 1);
// //         }
// //     };

// //     const handleBack = () => {
// //         setStep((prev) => prev - 1);
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();

// //         if (step !== 3) return;

// //         setIsSubmitting(true);
// //         toast.info("Submitting your donation request...", { autoClose: 3000 });

// //         try {
// //             const response = await fetch("https://api.web3forms.com/submit", {
// //                 method: "POST",
// //                 headers: {
// //                     "Content-Type": "application/json",
// //                     "Accept": "application/json"
// //                 },
// //                 body: JSON.stringify(formData)
// //             });

// //             const result = await response.json();

// //             if (result.success) {
// //                 toast.success("Donation successfully submitted! We'll contact you soon.", { autoClose: 5000 });
// //                 setIsSubmitted(true);
// //             } else {
// //                 console.error("Web3Forms Error:", result);
// //                 toast.error(`Submission failed: ${result.message || 'Please try again later.'}`);
// //             }
// //         } catch (error) {
// //             console.error("Fetch Error:", error);
// //             toast.error("An unexpected error occurred. Check your internet connection.");
// //         } finally {
// //             setIsSubmitting(false);
// //         }
// //     };

// //     const InputField = ({ label, name, type = 'text', value, onChange, error, ...props }) => (
// //         <div className="mb-6">
// //             <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
// //                 {label}
// //             </label>
// //             <input
// //                 type={type}
// //                 id={name}
// //                 name={name}
// //                 value={value}
// //                 onChange={onChange}
// //                 className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ${
// //                     error ? 'border-red-500' : 'border-gray-300'
// //                 }`}
// //                 {...props}
// //             />
// //             {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
// //         </div>
// //     );

// //     // --- Step Components ---

// //     const Step1 = () => (
// //         // ❌ motion.div removed to prevent re-render issues during typing
// //         <div
// //             key="step1"
// //             // Variants and animation logic is no longer needed inside the step content
// //         >
// //             <h3 className="mb-6 text-2xl font-semibold text-gray-800">1. Your Contact Information</h3>
// //             <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
// //             <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
// //             <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="e.g., 555-123-4567" />
// //             <InputField label="City/Area" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
// //         </div>
// //     );

// //     const Step2 = () => (
// //         // ❌ motion.div removed to prevent re-render issues during typing
// //         <div
// //             key="step2"
// //             // Variants and animation logic is no longer needed inside the step content
// //         >
// //             <h3 className="mb-6 text-2xl font-semibold text-gray-800">2. Details of Your Donation</h3>
            
// //             {/* Food Type Select */}
// //             <div className="mb-6">
// //                 <label htmlFor="foodType" className="block mb-1 text-sm font-medium text-gray-700">
// //                     Type of Food
// //                 </label>
// //                 <select
// //                     id="foodType"
// //                     name="foodType"
// //                     value={formData.foodType}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
// //                 >
// //                     <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, etc.)</option>
// //                     <option value="perishable">Fresh/Perishable (Produce, meat, dairy - subject to inspection)</option>
// //                     <option value="prepared">Prepared Meals (From certified kitchens only)</option>
// //                 </select>
// //             </div>

// //             {/* Quantity Input */}
// //             <InputField label="Estimated Quantity (in kg or number of boxes)" name="quantity" type="number" value={formData.quantity} onChange={handleChange} error={errors.quantity} min="1" />
            
// //             {/* Pickup Date Input */}
// //             <InputField label="Preferred Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} error={errors.pickupDate} />

// //             {/* Notes Textarea */}
// //             <div className="mb-6">
// //                 <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
// //                     Additional Notes (e.g., specific items, storage needs)
// //                 </label>
// //                 <textarea
// //                     id="notes"
// //                     name="notes"
// //                     rows="3"
// //                     value={formData.notes}
// //                     onChange={handleChange}
// //                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
// //                 ></textarea>
// //             </div>
// //         </div>
// //     );

// //     const Step3 = () => (
// //         // ✅ motion.div is kept here because this is the final confirmation step,
// //         // and we still want the step-transition animation to work smoothly.
// //         <motion.div
// //             key="step3"
// //             variants={stepVariants}
// //             initial="initial"
// //             animate="in"
// //             exit="out"
// //             transition={{ duration: 0.3 }}
// //             className="space-y-6"
// //         >
// //             <h3 className="mb-6 text-2xl font-semibold text-gray-800">3. Review and Confirm</h3>
            
// //             <div className="p-5 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
// //                 <h4 className="mb-3 font-bold text-red-700">Review Details:</h4>
// //                 <ul className="space-y-2 text-sm text-gray-700">
// //                     <li><strong>Donor:</strong> {formData.name} ({formData.email})</li>
// //                     <li><strong>Contact:</strong> {formData.phone}</li>
// //                     <li><strong>Location:</strong> {formData.city}</li>
// //                     <li><strong>Food Type:</strong> <span className="capitalize">{formData.foodType}</span></li>
// //                     <li><strong>Quantity:</strong> {formData.quantity} unit(s)</li>
// //                     <li><strong>Preferred Pickup:</strong> {formData.pickupDate || 'N/A'}</li>
// //                     <li><strong>Notes:</strong> {formData.notes || 'None provided'}</li>
// //                 </ul>
// //             </div>

// //             <div className="flex items-start p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50">
// //                 <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
// //                 <p>
// //                     By clicking **"Confirm Donation,"** you confirm that all items are safe for consumption, correctly stored, and you are ready for us to arrange the pickup on the preferred date.
// //                 </p>
// //             </div>
// //         </motion.div>
// //     );
    
// //     // --- Success State (No changes here) ---

// //     if (isSubmitted) {
// //         return (
// //             <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
// //                 <motion.div 
// //                     className="w-full max-w-xl p-10 text-center bg-white shadow-2xl rounded-xl"
// //                     initial={{ scale: 0.8, opacity: 0 }}
// //                     animate={{ scale: 1, opacity: 1 }}
// //                     transition={{ type: "spring", stiffness: 100 }}
// //                 >
// //                     <motion.div
// //                         initial={{ y: -20, opacity: 0 }}
// //                         animate={{ y: 0, opacity: 1 }}
// //                         transition={{ delay: 0.5 }}
// //                     >
// //                         <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full">
// //                             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
// //                         </div>
// //                         <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Donation Successfully Logged!</h2>
// //                         <p className="mb-6 text-lg text-gray-600">
// //                             Thank you, **{formData.name}**, for your incredible generosity. Our team will contact you at **{formData.phone}** or **{formData.email}** within 24 hours to finalize the pickup logistics.
// //                         </p>
// //                         <button
// //                             onClick={() => {
// //                                 setIsSubmitted(false);
// //                                 setStep(1);
// //                                 setFormData((prev) => ({
// //                                     ...prev,
// //                                     name: '', email: '', phone: '', city: '',
// //                                     foodType: 'non-perishable', quantity: 10, pickupDate: '', notes: '',
// //                                 }));
// //                             }}
// //                             className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
// //                         >
// //                             Log Another Donation
// //                         </button>
// //                     </motion.div>
// //                 </motion.div>
// //             </div>
// //         );
// //     }

// //     // --- Main Form Layout (No changes here) ---

// //     return (
// //         <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gray-100 sm:p-8">
// //             <ToastContainer position="bottom-right" />
// //             <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl">
                
// //                 {/* Header */}
// //                 <div className="p-8 text-white bg-red-600">
// //                     <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
// //                         Donate Food, Create Impact
// //                     </h1>
// //                     <p className="mt-1 text-red-100/80">
// //                         Fill out the form below in 3 quick steps to schedule a food donation pickup.
// //                     </p>
// //                 </div>

// //                 {/* Step Indicator */}
// //                 <div className="p-6 border-b border-gray-200">
// //                     <div className="flex items-center justify-between text-center">
// //                         {[1, 2, 3].map((s) => (
// //                             <div key={s} className="flex-1 min-w-0">
// //                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold transition-all duration-300 ${
// //                                     s <= step ? 'bg-red-600 shadow-md transform scale-105' : 'bg-gray-300'
// //                                 }`}>
// //                                     {s}
// //                                 </div>
// //                                 <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
// //                                     s === step ? 'text-red-600' : 'text-gray-500'
// //                                 }`}>
// //                                     {s === 1 ? 'Contact' : s === 2 ? 'Details' : 'Confirm'}
// //                                 </p>
// //                             </div>
// //                         ))}
// //                     </div>
// //                 </div>

// //                 {/* Form Body */}
// //                 <form onSubmit={handleSubmit} className="p-8">
// //                     <div className="relative min-h-[400px]">
// //                         <AnimatePresence mode="wait">
// //                             {step === 1 && <Step1 />}
// //                             {step === 2 && <Step2 />}
// //                             {step === 3 && <Step3 />}
// //                         </AnimatePresence>
// //                     </div>
                    
// //                     {/* Navigation Buttons */}
// //                     <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
// //                         <button
// //                             type="button"
// //                             onClick={handleBack}
// //                             disabled={step === 1 || isSubmitting}
// //                             className={`px-5 py-2 rounded-lg font-semibold transition duration-150 ${
// //                                 step > 1 && !isSubmitting ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
// //                             }`}
// //                         >
// //                             ← Back
// //                         </button>

// //                         {step < 3 ? (
// //                             <motion.button
// //                                 type="button"
// //                                 onClick={handleNext}
// //                                 disabled={isSubmitting}
// //                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
// //                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
// //                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
// //                             >
// //                                 Next Step →
// //                             </motion.button>
// //                         ) : (
// //                             <motion.button
// //                                 type="submit"
// //                                 disabled={isSubmitting}
// //                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
// //                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
// //                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
// //                             >
// //                                 {isSubmitting ? (
// //                                     'Submitting...'
// //                                 ) : (
// //                                     'Confirm Donation'
// //                                 )}
// //                             </motion.button>
// //                         )}
// //                     </div>
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // export default FoodDonationPage;



// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // 🌟 OPTIMIZATION: InputField is defined outside the main component 🌟
// // This prevents the InputField from being recreated on every re-render,
// // which often fixes the cursor/focus loss issue in complex forms.
// const InputField = ({ label, name, type = 'text', value, onChange, error, ...props }) => (
//     <div className="mb-6">
//         <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
//             {label}
//         </label>
//         <input
//             type={type}
//             id={name}
//             name={name}
//             value={value}
//             onChange={onChange}
//             className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ${
//                 error ? 'border-red-500' : 'border-gray-300'
//             }`}
//             {...props}
//         />
//         {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
//     </div>
// );
// // ------------------------------------------------------------------------

// const FoodDonationPage = () => {
//     // Web3Forms Access Key
//     const ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

//     // State for form data, errors, and current step
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         city: '',
//         foodType: 'non-perishable',
//         quantity: 10,
//         pickupDate: '',
//         notes: '',
//         'subject': 'New Food Donation Pickup Request',
//         'access_key': ACCESS_KEY, 
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     // Framer Motion variants for step transition
//     const stepVariants = {
//         initial: { opacity: 0, x: 50, scale: 0.95 },
//         in: { opacity: 1, x: 0, scale: 1 },
//         out: { opacity: 0, x: -50, scale: 0.95 },
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         if (errors[name]) {
//             setErrors((prev) => ({ ...prev, [name]: null }));
//         }
//     };

//     const validateStep = (currentStep) => {
//         let newErrors = {};
//         let isValid = true;

//         if (currentStep === 1) {
//             if (!formData.name.trim()) newErrors.name = 'Full name is required.';
//             if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
//             if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
//             if (!formData.city.trim()) newErrors.city = 'City/Area is required.';
//         }

//         if (currentStep === 2) {
//             if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero.';
//             if (!formData.pickupDate) newErrors.pickupDate = 'Preferred pickup date is required.';
            
//             const today = new Date().toISOString().split('T')[0];
//             if (formData.pickupDate < today) {
//                 newErrors.pickupDate = 'Pickup date cannot be in the past.';
//             }
//         }

//         setErrors(newErrors);
//         isValid = Object.keys(newErrors).length === 0;
//         return isValid;
//     };

//     const handleNext = () => {
//         if (validateStep(step)) {
//             setStep((prev) => prev + 1);
//         }
//     };

//     const handleBack = () => {
//         setStep((prev) => prev - 1);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (step !== 3) return;

//         setIsSubmitting(true);
//         toast.info("Submitting your donation request...", { autoClose: 3000 });

//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const result = await response.json();

//             if (result.success) {
//                 toast.success("Donation successfully submitted! We'll contact you soon.", { autoClose: 5000 });
//                 setIsSubmitted(true);
//             } else {
//                 console.error("Web3Forms Error:", result);
//                 toast.error(`Submission failed: ${result.message || 'Please try again later.'}`);
//             }
//         } catch (error) {
//             console.error("Fetch Error:", error);
//             toast.error("An unexpected error occurred. Check your internet connection.");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // --- Step Components (motion.div removed inside to prevent flicker) ---

//     const Step1 = () => (
//         <div key="step1">
//             <h3 className="mb-6 text-2xl font-semibold text-gray-800">1. Your Contact Information</h3>
//             <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
//             <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
//             <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="e.g., 555-123-4567" />
//             <InputField label="City/Area" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
//         </div>
//     );

//     const Step2 = () => (
//         <div key="step2">
//             <h3 className="mb-6 text-2xl font-semibold text-gray-800">2. Details of Your Donation</h3>
            
//             {/* Food Type Select */}
//             <div className="mb-6">
//                 <label htmlFor="foodType" className="block mb-1 text-sm font-medium text-gray-700">
//                     Type of Food
//                 </label>
//                 <select
//                     id="foodType"
//                     name="foodType"
//                     value={formData.foodType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
//                 >
//                     <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, etc.)</option>
//                     <option value="perishable">Fresh/Perishable (Produce, meat, dairy - subject to inspection)</option>
//                     <option value="prepared">Prepared Meals (From certified kitchens only)</option>
//                 </select>
//             </div>

//             {/* Quantity Input */}
//             <InputField label="Estimated Quantity (in kg or number of boxes)" name="quantity" type="number" value={formData.quantity} onChange={handleChange} error={errors.quantity} min="1" />
            
//             {/* Pickup Date Input */}
//             <InputField label="Preferred Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} error={errors.pickupDate} />

//             {/* Notes Textarea */}
//             <div className="mb-6">
//                 <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
//                     Additional Notes (e.g., specific items, storage needs)
//                 </label>
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     rows="3"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
//                 ></textarea>
//             </div>
//         </div>
//     );

//     const Step3 = () => (
//         <motion.div
//             key="step3"
//             variants={stepVariants}
//             initial="initial"
//             animate="in"
//             exit="out"
//             transition={{ duration: 0.3 }}
//             className="space-y-6"
//         >
//             <h3 className="mb-6 text-2xl font-semibold text-gray-800">3. Review and Confirm</h3>
            
//             <div className="p-5 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
//                 <h4 className="mb-3 font-bold text-red-700">Review Details:</h4>
//                 <ul className="space-y-2 text-sm text-gray-700">
//                     <li><strong>Donor:</strong> {formData.name} ({formData.email})</li>
//                     <li><strong>Contact:</strong> {formData.phone}</li>
//                     <li><strong>Location:</strong> {formData.city}</li>
//                     <li><strong>Food Type:</strong> <span className="capitalize">{formData.foodType}</span></li>
//                     <li><strong>Quantity:</strong> {formData.quantity} unit(s)</li>
//                     <li><strong>Preferred Pickup:</strong> {formData.pickupDate || 'N/A'}</li>
//                     <li><strong>Notes:</strong> {formData.notes || 'None provided'}</li>
//                 </ul>
//             </div>

//             <div className="flex items-start p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50">
//                 <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
//                 <p>
//                     By clicking **"Confirm Donation,"** you confirm that all items are safe for consumption, correctly stored, and you are ready for us to arrange the pickup on the preferred date.
//                 </p>
//             </div>
//         </motion.div>
//     );
    
//     // --- Success State (No changes) ---

//     if (isSubmitted) {
//         return (
//             <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
//                 <motion.div 
//                     className="w-full max-w-xl p-10 text-center bg-white shadow-2xl rounded-xl"
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ type: "spring", stiffness: 100 }}
//                 >
//                     <motion.div
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.5 }}
//                     >
//                         <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full">
//                             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//                         </div>
//                         <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Donation Successfully Logged!</h2>
//                         <p className="mb-6 text-lg text-gray-600">
//                             Thank you, **{formData.name}**, for your incredible generosity. Our team will contact you at **{formData.phone}** or **{formData.email}** within 24 hours to finalize the pickup logistics.
//                         </p>
//                         <button
//                             onClick={() => {
//                                 setIsSubmitted(false);
//                                 setStep(1);
//                                 setFormData((prev) => ({
//                                     ...prev,
//                                     name: '', email: '', phone: '', city: '',
//                                     foodType: 'non-perishable', quantity: 10, pickupDate: '', notes: '',
//                                 }));
//                             }}
//                             className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
//                         >
//                             Log Another Donation
//                         </button>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         );
//     }

//     // --- Main Form Layout (No changes) ---

//     return (
//         <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gray-100 sm:p-8">
//             <ToastContainer position="bottom-right" />
//             <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl">
                
//                 {/* Header */}
//                 <div className="p-8 text-white bg-red-600">
//                     <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
//                         Donate Food, Create Impact
//                     </h1>
//                     <p className="mt-1 text-red-100/80">
//                         Fill out the form below in 3 quick steps to schedule a food donation pickup.
//                     </p>
//                 </div>

//                 {/* Step Indicator */}
//                 <div className="p-6 border-b border-gray-200">
//                     <div className="flex items-center justify-between text-center">
//                         {[1, 2, 3].map((s) => (
//                             <div key={s} className="flex-1 min-w-0">
//                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold transition-all duration-300 ${
//                                     s <= step ? 'bg-red-600 shadow-md transform scale-105' : 'bg-gray-300'
//                                 }`}>
//                                     {s}
//                                 </div>
//                                 <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
//                                     s === step ? 'text-red-600' : 'text-gray-500'
//                                 }`}>
//                                     {s === 1 ? 'Contact' : s === 2 ? 'Details' : 'Confirm'}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Form Body */}
//                 <form onSubmit={handleSubmit} className="p-8">
//                     <div className="relative min-h-[400px]">
//                         <AnimatePresence mode="wait">
//                             {step === 1 && <Step1 />}
//                             {step === 2 && <Step2 />}
//                             {step === 3 && <Step3 />}
//                         </AnimatePresence>
//                     </div>
                    
//                     {/* Navigation Buttons */}
//                     <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
//                         <button
//                             type="button"
//                             onClick={handleBack}
//                             disabled={step === 1 || isSubmitting}
//                             className={`px-5 py-2 rounded-lg font-semibold transition duration-150 ${
//                                 step > 1 && !isSubmitting ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                             }`}
//                         >
//                             ← Back
//                         </button>

//                         {step < 3 ? (
//                             <motion.button
//                                 type="button"
//                                 onClick={handleNext}
//                                 disabled={isSubmitting}
//                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
//                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
//                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
//                             >
//                                 Next Step →
//                             </motion.button>
//                         ) : (
//                             <motion.button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
//                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
//                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
//                             >
//                                 {isSubmitting ? (
//                                     'Submitting...'
//                                 ) : (
//                                     'Confirm Donation'
//                                 )}
//                             </motion.button>
//                         )}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FoodDonationPage;

// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// // 1. OPTIMIZATION: InputField is defined outside the main component
// // This prevents the InputField from being unnecessarily recreated on every parent re-render.
// const InputField = ({ label, name, type = 'text', value, onChange, error, ...props }) => (
//     <div className="mb-6">
//         <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
//             {label}
//         </label>
//         <input
//             type={type}
//             id={name}
//             name={name}
//             value={value}
//             onChange={onChange}
//             className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ${
//                 error ? 'border-red-500' : 'border-gray-300'
//             }`}
//             {...props}
//         />
//         {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
//     </div>
// );
// // ------------------------------------------------------------------------

// const FoodDonationPage = () => {
//     // Web3Forms Access Key
//     const ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

//     // State for form data, errors, and current step
//     const [step, setStep] = useState(1);
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         city: '',
//         foodType: 'non-perishable',
//         quantity: 10,
//         pickupDate: '',
//         notes: '',
//         'subject': 'New Food Donation Pickup Request',
//         'access_key': ACCESS_KEY, 
//     });
//     const [errors, setErrors] = useState({});
//     const [isSubmitted, setIsSubmitted] = useState(false);
//     const [isSubmitting, setIsSubmitting] = useState(false);

//     // Framer Motion variants for step transition
//     const stepVariants = {
//         initial: { opacity: 0, x: 50, scale: 0.95 },
//         in: { opacity: 1, x: 0, scale: 1 },
//         out: { opacity: 0, x: -50, scale: 0.95 },
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setFormData((prev) => ({ ...prev, [name]: value }));
//         if (errors[name]) {
//             setErrors((prev) => ({ ...prev, [name]: null }));
//         }
//     };

//     const validateStep = (currentStep) => {
//         let newErrors = {};
//         let isValid = true;

//         if (currentStep === 1) {
//             if (!formData.name.trim()) newErrors.name = 'Full name is required.';
//             if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
//             if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
//             if (!formData.city.trim()) newErrors.city = 'City/Area is required.';
//         }

//         if (currentStep === 2) {
//             if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero.';
//             if (!formData.pickupDate) newErrors.pickupDate = 'Preferred pickup date is required.';
            
//             const today = new Date().toISOString().split('T')[0];
//             if (formData.pickupDate < today) {
//                 newErrors.pickupDate = 'Pickup date cannot be in the past.';
//             }
//         }

//         setErrors(newErrors);
//         isValid = Object.keys(newErrors).length === 0;
//         return isValid;
//     };

//     const handleNext = () => {
//         if (validateStep(step)) {
//             setStep((prev) => prev + 1);
//         }
//     };

//     const handleBack = () => {
//         setStep((prev) => prev - 1);
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         if (step !== 3) return;

//         setIsSubmitting(true);
//         toast.info("Submitting your donation request...", { autoClose: 3000 });

//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json"
//                 },
//                 body: JSON.stringify(formData)
//             });

//             const result = await response.json();

//             if (result.success) {
//                 toast.success("Donation successfully submitted! We'll contact you soon.", { autoClose: 5000 });
//                 setIsSubmitted(true);
//             } else {
//                 console.error("Web3Forms Error:", result);
//                 toast.error(`Submission failed: ${result.message || 'Please try again later.'}`);
//             }
//         } catch (error) {
//             console.error("Fetch Error:", error);
//             toast.error("An unexpected error occurred. Check your internet connection.");
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     // --- Step Components (Restored motion.div to work correctly with AnimatePresence + added key for stability) ---

//     const Step1 = () => (
//         // ✅ motion.div is crucial here, but the key ensures it's treated as a stable element within AnimatePresence
//         <motion.div
//             key="step1" // Stable Key added
//             variants={stepVariants}
//             initial="initial"
//             animate="in"
//             exit="out"
//             transition={{ duration: 0.3 }}
//         >
//             <h3 className="mb-6 text-2xl font-semibold text-gray-800">1. Your Contact Information</h3>
//             <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
//             <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
//             <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="e.g., 555-123-4567" />
//             <InputField label="City/Area" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
//         </motion.div>
//     );

//     const Step2 = () => (
//         <motion.div
//             key="step2" // Stable Key added
//             variants={stepVariants}
//             initial="initial"
//             animate="in"
//             exit="out"
//             transition={{ duration: 0.3 }}
//         >
//             <h3 className="mb-6 text-2xl font-semibold text-gray-800">2. Details of Your Donation</h3>
            
//             {/* Food Type Select */}
//             <div className="mb-6">
//                 <label htmlFor="foodType" className="block mb-1 text-sm font-medium text-gray-700">
//                     Type of Food
//                 </label>
//                 <select
//                     id="foodType"
//                     name="foodType"
//                     value={formData.foodType}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
//                 >
//                     <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, etc.)</option>
//                     <option value="perishable">Fresh/Perishable (Produce, meat, dairy - subject to inspection)</option>
//                     <option value="prepared">Prepared Meals (From certified kitchens only)</option>
//                 </select>
//             </div>

//             {/* Quantity Input */}
//             <InputField label="Estimated Quantity (in kg or number of boxes)" name="quantity" type="number" value={formData.quantity} onChange={handleChange} error={errors.quantity} min="1" />
            
//             {/* Pickup Date Input */}
//             <InputField label="Preferred Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} error={errors.pickupDate} />

//             {/* Notes Textarea */}
//             <div className="mb-6">
//                 <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
//                     Additional Notes (e.g., specific items, storage needs)
//                 </label>
//                 <textarea
//                     id="notes"
//                     name="notes"
//                     rows="3"
//                     value={formData.notes}
//                     onChange={handleChange}
//                     className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
//                 ></textarea>
//             </div>
//         </motion.div>
//     );

//     const Step3 = () => (
//         <motion.div
//             key="step3" // Stable Key added
//             variants={stepVariants}
//             initial="initial"
//             animate="in"
//             exit="out"
//             transition={{ duration: 0.3 }}
//             className="space-y-6"
//         >
//             <h3 className="mb-6 text-2xl font-semibold text-gray-800">3. Review and Confirm</h3>
            
//             <div className="p-5 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
//                 <h4 className="mb-3 font-bold text-red-700">Review Details:</h4>
//                 <ul className="space-y-2 text-sm text-gray-700">
//                     <li><strong>Donor:</strong> {formData.name} ({formData.email})</li>
//                     <li><strong>Contact:</strong> {formData.phone}</li>
//                     <li><strong>Location:</strong> {formData.city}</li>
//                     <li><strong>Food Type:</strong> <span className="capitalize">{formData.foodType}</span></li>
//                     <li><strong>Quantity:</strong> {formData.quantity} unit(s)</li>
//                     <li><strong>Preferred Pickup:</strong> {formData.pickupDate || 'N/A'}</li>
//                     <li><strong>Notes:</strong> {formData.notes || 'None provided'}</li>
//                 </ul>
//             </div>

//             <div className="flex items-start p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50">
//                 <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
//                 <p>
//                     By clicking **"Confirm Donation,"** you confirm that all items are safe for consumption, correctly stored, and you are ready for us to arrange the pickup on the preferred date.
//                 </p>
//             </div>
//         </motion.div>
//     );
    
//     // --- Success State (No changes) ---

//     if (isSubmitted) {
//         return (
//             <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
//                 <motion.div 
//                     className="w-full max-w-xl p-10 text-center bg-white shadow-2xl rounded-xl"
//                     initial={{ scale: 0.8, opacity: 0 }}
//                     animate={{ scale: 1, opacity: 1 }}
//                     transition={{ type: "spring", stiffness: 100 }}
//                 >
//                     <motion.div
//                         initial={{ y: -20, opacity: 0 }}
//                         animate={{ y: 0, opacity: 1 }}
//                         transition={{ delay: 0.5 }}
//                     >
//                         <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full">
//                             <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
//                         </div>
//                         <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Donation Successfully Logged!</h2>
//                         <p className="mb-6 text-lg text-gray-600">
//                             Thank you, **{formData.name}**, for your incredible generosity. Our team will contact you at **{formData.phone}** or **{formData.email}** within 24 hours to finalize the pickup logistics.
//                         </p>
//                         <button
//                             onClick={() => {
//                                 setIsSubmitted(false);
//                                 setStep(1);
//                                 setFormData((prev) => ({
//                                     ...prev,
//                                     name: '', email: '', phone: '', city: '',
//                                     foodType: 'non-perishable', quantity: 10, pickupDate: '', notes: '',
//                                 }));
//                             }}
//                             className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
//                         >
//                             Log Another Donation
//                         </button>
//                     </motion.div>
//                 </motion.div>
//             </div>
//         );
//     }

//     // --- Main Form Layout (No changes) ---

//     return (
//         <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gray-100 sm:p-8">
//             <ToastContainer position="bottom-right" />
//             <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl">
                
//                 {/* Header */}
//                 <div className="p-8 text-white bg-red-600">
//                     <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
//                         Donate Food, Create Impact
//                     </h1>
//                     <p className="mt-1 text-red-100/80">
//                         Fill out the form below in 3 quick steps to schedule a food donation pickup.
//                     </p>
//                 </div>

//                 {/* Step Indicator */}
//                 <div className="p-6 border-b border-gray-200">
//                     <div className="flex items-center justify-between text-center">
//                         {[1, 2, 3].map((s) => (
//                             <div key={s} className="flex-1 min-w-0">
//                                 <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold transition-all duration-300 ${
//                                     s <= step ? 'bg-red-600 shadow-md transform scale-105' : 'bg-gray-300'
//                                 }`}>
//                                     {s}
//                                 </div>
//                                 <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
//                                     s === step ? 'text-red-600' : 'text-gray-500'
//                                 }`}>
//                                     {s === 1 ? 'Contact' : s === 2 ? 'Details' : 'Confirm'}
//                                 </p>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* Form Body */}
//                 <form onSubmit={handleSubmit} className="p-8">
//                     <div className="relative min-h-[400px]">
//                         {/* AnimatePresence with mode="wait" ensures smooth step transition */}
//                         <AnimatePresence mode="wait"> 
//                             {step === 1 && <Step1 key="step1-content" />}
//                             {step === 2 && <Step2 key="step2-content" />}
//                             {step === 3 && <Step3 key="step3-content" />}
//                         </AnimatePresence>
//                     </div>
                    
//                     {/* Navigation Buttons */}
//                     <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
//                         <button
//                             type="button"
//                             onClick={handleBack}
//                             disabled={step === 1 || isSubmitting}
//                             className={`px-5 py-2 rounded-lg font-semibold transition duration-150 ${
//                                 step > 1 && !isSubmitting ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
//                             }`}
//                         >
//                             ← Back
//                         </button>

//                         {step < 3 ? (
//                             <motion.button
//                                 type="button"
//                                 onClick={handleNext}
//                                 disabled={isSubmitting}
//                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
//                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
//                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
//                             >
//                                 Next Step →
//                             </motion.button>
//                         ) : (
//                             <motion.button
//                                 type="submit"
//                                 disabled={isSubmitting}
//                                 className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
//                                 whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
//                                 whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
//                             >
//                                 {isSubmitting ? (
//                                     'Submitting...'
//                                 ) : (
//                                     'Confirm Donation'
//                                 )}
//                             </motion.button>
//                         )}
//                     </div>
//                 </form>
//             </div>
//         </div>
//     );
// };

// export default FoodDonationPage;


import React, { useState, useMemo } from 'react'; // 👈 useMemo import করা হয়েছে
import { motion, AnimatePresence } from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// 1. InputField কম্পোনেন্ট বাইরে রাখা হয়েছে (আগের মতো)
const InputField = ({ label, name, type = 'text', value, onChange, error, ...props }) => (
    <div className="mb-6">
        <label htmlFor={name} className="block mb-1 text-sm font-medium text-gray-700">
            {label}
        </label>
        <input
            type={type}
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className={`w-full px-4 py-2 border rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500 transition duration-150 ${
                error ? 'border-red-500' : 'border-gray-300'
            }`}
            {...props}
        />
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
);

// ------------------------------------------------------------------------

const FoodDonationPage = () => {
    // Web3Forms Access Key
    const ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

    // State for form data, errors, and current step
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        city: '',
        foodType: 'non-perishable',
        quantity: 10,
        pickupDate: '',
        notes: '',
        'subject': 'New Food Donation Pickup Request',
        'access_key': ACCESS_KEY, 
    });
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Framer Motion variants for step transition
    const stepVariants = {
        initial: { opacity: 0, x: 50, scale: 0.95 },
        in: { opacity: 1, x: 0, scale: 1 },
        out: { opacity: 0, x: -50, scale: 0.95 },
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        // 🌟 State update: Using functional update is always best practice for reliability
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: null }));
        }
    };

    const validateStep = (currentStep) => {
        let newErrors = {};
        let isValid = true;

        if (currentStep === 1) {
            if (!formData.name.trim()) newErrors.name = 'Full name is required.';
            if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = 'Valid email is required.';
            if (!/^\d{10,}$/.test(formData.phone)) newErrors.phone = 'Valid phone number is required.';
            if (!formData.city.trim()) newErrors.city = 'City/Area is required.';
        }

        if (currentStep === 2) {
            if (!formData.quantity || formData.quantity <= 0) newErrors.quantity = 'Quantity must be greater than zero.';
            if (!formData.pickupDate) newErrors.pickupDate = 'Preferred pickup date is required.';
            
            const today = new Date().toISOString().split('T')[0];
            if (formData.pickupDate < today) {
                newErrors.pickupDate = 'Pickup date cannot be in the past.';
            }
        }

        setErrors(newErrors);
        isValid = Object.keys(newErrors).length === 0;
        return isValid;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep((prev) => prev + 1);
        }
    };

    const handleBack = () => {
        setStep((prev) => prev - 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (step !== 3) return;

        setIsSubmitting(true);
        toast.info("Submitting your donation request...", { autoClose: 3000 });

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify(formData)
            });

            const result = await response.json();

            if (result.success) {
                toast.success("Donation successfully submitted! We'll contact you soon.", { autoClose: 5000 });
                setIsSubmitted(true);
            } else {
                console.error("Web3Forms Error:", result);
                toast.error(`Submission failed: ${result.message || 'Please try again later.'}`);
            }
        } catch (error) {
            console.error("Fetch Error:", error);
            toast.error("An unexpected error occurred. Check your internet connection.");
        } finally {
            setIsSubmitting(false);
        }
    };

    // ------------------- Step Component Definitions -------------------
    
    // 2. useMemo ব্যবহার করে স্টেপ কনটেন্ট মেমোইজ করা হয়েছে
    // এটি নিশ্চিত করে যে শুধুমাত্র formData বা errors পরিবর্তন হলেই স্টেপগুলো রিকম্পিউট হবে,
    // কিন্তু স্টেপ ট্রানজিশনের সময় অ্যানিমেট করবে।

    const Step1Content = useMemo(() => (
        <div key="step1">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">1. Your Contact Information</h3>
            <InputField label="Full Name" name="name" value={formData.name} onChange={handleChange} error={errors.name} />
            <InputField label="Email Address" name="email" type="email" value={formData.email} onChange={handleChange} error={errors.email} />
            <InputField label="Phone Number" name="phone" type="tel" value={formData.phone} onChange={handleChange} error={errors.phone} placeholder="" />
            <InputField label="City/Area" name="city" value={formData.city} onChange={handleChange} error={errors.city} />
        </div>
    ), [formData.name, formData.email, formData.phone, formData.city, errors.name, errors.email, errors.phone, errors.city, handleChange]);
    
    const Step2Content = useMemo(() => (
        <div key="step2">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">2. Details of Your Donation</h3>
            
            <div className="mb-6">
                <label htmlFor="foodType" className="block mb-1 text-sm font-medium text-gray-700">
                    Type of Food
                </label>
                <select
                    id="foodType"
                    name="foodType"
                    value={formData.foodType}
                    onChange={handleChange}
                    className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                >
                    {/* <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, etc.)</option>
                    <option value="perishable">Fresh/Perishable (Produce, meat, dairy - subject to inspection)</option>
                    <option value="prepared">Prepared Meals (From certified kitchens only)</option> */}
                    <option value="non-perishable">Non-Perishable (Canned goods, dry pasta, rice, grains, cereal, etc.)</option>
<option value="perishable">Fresh/Perishable (Produce, meat, dairy, eggs - subject to inspection)</option>
<option value="prepared">Prepared Meals (From certified kitchens only, properly stored)</option>
<option value="frozen">Frozen Foods (Frozen meat, vegetables, frozen meals, etc.)</option>
<option value="bakery">Bakery Items (Bread, cakes, pastries, etc.)</option>
<option value="beverages">Beverages (Juices, bottled water, milk, etc.)</option>
<option value="snacks">Snacks (Chips, crackers, cookies, etc.)</option>
<option value="baby-food">Baby Food & Formula (Jarred baby food, infant formula)</option>
<option value="special-diet">Special Diet Foods (Gluten-free, vegan, halal, kosher, etc.)</option>
<option value="personal-care">Personal Care Items (Toiletries, hygiene products, soaps, etc.)</option>
<option value="pet-food">Pet Food (Dry or wet food for dogs, cats, etc.)</option>
<option value="cleaning-supplies">Cleaning Supplies (Soap, disinfectants, etc.)</option>

                </select>
            </div>

            <InputField label="Estimated Quantity (in kg or number of boxes)" name="quantity" type="number" value={formData.quantity} onChange={handleChange} error={errors.quantity} min="1" />
            
            <InputField label="Preferred Pickup Date" name="pickupDate" type="date" value={formData.pickupDate} onChange={handleChange} error={errors.pickupDate} />

            <div className="mb-6">
                <label htmlFor="notes" className="block mb-1 text-sm font-medium text-gray-700">
                    Additional Notes (e.g., specific items, storage needs)
                </label>
                <textarea
                    id="notes"
                    name="notes"
                    rows="3"
                    value={formData.notes}
                    onChange={handleChange}
                    className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg shadow-sm focus:ring-red-500 focus:border-red-500"
                ></textarea>
            </div>
        </div>
    ), [formData.foodType, formData.quantity, formData.pickupDate, formData.notes, errors.quantity, errors.pickupDate, handleChange]);


    const Step3Content = useMemo(() => (
        <div key="step3" className="space-y-6">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">3. Review and Confirm</h3>
            
            <div className="p-5 border-l-4 border-red-500 rounded-lg shadow-md bg-red-50">
                <h4 className="mb-3 font-bold text-red-700">Review Details:</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                    <li><strong>Donor:</strong> {formData.name} ({formData.email})</li>
                    <li><strong>Contact:</strong> {formData.phone}</li>
                    <li><strong>Location:</strong> {formData.city}</li>
                    <li><strong>Food Type:</strong> <span className="capitalize">{formData.foodType}</span></li>
                    <li><strong>Quantity:</strong> {formData.quantity} unit(s)</li>
                    <li><strong>Preferred Pickup:</strong> {formData.pickupDate || 'N/A'}</li>
                    <li><strong>Notes:</strong> {formData.notes || 'None provided'}</li>
                </ul>
            </div>

            <div className="flex items-start p-4 text-sm text-yellow-800 border border-yellow-300 rounded-lg bg-yellow-50">
                <svg className="w-5 h-5 mt-0.5 mr-3 flex-shrink-0 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                <p>
                    By clicking **"Confirm Donation,"** you confirm that all items are safe for consumption, correctly stored, and you are ready for us to arrange the pickup on the preferred date.
                </p>
            </div>
        </div>
    ), [formData]); // Step 3 depends on all formData, so we use the whole object as dependency

    // ----------------------------------------------------------------

    // --- Success State (No changes) ---
    if (isSubmitted) {
        return (
            <div className="flex items-center justify-center min-h-screen p-4 bg-gray-100">
                <motion.div 
                    className="w-full max-w-xl p-10 text-center bg-white shadow-2xl rounded-xl"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                >
                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-green-500 rounded-full">
                            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </div>
                        <h2 className="mb-4 text-3xl font-extrabold text-gray-900">Donation Successfully Logged!</h2>
                        <p className="mb-6 text-lg text-gray-600">
                            Thank you, **{formData.name}**, for your incredible generosity. Our team will contact you at **{formData.phone}** or **{formData.email}** within 24 hours to finalize the pickup logistics.
                        </p>
                        <button
                            onClick={() => {
                                setIsSubmitted(false);
                                setStep(1);
                                setFormData((prev) => ({
                                    ...prev,
                                    name: '', email: '', phone: '', city: '',
                                    foodType: 'non-perishable', quantity: 10, pickupDate: '', notes: '',
                                }));
                            }}
                            className="px-6 py-3 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 hover:scale-105"
                        >
                            Log Another Donation
                        </button>
                    </motion.div>
                </motion.div>
            </div>
        );
    }

    // --- Main Form Layout ---

    return (
        <div className="flex items-center justify-center min-h-screen p-4 font-sans bg-gray-100 sm:p-8">
            <ToastContainer position="bottom-right" />
            <div className="w-full max-w-3xl overflow-hidden bg-white shadow-2xl rounded-2xl">
                
                {/* Header */}
                <div className="p-8 text-white bg-red-600">
                    <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                        Donate Food, Create Impact
                    </h1>
                    <p className="mt-1 text-red-100/80">
                        Fill out the form below in 3 quick steps to schedule a food donation pickup.
                    </p>
                </div>

                {/* Step Indicator */}
                <div className="p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between text-center">
                        {[1, 2, 3].map((s) => (
                            <div key={s} className="flex-1 min-w-0">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-white font-bold transition-all duration-300 ${
                                    s <= step ? 'bg-red-600 shadow-md transform scale-105' : 'bg-gray-300'
                                }`}>
                                    {s}
                                </div>
                                <p className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                                    s === step ? 'text-red-600' : 'text-gray-500'
                                }`}>
                                    {s === 1 ? 'Contact' : s === 2 ? 'Details' : 'Confirm'}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Form Body */}
                <form onSubmit={handleSubmit} className="p-8">
                    <div className="relative min-h-[400px]">
                        {/* AnimatePresence ensures smooth step transition */}
                        <AnimatePresence mode="wait"> 
                            {step === 1 && (
                                <motion.div key="step1-wrapper" variants={stepVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
                                    {Step1Content}
                                </motion.div>
                            )}
                            {step === 2 && (
                                <motion.div key="step2-wrapper" variants={stepVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
                                    {Step2Content}
                                </motion.div>
                            )}
                            {step === 3 && (
                                <motion.div key="step3-wrapper" variants={stepVariants} initial="initial" animate="in" exit="out" transition={{ duration: 0.3 }}>
                                    {Step3Content}
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    
                    {/* Navigation Buttons */}
                    <div className="flex justify-between pt-6 mt-8 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={handleBack}
                            disabled={step === 1 || isSubmitting}
                            className={`px-5 py-2 rounded-lg font-semibold transition duration-150 ${
                                step > 1 && !isSubmitting ? 'bg-gray-200 text-gray-700 hover:bg-gray-300' : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            }`}
                        >
                            ← Back
                        </button>

                        {step < 3 ? (
                            <motion.button
                                type="button"
                                onClick={handleNext}
                                disabled={isSubmitting}
                                className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-lg hover:bg-red-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                            >
                                Next Step →
                            </motion.button>
                        ) : (
                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                className={`px-5 py-2 font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-lg hover:bg-green-700 ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'}`}
                                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                            >
                                {isSubmitting ? (
                                    'Submitting...'
                                ) : (
                                    'Confirm Donation'
                                )}
                            </motion.button>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FoodDonationPage;