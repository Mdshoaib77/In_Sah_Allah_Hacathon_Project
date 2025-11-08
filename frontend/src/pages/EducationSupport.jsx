// // src/pages/EducationSupport.jsx

// // import React from 'react';

// // const EducationSupport = () => {
// //   return (
// //     <div className="p-6">
// //       <h1 className="text-3xl font-bold">Free Education Support</h1>
// //       <p className="mt-4">Find details on how we support education for those in need.</p>
// //     </div>
// //   );
// // };

// // export default EducationSupport;


// import React from 'react';

// const EducationSupport = () => {
//   return (
//     <div className="min-h-screen p-6 font-sans bg-white">
//       <h1 className="mb-2 text-4xl font-extrabold text-center text-red-700">নিখরচায় শিক্ষা সহায়তা প্রোগ্রাম</h1>
//       <p className="mt-4 text-lg text-center text-gray-600">
//           আপনার শিক্ষাজীবনের লক্ষ্য পূরণে আমাদের পাশে থাকুন, আমরা আপনার জন্য আছি।
//       </p>

//       {/* 1. লক্ষ্য ও পরিচিতি */}
//       <section id="mission" className="py-10 bg-white border-b">
//           <h2 className="mb-6 text-3xl font-extrabold text-center text-red-600">আমাদের লক্ষ্য: বিনামূল্যে শিক্ষার আলো ছড়ানো</h2>
//           <p className="max-w-4xl px-4 mx-auto text-center text-gray-700">
//               আমরা বিশ্বাস করি শিক্ষা প্রতিটি শিশুর মৌলিক অধিকার। আর্থিক সীমাবদ্ধতার কারণে যাতে কোনো শিক্ষার্থীর স্বপ্ন থেমে না যায়, সেই লক্ষ্যেই আমাদের এই **সম্পূর্ণ বিনামূল্যে শিক্ষামূলক সহায়তা প্রোগ্রাম**। দেশের যেকোনো প্রান্ত থেকে আপনি এই সুবিধা গ্রহণ করতে পারবেন।
//           </p>
//       </section>
      
//       {/* --- */}

//       {/* 2. মূল শিক্ষামূলক সহায়তা */}
//       <section id="resources" className="px-4 py-12 border-b bg-gray-50">
//           <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-800">গুরুত্বপূর্ণ শিক্ষামূলক সম্পদসমূহ</h2>
//           <div className="grid max-w-6xl gap-8 mx-auto md:grid-cols-3">
//               {/* Card 1: Online Classrooms */}
//               <div className="p-6 transition duration-300 bg-white border-t-4 border-red-500 rounded-lg shadow-xl hover:shadow-2xl">
//                   <h3 className="mb-3 text-xl font-bold text-red-600">💻 ভার্চুয়াল ক্লাসরুম ও লাইভ সেশন</h3>
//                   <p className="text-gray-600">নির্দিষ্ট রুটিন মেনে অভিজ্ঞ শিক্ষকদের দ্বারা পরিচালিত লাইভ অনলাইন ক্লাসে যোগ দিন। ক্লাস মিস হলেও রেকর্ডেড ভিডিও দেখার সুযোগ রয়েছে।</p>
//               </div>

//               {/* Card 2: Study Materials */}
//               <div className="p-6 transition duration-300 bg-white border-t-4 border-red-500 rounded-lg shadow-xl hover:shadow-2xl">
//                   <h3 className="mb-3 text-xl font-bold text-red-600">📚 ফ্রি ই-বুক ও স্টাডি ম্যাটেরিয়াল</h3>
//                   <p className="text-gray-600">সকল শ্রেণীর গুরুত্বপূর্ণ নোটস, গাইডলাইন এবং প্র্যাকটিস পেপার (PDF format) সম্পূর্ণ বিনামূল্যে ডাউনলোড করুন।</p>
//               </div>

//               {/* Card 3: Personalized Doubt Clearing */}
//               <div className="p-6 transition duration-300 bg-white border-t-4 border-red-500 rounded-lg shadow-xl hover:shadow-2xl">
//                   <h3 className="mb-3 text-xl font-bold text-red-600">❓ প্রশ্ন-উত্তর সমাধান ও মেন্টরশিপ</h3>
//                   <p className="text-gray-600">আপনার যেকোনো বিষয়ে সন্দেহ বা প্রশ্ন থাকলে আমাদের মেন্টরদের কাছ থেকে দ্রুত সমাধান নিন এবং ব্যক্তিগত গাইডলাইন পান।</p>
//               </div>
//           </div>
//       </section>

//       {/* --- */}

//       {/* 3. শিক্ষা সামগ্রী বিতরণ */}
//       <section id="material-support" className="max-w-6xl px-4 py-12 mx-auto bg-white border-b">
//           <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-800">শিক্ষণ সামগ্রী ও আর্থিক সহায়তা</h2>
//           <div className="space-y-6">
//               <div className="flex items-start p-5 border border-red-200 shadow-sm bg-red-50 rounded-xl">
//                   <span className="mr-4 text-3xl text-red-600">✏️</span>
//                   <div>
//                       <h4 className="text-xl font-bold text-red-700">ফ্রি শিক্ষা উপকরণ বিতরণ</h4>
//                       <p className="mt-1 text-gray-700">যোগ্য ও প্রয়োজনীয় শিক্ষার্থীদের জন্য প্রতি বছর খাতা, কলম, স্কুল ব্যাগ এবং জ্যামিতি বক্সের মতো প্রয়োজনীয় সামগ্রী বিনামূল্যে বিতরণ করা হয়।</p>
//                   </div>
//               </div>
//               <div className="flex items-start p-5 border border-red-200 shadow-sm bg-red-50 rounded-xl">
//                   <span className="mr-4 text-3xl text-red-600">💰</span>
//                   <div>
//                       <h4 className="text-xl font-bold text-red-700">ছোট স্কলারশিপ/বৃত্তি (Stipend)</h4>
//                       <p className="mt-1 text-gray-700">নির্দিষ্ট পরীক্ষার মাধ্যমে নির্বাচিত মেধাবী এবং আর্থিকভাবে দুর্বল শিক্ষার্থীদের জন্য মাসিক/বাৎসরিক ছোট বৃত্তির ব্যবস্থা, যা তাদের অন্যান্য খরচ মেটাতে সাহায্য করবে।</p>
//                   </div>
//               </div>
//           </div>
//       </section>

//       {/* --- */}

//       {/* 4. ভর্তির প্রক্রিয়া */}
//       <section id="how-to-join" className="px-4 py-12 bg-gray-50">
//           <h2 className="mb-8 text-3xl font-extrabold text-center text-gray-800">সহায়তা পাওয়ার সহজ ৩টি ধাপ</h2>
//           <div className="flex justify-center max-w-4xl mx-auto">
//               <ol className="relative space-y-12 border-l-4 border-red-600">
//                   <li className="ml-8">
//                       <span className="absolute flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-md -left-4 ring-8 ring-gray-50">1</span>
//                       <h3 className="text-xl font-semibold text-gray-900">অনলাইন ফর্ম পূরণ</h3>
//                       <p className="mt-2 mb-4 text-gray-600">আমাদের **আবেদন ফর্মে** আপনার এবং আপনার সন্তানের সমস্ত তথ্য, বিশেষ করে অর্থনৈতিক অবস্থা সম্পর্কিত তথ্য সঠিকভাবে পূরণ করুন।</p>
//                   </li>
//                   <li className="ml-8">
//                       <span className="absolute flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-md -left-4 ring-8 ring-gray-50">2</span>
//                       <h3 className="text-xl font-semibold text-gray-900">যোগাযোগ ও যাচাইকরণ</h3>
//                       <p className="mt-2 text-gray-600">আমাদের দল আপনার দেওয়া তথ্য যাচাই করার জন্য আপনার সাথে ফোনে অথবা ইমেইলে যোগাযোগ করবে। এটি আমাদের জন্য অত্যন্ত গুরুত্বপূর্ণ একটি ধাপ।</p>
//                   </li>
//                   <li className="ml-8">
//                       <span className="absolute flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-md -left-4 ring-8 ring-gray-50">3</span>
//                       <h3 className="text-xl font-semibold text-gray-900">সহায়তা শুরু</h3>
//                       <p className="mt-2 text-gray-600">যাচাইকরণের পর, আপনি ক্লাস এবং ম্যাটেরিয়াল অ্যাক্সেস করার জন্য প্রয়োজনীয় নির্দেশাবলী পেয়ে যাবেন এবং আমাদের শিক্ষা কার্যক্রম শুরু করতে পারবেন।</p>
//                   </li>
//               </ol>
//           </div>
//           <div className="mt-12 text-center">
//               <button className="px-10 py-4 text-lg font-extrabold text-white transition duration-300 transform bg-red-600 shadow-2xl rounded-xl hover:bg-red-700 hover:scale-105">
//                   আবেদন ফর্মে যেতে ক্লিক করুন
//               </button>
//           </div>
//       </section>

//     </div>
//   );
// };

// export default EducationSupport;

// import React from 'react';
// import aboutImg from "../assets/img/susan-q-yin-2JIvboGLeho-unsplash.jpg";

// const EducationSupport = () => {
//   return (
//     <div className="min-h-screen font-sans bg-gray-50">

//       {/* 1. Header & Hero Section */}
//       {/* <header id="hero" className="py-20 text-center text-white bg-red-700 shadow-2xl"> */}
//       <header
//   id="hero"
//   className="py-20 text-center text-white shadow-2xl"
//   style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
// >
//         <div className="max-w-4xl px-4 mx-auto">
//           <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
//             Empowering Futures with Free Education
//           </h1>
//           <p className="mb-8 text-xl sm:text-2xl text-red-100/90">
//             Breaking down financial barriers to learning. Your journey to knowledge starts here, completely free.
//           </p>
//           <a
//             href="#enrollment"
//             className="inline-block px-10 py-4 text-lg font-bold text-red-700 transition duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105"
//           >
//             Start Your Free Application
//           </a>
//         </div>
//       </header>
      
//       {/* --- */}

//       {/* 2. About Us Section */}
//       <section id="about-us" className="py-16 bg-white border-b-4 border-red-50">
//         <div className="max-w-6xl px-4 mx-auto text-center">
//           <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
//             About Our Mission
//           </h2>
//           <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-600">
//             We believe that quality education is a **fundamental right**, not a privilege. Our non-profit initiative is dedicated to providing comprehensive academic support and essential resources to students from low-income backgrounds, ensuring no talent goes untapped due to economic constraints.
//           </p>
//           <div className="grid gap-8 mt-10 md:grid-cols-3">
//             <div className="p-6">
//               <span className="block mb-3 text-5xl text-red-600">💡</span>
//               <h3 className="mb-2 text-xl font-bold text-gray-800">Our Vision</h3>
//               <p className="text-sm text-gray-500">A world where every student has equal access to quality learning resources.</p>
//             </div>
//             <div className="p-6">
//               <span className="block mb-3 text-5xl text-red-600">🤝</span>
//               <h3 className="mb-2 text-xl font-bold text-gray-800">Community Driven</h3>
//               <p className="text-sm text-gray-500">Supported by volunteers, educators, and generous donors worldwide.</p>
//             </div>
//             <div className="p-6">
//               <span className="block mb-3 text-5xl text-red-600">🌍</span>
//               <h3 className="mb-2 text-xl font-bold text-gray-800">Global Impact</h3>
//               <p className="text-sm text-gray-500">Providing assistance both locally and digitally to reach students everywhere.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- */}

//       {/* 3. Our Services Section */}
//       <section id="services" className="px-4 py-16 bg-gray-100">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900">
//             What We Offer
//           </h2>
//           <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            
//             {/* Service Card 1: Live Classes */}
//             <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                 <span className="block mb-3 text-3xl text-red-600">🧑‍🏫</span>
//                 <h3 className="mb-2 text-xl font-bold text-gray-800">Virtual Classes</h3>
//                 <p className="text-sm text-gray-600">Live online tutoring and recorded sessions covering key subjects for various grade levels.</p>
//             </div>

//             {/* Service Card 2: Materials */}
//             <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                 <span className="block mb-3 text-3xl text-red-600">📚</span>
//                 <h3 className="mb-2 text-xl font-bold text-gray-800">Free Study Packs</h3>
//                 <p className="text-sm text-gray-600">Downloadable e-books, practice sheets, and comprehensive notes in PDF format.</p>
//             </div>

//             {/* Service Card 3: Mentorship */}
//             <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                 <span className="block mb-3 text-3xl text-red-600">❓</span>
//                 <h3 className="mb-2 text-xl font-bold text-gray-800">Doubt Clearing & Mentors</h3>
//                 <p className="text-sm text-gray-600">One-on-one sessions and dedicated forums to get quick answers and career guidance.</p>
//             </div>

//             {/* Service Card 4: Supplies */}
//             <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                 <span className="block mb-3 text-3xl text-red-600">✏️</span>
//                 <h3 className="mb-2 text-xl font-bold text-gray-800">School Supplies/Stipend</h3>
//                 <p className="text-sm text-gray-600">Providing essential stationery, books, or a small stipend for verified eligible students.</p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- */}

//       {/* 4. Enrollment Process Section */}
//       <section id="enrollment" className="px-4 py-16 bg-white">
//         <div className="max-w-4xl mx-auto">
//           <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900">
//             Your Simple 3-Step Enrollment
//           </h2>
          
//           <div className="relative">
//             <div className="absolute top-0 h-full border-l-4 border-red-600 left-4 md:left-1/2 md:-translate-x-1/2"></div>
            
//             {/* Step 1 */}
//             <div className="flex justify-start mb-8 md:justify-center">
//               <div className="relative w-full md:w-1/2 md:pr-12">
//                 <div className="absolute flex items-center -left-4 md:-left-8 md:top-2">
//                   <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">1</span>
//                 </div>
//                 <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-right">
//                   <h3 className="mb-2 text-xl font-bold text-red-700">Complete the Online Form</h3>
//                   <p className="text-gray-700">Fill in your basic information and academic needs through our secure online application form.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 2 */}
//             <div className="flex justify-end mb-8 md:justify-center">
//               <div className="relative w-full md:w-1/2 md:pl-12">
//                 <div className="absolute flex items-center -left-4 md:left-auto md:-right-8 md:top-2">
//                   <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">2</span>
//                 </div>
//                 <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-left">
//                   <h3 className="mb-2 text-xl font-bold text-red-700">Verification Call/Review</h3>
//                   <p className="text-gray-700">Our team will quickly review your application and contact you for a brief verification process.</p>
//                 </div>
//               </div>
//             </div>

//             {/* Step 3 */}
//             <div className="flex justify-start md:justify-center">
//               <div className="relative w-full md:w-1/2 md:pr-12">
//                 <div className="absolute flex items-center -left-4 md:-left-8 md:top-2">
//                   <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">3</span>
//                 </div>
//                 <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-right">
//                   <h3 className="mb-2 text-xl font-bold text-red-700">Gain Full Access</h3>
//                   <p className="text-gray-700">Once approved, you get immediate, free access to all our classes and resources.</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* --- */}

//       {/* 5. Call to Action / Footer CTA */}
//       <footer className="py-12 text-center bg-red-700">
//         <div className="max-w-4xl px-4 mx-auto">
//           <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
//             Ready to Transform Your Learning?
//           </h2>
//           <p className="mb-8 text-lg text-red-100">
//             Don't let anything hold you back. Enroll today—it's fast, easy, and completely free.
//           </p>
//           <a
//             href="#enrollment"
//             className="inline-block px-12 py-4 text-xl font-extrabold text-red-800 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105"
//           >
//             Apply Now
//           </a>
//         </div>
//       </footer>

//     </div>
//   );
// };

// export default EducationSupport;

// import React, { useState } from 'react';

// // Assuming you have an image in this path for the hero background
// // import aboutImg from "../assets/img/susan-q-yin-2JIvboGLeho-unsplash.jpg"; 
// import aboutImg from "../assets/img/edubg.jpg"; 
// import about from "../assets/img/susan-q-yin-2JIvboGLeho-unsplash.jpg"; 
// import EducationCampaigns from '../components/EducationCampaigns';

// // Web3Forms Access Key
// const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// // --- Application Modal Component ---
// const ApplicationModal = ({ isOpen, onClose }) => {
//     const [status, setStatus] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus("Submitting...");

//         const form = e.target;
//         const data = new FormData(form);

//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 body: data,
//             });

//             if (response.ok) {
//                 setStatus("Application Submitted Successfully! We will contact you soon.");
//                 form.reset();
//                 // Optionally close the modal after a short delay
//                 setTimeout(onClose, 3000); 
//             } else {
//                 const result = await response.json();
//                 setStatus(`Submission Failed: ${result.message}`);
//             }
//         } catch (error) {
//             setStatus("An error occurred during submission.");
//         }
//     };

//     if (!isOpen) return null;

//     return (
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
//             <div className="relative w-full max-w-xl p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
//                 <button 
//                     onClick={onClose} 
//                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
//                 >
//                     &times;
//                 </button>
                
//                 <h2 className="pb-2 mb-6 text-3xl font-bold text-red-700 border-b">Enrollment Application Form</h2>
//                 <p className="mb-6 text-gray-600">Please provide your details below to start your free education journey.</p>

//                 <form onSubmit={handleSubmit}>
//                     {/* Web3Forms required field */}
//                     <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
//                     <input type="hidden" name="subject" value="New Free Education Application" />
                    
//                     {/* Full Name */}
//                     <div className="mb-4">
//                         <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name (Student)</label>
//                         <input
//                             type="text"
//                             id="full-name"
//                             name="name"
//                             required
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         />
//                     </div>

//                     {/* Email */}
//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             required
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         />
//                     </div>
                    
//                     {/* Phone Number */}
//                     <div className="mb-4">
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Guardian)</label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             required
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         />
//                     </div>
                    
//                     {/* Current Grade/Class */}
//                     <div className="mb-6">
//                         <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Current Grade/Class</label>
//                         <select
//                             id="grade"
//                             name="grade"
//                             required
//                             className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         >
//                             <option value="">Select Class</option>
//                             <option value="5-8">Class 5 - 8</option>
//                             <option value="9-10">Class 9 - 10 (Secondary)</option>
//                             <option value="11-12">Class 11 - 12 (Higher Secondary)</option>
//                             <option value="Other">Other / Vocational</option>
//                         </select>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
//                         disabled={status === "Submitting..."}
//                     >
//                         {status === "Submitting..." ? "Submitting..." : "Submit Application"}
//                     </button>
                    
//                     {/* Status Message */}
//                     {status && status !== "Submitting..." && (
//                         <p className={`mt-4 text-center text-sm ${status.includes("Success") ? 'text-green-600' : 'text-red-600'}`}>
//                             {status}
//                         </p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };
// // --- End of Modal Component ---

// const EducationSupport = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = (e) => {
//         // Prevent default hash navigation for both anchor tags
//         if (e && e.preventDefault) {
//             e.preventDefault();
//         }
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     return (
//         <div className="min-h-screen font-sans bg-gray-50">

//             {/* Application Modal Integration */}
//             <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />

//             {/* 1. Header & Hero Section */}
//             <header
//                 id="hero"
//                 className="py-20 text-center text-white bg-red-700 shadow-2xl"
//                 // The style attribute below should be adjusted if using the local image path in production.
//                 style={{ backgroundImage: `url(${aboutImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }} 
//             >
//                 <div className="max-w-4xl px-4 mx-auto">
//                     <h1 className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl">
//                         Empowering Futures with Free Education
//                     </h1>
//                     <p className="mb-8 text-xl text-gray-300 sm:text-2xl">
//                         Breaking down financial barriers to learning. Your journey to knowledge starts here, completely free.
//                     </p>
//                     <button
//                         onClick={openModal}
//                         className="inline-block px-10 py-4 text-lg font-bold text-red-700 transition duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
//                     >
//                         Start Your Free Application
//                     </button>
//                 </div>
//             </header>
//             {/* <header
//     id="hero-gold"
//     // Background: Deep Navy Blue for high contrast with Gold, giving a luxurious feel.
//     className="py-24 text-center bg-gray-900 border-b-4 border-yellow-500 shadow-2xl" 
//     // The style attribute for background image (Replace 'yourGoldBackgroundImageURL' with your image)
//     style={{ 
//         backgroundImage: `url('https://static.vecteezy.com/system/resources/previews/050/104/685/non_2x/student-creative-desktop-earth-globe-with-graduation-hat-on-hardcover-book-and-multicolor-chalks-copy-space-for-text-back-to-school-education-concept-photo.JPG')`, 
//         backgroundSize: 'cover', 
//         backgroundPosition: 'center',
//         // Optional: Adding a dark overlay for better text readability
//         backgroundColor: 'rgba(0, 0, 0, 0.6)', 
//         backgroundBlendMode: 'multiply'
//     }}
// >
//     <div className="max-w-5xl px-6 mx-auto">
//         <h1 
//             // Heading: Gold color with a deep shadow for a stunning, chiseled look.
//             className="mb-4 text-6xl font-black tracking-tight text-yellow-400 sm:text-7xl drop-shadow-2xl"
//             style={{ 
//                 // Custom CSS for a deep gold text shadow (Optional)
//                 textShadow: '0 0 10px rgba(255, 215, 0, 0.8), 0 0 20px rgba(255, 165, 0, 0.6), 0 4px 6px rgba(0, 0, 0, 0.5)'
//             }}
//         >
//             Empowering Futures with Golden Knowledge
//         </h1>
        
//         <p className="mb-10 text-xl italic text-yellow-100 sm:text-2xl">
//             "Breaking down financial barriers to learning. Your journey to knowledge starts here, completely free."
//         </p>

//         <button
//             onClick={openModal} // Assuming 'openModal' function is defined
//             // Button: High-contrast Gold button with a shine effect
//             className="inline-block px-12 py-4 text-lg font-extrabold text-gray-900 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-500 focus:ring-opacity-70"
//         >
//             Claim Your Free Education Today
//         </button>
//     </div>
// </header> */}
            
//             {/* --- */}

//             {/* 2. About Us Section */}
//             <section id="about-us" className="py-16 bg-white border-b-4 border-red-50">
//                 <div className="max-w-6xl px-4 mx-auto text-center">
//                     <h2 className="mb-4 text-4xl font-extrabold text-gray-900">
//                         About Our Mission
//                     </h2>
//                     <p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700">
//                         We believe that quality education is a **fundamental right**, not a privilege. Our non-profit initiative is dedicated to providing comprehensive academic support and essential resources to students from low-income backgrounds, ensuring no talent goes untapped due to economic constraints.
//                     </p>
//                     <div className="grid gap-8 mt-10 md:grid-cols-3">
//                         <div className="p-6">
//                             <span className="block mb-3 text-5xl text-red-600">💡</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">Our Vision</h3>
//                             <p className="text-sm text-gray-500">A world where every student has equal access to quality learning resources.</p>
//                         </div>
//                         <div className="p-6">
//                             <span className="block mb-3 text-5xl text-red-600">🤝</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">Community Driven</h3>
//                             <p className="text-sm text-gray-500">Supported by volunteers, educators, and generous donors worldwide.</p>
//                         </div>
//                         <div className="p-6">
//                             <span className="block mb-3 text-5xl text-red-600">🌍</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">Global Impact</h3>
//                             <p className="text-sm text-gray-500">Providing assistance both locally and digitally to reach students everywhere.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* --- */}

//             {/* 3. Our Services Section */}
//             <section id="services" className="px-4 py-16 bg-gray-100">
//                 <div className="max-w-6xl mx-auto">
//                     <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900">
//                         What We Offer
//                     </h2>
//                     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        
//                         {/* Service Card 1: Live Classes */}
//                         <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                             <span className="block mb-3 text-3xl text-red-600">🧑‍🏫</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">Virtual Classes</h3>
//                             <p className="text-sm text-gray-600">Live online tutoring and recorded sessions covering key subjects for various grade levels.</p>
//                         </div>

//                         {/* Service Card 2: Materials */}
//                         <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                             <span className="block mb-3 text-3xl text-red-600">📚</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">Free Study Packs</h3>
//                             <p className="text-sm text-gray-600">Downloadable e-books, practice sheets, and comprehensive notes in PDF format.</p>
//                         </div>

//                         {/* Service Card 3: Mentorship */}
//                         <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                             <span className="block mb-3 text-3xl text-red-600">❓</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">Doubt Clearing & Mentors</h3>
//                             <p className="text-sm text-gray-600">One-on-one sessions and dedicated forums to get quick answers and career guidance.</p>
//                         </div>

//                         {/* Service Card 4: Supplies */}
//                         <div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl">
//                             <span className="block mb-3 text-3xl text-red-600">✏️</span>
//                             <h3 className="mb-2 text-xl font-bold text-gray-800">School Supplies/Stipend</h3>
//                             <p className="text-sm text-gray-600">Providing essential stationery, books, or a small stipend for verified eligible students.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             {/* --- */}

//             {/* 4. Enrollment Process Section */}
//             <section id="enrollment" className="px-4 py-16 bg-white">
//                 <div className="max-w-4xl mx-auto">
//                     <h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900">
//                         Your Simple 3-Step Enrollment
//                     </h2>
                    
//                     <div className="relative">
//                         <div className="absolute top-0 h-full border-l-4 border-red-600 left-4 md:left-1/2 md:-translate-x-1/2"></div>
                        
//                         {/* Step 1 */}
//                         <div className="flex justify-start mb-8 md:justify-center">
//                             <div className="relative w-full md:w-1/2 md:pr-12">
//                                 <div className="absolute flex items-center -left-4 md:-left-8 md:top-2">
//                                     <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">1</span>
//                                 </div>
//                                 <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-right">
//                                     <h3 className="mb-2 text-xl font-bold text-red-700">Complete the Online Form</h3>
//                                     <p className="text-gray-700">Fill in your basic information and academic needs through our secure online application form.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 2 */}
//                         <div className="flex justify-end mb-8 md:justify-center">
//                             <div className="relative w-full md:w-1/2 md:pl-12">
//                                 <div className="absolute flex items-center -left-4 md:left-auto md:-right-8 md:top-2">
//                                     <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">2</span>
//                                 </div>
//                                 <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-left">
//                                     <h3 className="mb-2 text-xl font-bold text-red-700">Verification Call/Review</h3>
//                                     <p className="text-gray-700">Our team will quickly review your application and contact you for a brief verification process.</p>
//                                 </div>
//                             </div>
//                         </div>

//                         {/* Step 3 */}
//                         <div className="flex justify-start md:justify-center">
//                             <div className="relative w-full md:w-1/2 md:pr-12">
//                                 <div className="absolute flex items-center -left-4 md:-left-8 md:top-2">
//                                     <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">3</span>
//                                 </div>
//                                 <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-right">
//                                     <h3 className="mb-2 text-xl font-bold text-red-700">Gain Full Access</h3>
//                                     <p className="text-gray-700">Once approved, you get immediate, free access to all our classes and resources.</p>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </section>

//             <EducationCampaigns/>

//             {/* --- */}

//             {/* 5. Call to Action / Footer CTA */}
//             {/* <footer className="py-12 text-center bg-red-700">
//                 <div className="max-w-4xl px-4 mx-auto">
//                     <h2 className="mb-4 text-3xl font-extrabold text-white sm:text-4xl">
//                         Ready to Transform Your Learning?
//                     </h2>
//                     <p className="mb-8 text-lg text-red-100">
//                         Don't let anything hold you back. Enroll today—it's fast, easy, and completely free.
//                     </p>
//                     <button
//                         onClick={openModal}
//                         className="inline-block px-12 py-4 text-xl font-extrabold text-red-800 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
//                     >
//                         Apply Now
//                     </button>
//                 </div>
//             </footer> */}

// <footer
//     className="py-12 text-center text-white" // Text color set to white for contrast
//     style={{
//         // Set the background image and cover the area
//         backgroundImage: `url(${about})`,
//         backgroundSize: 'cover',
//         backgroundPosition: 'center',
//         // Optional: Add a subtle dark overlay for better text readability
//         backgroundBlendMode: 'multiply',
//         backgroundColor: 'rgba(0, 0, 0, 0.5)' 
//     }}
// >
//     {/* Footer content goes here, unchanged from your previous prompt: */}
//     <div className="max-w-4xl px-4 mx-auto">
//         <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
//             Ready to Transform Your Learning?
//         </h2>
//         <p className="mb-8 text-lg text-gray-200">
//             Don't let anything hold you back. Enroll today—it's fast, easy, and completely free.
//         </p>
//         <button
//             onClick={openModal}
//             className="inline-block px-12 py-4 text-xl font-extrabold text-red-800 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
//         >
//             Apply Now
//         </button>
//     </div>
// </footer>
//         </div>
//     );
// };

// export default EducationSupport;

import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Framer Motion imported
import { BookOpen, Users, GraduationCap, DollarSign } from 'lucide-react'; // Example Lucide Icons

// Assuming you have an image in this path for the hero background
import aboutImg from "../assets/img/edubg.jpg"; 
import about from "../assets/img/susan-q-yin-2JIvboGLeho-unsplash.jpg"; 
import EducationCampaigns from '../components/EducationCampaigns';

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// --- Framer Motion Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Stagger effect for items
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

// --- Application Modal Component ---
const ApplicationModal = ({ isOpen, onClose }) => {
    const [status, setStatus] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        const form = e.target;
        const data = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setStatus("Application Submitted Successfully! We will contact you soon.");
                form.reset();
                // Optionally close the modal after a short delay
                setTimeout(onClose, 3000); 
            } else {
                const result = await response.json();
                setStatus(`Submission Failed: ${result.message}`);
            }
        } catch (error) {
            setStatus("An error occurred during submission.");
        }
    };

    if (!isOpen) return null;

    return (
        // Modal wrapper with transition
        <motion.div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {/* Modal content with transition */}
            <motion.div 
                className="relative w-full max-w-xl p-8 bg-white shadow-2xl rounded-xl"
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                transition={{ duration: 0.3 }}
            >
                <button 
                    onClick={onClose} 
                    className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
                >
                    &times;
                </button>
                
                <h2 className="pb-2 mb-6 text-3xl font-bold text-red-700 border-b">Enrollment Application Form</h2>
                <p className="mb-6 text-gray-600">Please provide your details below to start your free education journey.</p>

                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                    <input type="hidden" name="subject" value="New Free Education Application" />
                    
                    <div className="mb-4">
                        <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Full Name (Student)</label>
                        <input
                            type="text"
                            id="full-name"
                            name="name"
                            required
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number (Guardian)</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Current Grade/Class</label>
                        <select
                            id="grade"
                            name="grade"
                            required
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                            <option value="">Select Class</option>
                            <option value="5-8">Class 5 - 8</option>
                            <option value="9-10">Class 9 - 10 (Secondary)</option>
                            <option value="11-12">Class 11 - 12 (Higher Secondary)</option>
                            <option value="Other">Other / Vocational</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
                        disabled={status === "Submitting..."}
                    >
                        {status === "Submitting..." ? "Submitting..." : "Submit Application"}
                    </button>
                    
                    {status && status !== "Submitting..." && (
                        <p className={`mt-4 text-center text-sm ${status.includes("Success") ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </p>
                    )}
                </form>
            </motion.div>
        </motion.div>
    );
};
// --- End of Modal Component ---

const EducationSupport = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (e) => {
        if (e && e.preventDefault) {
            e.preventDefault();
        }
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div className="min-h-screen font-sans bg-gray-50">

            {/* Application Modal Integration */}
            {isModalOpen && <ApplicationModal isOpen={isModalOpen} onClose={closeModal} />}

            {/* 1. Header & Hero Section */}
{/*             <motion.header // motion.header for animation
                id="hero"
                className="py-20 text-center text-white shadow-2xl"
                style={{ 
                    // Added a dark overlay for text readability over the background image
                    background: `linear-gradient(rgba(185, 28, 28, 0.7), rgba(185, 28, 28, 0.7)), url(${aboutImg})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                }} 
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
            > */}




<motion.header // motion.header for animation
    id="hero"
    className="py-20 text-center text-white shadow-2xl"
    style={{ 
        // Gradient (Dark Overlay) REMOVED. Only image remains.
        backgroundImage: `url(${aboutImg})`, 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        // Optional: Adding a background color in case the image fails to load, 
        // but no overlay effect will be applied.
        backgroundColor: '#b91c1c' 
    }} 
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
>
                <motion.div className="max-w-4xl px-4 mx-auto" variants={containerVariants} initial="hidden" animate="show">
                    <motion.h1 
                        className="mb-4 text-5xl font-extrabold tracking-tight sm:text-6xl"
                        variants={itemVariants}
                    >
                        Empowering Futures with Free Education
                    </motion.h1>
                    <motion.p 
                        className="mb-8 text-xl text-gray-300 sm:text-2xl"
                        variants={itemVariants}
                    >
                        Breaking down financial barriers to learning. Your journey to knowledge starts here, completely free.
                    </motion.p>
                    <motion.button
                        onClick={openModal}
                        className="inline-block px-10 py-4 text-lg font-bold text-red-700 transition duration-300 transform bg-white rounded-full shadow-lg hover:bg-gray-100 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300"
                        variants={itemVariants}
                    >
                        Start Your Free Application
                    </motion.button>
                </motion.div>
            </motion.header>
            
            {/* --- */}

            {/* 2. About Us Section */}
            <motion.section // motion.section for animation
                id="about-us" 
                className="py-16 bg-white border-b-4 border-red-50"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <div className="max-w-6xl px-4 mx-auto text-center">
                    <motion.h2 className="mb-4 text-4xl font-extrabold text-gray-900" variants={itemVariants}>
                        About Our Mission
                    </motion.h2>
                    <motion.p className="max-w-3xl mx-auto mb-8 text-lg text-gray-700" variants={itemVariants}>
                        We believe that quality education is a **fundamental right**, not a privilege. Our non-profit initiative is dedicated to providing comprehensive academic support and essential resources to students from low-income backgrounds, ensuring no talent goes untapped due to economic constraints.
                    </motion.p>
                    <motion.div className="grid gap-8 mt-10 md:grid-cols-3" variants={containerVariants}>
                        <motion.div className="p-6" variants={itemVariants}>
                            <span className="block mb-3 text-5xl text-red-600">💡</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Our Vision</h3>
                            <p className="text-sm text-gray-500">A world where every student has equal access to quality learning resources.</p>
                        </motion.div>
                        <motion.div className="p-6" variants={itemVariants}>
                            <span className="block mb-3 text-5xl text-red-600">🤝</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Community Driven</h3>
                            <p className="text-sm text-gray-500">Supported by volunteers, educators, and generous donors worldwide.</p>
                        </motion.div>
                        <motion.div className="p-6" variants={itemVariants}>
                            <span className="block mb-3 text-5xl text-red-600">🌍</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Global Impact</h3>
                            <p className="text-sm text-gray-500">Providing assistance both locally and digitally to reach students everywhere.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- */}

            {/* 3. Our Services Section */}
            <motion.section // motion.section for animation
                id="services" 
                className="px-4 py-16 bg-gray-100"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="max-w-6xl mx-auto">
                    <motion.h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900" variants={itemVariants}>
                        What We Offer
                    </motion.h2>
                    <motion.div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" variants={containerVariants}>
                        
                        {/* Service Card 1: Live Classes */}
                        <motion.div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl" variants={itemVariants}>
                            <span className="block mb-3 text-3xl text-red-600">🧑‍🏫</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Virtual Classes</h3>
                            <p className="text-sm text-gray-600">Live online tutoring and recorded sessions covering key subjects for various grade levels.</p>
                        </motion.div>

                        {/* Service Card 2: Materials */}
                        <motion.div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl" variants={itemVariants}>
                            <span className="block mb-3 text-3xl text-red-600">📚</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Free Study Packs</h3>
                            <p className="text-sm text-gray-600">Downloadable e-books, practice sheets, and comprehensive notes in PDF format.</p>
                        </motion.div>

                        {/* Service Card 3: Mentorship */}
                        <motion.div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl" variants={itemVariants}>
                            <span className="block mb-3 text-3xl text-red-600">❓</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">Doubt Clearing & Mentors</h3>
                            <p className="text-sm text-gray-600">One-on-one sessions and dedicated forums to get quick answers and career guidance.</p>
                        </motion.div>

                        {/* Service Card 4: Supplies */}
                        <motion.div className="p-6 bg-white border-t-4 border-red-600 shadow-lg rounded-xl" variants={itemVariants}>
                            <span className="block mb-3 text-3xl text-red-600">✏️</span>
                            <h3 className="mb-2 text-xl font-bold text-gray-800">School Supplies/Stipend</h3>
                            <p className="text-sm text-gray-600">Providing essential stationery, books, or a small stipend for verified eligible students.</p>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* --- */}

            {/* 4. Enrollment Process Section */}
            <motion.section // motion.section for animation
                id="enrollment" 
                className="px-4 py-16 bg-white"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
            >
                <div className="max-w-4xl mx-auto">
                    <motion.h2 className="mb-12 text-4xl font-extrabold text-center text-gray-900" variants={itemVariants}>
                        Your Simple 3-Step Enrollment
                    </motion.h2>
                    
                    <motion.div className="relative" variants={containerVariants}>
                        <div className="absolute top-0 h-full border-l-4 border-red-600 left-4 md:left-1/2 md:-translate-x-1/2"></div>
                        
                        {/* Step 1 */}
                        <motion.div className="flex justify-start mb-8 md:justify-center" variants={itemVariants}>
                            <div className="relative w-full md:w-1/2 md:pr-12">
                                <div className="absolute flex items-center -left-4 md:-left-8 md:top-2">
                                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">1</span>
                                </div>
                                <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-right">
                                    <h3 className="mb-2 text-xl font-bold text-red-700">Complete the Online Form</h3>
                                    <p className="text-gray-700">Fill in your basic information and academic needs through our secure online application form.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 2 */}
                        <motion.div className="flex justify-end mb-8 md:justify-center" variants={itemVariants}>
                            <div className="relative w-full md:w-1/2 md:pl-12">
                                <div className="absolute flex items-center -left-4 md:left-auto md:-right-8 md:top-2">
                                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">2</span>
                                </div>
                                <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-left">
                                    <h3 className="mb-2 text-xl font-bold text-red-700">Verification Call/Review</h3>
                                    <p className="text-gray-700">Our team will quickly review your application and contact you for a brief verification process.</p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Step 3 */}
                        <motion.div className="flex justify-start md:justify-center" variants={itemVariants}>
                            <div className="relative w-full md:w-1/2 md:pr-12">
                                <div className="absolute flex items-center -left-4 md:-left-8 md:top-2">
                                    <span className="flex items-center justify-center w-8 h-8 font-bold text-white bg-red-600 rounded-full shadow-lg ring-8 ring-white">3</span>
                                </div>
                                <div className="p-6 rounded-lg shadow-md bg-red-50 md:text-right">
                                    <h3 className="mb-2 text-xl font-bold text-red-700">Gain Full Access</h3>
                                    <p className="text-gray-700">Once approved, you get immediate, free access to all our classes and resources.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.section>

            {/* EducationCampaigns component (Assuming this component also uses framer-motion internally or is fine without it) */}
            <EducationCampaigns/>

            {/* --- */}

            {/* 5. Call to Action / Footer CTA */}
            <motion.footer // motion.footer for animation
                className="py-12 text-center text-white" 
                style={{
                    backgroundImage: `url(${about})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundBlendMode: 'multiply',
                    backgroundColor: 'rgba(0, 0, 0, 0.5)' 
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.5 }}
            >
                <div className="max-w-4xl px-4 mx-auto">
                    <h2 className="mb-4 text-3xl font-extrabold sm:text-4xl">
                        Ready to Transform Your Learning?
                    </h2>
                    <p className="mb-8 text-lg text-gray-200">
                        Don't let anything hold you back. Enroll today—it's fast, easy, and completely free.
                    </p>
                    <button
                        onClick={openModal}
                        className="inline-block px-12 py-4 text-xl font-extrabold text-red-800 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-300"
                    >
                        Apply Now
                    </button>
                </div>
            </motion.footer>
        </div>
    );
};

export default EducationSupport;