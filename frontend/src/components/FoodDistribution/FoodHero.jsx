// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// // ✅ ফিক্সড: স্থানীয় ফাইল পাথ সমস্যার কারণে একটি পাবলিক প্লেসহোল্ডার URL ব্যবহার করা হলো।
// // আপনি যখন আপনার প্রজেক্টে এই কোডটি ব্যবহার করবেন, তখন আপনার নিজস্ব hosted image URL দিয়ে এটি পরিবর্তন করতে পারেন।
// const HERO_IMAGE_URL = "https://www.actionagainsthunger.org/app/uploads/2025/09/Gaza_GettyImages_2025-aspect-ratio-1920-940.webp"; 

// // ==============================================
// // 1. VolunteerModal Component (Inline)
// // ==============================================

// const modalBackdropVariants = {
//   hidden: { opacity: 0 },
//   visible: { opacity: 1, transition: { duration: 0.2 } },
//   exit: { opacity: 0, transition: { duration: 0.2 } }
// };

// const modalContentVariants = {
//   hidden: { y: "-100vh", opacity: 0, scale: 0.7 },
//   visible: { 
//     y: "0", 
//     opacity: 1, 
//     scale: 1,
//     transition: { 
//       type: "spring", 
//       stiffness: 100,
//       damping: 15 
//     } 
//   },
//   exit: { y: "100vh", opacity: 0, scale: 0.7, transition: { duration: 0.3 } }
// };

// const VolunteerModal = ({ onClose, accessKey }) => {
//   return (
//     // Modal Background (Overlay)
//     <motion.div 
//       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
//       onClick={onClose} // Close on backdrop click
//       variants={modalBackdropVariants}
//       initial="hidden"
//       animate="visible"
//       exit="exit"
//     >
      
//       {/* Modal Content Area */}
//       <motion.div 
//         className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]"
//         onClick={(e) => e.stopPropagation()} // Prevent closing when clicking modal content
//         variants={modalContentVariants}
//         initial="hidden"
//         animate="visible"
//         exit="exit"
//       >
        
//         {/* Modal Header */}
//         <div className="flex items-center justify-between p-5 text-white bg-red-600 border-b rounded-t-xl">
//           <h2 className="text-xl font-bold sm:text-2xl">Volunteer Registration Form</h2>
//           <button 
//             onClick={onClose}
//             className="text-3xl font-light leading-none text-white transition-colors hover:text-gray-200"
//           >
//             &times; {/* Close button (X) */}
//           </button>
//         </div>
        
//         {/* Modal Body: The Web3Forms Form */}
//         <div className="p-6">
//           <p className="mb-4 text-sm text-gray-700 sm:text-base">Fill out this form to join us in our food distribution efforts.</p>

//           <form 
//             action="https://api.web3forms.com/submit" 
//             method="POST"
//             className="space-y-4"
//           >
//             {/* Hidden Input for Web3Forms Access Key (আপনার দেওয়া Key) */}
//             <input type="hidden" name="access_key" value={accessKey} />
            
//             {/* Hidden Input for Redirection (Optional) */}
//             <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
//             {/* Form Fields: Full Name */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input 
//                 type="text" 
//                 name="name" 
//                 id="name" 
//                 required 
//                 className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               />
//             </div>
            
//             {/* Form Fields: Email Address */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//               <input 
//                 type="email" 
//                 name="email" 
//                 id="email" 
//                 required 
//                 className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               />
//             </div>

//             {/* Form Fields: Phone Number */}
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input 
//                 type="tel" 
//                 name="phone" 
//                 id="phone" 
//                 required 
//                 className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               />
//             </div>
            
//             {/* Form Fields: Volunteer Message */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Why do you want to volunteer? (Optional)</label>
//               <textarea 
//                 name="message" 
//                 id="message" 
//                 rows="3"
//                 className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end pt-4">
//               <button 
//                 type="submit" 
//                 className="px-6 py-2 font-medium text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </motion.div>
//     </motion.div>
//   );
// };


// // ==============================================
// // 2. 🌟 FoodHero Component (Main)
// // ==============================================

// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.15, 
//       delayChildren: 0.1
//     }
//   }
// };

// const itemVariants = {
//   hidden: { y: 60, opacity: 0 },
//   visible: {
//     y: 0,
//     opacity: 1,
//     transition: {
//       duration: 0.6,
//       ease: "easeOut"
//     }
//   }
// };

// const FoodHero = () => {
//   // Modal-এর অবস্থা (State)
//   const [showModal, setShowModal] = useState(false);

//   // Web3Forms Access Key
//   const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";

//   return (
//     <>
//       {/* Hero Section - Full Width নিশ্চিত করা হয়েছে w-screen এবং নেতিবাচক মার্জিন দিয়ে */}
//       <div 
//         className="relative w-screen h-[60vh] md:h-[105vh] mt-12
//           bg-cover bg-center flex items-center text-white
//           mx-0 px-0 -ml-4 -mr-4 md:-ml-8 md:-mr-8" 
//         style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }} // ✅ ফিক্সড: URL ব্যবহার করা হলো
//       >
        
//         {/* ওভারলে (Overlay) */}
//         <div className="absolute inset-0 z-10 bg-black/40"></div>

//         {/* কন্টেন্ট (Text Content): বাম দিকে প্যাডিং রাখা হয়েছে */}
//         <motion.div 
//           className="relative z-20 pl-6 pr-6 sm:pl-10 lg:pl-20"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
          
//           {/* শিরোনাম (Heading) - Staggered Animation */}
//           <motion.h1 
//             className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
//             variants={containerVariants}
//           >
//             <motion.span variants={itemVariants} className="block">Together,</motion.span>
//             <motion.span variants={itemVariants} className="block">Let's End</motion.span>
//             <motion.span variants={itemVariants} className="block text-yellow-400">Hunger</motion.span>
//           </motion.h1>
          
//           {/* 🚀 Become A Volunteer Button - Animated */}
//           <motion.button
//             variants={itemVariants}
//             onClick={() => setShowModal(true)} 
//             className="mt-8 px-6 py-3 bg-red-600 text-white text-lg font-semibold 
//                        rounded-lg shadow-2xl hover:bg-red-700 transition duration-300 
//                        transform hover:scale-[1.02] active:scale-95 focus:outline-none focus:ring-4 focus:ring-red-300"
//             whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 61, 61, 0.7)" }}
//             whileTap={{ scale: 0.95 }}
//           >
//             Become A Volunteer
//           </motion.button>
          
//           {/* ❌ "Alhamdulliah" টেক্সট রিমুভ করা হয়েছে */}
//           {/* <motion.p 
//             variants={itemVariants} 
//             className="mt-4 text-xl font-medium"
//           >
//             Alhamdulliah
//           </motion.p> */}
//         </motion.div>
//       </div>
//       {/* Hero Section End */}

//       {/* Volunteer Modal Component (AnimatePresence handles mount/unmount) */}
//       <AnimatePresence>
//         {showModal && (
//           <VolunteerModal 
//             onClose={() => setShowModal(false)} 
//             accessKey={WEB3FORMS_ACCESS_KEY}
//           />
//         )}
//       </AnimatePresence>
//     </>
//   );
// }

// export default FoodHero;


// import React, { useState } from 'react';
// // ✅ পাথ ঠিক করা হয়েছে
// import hero from "../../assets/img/Hero.webp"; 

// // ==============================================
// // 1. 📋 VolunteerModal Component (Inline)
// // ==============================================

// // যেহেতু ছোট কম্পোনেন্ট, এটিকে FoodHero-এর ভেতরেই ডিফাইন করা হলো
// const VolunteerModal = ({ show, onClose, accessKey }) => {
//   if (!show) {
//     return null;
//   }

//   return (
//     // 💡 Modal Background (Overlay)
//     // fixed: স্ক্রল করলে মোডাল স্থির থাকবে।
//     // z-50: অন্যান্য সব উপাদানের উপরে থাকবে।
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
      
//       {/* 💡 Modal Content Area */}
//       <div className="bg-white rounded-lg shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]">
        
//         {/* Modal Header */}
//         <div className="flex items-center justify-between p-5 text-white bg-red-600 border-b rounded-t-lg">
//           <h2 className="text-2xl font-bold">Volunteer Registration Form</h2>
//           <button 
//             onClick={onClose}
//             className="text-3xl font-light leading-none text-white hover:text-gray-200"
//           >
//             &times; {/* Close button (X) */}
//           </button>
//         </div>
        
//         {/* Modal Body: The Web3Forms Form */}
//         <div className="p-6">
//           <p className="mb-4 text-gray-700">Fill out this form to join us in our food distribution efforts.</p>

//           {/* 💡 Web3Forms Integration */}
//           <form 
//             action="https://api.web3forms.com/submit" 
//             method="POST"
//             className="space-y-4"
//           >
//             {/* Hidden Input for Web3Forms Access Key (আপনার দেওয়া Key) */}
//             <input type="hidden" name="access_key" value={accessKey} />
            
//             {/* Hidden Input for Redirection (Optional) */}
//             <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
//             {/* Form Fields: Full Name */}
//             <div>
//               <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
//               <input 
//                 type="text" 
//                 name="name" 
//                 id="name" 
//                 required 
//                 className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               />
//             </div>
            
//             {/* Form Fields: Email Address */}
//             <div>
//               <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//               <input 
//                 type="email" 
//                 name="email" 
//                 id="email" 
//                 required 
//                 className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               />
//             </div>

//             {/* Form Fields: Phone Number */}
//             <div>
//               <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//               <input 
//                 type="tel" 
//                 name="phone" 
//                 id="phone" 
//                 required 
//                 className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               />
//             </div>
            
//             {/* Form Fields: Volunteer Message */}
//             <div>
//               <label htmlFor="message" className="block text-sm font-medium text-gray-700">Why do you want to volunteer? (Optional)</label>
//               <textarea 
//                 name="message" 
//                 id="message" 
//                 rows="3"
//                 className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"
//               ></textarea>
//             </div>

//             {/* Submit Button */}
//             <div className="flex justify-end pt-2">
//               <button 
//                 type="submit" 
//                 className="px-4 py-2 font-medium text-white transition duration-150 bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//               >
//                 Submit Application
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


// // ==============================================
// // 2. 🌟 FoodHero Component (Main)
// // ==============================================

// const FoodHero = () => {
//   // 💡 Modal-এর অবস্থা (State)
//   const [showModal, setShowModal] = useState(false);

//   // Web3Forms Access Key
//   const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";


//   return (
//     <>
//       {/* 🍱 Hero Section Start - Full Width নিশ্চিত করা হয়েছে w-screen এবং নেতিবাচক মার্জিন দিয়ে */}
//       <div 
//         className="relative w-screen h-[60vh] md:h-[105vh] mt-12
//           bg-cover bg-center flex items-center text-white
//           mx-0 px-0 -ml-4 -mr-4 md:-ml-8 md:-mr-8" 
//         style={{ backgroundImage: `url(${hero})` }}
//       >
        
//         {/* ওভারলে (Overlay) */}
//         <div className="absolute inset-0 z-10 bg-black/40"></div>

//         {/* কন্টেন্ট (Text Content): বাম দিকে প্যাডিং রাখা হয়েছে */}
//         <div className="relative z-20 pl-6 pr-6 sm:pl-10 lg:pl-20">
          
//           {/* শিরোনাম (Heading) */}
//           <h1 className="text-5xl font-extrabold leading-none sm:text-6xl md:text-7xl lg:text-8xl">
//             Together,
//             <br />
//             Let's End
//             <br />
//             <span className="text-yellow-400">Hunger</span>
//           </h1>
          
//           {/* 🚀 Become A Volunteer Button */}
//           <button
//             onClick={() => setShowModal(true)} // 💡 বাটনে ক্লিক করলে মোডাল ওপেন হবে
//             className="px-6 py-3 mt-8 text-lg font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-xl hover:bg-red-700 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
//           >
//             Become A Volunteer
//           </button>
//         </div>
//       </div>
//       {/* 🍱 Hero Section End */}

//       {/* 💡 Volunteer Modal Component (Show/Hide controlled by state) */}
//       <VolunteerModal 
//         show={showModal} 
//         onClose={() => setShowModal(false)} 
//         accessKey={WEB3FORMS_ACCESS_KEY}
//       />
//     </>
//   );
// }

// export default FoodHero;


import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// ⚠️ গুরুত্বপূর্ণ: স্থানীয় ইমেজ পাথ (local import) এই ক্যানভাস এনভায়রনমেন্টে কাজ করে না। 
// তাই আপনার লোকাল ইমেজ ফাইলের পরিবর্তে একটি পাবলিক URL ব্যবহার করা হয়েছে। 
// আপনার লাইভ প্রজেক্টে এটি আপনার Hosted Image URL দিয়ে পরিবর্তন করুন।
const HERO_IMAGE_URL = "https://scontent.fjsr11-1.fna.fbcdn.net/v/t39.30808-6/576872304_693295980498058_4100228897746549100_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Op-IjMagvrQQ7kNvwENihl9&_nc_oc=AdlOJr9HYBCJzeqUrW-qdEv2LE3yckz1PZFYXTeVurYWT7M__DGklB7ED-edpo0ZChwCoacHFJaxA0GKHhdrVb70&_nc_zt=23&_nc_ht=scontent.fjsr11-1.fna&_nc_gid=UkQeHZp923NoeNr3d7Xtpw&oh=00_AfhWhmX-joWM0tkCq6fPpyOvtypwTPD1NVoOmQtIZgfjrw&oe=691314AC"; 
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";


// ==============================================
// 1. Modal Animations & Variants
// ==============================================

const modalBackdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.2 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const modalContentVariants = {
  hidden: { y: "-100vh", opacity: 0, scale: 0.7 },
  visible: { 
    y: "0", 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring", 
      stiffness: 100,
      damping: 15 
    } 
  },
  exit: { y: "100vh", opacity: 0, scale: 0.7, transition: { duration: 0.3 } }
};

// ==============================================
// 2. 📋 VolunteerModal Component
// ==============================================

const VolunteerModal = ({ onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      variants={modalBackdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <motion.div 
        className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
        variants={modalContentVariants}
      >
        <div className="flex items-center justify-between p-5 text-white bg-red-600 border-b rounded-t-xl">
          <h2 className="text-xl font-bold sm:text-2xl">Volunteer Registration Form</h2>
          <button onClick={onClose} className="text-3xl font-light leading-none text-white transition-colors hover:text-gray-200">
            &times;
          </button>
        </div>
        
        <div className="p-6">
          <p className="mb-4 text-sm text-gray-700 sm:text-base">Fill out this form to join us in our food distribution efforts.</p>

          <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Volunteer Application" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />
            
            <div>
              <label htmlFor="v_name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" name="name" id="v_name" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"/>
            </div>
            
            <div>
              <label htmlFor="v_email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" name="email" id="v_email" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"/>
            </div>

            <div>
              <label htmlFor="v_phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
              <input type="tel" name="phone" id="v_phone" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"/>
            </div>
            
            <div>
              <label htmlFor="v_message" className="block text-sm font-medium text-gray-700">Why do you want to volunteer? (Optional)</label>
              <textarea name="message" id="v_message" rows="3" className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-red-500 focus:border-red-500"></textarea>
            </div>

            <div className="flex justify-end pt-4">
              <button type="submit" className="px-6 py-2 font-medium text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};


// ==============================================
// 3. 🍚 RequestFoodModal Component (NEW)
// ==============================================

const RequestFoodModal = ({ onClose }) => {
    return (
        <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={onClose}
            variants={modalBackdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <motion.div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-y-auto max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
                variants={modalContentVariants}
            >
                <div className="flex items-center justify-between p-5 text-white bg-green-600 border-b rounded-t-xl">
                    <h2 className="text-xl font-bold sm:text-2xl">Request Food Assistance</h2>
                    <button onClick={onClose} className="text-3xl font-light leading-none text-white transition-colors hover:text-gray-200">
                        &times;
                    </button>
                </div>
                
                <div className="p-6">
                    <p className="mb-4 text-sm text-gray-700 sm:text-base">Please fill in your details accurately so we can arrange delivery.</p>

                    <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New Food Assistance Request" />
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />
                        
                        {/* Name */}
                        <div>
                            <label htmlFor="r_name" className="block text-sm font-medium text-gray-700">Full Name of Requester</label>
                            <input type="text" name="Requester Name" id="r_name" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        
                        {/* Contact & Email */}
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label htmlFor="r_phone" className="block text-sm font-medium text-gray-700">Contact Phone</label>
                                <input type="tel" name="Contact Phone" id="r_phone" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                            </div>
                            <div>
                                <label htmlFor="r_email" className="block text-sm font-medium text-gray-700">Email </label>
                                <input type="email" name="Email" id="r_email" className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                            </div>
                        </div>

                        {/* Address */}
                        <div>
                            <label htmlFor="r_address" className="block text-sm font-medium text-gray-700">Full Delivery Address (MUST Include City/Area and Landmark)</label>
                            <textarea name="Delivery Address" id="r_address" rows="3" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
                        </div>
                        
                        {/* Number of People */}
                        <div>
                            <label htmlFor="r_people" className="block text-sm font-medium text-gray-700">Number of People to Feed / Families</label>
                            <input type="number" name="Number of People" id="r_people" min="1" required className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"/>
                        </div>
                        
                        {/* Urgency/Notes */}
                        <div>
                            <label htmlFor="r_notes" className="block text-sm font-medium text-gray-700">Urgency Level or Special Notes</label>
                            <textarea name="Notes" id="r_notes" rows="2" className="block w-full px-3 py-2 mt-1 transition-all duration-200 border border-gray-300 rounded-md shadow-sm focus:ring-green-500 focus:border-green-500"></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button type="submit" className="px-6 py-2 font-medium text-white transition duration-300 bg-green-600 rounded-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500">
                                Send Request
                            </button>
                        </div>
                    </form>
                </div>
            </motion.div>
        </motion.div>
    );
};


// ==============================================
// 4. 🌟 FoodHero Component (Main)
// ==============================================

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15, 
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { y: 60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const FoodHero = () => {
  // Modal-এর অবস্থা (State): দুটি আলাদা মোডালের জন্য দুটি state
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [showRequestModal, setShowRequestModal] = useState(false);

  return (
    <>
      {/* Hero Section */}
      <div 
        className="relative w-screen h-[60vh] md:h-[105vh] mt-12
          bg-cover bg-center flex items-center text-white
          mx-0 px-0 -ml-4 -mr-4 md:-ml-8 md:-mr-8" 
        style={{ backgroundImage: `url(${HERO_IMAGE_URL})` }}
      >
        
        {/* ওভারলে (Overlay) */}
        <div className="absolute inset-0 z-10 bg-black/40"></div>

        {/* কন্টেন্ট (Text Content) */}
        <motion.div 
          className="relative z-20 pl-6 pr-6 sm:pl-10 lg:pl-20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          
          {/* শিরোনাম (Heading) - Staggered Animation */}
          <motion.h1 
            className="text-5xl font-extrabold leading-tight sm:text-6xl md:text-7xl lg:text-8xl"
            variants={containerVariants}
          >
            <motion.span variants={itemVariants} className="block">Together,</motion.span>
            <motion.span variants={itemVariants} className="block">Let's End</motion.span>
            <motion.span variants={itemVariants} className="block text-yellow-400">Hunger</motion.span>
          </motion.h1>
          
          {/* 🚀 বাটনের কন্টেইনার */}
          <motion.div 
            variants={itemVariants} 
            className="flex flex-col mt-8 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            {/* 1. Become A Volunteer Button */}
            <motion.button
              onClick={() => setShowVolunteerModal(true)} 
              className="px-6 py-3 text-lg font-semibold text-white transition duration-300 transform bg-red-600 rounded-lg shadow-2xl hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(255, 61, 61, 0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Become A Volunteer
            </motion.button>

            {/* 2. Request For Food Button (NEW) */}
            <motion.button
              onClick={() => setShowRequestModal(true)} 
              className="px-6 py-3 text-lg font-semibold text-white transition duration-300 transform bg-green-600 rounded-lg shadow-2xl hover:bg-green-700 focus:outline-none focus:ring-4 focus:ring-green-300"
              whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(61, 255, 61, 0.7)" }}
              whileTap={{ scale: 0.95 }}
            >
              Request For Food
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
      {/* Hero Section End */}

      {/* Volunteer Modal */}
      <AnimatePresence>
        {showVolunteerModal && (
          <VolunteerModal 
            onClose={() => setShowVolunteerModal(false)} 
          />
        )}
      </AnimatePresence>

      {/* Food Request Modal (NEW) */}
      <AnimatePresence>
        {showRequestModal && (
          <RequestFoodModal 
            onClose={() => setShowRequestModal(false)} 
          />
        )}
      </AnimatePresence>
    </>
  );
}

export default FoodHero;