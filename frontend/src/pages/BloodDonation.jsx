// // // // // src/pages/BloodDonation.jsx

// // // // import React from 'react';
// // // // import AvailableCamps from '../components/AvailableCamps';
// // // // import OurServices from '../components/OurServices';

// // // // const BloodDonation = () => {
// // // //   return (
// // // //     <div className="p-6">
// // // //       <AvailableCamps/>
// // // //       <h1 className="text-3xl font-bold">Free Blood Donation</h1>
// // // //       <OurServices/>
// // // //       <p className="mt-4">Information on how to participate in our Free Blood Donation program.</p>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default BloodDonation;


// // // // src/pages/BloodDonation.jsx

// // // import React, { useState } from 'react';

// // // // --- Donation Modal Component (Inline for simplicity) ---
// // // const DonationModal = ({ isOpen, onClose }) => {
// // //   if (!isOpen) return null;

// // //   return (
// // //     <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-600 bg-opacity-75">
// // //       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-xl">
// // //         <h2 className="mb-4 text-2xl font-bold text-red-600">Blood Donation Form</h2>
// // //         <p className="mb-4">Please fill out this form to register your intent to donate blood. We will contact you soon!</p>
        
// // //         {/* Simple Form Placeholder */}
// // //         <form>
// // //           <div className="mb-4">
// // //             <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Full Name</label>
// // //             <input type="text" id="name" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="Your Name" required />
// // //           </div>
// // //           <div className="mb-4">
// // //             <label htmlFor="phone" className="block mb-1 font-medium text-gray-700">Phone Number</label>
// // //             <input type="tel" id="phone" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500" placeholder="+880..." required />
// // //           </div>
// // //           <div className="flex justify-end space-x-2">
// // //             <button
// // //               type="button"
// // //               onClick={onClose}
// // //               className="px-4 py-2 text-gray-800 transition duration-150 bg-gray-300 rounded-lg hover:bg-gray-400"
// // //             >
// // //               Cancel
// // //             </button>
// // //             <button
// // //               type="submit"
// // //               className="px-4 py-2 text-white transition duration-150 bg-red-600 rounded-lg hover:bg-red-700"
// // //             >
// // //               Submit
// // //             </button>
// // //           </div>
// // //         </form>
// // //       </div>
// // //     </div>
// // //   );
// // // };
// // // // --------------------------------------------------------


// // // const BloodDonation = () => {
// // //   const [isModalOpen, setIsModalOpen] = useState(false);

// // //   const openModal = () => setIsModalOpen(true);
// // //   const closeModal = () => setIsModalOpen(false);

// // //   return (
// // //     <div className="min-h-screen bg-gray-50">
// // //       {/* 1. Banner Section */}
// // //       <header className="px-6 py-20 text-white bg-red-700 shadow-lg">
// // //         <div className="max-w-4xl mx-auto text-center">
// // //           <h1 className="mb-4 text-5xl font-extrabold animate-fadeIn">Give the Gift of Life</h1>
// // //           <p className="mb-6 text-xl">Your single donation can save up to three lives. Be a hero today.</p>
// // //           <button
// // //             onClick={openModal}
// // //             className="px-8 py-3 text-lg font-bold text-red-700 transition duration-300 transform bg-white rounded-full shadow-xl hover:bg-gray-100 hover:scale-105"
// // //           >
// // //             🩸 Donate Blood Now!
// // //           </button>
// // //         </div>
// // //       </header>

// // //       <main className="max-w-6xl px-6 py-12 mx-auto space-y-16">

// // //         {/* 2. About Us Section */}
// // //         <section className="p-8 bg-white shadow-lg rounded-xl">
// // //           <h2 className="pb-2 mb-6 text-3xl font-bold text-red-600 border-b-2 border-red-200">❤️ About Our Initiative</h2>
// // //           <p className="mb-4 leading-relaxed text-gray-700">
// // //             We are a dedicated non-profit organization focused on providing a free, accessible, and safe platform for voluntary blood donation. Our mission is to bridge the gap between donors and patients in critical need, ensuring that no life is lost due to blood scarcity.
// // //           </p>
// // //           <p className="leading-relaxed text-gray-700">
// // //             Every drop counts. Join our movement and help us build a sustainable blood supply chain for our community. We operate with full transparency and adherence to strict medical safety protocols.
// // //           </p>
// // //         </section>

// // //         {/* 3. What We Do Section */}
// // //         <section className="space-y-6">
// // //           <h2 className="mb-6 text-3xl font-bold text-center text-red-600">📋 What We Do</h2>
// // //           <div className="grid gap-8 md:grid-cols-3">
// // //             {/* Service Card 1 */}
// // //             <div className="p-6 bg-white border-t-4 border-red-500 shadow-md rounded-xl">
// // //               <h3 className="mb-3 text-xl font-semibold text-gray-800">Organize Camps</h3>
// // //               <p className="text-gray-600">We regularly organize free blood donation camps in various accessible locations, making it easy for donors to participate.</p>
// // //             </div>
// // //             {/* Service Card 2 */}
// // //             <div className="p-6 bg-white border-t-4 border-red-500 shadow-md rounded-xl">
// // //               <h3 className="mb-3 text-xl font-semibold text-gray-800">Donor Registry</h3>
// // //               <p className="text-gray-600">Maintain a comprehensive and secure database of voluntary donors for emergency requests and targeted donation drives.</p>
// // //             </div>
// // //             {/* Service Card 3 */}
// // //             <div className="p-6 bg-white border-t-4 border-red-500 shadow-md rounded-xl">
// // //               <h3 className="mb-3 text-xl font-semibold text-gray-800">Awareness Programs</h3>
// // //               <p className="text-gray-600">Conduct workshops and campaigns to educate the public on the importance and safety of voluntary blood donation.</p>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* 4. Contact Section (with Donation Modal Trigger) */}
// // //         <section className="p-8 border-2 border-red-200 shadow-lg bg-red-50 rounded-xl">
// // //           <h2 className="mb-6 text-3xl font-bold text-center text-red-600">📞 Contact & Register</h2>
// // //           <div className="grid items-center gap-8 md:grid-cols-2">
// // //             <div>
// // //               <p className="mb-4 text-gray-700">
// // //                 Have questions or need to reach us for an emergency? Use the details below. Ready to donate? Click the button!
// // //               </p>
// // //               <ul className="space-y-2 text-gray-700">
// // //                 <li><strong className="text-red-600">Email:</strong> info@freedonation.org</li>
// // //                 <li><strong className="text-red-600">Phone:</strong> +880 1XXXXXXXXX</li>
// // //                 <li><strong className="text-red-600">Address:</strong> 123 Blood Donors Ave, City, Country</li>
// // //               </ul>
// // //             </div>
// // //             <div className="text-center">
// // //               <p className="mb-4 text-xl font-semibold text-red-700">Ready to save a life?</p>
// // //               {/* Donation Modal Trigger */}
// // //               <button
// // //                 onClick={openModal}
// // //                 className="w-full px-10 py-3 font-bold text-white transition duration-300 bg-red-600 rounded-lg shadow-xl md:w-auto hover:bg-red-700"
// // //               >
// // //                 Register to Donate
// // //               </button>
// // //             </div>
// // //           </div>
// // //         </section>

// // //       </main>
      
// // //       {/* Donation Modal Component */}
// // //       <DonationModal isOpen={isModalOpen} onClose={closeModal} />

// // //       {/* Placeholder Footer */}
// // //       <footer className="py-4 mt-12 text-center text-white bg-gray-800">
// // //         <p>&copy; {new Date().getFullYear()} Free Blood Donation Initiative. All rights reserved.</p>
// // //       </footer>
// // //     </div>
// // //   );
// // // };

// // // export default BloodDonation;

// // // src/pages/BloodDonation.jsx

// // import React, { useState } from 'react';
// // import { FaHeartbeat, FaHandsHelping, FaPhoneAlt, FaTint } from 'react-icons/fa'; // Importing icons for visual appeal

// // // --- Donation Modal Component (Inline) ---
// // const DonationModal = ({ isOpen, onClose }) => {
// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
// //       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl animate-slideUp">
// //         <div className="p-8">
// //           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-red-700">
// //             <FaTint className="mr-3 text-red-500" /> Register to Donate
// //           </h2>
// //           <p className="pb-4 mb-6 text-gray-600 border-b">
// //             Your registration is the first step to saving a life. Please fill in your primary contact details.
// //           </p>

// //           {/* Styled Form */}
// //           <form onSubmit={(e) => { e.preventDefault(); alert("Registration submitted!"); onClose(); }}>
// //             <div className="space-y-4">
// //               <div>
// //                 <label htmlFor="name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
// //                 <input type="text" id="name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Your Name" required />
// //               </div>
// //               <div>
// //                 <label htmlFor="phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
// //                 <input type="tel" id="phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="+880 1XXXXXXXXX" required />
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
// //                 Confirm Registration
// //               </button>
// //             </div>
// //           </form>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };
// // // --------------------------------------------------------


// // const BloodDonation = () => {
// //   const [isModalOpen, setIsModalOpen] = useState(false);

// //   const openModal = () => setIsModalOpen(true);
// //   const closeModal = () => setIsModalOpen(false);

// //   return (
// //     <div className="min-h-screen font-sans bg-gray-50">
// //       {/* 1. Gorgeous Banner Section (Hero) */}
// //       <header className="relative px-6 py-24 overflow-hidden text-white bg-red-800">
// //         {/* Background Overlay Effect */}
// //         <div className="absolute inset-0 opacity-10 bg-pattern"></div>
        
// //         <div className="relative z-10 max-w-6xl mx-auto text-center">
// //           <div className="mb-2 text-sm font-semibold tracking-widest text-red-300 uppercase">FREE VOLUNTARY DONATION</div>
// //           <h1 className="mb-6 text-6xl font-black leading-tight md:text-7xl drop-shadow-lg">
// //             Be the <span className="text-red-300">Lifeline</span> Someone Needs
// //           </h1>
// //           <p className="max-w-3xl mx-auto mb-8 text-xl font-light md:text-2xl">
// //             Join our initiative to provide safe, free, and accessible blood for all communities in need. Your help matters.
// //           </p>
// //           <button
// //             onClick={openModal}
// //             className="px-12 py-4 text-xl font-extrabold text-white transition duration-300 transform bg-red-500 rounded-full shadow-2xl hover:bg-red-600 hover:scale-105 active:scale-95 ring-4 ring-red-300/50"
// //           >
// //             <FaHeartbeat className="inline mr-2" /> Donate Blood Today!
// //           </button>
// //         </div>
// //       </header>

// //       <main className="max-w-6xl px-6 py-16 mx-auto space-y-20">

// //         {/* 2. About Us Section */}
// //         <section className="p-10 bg-white border-t-4 shadow-xl rounded-3xl border-red-500/50">
// //           <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Commitment</h2>
// //           <div className="grid items-center gap-8 md:grid-cols-3">
// //             <div className="md:col-span-2">
// //                 <p className="mb-4 text-lg leading-relaxed text-gray-700">
// //                   We are a dedicated, **non-profit organization** committed to minimizing blood scarcity. Our platform connects voluntary donors with hospitals and patients in critical situations, ensuring a swift and efficient supply chain—all at **zero cost** to the recipient.
// //                 </p>
// //                 <p className="pl-4 text-lg italic leading-relaxed text-gray-700 border-l-4 border-red-500">
// //                   "The finest gesture one can make is to save a life. It costs nothing but a few moments of your time."
// //                 </p>
// //             </div>
// //             <div className="hidden md:block">
// //                 <FaHandsHelping className="mx-auto text-red-500 text-9xl opacity-70" />
// //             </div>
// //           </div>
// //         </section>

// //         {/* 3. What We Do Section (Services) */}
// //         <section className="text-center">
// //           <span className="font-semibold tracking-wider text-red-600 uppercase">Services</span>
// //           <h2 className="mb-12 text-4xl font-bold text-gray-800">How We Make a Difference</h2>
          
// //           <div className="grid gap-10 lg:grid-cols-3">
// //             {/* Service Card 1 */}
// //             <div className="p-8 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1">
// //               <FaTint className="mx-auto mb-4 text-6xl text-red-600" />
// //               <h3 className="mb-3 text-xl font-bold text-gray-800">Organized Blood Drives</h3>
// //               <p className="text-gray-600">We host regular, professionally managed blood donation camps across the region with strict health and safety standards.</p>
// //             </div>
// //             {/* Service Card 2 */}
// //             <div className="p-8 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1">
// //               <FaHeartbeat className="mx-auto mb-4 text-6xl text-red-600" />
// //               <h3 className="mb-3 text-xl font-bold text-gray-800">24/7 Emergency Support</h3>
// //               <p className="text-gray-600">Our emergency registry allows us to quickly locate and mobilize donors for immediate, life-threatening needs.</p>
// //             </div>
// //             {/* Service Card 3 */}
// //             <div className="p-8 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1">
// //               <FaHandsHelping className="mx-auto mb-4 text-6xl text-red-600" />
// //               <h3 className="mb-3 text-xl font-bold text-gray-800">Community Outreach</h3>
// //               <p className="text-gray-600">We educate the public, dispel myths, and encourage young adults to become lifelong voluntary donors.</p>
// //             </div>
// //           </div>
// //         </section>

// //         {/* 4. Contact & CTA Section */}
// //         <section className="p-12 border-2 border-red-200 shadow-inner bg-red-50 rounded-3xl">
// //           <div className="grid items-center gap-8 md:grid-cols-3">
// //             <div className="md:col-span-2">
// //               <h2 className="mb-4 text-3xl font-bold text-red-700">Get in Touch with Us</h2>
// //               <p className="mb-6 text-lg text-gray-700">
// //                 Whether you need urgent blood or wish to volunteer, our team is ready to assist you. Contact us immediately!
// //               </p>
// //               <ul className="space-y-3 text-gray-700">
// //                 <li className="flex items-center"><FaPhoneAlt className="mr-3 text-red-500" /> <strong className="font-semibold">Phone:</strong> +880 1XXXXXXXXX</li>
// //                 <li className="flex items-center"><span className="mr-3 text-red-500">📧</span> <strong className="font-semibold">Email:</strong> contact@lifeline.org</li>
// //                 <li className="flex items-center"><span className="mr-3 text-red-500">📍</span> <strong className="font-semibold">Office:</strong> Central Donation Hub, Dhaka, BD</li>
// //               </ul>
// //             </div>
// //             {/* Donation Modal Trigger */}
// //             <div className="text-center">
// //               <p className="mb-4 text-xl font-extrabold text-red-800">Take the pledge.</p>
// //               <button
// //                 onClick={openModal}
// //                 className="w-full px-8 py-4 font-bold text-white transition duration-300 bg-red-700 shadow-xl rounded-xl hover:bg-red-800"
// //               >
// //                 <FaHeartbeat className="inline mr-2" /> Register & Help Now
// //               </button>
// //             </div>
// //           </div>
// //         </section>

// //       </main>
      
// //       {/* Donation Modal Component */}
// //       <DonationModal isOpen={isModalOpen} onClose={closeModal} />

// //       {/* Stylized Footer */}
// //       <footer className="py-6 mt-16 text-center text-white bg-gray-900">
// //         <p className="text-sm tracking-wider">&copy; {new Date().getFullYear()} LifeLine Blood Donation. Powered by Community.</p>
// //       </footer>
// //     </div>
// //   );
// // };

// // export default BloodDonation;

// // src/pages/BloodDonation.jsx

// import React, { useState } from 'react';
// import { FaHeartbeat, FaHandsHelping, FaPhoneAlt, FaTint, FaChevronDown, FaSyringe, FaUsers } from 'react-icons/fa'; // Importing icons
// import bannerImage from '../assets/img/pexels-rsapmech-12820067.jpg'; // Your specific banner image

// // --- Web3Forms Access Key ---
// const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// // -----------------------------

// // --- Donate Blood Modal Component ---
// const DonateBloodModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl animate-slideUp">
//         <div className="p-8">
//           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-red-700">
//             <FaSyringe className="mr-3 text-red-500" /> Register to Donate Blood
//           </h2>
//           <p className="pb-4 mb-6 text-gray-600 border-b">
//             Your generous donation can save lives. Please provide your details.
//           </p>

//           <form action="https://api.web3forms.com/submit" method="POST">
//             <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//             <input type="hidden" name="subject" value="New Blood Donation Registration" />
//             <input type="hidden" name="redirect" value="https://web3forms.com/success" /> {/* Optional: Redirect to a success page */}

//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
//                 <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Your Name" required />
//               </div>
//               <div>
//                 <label htmlFor="donor_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
//                 <input type="email" id="donor_email" name="email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="your@example.com" required />
//               </div>
//               <div>
//                 <label htmlFor="donor_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
//                 <input type="tel" id="donor_phone" name="phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="+880 1XXXXXXXXX" required />
//               </div>
//               <div>
//                 <label htmlFor="donor_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Blood Group</label>
//                 <div className="relative">
//                   <select id="donor_blood_group" name="blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-red-500 focus:border-red-500" required>
//                     <option value="">Select Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                   <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="donor_message" className="block mb-1 text-sm font-semibold text-gray-700">Any Message (Optional)</label>
//                 <textarea id="donor_message" name="message" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="e.g., Preferred donation date"></textarea>
//               </div>
//             </div>
//             <div className="flex justify-end mt-6 space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 font-bold text-white transition duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
//               >
//                 Submit Donation Form
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// // --- Request Blood Modal Component ---
// const RequestBloodModal = ({ isOpen, onClose }) => {
//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//       <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl animate-slideUp">
//         <div className="p-8">
//           <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
//             <FaUsers className="mr-3 text-blue-500" /> Request for Blood
//           </h2>
//           <p className="pb-4 mb-6 text-gray-600 border-b">
//             If you or someone you know is in urgent need of blood, please fill out this form.
//           </p>

//           <form action="https://api.web3forms.com/submit" method="POST">
//             <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//             <input type="hidden" name="subject" value="New Blood Request Received" />
//             <input type="hidden" name="redirect" value="https://web3forms.com/success" /> {/* Optional: Redirect to a success page */}

//             <div className="space-y-4">
//               <div>
//                 <label htmlFor="requester_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name (Requester)</label>
//                 <input type="text" id="requester_name" name="requester_name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
//               </div>
//               <div>
//                 <label htmlFor="requester_email" className="block mb-1 text-sm font-semibold text-gray-700">Email Address</label>
//                 <input type="email" id="requester_email" name="requester_email" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="your@example.com" required />
//               </div>
//               <div>
//                 <label htmlFor="requester_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
//                 <input type="tel" id="requester_phone" name="requester_phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="+880 1XXXXXXXXX" required />
//               </div>
//               <div>
//                 <label htmlFor="required_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Required Blood Group</label>
//                 <div className="relative">
//                   <select id="required_blood_group" name="required_blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500" required>
//                     <option value="">Select Required Blood Group</option>
//                     <option value="A+">A+</option>
//                     <option value="A-">A-</option>
//                     <option value="B+">B+</option>
//                     <option value="B-">B-</option>
//                     <option value="AB+">AB+</option>
//                     <option value="AB-">AB-</option>
//                     <option value="O+">O+</option>
//                     <option value="O-">O-</option>
//                   </select>
//                   <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="patient_condition" className="block mb-1 text-sm font-semibold text-gray-700">Patient Condition / Message</label>
//                 <textarea id="patient_condition" name="patient_condition" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Urgent requirement for surgery, patient name"></textarea>
//               </div>
//             </div>
//             <div className="flex justify-end mt-6 space-x-3">
//               <button
//                 type="button"
//                 onClick={onClose}
//                 className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
//               >
//                 Cancel
//               </button>
//               <button
//                 type="submit"
//                 className="px-6 py-2 font-bold text-white transition duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
//               >
//                 Submit Blood Request
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };
// // --------------------------------------------------------


// const BloodDonation = () => {
//   const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
//   const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

//   const openDonateModal = () => setIsDonateModalOpen(true);
//   const closeDonateModal = () => setIsDonateModalOpen(false);

//   const openRequestModal = () => setIsRequestModalOpen(true);
//   const closeRequestModal = () => setIsRequestModalOpen(false);

//   return (
//     <div className="min-h-screen font-sans bg-gray-50">
//       {/* 1. Custom Banner Section (Hero) matching your image */}
//       <header className="px-6 py-20 overflow-hidden bg-gradient-to-r from-red-50 to-white">
//         <div className="grid items-center max-w-6xl gap-12 mx-auto md:grid-cols-2">
//           {/* Left Content Area */}
//           <div className="text-center md:text-left">
//             <h1 className="mb-6 text-5xl font-extrabold leading-tight lg:text-6xl">
//               Be the <span className="text-red-600">Reason of</span> Someone Lives
//             </h1>
//             <p className="max-w-md mx-auto mb-8 text-lg text-gray-700 md:mx-0">
//               A single drop of your blood can be a lifetime of hope for someone. Together, we can make sure no one waits in fear for help.
//             </p>
//             <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 md:justify-start">
//               <button
//                 onClick={openDonateModal}
//                 className="px-8 py-3 text-lg font-bold text-white transition duration-300 transform bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105"
//               >
//                 <FaHeartbeat className="inline mr-2" /> Start Saving Lives
//               </button>
//               <button
//                 onClick={openRequestModal}
//                 className="px-8 py-3 text-lg font-bold text-red-600 transition duration-300 transform bg-white border-2 border-red-600 rounded-full shadow-lg hover:bg-red-50 hover:scale-105"
//               >
//                 Find a Lifesaver
//               </button>
//             </div>
//           </div>

//           {/* Right Image Area */}
//           <div className="flex justify-center md:justify-end">
//             <div className="p-4 bg-white shadow-2xl rounded-3xl">
//               <img src={bannerImage} alt="Blood Donation" className="object-cover w-auto rounded-2xl max-h-96" />
//             </div>
//           </div>
//         </div>
//       </header>

//       <main className="max-w-6xl px-6 py-16 mx-auto space-y-20">

//         {/* 2. About Us Section (Reusing previous gorgeous design) */}
//         <section className="p-10 bg-white border-t-4 shadow-xl rounded-3xl border-red-500/50">
//           <h2 className="mb-4 text-4xl font-bold text-gray-800">Our Commitment</h2>
//           <div className="grid items-center gap-8 md:grid-cols-3">
//             <div className="md:col-span-2">
//                 <p className="mb-4 text-lg leading-relaxed text-gray-700">
//                   We are a dedicated, **non-profit organization** committed to minimizing blood scarcity. Our platform connects voluntary donors with hospitals and patients in critical situations, ensuring a swift and efficient supply chain—all at **zero cost** to the recipient.
//                 </p>
//                 <p className="pl-4 text-lg italic leading-relaxed text-gray-700 border-l-4 border-red-500">
//                   "The finest gesture one can make is to save a life. It costs nothing but a few moments of your time."
//                 </p>
//             </div>
//             <div className="hidden md:block">
//                 <FaHandsHelping className="mx-auto text-red-500 text-9xl opacity-70" />
//             </div>
//           </div>
//         </section>

//         {/* 3. What We Do Section (Reusing previous gorgeous design) */}
//         <section className="text-center">
//           <span className="font-semibold tracking-wider text-red-600 uppercase">Services</span>
//           <h2 className="mb-12 text-4xl font-bold text-gray-800">How We Make a Difference</h2>
          
//           <div className="grid gap-10 lg:grid-cols-3">
//             {/* Service Card 1 */}
//             <div className="p-8 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1">
//               <FaTint className="mx-auto mb-4 text-6xl text-red-600" />
//               <h3 className="mb-3 text-xl font-bold text-gray-800">Organized Blood Drives</h3>
//               <p className="text-gray-600">We host regular, professionally managed blood donation camps across the region with strict health and safety standards.</p>
//             </div>
//             {/* Service Card 2 */}
//             <div className="p-8 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1">
//               <FaHeartbeat className="mx-auto mb-4 text-6xl text-red-600" />
//               <h3 className="mb-3 text-xl font-bold text-gray-800">24/7 Emergency Support</h3>
//               <p className="text-gray-600">Our emergency registry allows us to quickly locate and mobilize donors for immediate, life-threatening needs.</p>
//             </div>
//             {/* Service Card 3 */}
//             <div className="p-8 transition duration-300 transform bg-white shadow-lg rounded-2xl hover:shadow-2xl hover:-translate-y-1">
//               <FaHandsHelping className="mx-auto mb-4 text-6xl text-red-600" />
//               <h3 className="mb-3 text-xl font-bold text-gray-800">Community Outreach</h3>
//               <p className="text-gray-600">We educate the public, dispel myths, and encourage young adults to become lifelong voluntary donors.</p>
//             </div>
//           </div>
//         </section>

//         {/* 4. Contact & CTA Section (Reusing previous gorgeous design) */}
//         <section className="p-12 border-2 border-red-200 shadow-inner bg-red-50 rounded-3xl">
//           <div className="grid items-center gap-8 md:grid-cols-3">
//             <div className="md:col-span-2">
//               <h2 className="mb-4 text-3xl font-bold text-red-700">Get in Touch with Us</h2>
//               <p className="mb-6 text-lg text-gray-700">
//                 Whether you need urgent blood or wish to volunteer, our team is ready to assist you. Contact us immediately!
//               </p>
//               <ul className="space-y-3 text-gray-700">
//                 <li className="flex items-center"><FaPhoneAlt className="mr-3 text-red-500" /> <strong className="font-semibold">Phone:</strong> +880 1XXXXXXXXX</li>
//                 <li className="flex items-center"><span className="mr-3 text-red-500">📧</span> <strong className="font-semibold">Email:</strong> contact@lifeline.org</li>
//                 <li className="flex items-center"><span className="mr-3 text-red-500">📍</span> <strong className="font-semibold">Office:</strong> Central Donation Hub, Dhaka, BD</li>
//               </ul>
//             </div>
//             {/* Quick action buttons for contact */}
//             <div className="text-center">
//               <p className="mb-4 text-xl font-extrabold text-red-800">Urgent Need or Inquiry?</p>
//               <a
//                 href="tel:+8801XXXXXXXXX"
//                 className="w-full px-8 py-4 font-bold text-white transition duration-300 bg-red-700 shadow-xl rounded-xl hover:bg-red-800"
//               >
//                 <FaPhoneAlt className="inline mr-2" /> Call Us Now
//               </a>
//             </div>
//           </div>
//         </section>

//       </main>
      
//       {/* Modals */}
//       <DonateBloodModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />
//       <RequestBloodModal isOpen={isRequestModalOpen} onClose={closeRequestModal} />

//       {/* Stylized Footer */}
//       <footer className="py-6 mt-16 text-center text-white bg-gray-900">
//         <p className="text-sm tracking-wider">&copy; {new Date().getFullYear()} LifeLine Blood Donation. Powered by Community.</p>
//       </footer>
//     </div>
//   );
// };

// export default BloodDonation;

import React from 'react'
import BloodHero from '../components/BloodHero'
import OurPromise from '../components/OurPromise'
import WhyChooseUs from '../components/WhyChooseUs'
import GetInTouch from '../components/GetInTouch'

const BloodDonation = () => {
  return (
    <div>
      <BloodHero/>
      <OurPromise/>
      <WhyChooseUs/>
      <GetInTouch/>
    </div>
  )
}

export default BloodDonation
