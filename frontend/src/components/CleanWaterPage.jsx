// // src/components/CleanWaterPage.jsx

// import React from 'react';
// import { motion } from 'framer-motion'; 
// import { FaFaucet, FaHandHoldingHeart, FaMapMarkerAlt, FaUsers, FaTools, FaSeedling, FaClipboardCheck, FaHandsHelping } from 'react-icons/fa';

// // --- Framer Motion Variants ---

// // For staggering sections
// const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
// };

// // For individual items
// const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
// };

// // --- Data ---

// const stats = [
//     { value: '5K+', label: 'People Served', icon: FaUsers, color: 'text-blue-600' },
//     { value: '10+', label: 'Water Points', icon: FaMapMarkerAlt, color: 'text-green-600' },
//     { value: '2M+', label: 'Liters Delivered', icon: FaFaucet, color: 'text-cyan-600' },
//     { value: '100+', label: 'Volunteers', icon: FaHandHoldingHeart, color: 'text-indigo-600' },
// ];

// const services = [
//     { 
//         title: "Well & Tube Well Installation", 
//         description: "Installing durable deep tube wells and rainwater harvesting systems in remote, water-scarce areas.", 
//         icon: FaTools, 
//         bgColor: "bg-blue-50" 
//     },
//     { 
//         title: "Community Education", 
//         description: "Conducting hygiene and sanitation workshops to maximize the health benefits of clean water access.", 
//         icon: FaSeedling, 
//         bgColor: "bg-green-50" 
//     },
//     { 
//         title: "Water Quality Testing", 
//         description: "Regular monitoring and testing of water sources to ensure they meet international safety standards.", 
//         icon: FaClipboardCheck, 
//         bgColor: "bg-cyan-50" 
//     },
//     { 
//         title: "Local Partnership", 
//         description: "Working directly with local leaders and communities for project sustainability and ownership.", 
//         icon: FaHandsHelping, 
//         bgColor: "bg-indigo-50" 
//     },
// ];

// // --- Main Component ---

// const CleanWaterPage = () => {
//     return (
//         <div className="min-h-screen font-sans bg-gray-50">

//             {/* 1. HERO SECTION (Header) */}
//             <motion.header 
//                 className="px-6 py-24 overflow-hidden md:py-32 bg-gradient-to-br from-white to-blue-50/70"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ staggerChildren: 0.1 }}
//             >
//                 <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
                    
//                     {/* Left Content */}
//                     <div className="text-center lg:text-left">
//                         <motion.h1 
//                             className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl"
//                             variants={itemVariants}
//                         >
//                             Pure Water, <span className="text-blue-600">Pure Life</span>
//                         </motion.h1>
//                         <motion.p 
//                             className="max-w-xl mx-auto mb-8 text-xl text-gray-700 lg:mx-0"
//                             variants={itemVariants}
//                         >
//                             Access to clean drinking water is a basic human right. Join our project to install free, sustainable water sources for underserved communities across Bangladesh.
//                         </motion.p>
                        
//                         {/* CTA Buttons */}
//                         <motion.div 
//                             className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
//                             variants={itemVariants}
//                         >
//                             <button
//                                 onClick={() => alert("Redirecting to Donation Page...")} 
//                                 className="px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105"
//                             >
//                                 <FaHandHoldingHeart className="inline mr-3" /> Donate for a Well
//                             </button>
//                             <button
//                                 onClick={() => alert("Redirecting to Volunteer Form...")} 
//                                 className="px-8 py-4 text-lg font-bold text-blue-600 transition duration-300 transform bg-white border-2 border-blue-600 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105"
//                             >
//                                 Become a Volunteer
//                             </button>
//                         </motion.div>
//                     </div>

//                     {/* Right Image Placeholder */}
//                     <motion.div 
//                         className="flex justify-center mt-12 lg:justify-end lg:mt-0"
//                         initial={{ x: 50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
//                     >
//                         <div className="relative flex items-center justify-center w-full max-w-lg overflow-hidden bg-gray-300 shadow-2xl h-96 rounded-3xl">
//                             {/* Visual Placeholder */}
//                             <p className="text-xl font-bold text-gray-600">[Image: Clean Water Project / Hand Pump]</p>
//                             <div className="absolute inset-0 bg-blue-800/20 mix-blend-multiply"></div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </motion.header>

//             {/* 2. IMPACT STATISTICS */}
//             <motion.section 
//                 className="px-6 mx-auto mb-20 -mt-16 max-w-7xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <div className="p-8 bg-white border border-blue-100 shadow-2xl rounded-2xl">
//                     <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
//                         {stats.map((stat, index) => (
//                             <motion.div key={index} variants={itemVariants}>
//                                 <stat.icon className={`text-5xl mx-auto mb-3 ${stat.color}`} />
//                                 <p className="text-4xl font-extrabold text-gray-900">{stat.value}</p>
//                                 <p className="mt-1 font-medium text-gray-600">{stat.label}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.section>

//             {/* 3. ABOUT THE PROJECT (Our Commitment) */}
//             <motion.section 
//                 className="px-6 py-16 bg-white"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={containerVariants}
//             >
//                 <div className="max-w-6xl mx-auto">
//                     <motion.h2 variants={itemVariants} className="inline-block pb-2 mb-6 text-4xl font-extrabold text-gray-900 border-b-4 border-blue-200">
//                         About Our Commitment
//                     </motion.h2>
//                     <motion.p variants={itemVariants} className="mb-8 text-xl text-gray-700">
//                         Our Free Clean Water Project is dedicated to solving water scarcity and contamination issues in underserved rural areas. We focus on providing long-term, sustainable solutions rather than temporary fixes.
//                     </motion.p>
//                     <motion.p variants={itemVariants} className="text-lg text-gray-600">
//                         We prioritize **transparency** in funding and work hand-in-hand with local leaders and engineers. Every well we install is designed to be low-maintenance and resistant to environmental factors, ensuring access to pure water for generations.
//                     </motion.p>
//                 </div>
//             </motion.section>

//             {/* 4. SERVICES / WHAT WE DO */}
//             <motion.section 
//                 className="px-6 py-16 bg-blue-50/70"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 variants={containerVariants}
//             >
//                 <div className="max-w-6xl mx-auto text-center">
//                     <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold text-gray-900">
//                         Key Activities
//                     </motion.h2>
//                     <motion.p variants={itemVariants} className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
//                         Our work covers every step, from site selection and installation to community training and long-term maintenance.
//                     </motion.p>

//                     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {services.map((service, index) => (
//                             <motion.div 
//                                 key={index} 
//                                 className="flex flex-col items-center h-full p-6 text-center transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
//                                 variants={itemVariants}
//                             >
//                                 <div className={`inline-block p-4 mb-4 rounded-full ${service.bgColor}`}>
//                                     <service.icon className={`text-3xl text-blue-600`} />
//                                 </div>
//                                 <h3 className="mb-2 text-xl font-bold text-gray-800">
//                                     {service.title}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     {service.description}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.section>

//             {/* 5. FINAL CALL TO ACTION (CTA) */}
//             <motion.section 
//                 className="px-6 py-20 bg-white"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5 }}
//                 variants={containerVariants}
//             >
//                 <div className="max-w-4xl p-10 mx-auto text-center text-white shadow-2xl rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500">
//                     <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold">
//                         Be the Source of Hope
//                     </motion.h2>
//                     <motion.p variants={itemVariants} className="mx-auto mb-8 text-xl">
//                         A single contribution can change the health and future of an entire village. Support our mission today!
//                     </motion.p>
//                     <motion.button
//                         variants={itemVariants}
//                         onClick={() => alert("Final Donation Redirect...")}
//                         className="px-10 py-4 text-xl font-bold text-blue-900 transition duration-300 transform bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105"
//                     >
//                         <FaHandHoldingHeart className="inline mr-3" /> Donate Now
//                     </motion.button>
//                 </div>
//             </motion.section>
            
//             {/* Footer */}
//             <footer className="py-6 mt-0 text-center text-white bg-blue-900">
//                 <p className="text-sm tracking-wider">&copy; {new Date().getFullYear()} Free Clean Water Project. Built for a better future.</p>
//             </footer>
//         </div>
//     );
// };

// export default CleanWaterPage;

// src/components/CleanWaterPage.jsx

// import React, { useState } from 'react';
// import { motion } from 'framer-motion'; 
// import { FaFaucet, FaHandHoldingHeart, FaMapMarkerAlt, FaUsers, FaTools, FaSeedling, FaClipboardCheck, FaHandsHelping, FaChevronDown, FaDonate, FaUserPlus } from 'react-icons/fa';

// // --- Web3Forms Access Key ---
// const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// // --- Image URL ---
// const PROJECT_IMAGE_URL = "https://u4h.org.uk/wp-content/uploads/2020/12/PHOTO-2020-07-30-04-18-41-1.jpg";
// // -----------------------------

// // --- Framer Motion Variants ---
// const containerVariants = {
//     hidden: { opacity: 0, y: 50 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
// };
// const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
// };

// // --- Data ---
// const stats = [
//     { value: '5K+', label: 'People Served', icon: FaUsers, color: 'text-blue-600' },
//     { value: '10+', label: 'Water Points', icon: FaMapMarkerAlt, color: 'text-green-600' },
//     { value: '2M+', label: 'Liters Delivered', icon: FaFaucet, color: 'text-cyan-600' },
//     { value: '100+', label: 'Volunteers', icon: FaHandHoldingHeart, color: 'text-indigo-600' },
// ];
// const services = [
//     { title: "Well & Tube Well Installation", description: "Installing durable deep tube wells and rainwater harvesting systems in remote, water-scarce areas.", icon: FaTools, bgColor: "bg-blue-50" },
//     { title: "Community Education", description: "Conducting hygiene and sanitation workshops to maximize the health benefits of clean water access.", icon: FaSeedling, bgColor: "bg-green-50" },
//     { title: "Water Quality Testing", description: "Regular monitoring and testing of water sources to ensure they meet international safety standards.", icon: FaClipboardCheck, bgColor: "bg-cyan-50" },
//     { title: "Local Partnership", description: "Working directly with local leaders and communities for project sustainability and ownership.", icon: FaHandsHelping, bgColor: "bg-indigo-50" },
// ];

// // --- MODALS ---

// const DonationModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//             <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
//                 <div className="p-8">
//                     <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
//                         <FaDonate className="mr-3 text-blue-500" /> Support the Project
//                     </h2>
//                     <p className="pb-4 mb-6 text-gray-600 border-b">
//                         Help us build more water points. Your donation makes a lasting impact.
//                     </p>
//                     <form action="https://api.web3forms.com/submit" method="POST">
//                         <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//                         <input type="hidden" name="subject" value="New Water Project Donation Inquiry" />
//                         <input type="hidden" name="redirect" value="https://web3forms.com/success" />

//                         <div className="space-y-4">
//                             <div>
//                                 <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
//                                 <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="donor_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
//                                 <input type="email" id="donor_email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="your@example.com" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="donation_amount" className="block mb-1 text-sm font-semibold text-gray-700">Intended Donation Amount (BDT/USD)</label>
//                                 <input type="text" id="donation_amount" name="amount" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., 5000 BDT or 50 USD" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="donor_message" className="block mb-1 text-sm font-semibold text-gray-700">Message (Optional)</label>
//                                 <textarea id="donor_message" name="message" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., I want to sponsor a full tube well"></textarea>
//                             </div>
//                         </div>
//                         <div className="flex justify-end mt-6 space-x-3">
//                             <button type="button" onClick={onClose} className="px-6 py-2 font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">Cancel</button>
//                             <button type="submit" className="px-6 py-2 font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Submit Inquiry</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };

// const VolunteerModal = ({ isOpen, onClose }) => {
//     if (!isOpen) return null;
//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//             <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
//                 <div className="p-8">
//                     <h2 className="flex items-center mb-4 text-3xl font-extrabold text-green-700">
//                         <FaUserPlus className="mr-3 text-green-500" /> Become a Volunteer
//                     </h2>
//                     <p className="pb-4 mb-6 text-gray-600 border-b">
//                         Join our team and contribute your time and skills to the cause.
//                     </p>
//                     <form action="https://api.web3forms.com/submit" method="POST">
//                         <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//                         <input type="hidden" name="subject" value="New Water Project Volunteer Registration" />
//                         <input type="hidden" name="redirect" value="https://web3forms.com/success" />

//                         <div className="space-y-4">
//                             <div>
//                                 <label htmlFor="volunteer_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
//                                 <input type="text" id="volunteer_name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Your Name" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="volunteer_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
//                                 <input type="tel" id="volunteer_phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="+880 1XXXXXXXXX" required />
//                             </div>
//                             <div>
//                                 <label htmlFor="volunteer_skills" className="block mb-1 text-sm font-semibold text-gray-700">Relevant Skills/Interests</label>
//                                 <div className="relative">
//                                     <select id="volunteer_skills" name="skills" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-green-500 focus:border-green-500" required>
//                                         <option value="">Select your area of interest</option>
//                                         <option value="Manual Labor/Installation">Manual Labor/Installation</option>
//                                         <option value="Community Outreach/Education">Community Outreach/Education</option>
//                                         <option value="Logistics/Coordination">Logistics/Coordination</option>
//                                         <option value="Fundraising/Admin">Fundraising/Admin</option>
//                                     </select>
//                                     <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
//                                 </div>
//                             </div>
//                             <div>
//                                 <label htmlFor="volunteer_availability" className="block mb-1 text-sm font-semibold text-gray-700">Availability/Message</label>
//                                 <textarea id="volunteer_availability" name="availability" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="e.g., Available on weekends, interested in Dhaka area"></textarea>
//                             </div>
//                         </div>
//                         <div className="flex justify-end mt-6 space-x-3">
//                             <button type="button" onClick={onClose} className="px-6 py-2 font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">Cancel</button>
//                             <button type="submit" className="px-6 py-2 font-bold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700">Submit Application</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     );
// };


// // --- Main Component ---

// const CleanWaterPage = () => {
//     const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
//     const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

//     const openDonationModal = () => setIsDonationModalOpen(true);
//     const closeDonationModal = () => setIsDonationModalOpen(false);

//     const openVolunteerModal = () => setIsVolunteerModalOpen(true);
//     const closeVolunteerModal = () => setIsVolunteerModalOpen(false);

//     return (
//         <div className="min-h-screen font-sans bg-gray-50">

//             {/* 1. HERO SECTION (Header) - FULL WIDTH */}
//             <motion.header 
//                 className="w-full px-6 py-24 overflow-hidden md:py-32 bg-gradient-to-br from-white to-blue-50/70"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 transition={{ staggerChildren: 0.1 }}
//             >
//                 {/* Content Container to keep text centered and readable */}
//                 <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
                    
//                     {/* Left Content */}
//                     <div className="text-center lg:text-left">
//                         <motion.h1 
//                             className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl"
//                             variants={itemVariants}
//                         >
//                             Pure Water, <span className="text-blue-600">Pure Life</span>
//                         </motion.h1>
//                         <motion.p 
//                             className="max-w-xl mx-auto mb-8 text-xl text-gray-700 lg:mx-0"
//                             variants={itemVariants}
//                         >
//                             Access to clean drinking water is a basic human right. Join our project to install free, sustainable water sources for underserved communities across Bangladesh.
//                         </motion.p>
                        
//                         {/* CTA Buttons */}
//                         <motion.div 
//                             className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
//                             variants={itemVariants}
//                         >
//                             <button
//                                 onClick={openDonationModal} 
//                                 className="px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105"
//                             >
//                                 <FaHandHoldingHeart className="inline mr-3" /> Donate for a Well
//                             </button>
//                             <button
//                                 onClick={openVolunteerModal} 
//                                 className="px-8 py-4 text-lg font-bold text-blue-600 transition duration-300 transform bg-white border-2 border-blue-600 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105"
//                             >
//                                 Become a Volunteer
//                             </button>
//                         </motion.div>
//                     </div>

//                     {/* Right Image Area (Using your provided URL) */}
//                     <motion.div 
//                         className="flex justify-center mt-12 lg:justify-end lg:mt-0"
//                         initial={{ x: 50, opacity: 0 }}
//                         animate={{ x: 0, opacity: 1 }}
//                         transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
//                     >
//                         <div className="relative w-full max-w-lg overflow-hidden bg-gray-300 shadow-2xl rounded-3xl">
//                             {/* The actual Image */}
//                             <img 
//                                 src={PROJECT_IMAGE_URL} 
//                                 alt="Community using clean water hand pump" 
//                                 className="object-cover w-full h-full min-h-[384px]" // min-h for consistent size
//                             />
//                             <div className="absolute inset-0 bg-blue-800/20 mix-blend-multiply"></div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </motion.header>

//             {/* 2. IMPACT STATISTICS (Rest of the component remains full width and responsive) */}
//             <motion.section 
//                 className="w-full px-6 mx-auto mb-20 -mt-16 max-w-7xl"
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, amount: 0.5 }}
//                 transition={{ duration: 0.8 }}
//             >
//                 <div className="p-8 bg-white border border-blue-100 shadow-2xl rounded-2xl">
//                     <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
//                         {stats.map((stat, index) => (
//                             <motion.div key={index} variants={itemVariants}>
//                                 <stat.icon className={`text-5xl mx-auto mb-3 ${stat.color}`} />
//                                 <p className="text-4xl font-extrabold text-gray-900">{stat.value}</p>
//                                 <p className="mt-1 font-medium text-gray-600">{stat.label}</p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.section>

//             {/* 3. ABOUT THE PROJECT (Our Commitment) */}
//             <motion.section 
//                 className="w-full px-6 py-16 bg-white"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.3 }}
//                 variants={containerVariants}
//             >
//                 <div className="max-w-6xl mx-auto">
//                     <motion.h2 variants={itemVariants} className="inline-block pb-2 mb-6 text-4xl font-extrabold text-gray-900 border-b-4 border-blue-200">
//                         About Our Commitment
//                     </motion.h2>
//                     <motion.p variants={itemVariants} className="mb-8 text-xl text-gray-700">
//                         Our Free Clean Water Project is dedicated to solving water scarcity and contamination issues in underserved rural areas. We focus on providing long-term, sustainable solutions rather than temporary fixes.
//                     </motion.p>
//                     <motion.p variants={itemVariants} className="text-lg text-gray-600">
//                         We prioritize **transparency** in funding and work hand-in-hand with local leaders and engineers. Every well we install is designed to be low-maintenance and resistant to environmental factors, ensuring access to pure water for generations.
//                     </motion.p>
//                 </div>
//             </motion.section>

//             {/* 4. SERVICES / WHAT WE DO */}
//             <motion.section 
//                 className="w-full px-6 py-16 bg-blue-50/70"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.2 }}
//                 variants={containerVariants}
//             >
//                 <div className="max-w-6xl mx-auto text-center">
//                     <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold text-gray-900">
//                         Key Activities
//                     </motion.h2>
//                     <motion.p variants={itemVariants} className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
//                         Our work covers every step, from site selection and installation to community training and long-term maintenance.
//                     </motion.p>

//                     <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
//                         {services.map((service, index) => (
//                             <motion.div 
//                                 key={index} 
//                                 className="flex flex-col items-center h-full p-6 text-center transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
//                                 variants={itemVariants}
//                             >
//                                 <div className={`inline-block p-4 mb-4 rounded-full ${service.bgColor}`}>
//                                     <service.icon className={`text-3xl text-blue-600`} />
//                                 </div>
//                                 <h3 className="mb-2 text-xl font-bold text-gray-800">
//                                     {service.title}
//                                 </h3>
//                                 <p className="text-gray-600">
//                                     {service.description}
//                                 </p>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </motion.section>

//             {/* 5. FINAL CALL TO ACTION (CTA) */}
//             <motion.section 
//                 className="w-full px-6 py-20 bg-white"
//                 initial="hidden"
//                 whileInView="visible"
//                 viewport={{ once: true, amount: 0.5 }}
//                 variants={containerVariants}
//             >
//                 <div className="max-w-4xl p-10 mx-auto text-center text-white shadow-2xl rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500">
//                     <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold">
//                         Be the Source of Hope
//                     </motion.h2>
//                     <motion.p variants={itemVariants} className="mx-auto mb-8 text-xl">
//                         A single contribution can change the health and future of an entire village. Support our mission today!
//                     </motion.p>
//                     <motion.button
//                         variants={itemVariants}
//                         onClick={openDonationModal}
//                         className="px-10 py-4 text-xl font-bold text-blue-900 transition duration-300 transform bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105"
//                     >
//                         <FaHandHoldingHeart className="inline mr-3" /> Donate Now
//                     </motion.button>
//                 </div>
//             </motion.section>

//             {/* Modals placed at the very end */}
//             <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
//             <VolunteerModal isOpen={isVolunteerModalOpen} onClose={closeVolunteerModal} />
//         </div>
//     );
// };

// export default CleanWaterPage;


// src/components/CleanWaterPage.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { FaFaucet, FaHandHoldingHeart, FaMapMarkerAlt, FaUsers, FaTools, FaSeedling, FaClipboardCheck, FaHandsHelping, FaChevronDown, FaDonate, FaUserPlus, FaSearchLocation, FaTint, FaTractor, FaPumpMedical, FaFilter } from 'react-icons/fa';

// --- Web3Forms Access Key ---
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// --- Image URL ---
const PROJECT_IMAGE_URL = "https://u4h.org.uk/wp-content/uploads/2020/12/PHOTO-2020-07-30-04-18-41-1.jpg";
// -----------------------------

// --- Framer Motion Variants (Remains the same) ---
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, staggerChildren: 0.1 } }
};
const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
};

// --- Data (Remains the same) ---
const stats = [
    { value: '5K+', label: 'People Served', icon: FaUsers, color: 'text-blue-600' },
    { value: '10+', label: 'Water Points', icon: FaMapMarkerAlt, color: 'text-green-600' },
    { value: '2M+', label: 'Liters Delivered', icon: FaFaucet, color: 'text-cyan-600' },
    { value: '100+', label: 'Volunteers', icon: FaHandHoldingHeart, color: 'text-indigo-600' },
];
const services = [
    { title: "Well & Tube Well Installation", description: "Installing durable deep tube wells and rainwater harvesting systems in remote, water-scarce areas.", icon: FaTools, bgColor: "bg-blue-50" },
    { title: "Community Education", description: "Conducting hygiene and sanitation workshops to maximize the health benefits of clean water access.", icon: FaSeedling, bgColor: "bg-green-50" },
    { title: "Water Quality Testing", description: "Regular monitoring and testing of water sources to ensure they meet international safety standards.", icon: FaClipboardCheck, bgColor: "bg-cyan-50" },
    { title: "Local Partnership", description: "Working directly with local leaders and communities for project sustainability and ownership.", icon: FaHandsHelping, bgColor: "bg-indigo-50" },
];
const timelineSteps = [
    { number: 1, icon: FaSearchLocation, title: "Site Selection", description: "Identify the most needy communities and confirm water scarcity/contamination issues." },
    { number: 2, icon: FaDonate, title: "Funding & Logistics", description: "Secure necessary funds and procure high-quality drilling equipment and materials." },
    { number: 3, icon: FaTractor, title: "Drilling & Installation", description: "Expert teams drill and install the tube well or deep bore pump, ensuring structural integrity." },
    { number: 4, icon: FaTint, title: "Water Certification", description: "Strict testing to certify the water is clean, safe, and meets all health standards." },
    { number: 5, icon: FaUsers, title: "Handover & Training", description: "Official handover to the community, followed by training on maintenance and hygiene." },
];

// --- MODALS ---

const DonationModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
                <div className="p-8">
                    <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
                        <FaDonate className="mr-3 text-blue-500" /> Choose Your Impact
                    </h2>
                    <p className="pb-4 mb-6 text-gray-600 border-b">
                        Select which essential water product you would like to help provide.
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New Water Project Product Donation" />
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
                                <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="donor_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
                                <input type="email" id="donor_email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="your@example.com" required />
                            </div>
                            
                            {/* --- NEW DONATION OPTIONS --- */}
                            <div className="pt-2">
                                <span className="block mb-2 text-sm font-semibold text-gray-700">I want to donate for:</span>
                                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                                    <label className="flex items-center p-3 transition duration-150 bg-white border-2 border-blue-200 rounded-lg cursor-pointer has-checked:border-blue-600 has-checked:ring-2 has-checked:ring-blue-500 hover:bg-blue-50">
                                        <input type="radio" name="product_donation" value="Water Pump" className="text-blue-600 focus:ring-blue-500" required />
                                        <FaPumpMedical className="ml-3 text-xl text-blue-500" />
                                        <span className="ml-2 text-sm font-medium">Water Pump</span>
                                    </label>
                                    <label className="flex items-center p-3 transition duration-150 bg-white border-2 border-blue-200 rounded-lg cursor-pointer has-checked:border-blue-600 has-checked:ring-2 has-checked:ring-blue-500 hover:bg-blue-50">
                                        <input type="radio" name="product_donation" value="Water Filter" className="text-blue-600 focus:ring-blue-500" required />
                                        <FaFilter className="ml-3 text-xl text-blue-500" />
                                        <span className="ml-2 text-sm font-medium">Water Filter</span>
                                    </label>
                                    <label className="flex items-center p-3 transition duration-150 bg-white border-2 border-blue-200 rounded-lg cursor-pointer has-checked:border-blue-600 has-checked:ring-2 has-checked:ring-blue-500 hover:bg-blue-50">
                                        <input type="radio" name="product_donation" value="Deep Tube Well" className="text-blue-600 focus:ring-blue-500" required />
                                        <FaFaucet className="ml-3 text-xl text-blue-500" />
                                        <span className="ml-2 text-sm font-medium">Deep Tube Well</span>
                                    </label>
                                </div>
                            </div>
                            {/* --- END NEW DONATION OPTIONS --- */}

                            <div>
                                <label htmlFor="donor_message" className="block mb-1 text-sm font-semibold text-gray-700">Message (Optional)</label>
                                <textarea id="donor_message" name="message" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., I want to sponsor a water pump for a specific area."></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 space-x-3">
                            <button type="button" onClick={onClose} className="px-6 py-2 font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">Cancel</button>
                            <button type="submit" className="px-6 py-2 font-bold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700">Submit Donation Inquiry</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

// Volunteer Modal code remains the same, included below for completeness

const VolunteerModal = ({ isOpen, onClose }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
            <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
                <div className="p-8">
                    <h2 className="flex items-center mb-4 text-3xl font-extrabold text-green-700">
                        <FaUserPlus className="mr-3 text-green-500" /> Become a Volunteer
                    </h2>
                    <p className="pb-4 mb-6 text-gray-600 border-b">
                        Join our team and contribute your time and skills to the cause.
                    </p>
                    <form action="https://api.web3forms.com/submit" method="POST">
                        <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                        <input type="hidden" name="subject" value="New Water Project Volunteer Registration" />
                        <input type="hidden" name="redirect" value="https://web3forms.com/success" />

                        <div className="space-y-4">
                            <div>
                                <label htmlFor="volunteer_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
                                <input type="text" id="volunteer_name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="Your Name" required />
                            </div>
                            <div>
                                <label htmlFor="volunteer_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
                                <input type="tel" id="volunteer_phone" name="phone" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="+880 1XXXXXXXXX" required />
                            </div>
                            <div>
                                <label htmlFor="volunteer_skills" className="block mb-1 text-sm font-semibold text-gray-700">Relevant Skills/Interests</label>
                                <div className="relative">
                                    <select id="volunteer_skills" name="skills" className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-green-500 focus:border-green-500" required>
                                        <option value="">Select your area of interest</option>
                                        <option value="Manual Labor/Installation">Manual Labor/Installation</option>
                                        <option value="Community Outreach/Education">Community Outreach/Education</option>
                                        <option value="Logistics/Coordination">Logistics/Coordination</option>
                                        <option value="Fundraising/Admin">Fundraising/Admin</option>
                                    </select>
                                    <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="volunteer_availability" className="block mb-1 text-sm font-semibold text-gray-700">Availability/Message</label>
                                <textarea id="volunteer_availability" name="availability" rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500" placeholder="e.g., Available on weekends, interested in Dhaka area"></textarea>
                            </div>
                        </div>
                        <div className="flex justify-end mt-6 space-x-3">
                            <button type="button" onClick={onClose} className="px-6 py-2 font-medium text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-100">Cancel</button>
                            <button type="submit" className="px-6 py-2 font-bold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700">Submit Application</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---

const CleanWaterPage = () => {
    const [isDonationModalOpen, setIsDonationModalOpen] = useState(false);
    const [isVolunteerModalOpen, setIsVolunteerModalOpen] = useState(false);

    const openDonationModal = () => setIsDonationModalOpen(true);
    const closeDonationModal = () => setIsDonationModalOpen(false);

    const openVolunteerModal = () => setIsVolunteerModalOpen(true);
    const closeVolunteerModal = () => setIsVolunteerModalOpen(false);

    return (
        <div className="min-h-screen font-sans bg-gray-50">

            {/* 1. HERO SECTION (Header) */}
            <motion.header 
                className="w-full px-6 py-24 overflow-hidden md:py-32 bg-gradient-to-br from-white to-blue-50/70"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                transition={{ staggerChildren: 0.1 }}
            >
                {/* Content Container to keep text centered and readable */}
                <div className="grid items-center gap-12 mx-auto max-w-7xl lg:grid-cols-2">
                    
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        <motion.h1 
                            className="mb-4 text-5xl font-extrabold leading-tight text-gray-900 lg:text-7xl"
                            variants={itemVariants}
                        >
                            Pure Water, <span className="text-blue-600">Pure Life</span>
                        </motion.h1>
                        <motion.p 
                            className="max-w-xl mx-auto mb-8 text-xl text-gray-700 lg:mx-0"
                            variants={itemVariants}
                        >
                            Access to clean drinking water is a basic human right. Join our project to install free, sustainable water sources for underserved communities across Bangladesh.
                        </motion.p>
                        
                        {/* CTA Buttons */}
                        <motion.div 
                            className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start"
                            variants={itemVariants}
                        >
                            <button
                                onClick={openDonationModal} 
                                // Text changed to reflect product donation
                                className="px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 hover:scale-105"
                            >
                                <FaHandHoldingHeart className="inline mr-3" /> Choose to Donate
                            </button>
                            <button
                                onClick={openVolunteerModal} 
                                className="px-8 py-4 text-lg font-bold text-blue-600 transition duration-300 transform bg-white border-2 border-blue-600 rounded-full shadow-lg hover:bg-blue-50 hover:scale-105"
                            >
                                Become a Volunteer
                            </button>
                        </motion.div>
                    </div>

                    {/* Right Image Area (Using your provided URL) */}
                    <motion.div 
                        className="flex justify-center mt-12 lg:justify-end lg:mt-0"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    >
                        <div className="relative w-full max-w-lg overflow-hidden bg-gray-300 shadow-2xl rounded-3xl">
                            {/* The actual Image */}
                            <img 
                                src={PROJECT_IMAGE_URL} 
                                alt="Community using clean water hand pump" 
                                className="object-cover w-full h-full min-h-[384px]" // min-h for consistent size
                            />
                            <div className="absolute inset-0 bg-blue-800/20 mix-blend-multiply"></div>
                        </div>
                    </motion.div>
                </div>
            </motion.header>


            {/* 2. IMPACT STATISTICS */}
            <motion.section 
                className="w-full px-6 mx-auto mb-20 -mt-16 max-w-7xl"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
            >
                <div className="p-8 bg-white border border-blue-100 shadow-2xl rounded-2xl">
                    <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <motion.div key={index} variants={itemVariants}>
                                <stat.icon className={`text-5xl mx-auto mb-3 ${stat.color}`} />
                                <p className="text-4xl font-extrabold text-gray-900">{stat.value}</p>
                                <p className="mt-1 font-medium text-gray-600">{stat.label}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 3. ABOUT THE PROJECT (Our Commitment) */}
            <motion.section 
                className="w-full px-6 py-16 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2 variants={itemVariants} className="inline-block pb-2 mb-6 text-4xl font-extrabold text-gray-900 border-b-4 border-blue-200">
                        About Our Commitment
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mb-8 text-xl text-gray-700">
                        Our Free Clean Water Project is dedicated to solving water scarcity and contamination issues in underserved rural areas. We focus on providing long-term, sustainable solutions rather than temporary fixes.
                    </motion.p>
                    <motion.p variants={itemVariants} className="text-lg text-gray-600">
                        We prioritize **transparency** in funding and work hand-in-hand with local leaders and engineers. Every well we install is designed to be low-maintenance and resistant to environmental factors, ensuring access to pure water for generations.
                    </motion.p>
                </div>
            </motion.section>
            

            {/* 5. SERVICES / WHAT WE DO */}
            <motion.section 
                className="w-full px-6 py-16 bg-blue-50/70"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto text-center">
                    <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold text-gray-900">
                        Key Activities
                    </motion.h2>
                    <motion.p variants={itemVariants} className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
                        Our work covers every step, from site selection and installation to community training and long-term maintenance.
                    </motion.p>

                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {services.map((service, index) => (
                            <motion.div 
                                key={index} 
                                className="flex flex-col items-center h-full p-6 text-center transition duration-300 bg-white shadow-lg rounded-xl hover:shadow-xl"
                                variants={itemVariants}
                            >
                                <div className={`inline-block p-4 mb-4 rounded-full ${service.bgColor}`}>
                                    <service.icon className={`text-3xl text-blue-600`} />
                                </div>
                                <h3 className="mb-2 text-xl font-bold text-gray-800">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>

            {/* 6. FINAL CALL TO ACTION (CTA) */}
            <motion.section 
                className="w-full px-6 py-20 bg-white"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={containerVariants}
            >
                <div className="max-w-4xl p-10 mx-auto text-center text-white shadow-2xl rounded-3xl bg-gradient-to-r from-blue-500 to-cyan-500">
                    <motion.h2 variants={itemVariants} className="mb-4 text-4xl font-extrabold">
                        Be the Source of Hope
                    </motion.h2>
                    <motion.p variants={itemVariants} className="mx-auto mb-8 text-xl">
                        A single contribution can change the health and future of an entire village. Support our mission today!
                    </motion.p>
                    <motion.button
                        variants={itemVariants}
                        onClick={openDonationModal}
                        // Text changed to reflect product donation
                        className="px-10 py-4 text-xl font-bold text-blue-900 transition duration-300 transform bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105"
                    >
                        <FaHandHoldingHeart className="inline mr-3" /> Choose to Donate
                    </motion.button>
                </div>
            </motion.section>

            {/* Modals placed at the very end */}
            <DonationModal isOpen={isDonationModalOpen} onClose={closeDonationModal} />
            <VolunteerModal isOpen={isVolunteerModalOpen} onClose={closeVolunteerModal} />
        </div>
    );
};

export default CleanWaterPage;