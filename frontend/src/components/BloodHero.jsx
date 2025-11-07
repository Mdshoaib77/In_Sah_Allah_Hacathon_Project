// // // src/components/BloodHero.jsx

// // import React, { useState } from 'react';
// // import { FaHeartbeat, FaChevronDown, FaSyringe, FaUsers } from 'react-icons/fa'; 
// // import bannerImage from '../assets/img/pexels-rsapmech-12820067.jpg'; // Your specific banner image

// // // --- Web3Forms Access Key ---
// // const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// // // -----------------------------

// // // --- Donate Blood Modal Component ---
// // const DonateBloodModal = ({ isOpen, onClose }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
// //       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
// //         <div className="p-8">
// //           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-red-700">
// //             <FaSyringe className="mr-3 text-red-500" /> Register to Donate Blood
// //           </h2>
// //           <p className="pb-4 mb-6 text-gray-600 border-b">
// //             Your generous donation can save lives. Please provide your details.
// //           </p>

// //           <form action="https://api.web3forms.com/submit" method="POST">
// //             <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
// //             <input type="hidden" name="subject" value="New Blood Donation Registration" />
// //             <input type="hidden" name="redirect" value="https://web3forms.com/success" />

// //             <div className="space-y-4">
// //               <div>
// //                 <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
// //                 <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Your Name" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="donor_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
// //                 <input type="email" id="donor_email" name="email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="your@example.com" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="donor_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
// //                 <input type="tel" id="donor_phone" name="phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="+880 1XXXXXXXXX" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="donor_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Blood Group</label>
// //                 <div className="relative">
// //                   <select id="donor_blood_group" name="blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-red-500 focus:border-red-500" required>
// //                     <option value="">Select Blood Group</option>
// //                     <option value="A+">A+</option>
// //                     <option value="A-">A-</option>
// //                     <option value="B+">B+</option>
// //                     <option value="B-">B-</option>
// //                     <option value="AB+">AB+</option>
// //                     <option value="AB-">AB-</option>
// //                     <option value="O+">O+</option>
// //                     <option value="O-">O-</option>
// //                   </select>
// //                   <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
// //                 </div>
// //               </div>
// //               <div>
// //                 <label htmlFor="donor_message" className="block mb-1 text-sm font-semibold text-gray-700">Any Message (Optional)</label>
// //                 <textarea id="donor_message" name="message" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="e.g., Preferred donation date"></textarea>
// //               </div>
// //             </div>
// //             <div className="flex justify-end mt-6 space-x-3">
// //               <button
// //                 type="button"
// //                 onClick={onClose}
// //                 className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-6 py-2 font-bold text-white transition duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
// //               >
// //                 Submit Donation Form
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // --- Request Blood Modal Component ---
// // const RequestBloodModal = ({ isOpen, onClose }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
// //       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
// //         <div className="p-8">
// //           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
// //             <FaUsers className="mr-3 text-blue-500" /> Request for Blood
// //           </h2>
// //           <p className="pb-4 mb-6 text-gray-600 border-b">
// //             If you or someone you know is in urgent need of blood, please fill out this form.
// //           </p>

// //           <form action="https://api.web3forms.com/submit" method="POST">
// //             <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
// //             <input type="hidden" name="subject" value="New Blood Request Received" />
// //             <input type="hidden" name="redirect" value="https://web3forms.com/success" />

// //             <div className="space-y-4">
// //               <div>
// //                 <label htmlFor="requester_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name (Requester)</label>
// //                 <input type="text" id="requester_name" name="requester_name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="requester_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
// //                 <input type="email" id="requester_email" name="requester_email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="your@example.com" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="requester_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
// //                 <input type="tel" id="requester_phone" name="requester_phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="+880 1XXXXXXXXX" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="required_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Required Blood Group</label>
// //                 <div className="relative">
// //                   <select id="required_blood_group" name="required_blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500" required>
// //                     <option value="">Select Required Blood Group</option>
// //                     <option value="A+">A+</option>
// //                     <option value="A-">A-</option>
// //                     <option value="B+">B+</option>
// //                     <option value="B-">B-</option>
// //                     <option value="AB+">AB+</option>
// //                     <option value="AB-">AB-</option>
// //                     <option value="O+">O+</option>
// //                     <option value="O-">O-</option>
// //                   </select>
// //                   <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
// //                 </div>
// //               </div>
// //               <div>
// //                 <label htmlFor="patient_condition" className="block mb-1 text-sm font-semibold text-gray-700">Patient Condition / Message</label>
// //                 <textarea id="patient_condition" name="patient_condition" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Urgent requirement for surgery, patient name"></textarea>
// //               </div>
// //             </div>
// //             <div className="flex justify-end mt-6 space-x-3">
// //               <button
// //                 type="button"
// //                 onClick={onClose}
// //                 className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
// //               >
// //                 Cancel
// //               </button>
// //               <button
// //                 type="submit"
// //                 className="px-6 py-2 font-bold text-white transition duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
// //               >
// //                 Submit Blood Request
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };


// // const BloodHero = () => {
// //   const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
// //   const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

// //   const openDonateModal = () => setIsDonateModalOpen(true);
// //   const closeDonateModal = () => setIsDonateModalOpen(false);

// //   const openRequestModal = () => setIsRequestModalOpen(true);
// //   const closeRequestModal = () => setIsRequestModalOpen(false);

// //   return (
// //     <>
// //       {/* 1. Custom Banner Section (Hero) */}
// //       <header className="px-6 py-20 overflow-hidden bg-gradient-to-r from-red-50 to-white">
// //         <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
// //           {/* Left Content Area */}
// //           <div className="text-center md:text-left">
// //             <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">
// //               Be the <span className="text-red-600">Reason of</span> Someone Lives
// //             </h1>
// //             <p className="max-w-md mx-auto mb-8 text-lg text-gray-700 md:mx-0">
// //               A single drop of your blood can be a lifetime of hope for someone. Together, we can make sure no one waits in fear for help.
// //             </p>
// //             <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
// //               <button
// //                 onClick={openDonateModal}
// //                 className="px-8 py-3 text-lg font-bold text-white transition duration-300 transform bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105"
// //               >
// //                 <FaHeartbeat className="inline mr-2" /> Start Saving Lives
// //               </button>
// //               <button
// //                 onClick={openRequestModal}
// //                 className="px-8 py-3 text-lg font-bold text-red-600 transition duration-300 transform bg-white border-2 border-red-600 rounded-full shadow-lg hover:bg-red-50 hover:scale-105"
// //               >
// //                 Find a Lifesaver
// //               </button>
// //             </div>
// //           </div>

// //           {/* Right Image Area */}
// //           <div className="flex justify-center md:justify-end">
// //             <div className="p-4 bg-white shadow-2xl rounded-3xl">
// //               <img src={bannerImage} alt="Blood Donation" className="object-cover w-auto rounded-2xl max-h-96" />
// //             </div>
// //           </div>
// //         </div>
// //       </header>

// //       {/* Modals are placed here for state management */}
// //       <DonateBloodModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />
// //       <RequestBloodModal isOpen={isRequestModalOpen} onClose={closeRequestModal} />
// //     </>
// //   );
// // };

// // export default BloodHero;

// // src/components/BloodHero.jsx

// import React, { useState } from 'react';
// import { FaHeartbeat, FaChevronDown, FaSyringe, FaUsers } from 'react-icons/fa'; 
// import bannerImage from '../assets/img/pexels-rsapmech-12820067.jpg'; // Your specific banner image

// // --- Web3Forms Access Key ---
// const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// // -----------------------------

// // --- Donate Blood Modal Component (No change needed here for hero shift) ---
// const DonateBloodModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
//         <div className="p-8">
//           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-red-700">
//             <FaSyringe className="mr-3 text-red-500" /> Register to Donate Blood
//           </h2>
//           <p className="pb-4 mb-6 text-gray-600 border-b">
//             Your generous donation can save lives. Please provide your details.
//           </p>

//           <form action="https://api.web3forms.com/submit" method="POST">
//             <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//             <input type="hidden" name="subject" value="New Blood Donation Registration" />
//             <input type="hidden" name="redirect" value="https://web3forms.com/success" />

//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
//                 <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Your Name" required />
//               </div>
//               <div>
//                 <label htmlFor="donor_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
//                 <input type="email" id="donor_email" name="email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="your@example.com" required />
//               </div>
//               <div>
//                 <label htmlFor="donor_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
//                 <input type="tel" id="donor_phone" name="phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="+880 1XXXXXXXXX" required />
//               </div>
//               <div>
//                 <label htmlFor="donor_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Blood Group</label>
//                 <div className="relative">
//                   <select id="donor_blood_group" name="blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-red-500 focus:border-red-500" required>
//                     <option value="">Select Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                   <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="donor_message" className="block mb-1 text-sm font-semibold text-gray-700">Any Message (Optional)</label>
//                 <textarea id="donor_message" name="message" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="e.g., Preferred donation date"></textarea>
//               </div>
//             </div>
//             <div className="flex justify-end mt-6 space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 font-bold text-white transition duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
//               >
//                 Submit Donation Form
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Request Blood Modal Component (No change needed here for hero shift) ---
// const RequestBloodModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
//         <div className="p-8">
//           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
//             <FaUsers className="mr-3 text-blue-500" /> Request for Blood
//           </h2>
//           <p className="pb-4 mb-6 text-gray-600 border-b">
//             If you or someone you know is in urgent need of blood, please fill out this form.
//           </p>

//           <form action="https://api.web3forms.com/submit" method="POST">
//             <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//             <input type="hidden" name="subject" value="New Blood Request Received" />
//             <input type="hidden" name="redirect" value="https://web3forms.com/success" />

//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="requester_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name (Requester)</label>
//                 <input type="text" id="requester_name" name="requester_name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
//               </div>
//               <div>
//                 <label htmlFor="requester_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
//                 <input type="email" id="requester_email" name="requester_email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="your@example.com" required />
//               </div>
//               <div>
//                 <label htmlFor="requester_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
//                 <input type="tel" id="requester_phone" name="requester_phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="+880 1XXXXXXXXX" required />
//               </div>
//               <div>
//                 <label htmlFor="required_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Required Blood Group</label>
//                 <div className="relative">
//                   <select id="required_blood_group" name="required_blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500" required>
//                     <option value="">Select Required Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                   <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="patient_condition" className="block mb-1 text-sm font-semibold text-gray-700">Patient Condition / Message</label>
//                 <textarea id="patient_condition" name="patient_condition" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Urgent requirement for surgery, patient name"></textarea>
//               </div>
//             </div>
//             <div className="flex justify-end mt-6 space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 font-bold text-white transition duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
//               >
//                 Submit Blood Request
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };


// const BloodHero = () => {
//   const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
//   const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

//   const openDonateModal = () => setIsDonateModalOpen(true);
//   const closeDonateModal = () => setIsDonateModalOpen(false);

//   const openRequestModal = () => setIsRequestModalOpen(true);
//   const closeRequestModal = () => setIsRequestModalOpen(false);

//   return (
//     <>
//       {/* 1. Custom Banner Section (Hero) */}
//       {/* *** KEY CHANGE HERE: py-20 changed to py-32 to push content down *** */}
//       <header className="px-6 py-32 overflow-hidden bg-gradient-to-r from-red-50 to-white">
//         <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
//           {/* Left Content Area */}
//           <div className="text-center md:text-left">
//             <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">
//               Be the <span className="text-red-600">Reason of</span> Someone Lives
//             </h1>
//             <p className="max-w-md mx-auto mb-8 text-lg text-gray-700 md:mx-0">
//               A single drop of your blood can be a lifetime of hope for someone. Together, we can make sure no one waits in fear for help.
//             </p>
//             <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
//               <button
//                 onClick={openDonateModal}
//                 className="px-8 py-3 text-lg font-bold text-white transition duration-300 transform bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105"
//               >
//                 <FaHeartbeat className="inline mr-2" /> Start Saving Lives
//               </button>
//               <button
//                 onClick={openRequestModal}
//                 className="px-8 py-3 text-lg font-bold text-red-600 transition duration-300 transform bg-white border-2 border-red-600 rounded-full shadow-lg hover:bg-red-50 hover:scale-105"
//               >
//                 Find a Lifesaver
//               </button>
//             </div>
//           </div>

//           {/* Right Image Area */}
//           <div className="flex justify-center md:justify-end">
//             <div className="p-4 bg-white shadow-2xl rounded-3xl">
//               <img src={bannerImage} alt="Blood Donation" className="object-cover w-auto rounded-2xl max-h-96" />
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Modals are placed here for state management */}
//       <DonateBloodModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />
//       <RequestBloodModal isOpen={isRequestModalOpen} onClose={closeRequestModal} />
//     </>
//   );
// };

// export default BloodHero;

// src/components/BloodHero.jsx

import React, { useState } from 'react';
// Import motion from framer-motion
import { motion } from 'framer-motion'; 
import { FaHeartbeat, FaChevronDown, FaSyringe, FaUsers } from 'react-icons/fa'; 
import bannerImage from '../assets/img/pexels-rsapmech-12820067.jpg';

// --- Web3Forms Access Key ---
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// -----------------------------

// Framer Motion Variants for smooth animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Donate Blood Modal Component (Modal remains centered) ---
const DonateBloodModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  // Modal positioning for centered view
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
        <div className="p-8">
          <h2 className="flex items-center mb-4 text-3xl font-extrabold text-red-700">
            <FaSyringe className="mr-3 text-red-500" /> Register to Donate Blood
          </h2>
          <p className="pb-4 mb-6 text-gray-600 border-b">
            Your generous donation can save lives. Please provide your details.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Blood Donation Registration" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="space-y-4">
              <div>
                <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="donor_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" id="donor_email" name="email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="your@example.com" required />
              </div>
              <div>
                <label htmlFor="donor_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="donor_phone" name="phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="+880 1XXXXXXXXX" required />
              </div>
              <div>
                <label htmlFor="donor_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Blood Group</label>
                <div className="relative">
                  <select id="donor_blood_group" name="blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-red-500 focus:border-red-500" required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                </div>
              </div>
              <div>
                <label htmlFor="donor_message" className="block mb-1 text-sm font-semibold text-gray-700">Any Message (Optional)</label>
                <textarea id="donor_message" name="message" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="e.g., Preferred donation date"></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 font-bold text-white transition duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
              >
                Submit Donation Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Request Blood Modal Component (Modal remains centered) ---
const RequestBloodModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
        <div className="p-8">
          <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
            <FaUsers className="mr-3 text-blue-500" /> Request for Blood
          </h2>
          <p className="pb-4 mb-6 text-gray-600 border-b">
            If you or someone you know is in urgent need of blood, please fill out this form.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Blood Request Received" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="space-y-4">
              <div>
                <label htmlFor="requester_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name (Requester)</label>
                <input type="text" id="requester_name" name="requester_name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="requester_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
                <input type="email" id="requester_email" name="requester_email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="your@example.com" required />
              </div>
              <div>
                <label htmlFor="requester_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="requester_phone" name="requester_phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="+880 1XXXXXXXXX" required />
              </div>
              <div>
                <label htmlFor="required_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Required Blood Group</label>
                <div className="relative">
                  <select id="required_blood_group" name="required_blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500" required>
                    <option value="">Select Required Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                </div>
              </div>
              <div>
                <label htmlFor="patient_condition" className="block mb-1 text-sm font-semibold text-gray-700">Patient Condition / Message</label>
                <textarea id="patient_condition" name="patient_condition" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Urgent requirement for surgery, patient name"></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 font-bold text-white transition duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              >
                Submit Blood Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


const BloodHero = () => {
  const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

  const openDonateModal = () => setIsDonateModalOpen(true);
  const closeDonateModal = () => setIsDonateModalOpen(false);

  const openRequestModal = () => setIsRequestModalOpen(true);
  const closeRequestModal = () => setIsRequestModalOpen(false);

  return (
    <>
      {/* 1. Custom Banner Section (Hero) - INCREASED PADDING TO py-40 */}
      <header className="px-6 py-40 overflow-hidden bg-gradient-to-r from-red-50 to-white">
        
        {/* Use motion.div as the main container for staggering effect */}
        <motion.div 
          className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content Area (Animated) */}
          <div className="text-center md:text-left">
            <motion.h1 
              className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl"
              variants={itemVariants}
            >
              Be the <span className="text-red-600">Reason of</span> Someone Lives
            </motion.h1>
            <motion.p 
              className="max-w-md mx-auto mb-8 text-lg text-gray-700 md:mx-0"
              variants={itemVariants}
            >
              A single drop of your blood can be a lifetime of hope for someone. Together, we can make sure no one waits in fear for help.
            </motion.p>
            <motion.div 
              className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start"
              variants={itemVariants}
            >
              <button
                onClick={openDonateModal}
                className="px-8 py-3 text-lg font-bold text-white transition duration-300 transform bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105"
              >
                <FaHeartbeat className="inline mr-2" /> Start Saving Lives
              </button>
              <button
                onClick={openRequestModal}
                className="px-8 py-3 text-lg font-bold text-red-600 transition duration-300 transform bg-white border-2 border-red-600 rounded-full shadow-lg hover:bg-red-50 hover:scale-105"
              >
                Request For Blood
              </button>
            </motion.div>
          </div>

          {/* Right Image Area (Animated) */}
          <motion.div 
            className="flex justify-center md:justify-end"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.5 }} // Slight delay for image to appear after text starts
          >
            <div className="p-4 bg-white shadow-2xl rounded-3xl">
              <img src={bannerImage} alt="Blood Donation" className="object-cover w-auto rounded-2xl max-h-96" />
            </div>
          </motion.div>
        </motion.div>
      </header>

      {/* Modals are placed here for state management */}
      <DonateBloodModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />
      <RequestBloodModal isOpen={isRequestModalOpen} onClose={closeRequestModal} />
    </>
  );
};

export default BloodHero;