// // // src/components/AvailableCamps.jsx

// // import React, { useState } from 'react';
// // import CampCard from './CampCard'; // নিশ্চিত করুন এই পাথটি সঠিক

// // // --- JSON (Mock Data) শুরু ---
// // const mockCamps = [
// //     {
// //       id: 1,
// //       title: "Basic Life Support Training",
// //       participants: 27,
// //       location: "Training Center, Banani, Dhaka",
// //       date: "12/12/2025",
// //       price: 150,
// //       instructor: "Mr. Rashedul Islam (Certified Trainer)",
// //       image: "https://via.placeholder.com/400x200?text=BLS+Training" // ডামি ইমেজ URL
// //     },
// //     {
// //       id: 2,
// //       title: "Basic Life Support Training",
// //       participants: 26,
// //       location: "Training Center, Banani, Dhaka",
// //       date: "12/12/2025",
// //       price: 150,
// //       instructor: "Mr. Rashedul Islam (Certified Trainer)",
// //       image: "https://via.placeholder.com/400x200?text=BLS+Training"
// //     },
// //     {
// //       id: 3,
// //       title: "Blood Donation Drive - University Campus",
// //       participants: 300,
// //       location: "Dhaka University, TSC Premises",
// //       date: "11/28/2025",
// //       price: 0,
// //       instructor: "Medical Team On-site",
// //       image: "https://via.placeholder.com/400x200?text=Blood+Donation"
// //     },
// //     {
// //       id: 4,
// //       title: "Blood Donation Drive - University Campus",
// //       participants: 300,
// //       location: "Dhaka University, TSC Premises",
// //       date: "11/28/2025",
// //       price: 0,
// //       instructor: "Medical Team On-site",
// //       image: "https://via.placeholder.com/400x200?text=Blood+Donation"
// //     },
// //     {
// //       id: 5,
// //       title: "Branden Haney Health Camp",
// //       participants: 1,
// //       location: "Aliqa Accusamus Hall, Ashulia, Dhaka",
// //       date: "3/17/1977",
// //       price: 100,
// //       instructor: "Dr. Gannon Greene",
// //       image: "https://via.placeholder.com/400x200?text=Health+Camp"
// //     },
// //     {
// //       id: 6,
// //       title: "Cardiology Screening Camp",
// //       participants: 285,
// //       location: "National Heart Foundation Hospital, Mirpur",
// //       date: "12/20/2025",
// //       price: 120,
// //       instructor: "Dr. Aminul Islam",
// //       image: "https://via.placeholder.com/400x200?text=Cardiology+Screening"
// //     },
// //     // আপনি চাইলে আরও ক্যাম্প যুক্ত করতে পারেন
// // ];
// // // --- JSON (Mock Data) শেষ ---

// // const AvailableCamps = () => {
// //   // পেজিনেশন স্টেট ম্যানেজমেন্ট
// //   const [currentPage, setCurrentPage] = useState(1);
// //   const campsPerPage = 6; // প্রতি পেজে ৬টি করে ক্যাম্প দেখানো হবে

// //   // মোট পেজের সংখ্যা গণনা
// //   const totalPages = Math.ceil(mockCamps.length / campsPerPage);

// //   // বর্তমান পেজের জন্য ক্যাম্প ডেটা নির্বাচন
// //   const indexOfLastCamp = currentPage * campsPerPage;
// //   const indexOfFirstCamp = indexOfLastCamp - campsPerPage;
// //   const currentCamps = mockCamps.slice(indexOfFirstCamp, indexOfLastCamp);

// //   // পেজ পরিবর্তনের ফাংশন
// //   const paginate = (pageNumber) => setCurrentPage(pageNumber);

// //   return (
// //     <div className="min-h-screen p-8 bg-gray-50">
      
// //       {/* ক্যাম্প কার্ডের গ্রিড লেআউট */}
// //       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
// //         {currentCamps.map(camp => (
// //           <CampCard key={camp.id} camp={camp} />
// //         ))}
// //       </div>

// //       {/* পেজিনেশন কন্ট্রোল */}
// //       <div className="flex items-center justify-center mt-12 space-x-2">
// //         <button
// //           onClick={() => paginate(currentPage - 1)}
// //           disabled={currentPage === 1}
// //           className="px-4 py-2 text-gray-700 transition bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
// //         >
// //           &lt; Previous
// //         </button>

// //         {/* পেজ নম্বর ডিসপ্লে - আপনার ইমেজের মতো */}
// //         <div className="px-4 py-2 text-sm font-medium text-gray-700">
// //           Previous | Page <span className="font-bold text-green-600">{currentPage}</span> of {totalPages} | <button className="text-gray-700 hover:text-green-600" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button> 
// //         </div>

// //         <button
// //           onClick={() => paginate(currentPage + 1)}
// //           disabled={currentPage === totalPages}
// //           className="px-4 py-2 text-gray-700 transition bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
// //         >
// //           Next &gt;
// //         </button>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AvailableCamps;

// // src/components/AvailableCamps.jsx

// import React, { useState } from 'react';

// // --- JSON (Mock Data) শুরু: ডেটা এই ফাইলেই রাখা হয়েছে ---
// const mockCamps = [
//     {
//       id: 1,
//       title: "Basic Life Support Training",
//       participants: 27,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 150,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       image: "https://via.placeholder.com/400x200?text=BLS+Training" 
//     },
//     {
//       id: 2,
//       title: "Basic Life Support Training",
//       participants: 26,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 150,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       image: "https://via.placeholder.com/400x200?text=BLS+Training"
//     },
//     {
//       id: 3,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       image: "https://via.placeholder.com/400x200?text=Blood+Donation"
//     },
//     {
//       id: 4,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       image: "https://via.placeholder.com/400x200?text=Blood+Donation"
//     },
//     {
//       id: 5,
//       title: "Branden Haney Health Camp",
//       participants: 1,
//       location: "Aliqa Accusamus Hall, Ashulia, Dhaka",
//       date: "3/17/1977",
//       price: 100,
//       instructor: "Dr. Gannon Greene",
//       image: "https://via.placeholder.com/400x200?text=Health+Camp"
//     },
//     {
//       id: 6,
//       title: "Cardiology Screening Camp",
//       participants: 285,
//       location: "National Heart Foundation Hospital, Mirpur",
//       date: "12/20/2025",
//       price: 120,
//       instructor: "Dr. Aminul Islam",
//       image: "https://static.vecteezy.com/system/resources/previews/026/375/249/non_2x/ai-generative-portrait-of-confident-male-doctor-in-white-coat-and-stethoscope-standing-with-arms-crossed-and-looking-at-camera-photo.jpg"
//     },
// ];
// // --- JSON (Mock Data) শেষ ---

// const AvailableCamps = () => {
//   // পেজিনেশন স্টেট ম্যানেজমেন্ট
//   const [currentPage, setCurrentPage] = useState(1);
//   const campsPerPage = 6; // প্রতি পেজে ৬টি করে ক্যাম্প দেখানো হবে

//   // মোট পেজের সংখ্যা গণনা
//   const totalPages = Math.ceil(mockCamps.length / campsPerPage);

//   // বর্তমান পেজের জন্য ক্যাম্প ডেটা নির্বাচন
//   const indexOfLastCamp = currentPage * campsPerPage;
//   const indexOfFirstCamp = indexOfLastCamp - campsPerPage;
//   const currentCamps = mockCamps.slice(indexOfFirstCamp, indexOfLastCamp);

//   // পেজ পরিবর্তনের ফাংশন
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen p-8 bg-gray-50">
      
//       {/* ক্যাম্প কার্ডের গ্রিড লেআউট */}
//       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {currentCamps.map(camp => (
//           // কার্ডের ডিজাইন সরাসরি এখানে দেওয়া হলো
//           <div key={camp.id} className="overflow-hidden transition duration-300 bg-white rounded-lg shadow-md hover:shadow-xl">
            
//             {/* ছবির অংশ */}
//             <div className="relative">
//               <img
//                 src={camp.image} 
//                 alt={camp.title}
//                 className="object-cover w-full h-48"
//               />
//               {/* Participants ব্যাজ */}
//               <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-green-600 rounded-full top-3 left-3">
//                 👥 {camp.participants} Participants
//               </span>
//             </div>

//             {/* বিস্তারিত অংশ */}
//             <div className="p-4">
//               <h3 className="mb-3 text-lg font-bold text-gray-800 line-clamp-2">
//                 {camp.title}
//               </h3>
              
//               {/* তথ্য সারি */}
//               <div className="space-y-2 text-sm text-gray-600">
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">📍</span>
//                   <span>{camp.location}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">📅</span>
//                   <span>{camp.date}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">💰</span>
//                   <span>
//                     {camp.price === 0 ? '$ 0' : `$ ${camp.price}`}
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">🧑‍⚕️</span>
//                   <span>{camp.instructor}</span>
//                 </div>
//               </div>

//               {/* View Details বাটন */}
//               <button className="w-full py-2 mt-4 text-white transition duration-150 bg-green-600 rounded-md hover:bg-green-700">
//                 View Details
//               </button>
//             </div>
//           </div>
//           // কার্ডের ডিজাইন শেষ
//         ))}
//       </div>

//       {/* পেজিনেশন কন্ট্রোল */}
//       <div className="flex items-center justify-center mt-12 space-x-2">
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-4 py-2 text-gray-700 transition bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
//         >
//           &lt; Previous
//         </button>

//         {/* পেজ নম্বর ডিসপ্লে */}
//         <div className="px-4 py-2 text-sm font-medium text-gray-700">
//           Previous | Page <span className="font-bold text-green-600">{currentPage}</span> of {totalPages} | <button className="text-gray-700 hover:text-green-600" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>Next</button> 
//         </div>

//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-4 py-2 text-gray-700 transition bg-white border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
//         >
//           Next &gt;
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AvailableCamps;

// src/components/AvailableCamps.jsx

// import React, { useState } from 'react';

// // --- JSON (Mock Data) শুরু: এই ডেটাগুলো আপনার ইমেজের ডেটার অনুরূপ ---
// const mockCamps = [
//     {
//       id: 1,
//       title: "Basic Life Support Training",
//       participants: 27,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 150,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       // ছবির জন্য ডামি URL ব্যবহার করা হয়েছে। আপনি আপনার ছবির আসল URL/path দিয়ে পরিবর্তন করে নিতে পারেন।
//       image: "https://via.placeholder.com/400x200?text=Basic+Life+Support+Training" 
//     },
//     {
//       id: 2,
//       title: "Basic Life Support Training",
//       participants: 26,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 150,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       image: "https://cdn.shopify.com/s/files/1/0045/1959/2065/files/gloves-for-doctors-buying-guide-1.webp?v=1684247089"
//     },
//     {
//       id: 3,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       image: "https://via.placeholder.com/400x200?text=Blood+Donation+Drive"
//     },
//     {
//       id: 4,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       image: "https://via.placeholder.com/400x200?text=Blood+Donation+Drive"
//     },
//     {
//       id: 5,
//       title: "Branden Haney Health Camp",
//       participants: 1,
//       location: "Aliqa Accusamus Hall, Ashulia, Dhaka",
//       date: "3/17/1977",
//       price: 100,
//       instructor: "Dr. Gannon Greene",
//       image: "https://via.placeholder.com/400x200?text=Branden+Haney+Health+Camp"
//     },
//     {
//       id: 6,
//       title: "Cardiology Screening Camp",
//       participants: 285,
//       location: "National Heart Foundation Hospital, Mirpur",
//       date: "12/20/2025",
//       price: 120,
//       instructor: "Dr. Aminul Islam",
//       image: "https://via.placeholder.com/400x200?text=Cardiology+Screening+Camp"
//     },
//     // পেজিনেশন টেস্টিং এর জন্য আরও ডেটা যোগ করা যেতে পারে
//     {
//       id: 7,
//       title: "General Health Checkup",
//       participants: 50,
//       location: "Local Community Center",
//       date: "01/05/2026",
//       price: 50,
//       instructor: "Local Medical Practitioners",
//       image: "https://via.placeholder.com/400x200?text=Health+Checkup"
//     },
//     {
//       id: 1,
//       title: "Basic Life Support Training",
//       participants: 27,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 150,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       // ছবির জন্য ডামি URL ব্যবহার করা হয়েছে। আপনি আপনার ছবির আসল URL/path দিয়ে পরিবর্তন করে নিতে পারেন।
//       image: "https://via.placeholder.com/400x200?text=Basic+Life+Support+Training" 
//     },
//     {
//       id: 2,
//       title: "Basic Life Support Training",
//       participants: 26,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 150,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       image: "https://cdn.shopify.com/s/files/1/0045/1959/2065/files/gloves-for-doctors-buying-guide-1.webp?v=1684247089"
//     },
//     {
//       id: 3,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       image: "https://via.placeholder.com/400x200?text=Blood+Donation+Drive"
//     },
//     {
//       id: 4,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       image: "https://via.placeholder.com/400x200?text=Blood+Donation+Drive"
//     },
//     {
//       id: 5,
//       title: "Branden Haney Health Camp",
//       participants: 1,
//       location: "Aliqa Accusamus Hall, Ashulia, Dhaka",
//       date: "3/17/1977",
//       price: 100,
//       instructor: "Dr. Gannon Greene",
//       image: "https://via.placeholder.com/400x200?text=Branden+Haney+Health+Camp"
//     },
//     {
//       id: 6,
//       title: "Cardiology Screening Camp",
//       participants: 285,
//       location: "National Heart Foundation Hospital, Mirpur",
//       date: "12/20/2025",
//       price: 120,
//       instructor: "Dr. Aminul Islam",
//       image: "https://via.placeholder.com/400x200?text=Cardiology+Screening+Camp"
//     },
//     // পেজিনেশন টেস্টিং এর জন্য আরও ডেটা যোগ করা যেতে পারে
//     {
//       id: 7,
//       title: "General Health Checkup",
//       participants: 50,
//       location: "Local Community Center",
//       date: "01/05/2026",
//       price: 50,
//       instructor: "Local Medical Practitioners",
//       image: "https://via.placeholder.com/400x200?text=Health+Checkup"
//     },
// ];
// // --- JSON (Mock Data) শেষ ---

// const AvailableCamps = () => {
//   // পেজিনেশন স্টেট ম্যানেজমেন্ট
//   const [currentPage, setCurrentPage] = useState(1);
//   const campsPerPage = 6; // আপনার ইমেজের মতো প্রতি পেজে ৬টি কার্ড

//   // মোট পেজের সংখ্যা গণনা
//   const totalPages = Math.ceil(mockCamps.length / campsPerPage);

//   // বর্তমান পেজের জন্য ক্যাম্প ডেটা নির্বাচন
//   const indexOfLastCamp = currentPage * campsPerPage;
//   const indexOfFirstCamp = indexOfLastCamp - campsPerPage;
//   const currentCamps = mockCamps.slice(indexOfFirstCamp, indexOfLastCamp);

//   // পেজ পরিবর্তনের ফাংশন
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="min-h-screen px-4 py-12 md:px-8 lg:px-16 bg-gray-50">
      
//       {/* ক্যাম্প কার্ডের গ্রিড লেআউট */}
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
//         {currentCamps.map(camp => (
//           // কার্ডের ডিজাইন সরাসরি এখানে দেওয়া হলো
//           <div key={camp.id} className="overflow-hidden transition duration-300 bg-white border border-gray-100 rounded-lg shadow-md hover:shadow-xl">
            
//             {/* ছবির অংশ */}
//             <div className="relative">
//               <img
//                 src={camp.image} 
//                 alt={camp.title}
//                 className="object-cover w-full h-48"
//               />
//               {/* Participants ব্যাজ (আপনার ইমেজের মতো কালো-সবুজ ব্যাকগ্রাউন্ড) */}
//               <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-green-700 rounded-full top-3 left-3 bg-opacity-85">
//                 👥 {camp.participants} Participants
//               </span>
//             </div>

//             {/* বিস্তারিত অংশ */}
//             <div className="p-4">
//               <h3 className="mb-3 text-lg font-bold text-gray-800 line-clamp-2">
//                 {camp.title}
//               </h3>
              
//               {/* তথ্য সারি */}
//               <div className="space-y-2 text-sm text-gray-600">
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">📍</span>
//                   <span>{camp.location}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">📅</span>
//                   <span>{camp.date}</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">$</span> {/* ইমেজের মতো $ আইকন */}
//                   <span>
//                     {camp.price === 0 ? '0' : camp.price}
//                   </span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="mr-2 text-green-600">🧑‍⚕️</span>
//                   <span>{camp.instructor}</span>
//                 </div>
//               </div>

//               {/* View Details বাটন (ইমেজের মতো সবুজ ফ্ল্যাট বাটন) */}
//               <button className="w-full py-2 mt-4 text-white transition duration-150 bg-green-700 rounded-md hover:bg-green-800">
//                 View Details
//               </button>
//             </div>
//           </div>
//           // কার্ডের ডিজাইন শেষ
//         ))}
//       </div>

//       {/* --- পেজিনেশন কন্ট্রোল --- */}
//       <div className="flex items-center justify-center mt-12 space-x-2 text-sm">
        
//         {/* Previous বাটন */}
//         <button
//           onClick={() => paginate(currentPage - 1)}
//           disabled={currentPage === 1}
//           className="px-3 py-1 text-gray-700 transition border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
//         >
//           Previous
//         </button>

//         {/* পেজ নম্বর ডিসপ্লে (আপনার ইমেজের মতো মাঝের সেকশন) */}
//         <div className="px-4 py-1 font-medium text-gray-800 border-t border-b border-gray-300">
//           Page <span className="font-bold text-green-700">{currentPage}</span> of {totalPages}
//         </div>

//         {/* Next বাটন */}
//         <button
//           onClick={() => paginate(currentPage + 1)}
//           disabled={currentPage === totalPages}
//           className="px-3 py-1 text-gray-700 transition border border-gray-300 rounded-md disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };

// export default AvailableCamps;

import React, { useState } from 'react';

// For icons (replacing FaChevronDown)
const ChevronDown = ({ rotate }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`h-4 w-4 transition-transform duration-300 ${rotate ? 'rotate-180' : ''}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

// --- JSON (Mock Data) শুরু: সমস্ত মূল্য 0 করে দেওয়া হয়েছে ---
// const mockCamps = [
//     {
//       id: 1,
//       title: "Basic Life Support Training",
//       participants: 27,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 0,
//       instructor: "Mr. Rashedul Islam",
//       description: "Comprehensive training focusing on immediate life-saving procedures, including CPR and basic first aid. Essential for all community members.",
//       image: "https://placehold.co/800x400/10b981/ffffff?text=BLS+Training"
//     },
//     {
//       id: 2,
//       title: "Advanced Trauma Care Workshop",
//       participants: 26,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 0,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       description: "An intensive workshop covering the latest techniques in managing severe trauma injuries before professional medical help arrives.",
//       image: "https://placehold.co/800x400/059669/ffffff?text=Trauma+Workshop"
//     },
//     {
//       id: 3,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       description: "Join us for a massive blood donation drive to support local hospitals and save lives. Quick, safe, and essential for the community.",
//       image: "https://placehold.co/800x400/dc2626/ffffff?text=Blood+Donation+Drive"
//     },
//     {
//       id: 4,
//       title: "Community Eye Checkup Camp",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Dr. Farzana Akter",
//       description: "Free comprehensive eye checkups, including vision testing and screening for common eye diseases like cataracts and glaucoma.",
//       image: "https://placehold.co/800x400/4f46e5/ffffff?text=Eye+Checkup+Camp"
//     },
//     {
//       id: 5,
//       title: "Mental Health Awareness Session",
//       participants: 1,
//       location: "Aliqa Accusamus Hall, Ashulia, Dhaka",
//       date: "3/17/2026",
//       price: 0,
//       instructor: "Dr. Gannon Greene (Psychologist)",
//       description: "An open session focusing on stress management, coping mechanisms, and de-stigmatizing mental health issues in our society.",
//       image: "https://placehold.co/800x400/f59e0b/ffffff?text=Mental+Health+Session"
//     },
//     {
//       id: 6,
//       title: "Cardiology Screening Camp",
//       participants: 285,
//       location: "National Heart Foundation Hospital, Mirpur",
//       date: "12/20/2025",
//       price: 0,
//       instructor: "Dr. Aminul Islam",
//       description: "Free cardiovascular health screening, including blood pressure, cholesterol checks, and ECG (where available). Early detection saves lives.",
//       image: "https://placehold.co/800x400/ef4444/ffffff?text=Cardiology+Screening"
//     },
//     {
//       id: 7,
//       title: "Pediatric Vaccination Drive",
//       participants: 50,
//       location: "Local Community Center",
//       date: "01/05/2026",
//       price: 0,
//       instructor: "Local Medical Practitioners",
//       description: "A free drive offering essential vaccinations for children under 5 years old. Ensuring a healthy future for the next generation.",
//       image: "https://data.unicef.org/wp-content/uploads/2020/04/UNI316684-scaled-e1657833158484.jpg"
//     },
//     {
//       id: 1,
//       title: "Basic Life Support Training",
//       participants: 27,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 0,
//       instructor: "Mr. Rashedul Islam",
//       description: "Comprehensive training focusing on immediate life-saving procedures, including CPR and basic first aid. Essential for all community members.",
//       image: "https://placehold.co/800x400/10b981/ffffff?text=BLS+Training"
//     },
//     {
//       id: 2,
//       title: "Advanced Trauma Care Workshop",
//       participants: 26,
//       location: "Training Center, Banani, Dhaka",
//       date: "12/12/2025",
//       price: 0,
//       instructor: "Mr. Rashedul Islam (Certified Trainer)",
//       description: "An intensive workshop covering the latest techniques in managing severe trauma injuries before professional medical help arrives.",
//       image: "https://placehold.co/800x400/059669/ffffff?text=Trauma+Workshop"
//     },
//     {
//       id: 3,
//       title: "Blood Donation Drive - University Campus",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Medical Team On-site",
//       description: "Join us for a massive blood donation drive to support local hospitals and save lives. Quick, safe, and essential for the community.",
//       image: "https://placehold.co/800x400/dc2626/ffffff?text=Blood+Donation+Drive"
//     },
//     {
//       id: 4,
//       title: "Community Eye Checkup Camp",
//       participants: 300,
//       location: "Dhaka University, TSC Premises",
//       date: "11/28/2025",
//       price: 0,
//       instructor: "Dr. Farzana Akter",
//       description: "Free comprehensive eye checkups, including vision testing and screening for common eye diseases like cataracts and glaucoma.",
//       image: "https://placehold.co/800x400/4f46e5/ffffff?text=Eye+Checkup+Camp"
//     },
//     {
//       id: 5,
//       title: "Mental Health Awareness Session",
//       participants: 1,
//       location: "Aliqa Accusamus Hall, Ashulia, Dhaka",
//       date: "3/17/2026",
//       price: 0,
//       instructor: "Dr. Gannon Greene (Psychologist)",
//       description: "An open session focusing on stress management, coping mechanisms, and de-stigmatizing mental health issues in our society.",
//       image: "https://placehold.co/800x400/f59e0b/ffffff?text=Mental+Health+Session"
//     },
//     {
//       id: 6,
//       title: "Cardiology Screening Camp",
//       participants: 285,
//       location: "National Heart Foundation Hospital, Mirpur",
//       date: "12/20/2025",
//       price: 0,
//       instructor: "Dr. Aminul Islam",
//       description: "Free cardiovascular health screening, including blood pressure, cholesterol checks, and ECG (where available). Early detection saves lives.",
//       image: "https://placehold.co/800x400/ef4444/ffffff?text=Cardiology+Screening"
//     },
//     {
//       id: 7,
//       title: "Pediatric Vaccination Drive",
//       participants: 50,
//       location: "Local Community Center",
//       date: "01/05/2026",
//       price: 0,
//       instructor: "Local Medical Practitioners",
//       description: "A free drive offering essential vaccinations for children under 5 years old. Ensuring a healthy future for the next generation.",
//       image: "https://data.unicef.org/wp-content/uploads/2020/04/UNI316684-scaled-e1657833158484.jpg"
//     },
// ];

const mockCamps = [
  {
    id: 1,
    icon: "FaStethoscope",
    title: "Free Health Check-ups",
    participants: 50,
    location: "Community Center, Dhaka",
    date: "01/15/2026",
    price: 0,
    instructor: "Dr. Anwar Hossain",
    description: "Comprehensive general health assessments to monitor and maintain your well-being.",
    image: "https://cdn.stocksnap.io/img-thumbs/960w/doctor-patient_7NQJS4WWQW.jpg"
  },
  {
    id: 2,
    icon: "FaTooth",
    title: "Dental Care",
    participants: 80,
    location: "Dental Clinic, Banani",
    date: "02/10/2026",
    price: 0,
    instructor: "Dr. Shamsul Alam",
    description: "Basic dental screenings, cleanings, and consultations for oral health.",
    image: "https://www.hwfindia.org/wp-content/uploads/2023/01/10-1024x683.jpg"
  },
  {
    id: 3,
    icon: "FaRegEye",
    title: "Eye Examinations",
    participants: 70,
    location: "Optometry Center, Gulshan",
    date: "03/20/2026",
    price: 0,
    instructor: "Dr. Anwar Hossain (Optometrist)",
    description: "Vision tests and screenings for common eye conditions by certified optometrists.",
    image: "https://goodvisionindia.com/wp-content/uploads/2024/04/ser-a.jpg"
  },
  {
    id: 4,
    icon: "HiOutlineShieldCheck",
    title: "Vaccinations",
    participants: 150,
    location: "Vaccination Center, Dhanmondi",
    date: "04/05/2026",
    price: 0,
    instructor: "Health Department Officials",
    description: "Providing essential immunizations to protect against preventable diseases.",
    image: "https://static01.nyt.com/images/2021/01/15/us/politics/15dc-biden-vaccine-1/merlin_182343183_64e594e7-c484-4783-99be-7d89b65c1eac-superJumbo.jpg?quality=90&auto=webp"
  },
  {
    id: 5,
    icon: "FaHandHoldingHeart",
    title: "Blood Donation Drive",
    participants: 200,
    location: "Blood Bank, Mirpur",
    date: "05/15/2026",
    price: 0,
    instructor: "Local Medical Staff",
    description: "Organized drives for voluntary blood donation to support local hospitals and save lives.",
    image: "https://images.unsplash.com/photo-1615461066159-fea0960485d5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1316"
  },
  {
    id: 6,
    icon: "IoIosNutrition",
    title: "Nutritional Counseling",
    participants: 60,
    location: "Nutrition Center, Mohakhali",
    date: "06/01/2026",
    price: 0,
    instructor: "Coach Amina Shams",
    description: "Guidance from dietitians on healthy eating habits and managing dietary needs.",
    image: "https://tse1.mm.bing.net/th/id/OIP.mdJ_i2Ia2z00S8tKDAwulAHaDF?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 7,
    title: "General Health Check-up",
    participants: 50,
    location: "Local Community Center",
    date: "01/10/2026",
    price: 0,
    instructor: "Dr. Anwar Hossain",
    description: "A comprehensive check-up for individuals of all ages to monitor overall health, including basic diagnostics.",
    image: "https://th.bing.com/th/id/R.da8502a94f0682ea87f1534b133ada3f?rik=JgRHYkAADxrvEg&pid=ImgRaw&r=0"
  },
  {
    id: 8,
    title: "Blood Pressure Screening",
    participants: 120,
    location: "Healthcare Center, Dhaka",
    date: "02/15/2026",
    price: 0,
    instructor: "Dr. Shamsul Alam",
    description: "Free screening for blood pressure to detect and manage hypertension.",
    image: "https://tse4.mm.bing.net/th/id/OIP.DmhIZz2tnpuKr3GfrY8psQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 9,
    title: "Diabetes Testing",
    participants: 75,
    location: "Diabetes Care Clinic, Gulshan",
    date: "03/20/2026",
    price: 0,
    instructor: "Dr. Laila Zaman",
    description: "Screening and tests for early detection of diabetes, including blood glucose testing.",
    image: "https://th.bing.com/th/id/R.9bba6c179a335c732dfe7b4c7682a610?rik=%2ff5Afb1PZ6zU1w&pid=ImgRaw&r=0"
  },
  {
    id: 10,
    title: "Vision Check-up",
    participants: 80,
    location: "Eye Care Clinic, Dhanmondi",
    date: "04/25/2026",
    price: 0,
    instructor: "Dr. Anwar Hossain (Optometrist)",
    description: "Free vision screening and consultation on eye health.",
    image: "https://tse4.mm.bing.net/th/id/OIP.OPE2On9XEmQrnVE929AdwAHaDg?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
  {
    id: 11,
    title: "Child Health Check",
    participants: 100,
    location: "Pediatric Care Center, Mirpur",
    date: "05/30/2026",
    price: 0,
    instructor: "Dr. Kamal Ahmed",
    description: "A health check-up for children to monitor growth, nutrition, and prevent common childhood diseases.",
    image: "https://images.bhaskarassets.com/web2images/960/2023/06/14/54_1686728941.jpeg"
  },
  {
    id: 12,
    title: "Women’s Health Guidance",
    participants: 60,
    location: "Women’s Health Center, Banani",
    date: "06/10/2026",
    price: 0,
    instructor: "Dr. Nila Begum",
    description: "Educational sessions and consultations on women’s health, including reproductive health, breast cancer awareness, and menopause.",
    image: "https://www.shutterstock.com/image-photo/indian-woman-doctor-counseling-rural-260nw-2434355091.jpg"
  },
  {
    id: 13,
    title: "Men’s Health Guidance",
    participants: 50,
    location: "Men’s Health Center, Uttara",
    date: "07/25/2026",
    price: 0,
    instructor: "Dr. Rashedul Islam",
    description: "Guidance and screenings for men’s health issues such as prostate health, cardiovascular health, and more.",
    image: "https://i.ibb.co.com/qL6ZD0ZY/steptodown-com291084.jpg"
  },
  {
    id: 14,
    title: "Basic Life Support Training",
    participants: 90,
    location: "Mohakhali",
    date: "08/20/2026",
    price: 0,
    instructor: "Coach Amina Shams",
    description: "Personalized counseling on nutrition for weight management, improving eating habits, and maintaining health.",
    image: "https://i.ibb.co.com/4RQ9MSBG/steptodown-com923453.jpg"
  },
  {
    id: 15,
    title: "Mental Health Support",
    participants: 80,
    location: "Mental Health Center, Tejgaon",
    date: "09/10/2026",
    price: 0,
    instructor: "Dr. Gannon Greene",
    description: "Therapy and support groups focusing on mental health awareness, stress management, and coping strategies.",
    image: "https://openminds.org.au/wp-content/uploads/2022/12/mental-health-support.jpeg"
  },
  {
    id: 16,
    title: "Vaccination Guidance",
    participants: 200,
    location: "Vaccination Center, Banani",
    date: "10/10/2026",
    price: 0,
    instructor: "Health Dept. Officials",
    description: "Educational sessions on the importance of vaccinations and guidance on available immunizations.",
    image: "https://media.wtol.com/assets/AssociatedPress/images/f9638e89-ad4c-4788-aac9-4b7260a6ecd5/20251104T145009/f9638e89-ad4c-4788-aac9-4b7260a6ecd5_1920x1080.jpg"
  },
  {
    id: 17,
    title: "Dental Screening",
    participants: 150,
    location: "Dental Care Clinic, Uttara",
    date: "11/15/2026",
    price: 0,
    instructor: "Dr. Fahim Alam",
    description: "Free dental check-ups, including cleaning, cavity screening, and consultation on oral hygiene.",
    image: "https://westhillssmiles.com/wp-content/uploads/2022/09/dentists-performing-procedure.png"
  },
  {
    id: 18,
    title: "Health Education Workshops",
    participants: 130,
    location: "Community Health Center, Banani",
    date: "12/05/2026",
    price: 0,
    instructor: "Dr. Aminul Islam",
    description: "Workshops offering health education on topics like nutrition, mental wellness, disease prevention, and healthy living.",
    image: "https://tse3.mm.bing.net/th/id/OIP.bsoa2pC-ruZiRGX2yM9_fgHaEK?rs=1&pid=ImgDetMain&o=7&rm=3"
  }
];
// --- JSON (Mock Data) শেষ ---

const services = ["Basic Life Support Training", "Advanced Trauma Care Workshop", "Blood Donation Drive", "Community Eye Checkup", "Cardiology Screening"];

// // Booking Form Modal Component
// const BookingModal = ({ isOpen, onClose, campName }) => {
//     const [showDropdown, setShowDropdown] = useState(false);
//     const [selectedService, setSelectedService] = useState(campName || services[0]);
//     const [loading, setLoading] = useState(false);
//     const [submissionMessage, setSubmissionMessage] = useState(null);

//     const handleBookingSubmit = (e) => {
//         e.preventDefault();
//         setLoading(true);
//         setSubmissionMessage(null);

//         // --- Mock Submission: Replacing Web3/Gmail Submission ---
//         // In a real application, you would send data to a backend (e.g., EmailJS, Firebase, etc.) 
//         // For the "web3" requirement, you would integrate a wallet signature/transaction here.
        
//         setTimeout(() => {
//             setLoading(false);
//             setSubmissionMessage({
//                 success: true,
//                 text: `Success! Booking confirmed for ${selectedService}. You will receive a confirmation email shortly.`,
//             });

//             // Close modal after a delay
//             setTimeout(() => {
//                 onClose();
//                 setSubmissionMessage(null);
//             }, 3000);

//         }, 2000);
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
//             <div 
//                 className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-95 md:scale-100 max-h-[90vh] overflow-y-auto"
//                 onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
//             >
//                 <div className="flex justify-end">
//                     <button onClick={onClose} className="text-2xl font-semibold text-gray-500 hover:text-gray-900">&times;</button>
//                 </div>

//                 <div className="pb-16 mt-4">
//                     <h3 className="text-3xl font-semibold capitalize h3">
//                         Book <span className="font-normal text-green-700">Your Free Camp</span>
//                     </h3>
//                     <p className="mt-2 text-base text-gray-600">
//                         Fill out the form below to secure your spot for the **{campName || 'Selected Campaign'}**.
//                     </p>
//                 </div>

//                 {submissionMessage && (
//                     <div className={`p-4 mb-4 text-white rounded-lg ${submissionMessage.success ? 'bg-green-500' : 'bg-red-500'}`}>
//                         {submissionMessage.text}
//                     </div>
//                 )}

//                 <form onSubmit={handleBookingSubmit} className="space-y-4">
//                     <div className="flex gap-x-5">
//                         <input
//                             type="text"
//                             name="name"
//                             placeholder="Full Name"
//                             required
//                             className="w-1/2 px-4 py-2 bg-white border rounded shadow-sm ring-1 ring-gray-300 focus:ring-green-400"
//                         />
//                         <input
//                             type="email"
//                             name="email"
//                             placeholder="Email Address"
//                             required
//                             className="w-1/2 px-4 py-2 bg-white border rounded shadow-sm ring-1 ring-gray-300 focus:ring-green-400"
//                         />
//                     </div>

//                     {/* Service Dropdown */}
//                     <div className="relative mb-4">
//                         <div
//                             className="flex items-center justify-between w-full px-4 py-2 bg-white rounded shadow-sm cursor-pointer ring-1 ring-gray-300 hover:ring-green-400"
//                             onClick={() => setShowDropdown(!showDropdown)}
//                         >
//                             <span className="text-gray-700">
//                                 {selectedService || "Select a Service"}
//                             </span>
//                             <ChevronDown rotate={showDropdown} />
//                         </div>

//                         {showDropdown && (
//                             <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded shadow-md max-h-48">
//                                 {services.map((srv, idx) => (
//                                     <li
//                                         key={idx}
//                                         className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-50"
//                                         onClick={() => {
//                                             setSelectedService(srv);
//                                             setShowDropdown(false);
//                                         }}
//                                     >
//                                         {srv}
//                                     </li>
//                                 ))}
//                             </ul>
//                         )}
//                     </div>
//                     <input type="hidden" name="service" value={selectedService} />

//                     <textarea
//                         name="address"
//                         rows="4"
//                         placeholder="Write your address for next campaign" 
//                         required
//                         className="w-full px-4 py-2 bg-white rounded shadow-sm resize-none ring-1 ring-gray-300 focus:ring-green-400"
//                     ></textarea>

//                     <button
//                         type="submit"
//                         disabled={loading}
//                         className="w-full py-3 text-lg font-medium text-white transition rounded-lg shadow-md bg-gradient-to-r from-green-600 to-teal-700 hover:opacity-90 disabled:opacity-50"
//                     >
//                         {loading ? "Booking..." : "Confirm Booking"}
//                     </button>
//                 </form>
//             </div>
//         </div>
//     );
// };

// Booking Form Modal Component
const BookingModal = ({ isOpen, onClose, campName }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedService, setSelectedService] = useState(campName || services[0]);
    const [loading, setLoading] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState(null);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmissionMessage(null);

        // Integrating Web3Form submission with access key
        const formData = new FormData(e.target);
        formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        })
        .then((response) => response.json())
        .then((result) => {
            setLoading(false);
            if (result.success) {
                setSubmissionMessage({
                    success: true,
                    text: `Success! Booking confirmed for ${selectedService}. You will receive a confirmation email shortly.`,
                });

                // Close modal after a delay
                setTimeout(() => {
                    onClose();
                    setSubmissionMessage(null);
                }, 3000);
            } else {
                setSubmissionMessage({
                    success: false,
                    text: "❌ Submission failed. Please try again later.",
                });
            }
        });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div 
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-95 md:scale-100 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-2xl font-semibold text-gray-500 hover:text-gray-900">&times;</button>
                </div>

                <div className="pb-16 mt-4">
                    <h3 className="text-3xl font-semibold capitalize h3">
                        Book <span className="font-normal text-green-700">Your Free Camp</span>
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                        Fill out the form below to secure your spot for the **{campName || 'Selected Campaign'}**.
                    </p>
                </div>

                {submissionMessage && (
                    <div className={`p-4 mb-4 text-white rounded-lg ${submissionMessage.success ? 'bg-green-500' : 'bg-red-500'}`}>
                        {submissionMessage.text}
                    </div>
                )}

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="flex gap-x-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-1/2 px-4 py-2 bg-white border rounded shadow-sm ring-1 ring-gray-300 focus:ring-green-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="w-1/2 px-4 py-2 bg-white border rounded shadow-sm ring-1 ring-gray-300 focus:ring-green-400"
                        />
                    </div>

                    {/* Service Dropdown */}
                    {/* <div className="relative mb-4">
                        <div
                            className="flex items-center justify-between w-full px-4 py-2 bg-white rounded shadow-sm cursor-pointer ring-1 ring-gray-300 hover:ring-green-400"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span className="text-gray-700">
                                {selectedService || "Select a Service"}
                            </span> */}
                            {/* Chevron Down Icon */}
                        {/* </div>

                        {showDropdown && (
                            <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded shadow-md max-h-48">
                                {services.map((srv, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-50"
                                        onClick={() => {
                                            setSelectedService(srv);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {srv}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <input type="hidden" name="service" value={selectedService} /> */}

                    {/* Service Dropdown */}
<div className="relative mb-4">
  <div
    className="flex items-center justify-between w-full px-4 py-2 bg-white rounded shadow-sm cursor-pointer ring-1 ring-gray-300 hover:ring-green-400"
    onClick={() => setShowDropdown(!showDropdown)}
  >
    <span className="text-gray-700">
      {selectedService || "Select a Service"}
    </span>
    {/* Chevron Down Icon */}
  </div>

  {showDropdown && (
    <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded shadow-md max-h-48">
      {[
        "General Health Check-up",
        "Blood Pressure Screening",
        "Diabetes Testing",
        "Vision Check-up",
        "Child Health Check",
        "Women’s Health Guidance",
        "Men’s Health Guidance",
        "Nutrition Counseling",
        "Mental Health Support",
        "Vaccination Guidance",
        "Dental Screening",
        "Health Education Workshops",
        "Free Health Check-ups",
        "Dental Care",
        "Eye Examinations",
        "Vaccinations",
        "Blood Donation Drive",
        "Nutritional Counseling"
      ].map((srv, idx) => (
        <li
          key={idx}
          className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-50"
          onClick={() => {
            setSelectedService(srv);
            setShowDropdown(false);
          }}
        >
          {srv}
        </li>
      ))}
    </ul>
  )}
</div>
<input type="hidden" name="service" value={selectedService} />


                    <textarea
                        name="address"
                        rows="4"
                        placeholder="Write your address for next campaign" 
                        required
                        className="w-full px-4 py-2 bg-white rounded shadow-sm resize-none ring-1 ring-gray-300 focus:ring-green-400"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 text-lg font-medium text-white transition rounded-lg shadow-md bg-gradient-to-r from-green-600 to-teal-700 hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? "Booking..." : "Confirm Booking"}
                    </button>
                </form>
            </div>
        </div>
    );
};
// Details Modal Component
const DetailsModal = ({ isOpen, onClose, camp }) => {
    if (!isOpen || !camp) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div 
                className="bg-white rounded-xl shadow-2xl w-full max-w-3xl transform transition-all duration-300 scale-95 md:scale-100 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <img src={camp.image} alt={camp.title} className="object-cover w-full h-64 rounded-t-xl" />
                    <button onClick={onClose} className="absolute flex items-center justify-center w-8 h-8 text-xl font-bold text-white bg-black bg-opacity-50 rounded-full top-4 right-4 hover:bg-opacity-75">&times;</button>
                </div>
                
                <div className="p-6">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900">{camp.title}</h2>
                    <p className="mb-6 text-gray-600">{camp.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 text-gray-700">
                        <div className="flex items-center">
                            <span className="mr-2 text-green-600">📍</span>
                            <strong>Location:</strong> {camp.location}
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2 text-green-600">📅</span>
                            <strong>Date:</strong> {camp.date}
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2 text-green-600">👥</span>
                            <strong>Participants:</strong> {camp.participants}
                        </div>
                        <div className="flex items-center">
                            <span className="mr-2 text-green-600">🧑‍⚕️</span>
                            <strong>Instructor:</strong> {camp.instructor}
                        </div>
                        <div className="flex items-center col-span-2">
                            <span className="mr-2 text-green-600">💸</span>
                            <strong>Price:</strong> <span className="text-xl font-semibold text-green-700">Free Campaign</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const AvailableCamps = () => {
    // পেজিনেশন স্টেট ম্যানেজমেন্ট
    const [currentPage, setCurrentPage] = useState(1);
    const campsPerPage = 6;
    
    // মোডাল স্টেট ম্যানেজমেন্ট
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedCamp, setSelectedCamp] = useState(null);

    // মোট পেজের সংখ্যা গণনা
    const totalPages = Math.ceil(mockCamps.length / campsPerPage);

    // বর্তমান পেজের জন্য ক্যাম্প ডেটা নির্বাচন
    const indexOfLastCamp = currentPage * campsPerPage;
    const indexOfFirstCamp = indexOfLastCamp - campsPerPage;
    const currentCamps = mockCamps.slice(indexOfFirstCamp, indexOfLastCamp);

    // পেজ পরিবর্তনের ফাংশন
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    
    // মোডাল হ্যান্ডলার
    const handleViewDetails = (camp) => {
        setSelectedCamp(camp);
        setIsDetailsModalOpen(true);
    };

    const handleBookNow = (camp) => {
        setSelectedCamp(camp);
        setIsBookingModalOpen(true);
    };


    return (
        <div className="min-h-screen px-4 py-12 md:px-8 lg:px-16">
            
            {/* --- ক্যাম্প কার্ডের গ্রিড লেআউট --- */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {currentCamps.map(camp => (
                    <div key={camp.id} className="overflow-hidden transition duration-500 bg-white border border-gray-200 shadow-lg rounded-xl hover:shadow-2xl">
                        
                        {/* ছবির অংশ */}
                        <div className="relative">
                            <img
                                src={camp.image} 
                                alt={camp.title}
                                className="object-cover w-full h-52"
                            />
                            {/* Participants ব্যাজ */}
                            <span className="absolute px-3 py-1 text-xs font-semibold text-white bg-green-700 rounded-full shadow-md top-3 left-3 bg-opacity-85">
                                👥 {camp.participants} Participants
                            </span>
                        </div>

                        {/* বিস্তারিত অংশ */}
                        <div className="p-5">
                            <h3 className="mb-3 text-xl font-extrabold text-gray-900 line-clamp-2">
                                {camp.title}
                            </h3>
                            
                            {/* তথ্য সারি */}
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex items-center">
                                    <span className="mr-2 text-green-600">📍</span>
                                    <span>{camp.location}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-green-600">📅</span>
                                    <span>{camp.date}</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-green-600">💸</span>
                                    <span className="font-bold text-green-700">Free Campaign</span>
                                </div>
                                <div className="flex items-center">
                                    <span className="mr-2 text-green-600">🧑‍⚕️</span>
                                    <span>{camp.instructor}</span>
                                </div>
                            </div>

                            {/* View Details & Book Now বাটন */}
                            <div className="flex gap-3 mt-5">
                                <button 
                                    onClick={() => handleViewDetails(camp)}
                                    className="flex-1 py-3 font-medium text-white transition duration-150 bg-teal-600 rounded-lg shadow-md hover:bg-teal-700 hover:shadow-lg"
                                >
                                    View Details
                                </button>
                                <button 
                                    onClick={() => handleBookNow(camp)}
                                    className="flex-1 py-3 font-medium text-white transition duration-150 bg-green-700 rounded-lg shadow-md hover:bg-green-800 hover:shadow-lg"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* --- পেজিনেশন কন্ট্রোল (সুন্দর ডিজাইন) --- */}
            <div className="flex items-center justify-center mt-12 space-x-1 text-base">
                
                {/* Previous বাটন */}
                <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 font-medium text-gray-700 transition duration-300 border border-gray-300 rounded-l-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                    &lt; Previous
                </button>

                {/* পেজ নম্বর ডিসপ্লে */}
                <div className="px-4 py-2 font-bold text-gray-800 bg-white border-gray-300 border-y">
                    Page <span className="text-green-700">{currentPage}</span> of {totalPages}
                </div>

                {/* Next বাটন */}
                <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 font-medium text-gray-700 transition duration-300 border border-gray-300 rounded-r-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100"
                >
                    Next &gt;
                </button>
            </div>
            
            {/* Details Modal Insertion */}
            <DetailsModal 
                isOpen={isDetailsModalOpen} 
                onClose={() => setIsDetailsModalOpen(false)} 
                camp={selectedCamp} 
            />

            {/* Booking Modal Insertion */}
            <BookingModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                campName={selectedCamp ? selectedCamp.title : ''}
            />
        </div>
    );
};

export default AvailableCamps;