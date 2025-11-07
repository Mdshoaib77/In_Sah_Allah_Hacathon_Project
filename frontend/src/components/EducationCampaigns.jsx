// // // // import React, { useState } from 'react';

// // // // // Web3Forms Access Key
// // // // const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// // // // // --- 1. Campaign Data (Updated for Rural Children) ---
// // // // const campaigns = [
// // // //     {
// // // //         id: 1,
// // // //         title: "📚 প্রাথমিক স্কুলিং কিট বিতরণ",
// // // //         subtitle: "৫ থেকে ১০ বছর বয়সী শিশুদের জন্য বার্ষিক শিক্ষা উপকরণ",
// // // //         image: "https://images.unsplash.com/photo-1517486808790-a292437651a0?q=80&w=2070&auto=format&fit=crop", 
// // // //         description: "এই ক্যাম্পেইনের মাধ্যমে গ্রামীন অঞ্চলের শিশুদের জন্য স্কুল ব্যাগ, পাঠ্যপুস্তক, খাতা, কলম এবং জ্যামিতি বক্সের মতো প্রয়োজনীয় সামগ্রী বিনামূল্যে বিতরণ করা হবে। এটি তাদের শিক্ষাজীবন শুরু করতে সাহায্য করবে।",
// // // //         details: [
// // // //             "টার্গেট গ্রুপ: ৫-১০ বছর বয়সী প্রাথমিক স্কুলের ছাত্র-ছাত্রীরা।",
// // // //             "বিতরণ তারিখ: প্রতি শিক্ষাবর্ষের শুরুতে।",
// // // //             "সহায়তা: সম্পূর্ণ স্কুল কিট (ব্যাগ, বই, খাতা, পেন্সিল)।",
// // // //             "স্থান: নির্বাচিত গ্রামের প্রাথমিক বিদ্যালয়।"
// // // //         ]
// // // //     },
// // // //     {
// // // //         id: 2,
// // // //         title: "💡 ডিজিটাল লার্নিং হাব প্রোগ্রাম",
// // // //         subtitle: "কম্পিউটার ও ইন্টারনেট ব্যবহারের মৌলিক প্রশিক্ষণ",
// // // //         image: "https://images.unsplash.com/photo-1542744192-eb4ef6f52584?q=80&w=2070&auto=format&fit=crop", 
// // // //         description: "যে শিশুরা ডিজিটাল প্রযুক্তির নাগাল পায়নি, তাদের জন্য এই বিশেষ কর্মশালা। এখানে তারা মৌলিক কম্পিউটার ব্যবহার, ইন্টারনেট এবং শিক্ষামূলক অ্যাপস সম্পর্কে শিখতে পারবে।",
// // // //         details: [
// // // //             "টার্গেট গ্রুপ: ১২-১৭ বছর বয়সী ছাত্র-ছাত্রীরা।",
// // // //             "সময়কাল: ১ মাসের কোর্স (সপ্তাহে ৩ দিন)।",
// // // //             "ফোকাস: মৌলিক কম্পিউটার জ্ঞান, টাইপিং, শিক্ষামূলক ওয়েবসাইট ব্যবহার।",
// // // //             "স্থান: নিকটস্থ কমিউনিটি সেন্টার বা লাইব্রেরি।"
// // // //         ]
// // // //     },
// // // //     {
// // // //         id: 3,
// // // //         title: "🧑‍🏫 পিছিয়ে পড়া শিক্ষার্থীদের জন্য টিউশন",
// // // //         subtitle: "৬ষ্ঠ থেকে ১০ম শ্রেণীর জন্য বিশেষ একাডেমিক সহায়তা",
// // // //         image: "https://images.unsplash.com/photo-1509062522246-aa47a06f3353?q=80&w=2070&auto=format&fit=crop", 
// // // //         description: "যেসব ছাত্র-ছাত্রী স্কুলিংয়ে পিছিয়ে পড়ছে, তাদের জন্য গণিত, বিজ্ঞান এবং ইংরেজি বিষয়ে অতিরিক্ত ক্লাসের ব্যবস্থা। অভিজ্ঞ শিক্ষক দ্বারা এই ক্লাসগুলো সম্পূর্ণ বিনামূল্যে পরিচালিত হবে।",
// // // //         details: [
// // // //             "টার্গেট গ্রুপ: ৬ষ্ঠ - ১০ম শ্রেণীর দুর্বল ছাত্র-ছাত্রীরা।",
// // // //             "সময়কাল: ৩ মাসব্যাপী (সপ্তাহে ৪ দিন)।",
// // // //             "বিষয়: গণিত, বিজ্ঞান ও ইংরেজি।",
// // // //             "যোগ্যতা: প্রধান শিক্ষকের সুপারিশ প্রয়োজন।"
// // // //         ]
// // // //     }
// // // // ];

// // // // // --- 2. Modals ---

// // // // // A. Details Modal
// // // // const DetailsModal = ({ isOpen, onClose, campaign }) => {
// // // //     if (!isOpen || !campaign) return null;

// // // //     return (
// // // //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-70 backdrop-blur-sm">
// // // //             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
// // // //                 <button 
// // // //                     onClick={onClose} 
// // // //                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
// // // //                 >
// // // //                     &times;
// // // //                 </button>
                
// // // //                 <h2 className="mb-4 text-3xl font-bold text-blue-800">{campaign.title}</h2>
// // // //                 <h3 className="pb-2 mb-6 text-xl font-semibold text-gray-700 border-b">{campaign.subtitle}</h3>
                
// // // //                 <p className="mb-6 text-gray-600">{campaign.description}</p>
                
// // // //                 <h4 className="mb-3 text-lg font-bold text-red-600">ক্যাম্পেইনের মূল তথ্য:</h4>
// // // //                 <ul className="space-y-2 text-gray-700 list-disc list-inside">
// // // //                     {campaign.details.map((detail, index) => (
// // // //                         <li key={index}>{detail}</li>
// // // //                     ))}
// // // //                 </ul>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // // B. Booking/Application Form Modal (Web3Forms Integrated)
// // // // const BookingModal = ({ isOpen, onClose, campaignTitle }) => {
// // // //     const [status, setStatus] = useState("");
    
// // // //     // Note: State for form data is not strictly necessary for simple Web3Forms, 
// // // //     // but included if you need client-side validation/tracking.
// // // //     const [formData, setFormData] = useState({
// // // //         name: '',
// // // //         email: '',
// // // //         phone: '',
// // // //         grade: '',
// // // //     });

// // // //     const handleChange = (e) => {
// // // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         setStatus("Submitting...");

// // // //         const data = new FormData(e.target);
        
// // // //         // Target specific campaign name for email subject
// // // //         data.append("Campaign_Applied_For", campaignTitle);

// // // //         try {
// // // //             const response = await fetch("https://api.web3forms.com/submit", {
// // // //                 method: "POST",
// // // //                 body: data,
// // // //             });

// // // //             if (response.ok) {
// // // //                 setStatus("আবেদন সফলভাবে জমা দেওয়া হয়েছে! শীঘ্রই আপনার সাথে যোগাযোগ করা হবে।");
// // // //                 e.target.reset();
// // // //                 setTimeout(onClose, 3000); 
// // // //             } else {
// // // //                 const result = await response.json();
// // // //                 setStatus(`জমা দিতে ব্যর্থ: ${result.message}`);
// // // //             }
// // // //         } catch (error) {
// // // //             setStatus("জমা দেওয়ার সময় একটি ত্রুটি হয়েছে।");
// // // //         }
// // // //     };

// // // //     if (!isOpen) return null;

// // // //     return (
// // // //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-70 backdrop-blur-sm">
// // // //             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
// // // //                 <button 
// // // //                     onClick={onClose} 
// // // //                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
// // // //                 >
// // // //                     &times;
// // // //                 </button>
                
// // // //                 <h2 className="mb-2 text-3xl font-bold text-red-700">স্থান সংরক্ষণের ফর্ম</h2>
// // // //                 <p className="pb-2 mb-6 text-lg text-blue-800 border-b">ক্যাম্পেইন: {campaignTitle}</p>
// // // //                 <p className="mb-4 text-sm text-gray-600">অনুগ্রহ করে অভিভাবক বা শিক্ষকের বিবরণ দিন।</p>


// // // //                 <form onSubmit={handleSubmit}>
// // // //                     {/* Web3Forms required field */}
// // // //                     <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
// // // //                     <input type="hidden" name="subject" value={`New Campaign Booking: ${campaignTitle}`} />
                    
// // // //                     {/* Full Name */}
// // // //                     <div className="mb-4">
// // // //                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">সম্পূর্ণ নাম (অভিভাবক/শিক্ষক)</label>
// // // //                         <input
// // // //                             type="text"
// // // //                             id="name"
// // // //                             name="name"
// // // //                             required
// // // //                             onChange={handleChange}
// // // //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                         />
// // // //                     </div>

// // // //                     {/* Email */}
// // // //                     <div className="mb-4">
// // // //                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">ইমেল অ্যাড্রেস (Email)</label>
// // // //                         <input
// // // //                             type="email"
// // // //                             id="email"
// // // //                             name="email"
// // // //                             required
// // // //                             onChange={handleChange}
// // // //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                         />
// // // //                     </div>
                    
// // // //                     {/* Phone Number */}
// // // //                     <div className="mb-4">
// // // //                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">ফোন নম্বর</label>
// // // //                         <input
// // // //                             type="tel"
// // // //                             id="phone"
// // // //                             name="phone"
// // // //                             required
// // // //                             onChange={handleChange}
// // // //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                         />
// // // //                     </div>
                    
// // // //                     {/* Student's Current Grade/Class */}
// // // //                     <div className="mb-6">
// // // //                         <label htmlFor="grade" className="block text-sm font-medium text-gray-700">শিক্ষার্থীর বর্তমান শ্রেণী</label>
// // // //                         <select
// // // //                             id="grade"
// // // //                             name="grade"
// // // //                             required
// // // //                             onChange={handleChange}
// // // //                             className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // // //                         >
// // // //                             <option value="">শ্রেণী নির্বাচন করুন</option>
// // // //                             <option value="Primary (1-5)">প্রাথমিক (১-৫)</option>
// // // //                             <option value="Junior (6-8)">নিম্ন মাধ্যমিক (৬-৮)</option>
// // // //                             <option value="Secondary (9-10)">মাধ্যমিক (৯-১০)</option>
// // // //                             <option value="NotApplicable">প্রযোজ্য নয়</option>
// // // //                         </select>
// // // //                     </div>

// // // //                     {/* Submit Button */}
// // // //                     <button
// // // //                         type="submit"
// // // //                         className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
// // // //                         disabled={status === "Submitting..."}
// // // //                     >
// // // //                         {status === "Submitting..." ? "সাবমিট হচ্ছে..." : "স্থান সংরক্ষণ করুন"}
// // // //                     </button>
                    
// // // //                     {/* Status Message */}
// // // //                     {status && status !== "Submitting..." && (
// // // //                         <p className={`mt-4 text-center text-sm ${status.includes("সফলভাবে") ? 'text-green-600' : 'text-red-600'}`}>
// // // //                             {status}
// // // //                         </p>
// // // //                     )}
// // // //                 </form>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // };

// // // // // --- 3. Main Component ---
// // // // const EducationCampaigns = () => {
// // // //     const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
// // // //     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
// // // //     const [selectedCampaign, setSelectedCampaign] = useState(null);

// // // //     const openDetailsModal = (campaign) => {
// // // //         setSelectedCampaign(campaign);
// // // //         setIsDetailsModalOpen(true);
// // // //     };

// // // //     const openBookingModal = (campaign) => {
// // // //         setSelectedCampaign(campaign);
// // // //         setIsBookingModalOpen(true);
// // // //     };

// // // //     return (
// // // //         <div className="min-h-screen p-4 py-12 font-sans bg-gray-50 sm:p-8">
// // // //             <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900">
// // // //                 🌟 দরিদ্র গ্রামীন শিশুদের জন্য বিশেষ ক্যাম্পেইন
// // // //             </h1>
            
// // // //             {/* Campaign Cards Grid */}
// // // //             <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2">
// // // //                 {campaigns.map((campaign) => (
// // // //                     <div key={campaign.id} className="overflow-hidden transition duration-300 bg-white border-t-4 border-blue-600 shadow-2xl rounded-xl hover:shadow-red-300">
                        
// // // //                         {/* Image */}
// // // //                         <div className="h-48 overflow-hidden">
// // // //                             <img 
// // // //                                 src={campaign.image} 
// // // //                                 alt={campaign.title} 
// // // //                                 className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
// // // //                             />
// // // //                         </div>
                        
// // // //                         {/* Content */}
// // // //                         <div className="p-6">
// // // //                             <h2 className="mb-1 text-2xl font-bold text-blue-800">{campaign.title}</h2>
// // // //                             <p className="mb-4 text-sm font-semibold text-red-600">{campaign.subtitle}</p>
                            
// // // //                             <p className="mb-6 text-gray-600 line-clamp-3">{campaign.description}</p>
                            
// // // //                             <div className="flex justify-between space-x-3">
// // // //                                 <button 
// // // //                                     onClick={() => openDetailsModal(campaign)}
// // // //                                     className="flex-1 px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
// // // //                                 >
// // // //                                     View Details
// // // //                                 </button>
// // // //                                 <button 
// // // //                                     onClick={() => openBookingModal(campaign)}
// // // //                                     className="flex-1 px-4 py-2 text-sm font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700"
// // // //                                 >
// // // //                                     Book Now
// // // //                                 </button>
// // // //                             </div>
// // // //                         </div>
// // // //                     </div>
// // // //                 ))}
// // // //             </div>
            
// // // //             <div className="mt-12 text-center">
// // // //                 <p className="text-lg font-semibold text-gray-700">আপনার দেওয়া সহায়তার মাধ্যমে আমরা আরও অনেক শিশুর কাছে পৌঁছাতে পারি।</p>
// // // //                 <a 
// // // //                     href="#" 
// // // //                     className="inline-block px-8 py-3 mt-4 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
// // // //                 >
// // // //                     সহায়তা করতে চান? ক্লিক করুন
// // // //                 </a>
// // // //             </div>


// // // //             {/* Modals */}
// // // //             <DetailsModal 
// // // //                 isOpen={isDetailsModalOpen} 
// // // //                 onClose={() => setIsDetailsModalOpen(false)} 
// // // //                 campaign={selectedCampaign} 
// // // //             />
            
// // // //             <BookingModal 
// // // //                 isOpen={isBookingModalOpen} 
// // // //                 onClose={() => setIsBookingModalOpen(false)} 
// // // //                 campaignTitle={selectedCampaign ? selectedCampaign.title : ''}
// // // //             />

// // // //         </div>
// // // //     );
// // // // };

// // // // export default EducationCampaigns;

// // // import React, { useState } from 'react';

// // // // Web3Forms Access Key
// // // const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// // // // --- 1. Campaign Data (Translated) ---
// // // const campaigns = [
// // //     {
// // //         id: 1,
// // //         title: "📚 Primary Schooling Kit Distribution",
// // //         subtitle: "Annual Education Supplies for Children Aged 5 to 10",
// // //         image: "https://th.bing.com/th/id/R.38604bd1efd3ce7c72de9c2267690d8a?rik=12vdqiqQInBciw&pid=ImgRaw&r=0", 
// // //         description: "This campaign provides essential items like school bags, textbooks, notebooks, pens, and geometry boxes to rural children at no cost. This helps them start their educational journey.",
// // //         details: [
// // //             "Target Group: Primary school students aged 5-10.",
// // //             "Distribution Date: Beginning of every academic year.",
// // //             "Aid Provided: Full school kit (Bag, books, stationery).",
// // //             "Location: Selected village primary schools."
// // //         ]
// // //     },
// // //     {
// // //         id: 2,
// // //         title: "💡 Digital Learning Hub Program",
// // //         subtitle: "Basic Computer Skills & Internet Usage Training",
// // //         image: "https://images.unsplash.com/photo-1542744192-eb4ef6f52584?q=80&w=2070&auto=format&fit=crop", 
// // //         description: "A special workshop for children who lack access to digital technology. They will learn basic computer operation, internet usage, and educational apps.",
// // //         details: [
// // //             "Target Group: Students aged 12-17.",
// // //             "Duration: 1-Month Course (3 days a week).",
// // //             "Focus: Basic computer knowledge, typing, using educational websites.",
// // //             "Location: Nearest Community Center or Library."
// // //         ]
// // //     },
// // //     {
// // //         id: 3,
// // //         title: "🧑‍🏫 Catch-Up Tutoring for Strugglers",
// // //         subtitle: "Special Academic Support for Grades 6th to 10th",
// // //         image: "https://images.unsplash.com/photo-1509062522246-aa47a06f3353?q=80&w=2070&auto=format&fit=crop", 
// // //         description: "Extra classes in Math, Science, and English for students who are falling behind in their schooling. These sessions are led by experienced teachers and are completely free.",
// // //         details: [
// // //             "Target Group: Underperforming students in Grades 6-10.",
// // //             "Duration: 3-Month Program (4 days a week).",
// // //             "Subjects: Math, Science, and English.",
// // //             "Requirement: Principal's recommendation is needed."
// // //         ]
// // //     }
// // // ];

// // // // --- 2. Modals ---

// // // // A. Details Modal
// // // const DetailsModal = ({ isOpen, onClose, campaign }) => {
// // //     if (!isOpen || !campaign) return null;

// // //     return (
// // //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-70 backdrop-blur-sm">
// // //             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
// // //                 <button 
// // //                     onClick={onClose} 
// // //                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
// // //                 >
// // //                     &times;
// // //                 </button>
                
// // //                 <h2 className="mb-4 text-3xl font-bold text-blue-800">{campaign.title}</h2>
// // //                 <h3 className="pb-2 mb-6 text-xl font-semibold text-gray-700 border-b">{campaign.subtitle}</h3>
                
// // //                 <p className="mb-6 text-gray-600">{campaign.description}</p>
                
// // //                 <h4 className="mb-3 text-lg font-bold text-red-600">Key Campaign Information:</h4>
// // //                 <ul className="space-y-2 text-gray-700 list-disc list-inside">
// // //                     {campaign.details.map((detail, index) => (
// // //                         <li key={index}>{detail}</li>
// // //                     ))}
// // //                 </ul>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // B. Booking/Application Form Modal (Web3Forms Integrated)
// // // const BookingModal = ({ isOpen, onClose, campaignTitle }) => {
// // //     const [status, setStatus] = useState("");
    
// // //     // State for form data is optional but kept for robust form handling
// // //     const [formData, setFormData] = useState({
// // //         name: '',
// // //         email: '',
// // //         phone: '',
// // //         grade: '',
// // //     });

// // //     const handleChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         setStatus("Submitting...");

// // //         const data = new FormData(e.target);
        
// // //         // Target specific campaign name for email subject
// // //         data.append("Campaign_Applied_For", campaignTitle);

// // //         try {
// // //             const response = await fetch("https://api.web3forms.com/submit", {
// // //                 method: "POST",
// // //                 body: data,
// // //             });

// // //             if (response.ok) {
// // //                 setStatus("Application Submitted Successfully! We will contact you soon.");
// // //                 e.target.reset();
// // //                 setTimeout(onClose, 3000); 
// // //             } else {
// // //                 const result = await response.json();
// // //                 setStatus(`Submission Failed: ${result.message}`);
// // //             }
// // //         } catch (error) {
// // //             setStatus("An error occurred during submission.");
// // //         }
// // //     };

// // //     if (!isOpen) return null;

// // //     return (
// // //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black bg-opacity-70 backdrop-blur-sm">
// // //             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
// // //                 <button 
// // //                     onClick={onClose} 
// // //                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
// // //                 >
// // //                     &times;
// // //                 </button>
                
// // //                 <h2 className="mb-2 text-3xl font-bold text-red-700">Book Your Spot</h2>
// // //                 <p className="pb-2 mb-6 text-lg text-blue-800 border-b">Campaign: {campaignTitle}</p>
// // //                 <p className="mb-4 text-sm text-gray-600">Please provide guardian or teacher details.</p>


// // //                 <form onSubmit={handleSubmit}>
// // //                     {/* Web3Forms required field */}
// // //                     <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
// // //                     <input type="hidden" name="subject" value={`New Campaign Booking: ${campaignTitle}`} />
                    
// // //                     {/* Full Name */}
// // //                     <div className="mb-4">
// // //                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Guardian/Teacher)</label>
// // //                         <input
// // //                             type="text"
// // //                             id="name"
// // //                             name="name"
// // //                             required
// // //                             onChange={handleChange}
// // //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                         />
// // //                     </div>

// // //                     {/* Email */}
// // //                     <div className="mb-4">
// // //                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
// // //                         <input
// // //                             type="email"
// // //                             id="email"
// // //                             name="email"
// // //                             required
// // //                             onChange={handleChange}
// // //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                         />
// // //                     </div>
                    
// // //                     {/* Phone Number */}
// // //                     <div className="mb-4">
// // //                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
// // //                         <input
// // //                             type="tel"
// // //                             id="phone"
// // //                             name="phone"
// // //                             required
// // //                             onChange={handleChange}
// // //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                         />
// // //                     </div>
                    
// // //                     {/* Student's Current Grade/Class */}
// // //                     <div className="mb-6">
// // //                         <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Student's Current Grade/Class</label>
// // //                         <select
// // //                             id="grade"
// // //                             name="grade"
// // //                             required
// // //                             onChange={handleChange}
// // //                             className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// // //                         >
// // //                             <option value="">Select Grade</option>
// // //                             <option value="Primary (1-5)">Primary (1-5)</option>
// // //                             <option value="Junior (6-8)">Junior (6-8)</option>
// // //                             <option value="Secondary (9-10)">Secondary (9-10)</option>
// // //                             <option value="NotApplicable">Not Applicable</option>
// // //                         </select>
// // //                     </div>

// // //                     {/* Submit Button */}
// // //                     <button
// // //                         type="submit"
// // //                         className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
// // //                         disabled={status === "Submitting..."}
// // //                     >
// // //                         {status === "Submitting..." ? "Submitting..." : "Book Your Spot"}
// // //                     </button>
                    
// // //                     {/* Status Message */}
// // //                     {status && status !== "Submitting..." && (
// // //                         <p className={`mt-4 text-center text-sm ${status.includes("Successfully") ? 'text-green-600' : 'text-red-600'}`}>
// // //                             {status}
// // //                         </p>
// // //                     )}
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // };

// // // // --- 3. Main Component ---
// // // const EducationCampaigns = () => {
// // //     const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
// // //     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
// // //     const [selectedCampaign, setSelectedCampaign] = useState(null);

// // //     const openDetailsModal = (campaign) => {
// // //         setSelectedCampaign(campaign);
// // //         setIsDetailsModalOpen(true);
// // //     };

// // //     const openBookingModal = (campaign) => {
// // //         setSelectedCampaign(campaign);
// // //         setIsBookingModalOpen(true);
// // //     };

// // //     return (
// // //         <div className="min-h-screen p-4 py-12 font-sans bg-gray-50 sm:p-8">
// // //             <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900">
// // //                 🌟 Special Campaigns for Rural Children
// // //             </h1>
            
// // //             {/* Campaign Cards Grid */}
// // //             <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2">
// // //                 {campaigns.map((campaign) => (
// // //                     <div key={campaign.id} className="overflow-hidden transition duration-300 bg-white border-t-4 border-blue-600 shadow-2xl rounded-xl hover:shadow-red-300">
                        
// // //                         {/* Image */}
// // //                         <div className="h-48 overflow-hidden">
// // //                             <img 
// // //                                 src={campaign.image} 
// // //                                 alt={campaign.title} 
// // //                                 className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
// // //                             />
// // //                         </div>
                        
// // //                         {/* Content */}
// // //                         <div className="p-6">
// // //                             <h2 className="mb-1 text-2xl font-bold text-blue-800">{campaign.title}</h2>
// // //                             <p className="mb-4 text-sm font-semibold text-red-600">{campaign.subtitle}</p>
                            
// // //                             <p className="mb-6 text-gray-600 line-clamp-3">{campaign.description}</p>
                            
// // //                             <div className="flex justify-between space-x-3">
// // //                                 <button 
// // //                                     onClick={() => openDetailsModal(campaign)}
// // //                                     className="flex-1 px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
// // //                                 >
// // //                                     View Details
// // //                                 </button>
// // //                                 <button 
// // //                                     onClick={() => openBookingModal(campaign)}
// // //                                     className="flex-1 px-4 py-2 text-sm font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700"
// // //                                 >
// // //                                     Book Now
// // //                                 </button>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 ))}
// // //             </div>
            
// // //             <div className="mt-12 text-center">
// // //                 <p className="text-lg font-semibold text-gray-700">Your support helps us reach more children in need.</p>
// // //                 <a 
// // //                     href="#" 
// // //                     className="inline-block px-8 py-3 mt-4 font-bold text-white transition duration-300 bg-blue-600 rounded-lg hover:bg-blue-700"
// // //                 >
// // //                     Want to Donate? Click Here
// // //                 </a>
// // //             </div>


// // //             {/* Modals are rendered here */}
// // //             <DetailsModal 
// // //                 isOpen={isDetailsModalOpen} 
// // //                 onClose={() => setIsDetailsModalOpen(false)} 
// // //                 campaign={selectedCampaign} 
// // //             />
            
// // //             <BookingModal 
// // //                 isOpen={isBookingModalOpen} 
// // //                 onClose={() => setIsBookingModalOpen(false)} 
// // //                 campaignTitle={selectedCampaign ? selectedCampaign.title : ''}
// // //             />

// // //         </div>
// // //     );
// // // };

// // // export default EducationCampaigns;


// // import React, { useState } from 'react';

// // // Web3Forms Access Key
// // const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// // // --- 1. Campaign Data (Final) ---
// // const campaigns = [
// //     {
// //         id: 1,
// //         title: "📚 Primary Schooling Kit Distribution",
// //         subtitle: "Essential Supplies for Students Aged 5-10",
// //         image: "https://images.unsplash.com/photo-1517486808790-a292437651a0?q=80&w=2070&auto=format&fit=crop", 
// //         description: "A comprehensive package including school bags, textbooks, notebooks, and stationery provided free of cost to young children in rural areas, ensuring they are equipped for school from day one.",
// //         details: [
// //             "Target Group: Primary students (Aged 5-10).",
// //             "Aid Provided: Full kit (Bag, books, stationery, uniform voucher).",
// //             "Location: Village Primary Schools.",
// //         ],
// //     },
// //     {
// //         id: 2,
// //         title: "📖 Basic Literacy and Numeracy Camp",
// //         subtitle: "Foundational Education for Beginners (Ages 7-12)",
// //         image: "https://images.unsplash.com/photo-1542744192-eb4ef6f52584?q=80&w=2070&auto=format&fit=crop", 
// //         description: "An intensive camp focused on teaching reading, writing, and basic arithmetic to children who have missed early schooling or are struggling with fundamental concepts. Building a strong base for future learning.",
// //         details: [
// //             "Target Group: Children who need foundational education (Aged 7-12).",
// //             "Duration: 6-Week Intensive Camp (5 days/week).",
// //             "Focus: Local language literacy, Math basics, General knowledge.",
// //             "Location: Community Learning Centers.",
// //         ],
// //     },
// //     {
// //         id: 3,
// //         title: "💡 Advanced Skills & Stipend Program",
// //         subtitle: "Vocational Skills Training + Monthly Study Stipend",
// //         image: "https://images.unsplash.com/photo-1509062522246-aa47a06f3353?q=80&w=2070&auto=format&fit=crop", 
// //         description: "A program for older students (13+) offering advanced academic help or basic vocational/digital skills training (like coding/tailoring), paired with a small monthly stipend to cover essential study expenses (e.g., transport).",
// //         details: [
// //             "Target Group: Older students (Aged 13+).",
// //             "Aid Provided: Skill training access and a monthly stipend.",
// //             "Focus: Skills development and financial assistance.",
// //             "Requirement: Need-based assessment required.",
// //         ],
// //     },
// // ];

// // // --- 2. Modals ---

// // // A. Details Modal
// // const DetailsModal = ({ isOpen, onClose, campaign }) => {
// //     if (!isOpen || !campaign) return null;

// //     return (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm">
// //             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
// //                 <button 
// //                     onClick={onClose} 
// //                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
// //                 >
// //                     &times;
// //                 </button>
                
// //                 <h2 className="mb-4 text-3xl font-bold text-blue-800">{campaign.title}</h2>
// //                 <h3 className="pb-2 mb-6 text-xl font-semibold text-gray-700 border-b">{campaign.subtitle}</h3>
                
// //                 <p className="mb-6 text-gray-600">{campaign.description}</p>
                
// //                 <h4 className="mb-3 text-lg font-bold text-red-600">Key Campaign Information:</h4>
// //                 <ul className="space-y-2 text-gray-700 list-disc list-inside">
// //                     {campaign.details.map((detail, index) => (
// //                         <li key={index}>{detail}</li>
// //                     ))}
// //                 </ul>
// //             </div>
// //         </div>
// //     );
// // };

// // // B. Booking/Application Form Modal (Web3Forms Integrated)
// // const BookingModal = ({ isOpen, onClose, campaignTitles }) => {
// //     const [status, setStatus] = useState("");
    
// //     // Default form state including the campaign selection
// //     const [formData, setFormData] = useState({
// //         name: '',
// //         email: '',
// //         phone: '',
// //         grade: '',
// //         campaign: '', // New field to hold selected campaign
// //     });

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         setStatus("Submitting...");

// //         const data = new FormData(e.target);
        
// //         // Use the selected campaign title for the email subject
// //         const selectedCampaignTitle = data.get('campaign');
// //         data.append("subject", `New Campaign Booking: ${selectedCampaignTitle}`);
        
// //         try {
// //             const response = await fetch("https://api.web3forms.com/submit", {
// //                 method: "POST",
// //                 body: data,
// //             });

// //             if (response.ok) {
// //                 setStatus("Application Submitted Successfully! We will contact you soon.");
// //                 e.target.reset();
// //                 setTimeout(onClose, 3000); 
// //             } else {
// //                 const result = await response.json();
// //                 setStatus(`Submission Failed: ${result.message}`);
// //             }
// //         } catch (error) {
// //             setStatus("An error occurred during submission.");
// //         }
// //     };

// //     if (!isOpen) return null;

// //     return (
// //         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm">
// //             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
// //                 <button 
// //                     onClick={onClose} 
// //                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
// //                 >
// //                     &times;
// //                 </button>
                
// //                 <h2 className="mb-2 text-3xl font-bold text-red-700">Book Your Spot</h2>
// //                 <p className="pb-2 mb-6 text-lg text-blue-800 border-b">Apply for a Free Education Campaign</p>
// //                 <p className="mb-4 text-sm text-gray-600">Please provide guardian or teacher details.</p>


// //                 <form onSubmit={handleSubmit}>
// //                     {/* Web3Forms required field */}
// //                     <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
// //                     {/* Note: Subject is dynamically added in handleSubmit */}
                    
// //                     {/* Campaign Selection - NEW FIELD */}
// //                     <div className="mb-4">
// //                         <label htmlFor="campaign" className="block text-sm font-medium text-gray-700">Select Campaign</label>
// //                         <select
// //                             id="campaign"
// //                             name="campaign"
// //                             required
// //                             onChange={handleChange}
// //                             className="block w-full px-3 py-2 mt-1 font-semibold bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                         >
// //                             <option value="">Choose the campaign you are interested in</option>
// //                             {campaigns.map((c) => (
// //                                 <option key={c.id} value={c.title}>
// //                                     {c.title}
// //                                 </option>
// //                             ))}
// //                         </select>
// //                     </div>

// //                     {/* Full Name */}
// //                     <div className="mb-4">
// //                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Guardian/Teacher)</label>
// //                         <input
// //                             type="text"
// //                             id="name"
// //                             name="name"
// //                             required
// //                             onChange={handleChange}
// //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                         />
// //                     </div>

// //                     {/* Email */}
// //                     <div className="mb-4">
// //                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
// //                         <input
// //                             type="email"
// //                             id="email"
// //                             name="email"
// //                             required
// //                             onChange={handleChange}
// //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                         />
// //                     </div>
                    
// //                     {/* Phone Number */}
// //                     <div className="mb-4">
// //                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
// //                         <input
// //                             type="tel"
// //                             id="phone"
// //                             name="phone"
// //                             required
// //                             onChange={handleChange}
// //                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                         />
// //                     </div>
                    
// //                     {/* Student's Current Grade/Class */}
// //                     <div className="mb-6">
// //                         <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Student's Current Grade/Age</label>
// //                         <select
// //                             id="grade"
// //                             name="grade"
// //                             required
// //                             onChange={handleChange}
// //                             className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
// //                         >
// //                             <option value="">Select Grade/Age Group</option>
// //                             <option value="Primary (5-10)">Primary (Ages 5-10)</option>
// //                             <option value="Junior (11-14)">Junior (Ages 11-14)</option>
// //                             <option value="Secondary (15-18)">Secondary (Ages 15-18)</option>
// //                         </select>
// //                     </div>

// //                     {/* Submit Button */}
// //                     <button
// //                         type="submit"
// //                         className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
// //                         disabled={status === "Submitting..."}
// //                     >
// //                         {status === "Submitting..." ? "Submitting..." : "Book Your Spot"}
// //                     </button>
                    
// //                     {/* Status Message */}
// //                     {status && status !== "Submitting..." && (
// //                         <p className={`mt-4 text-center text-sm ${status.includes("Successfully") ? 'text-green-600' : 'text-red-600'}`}>
// //                             {status}
// //                         </p>
// //                     )}
// //                 </form>
// //             </div>
// //         </div>
// //     );
// // };

// // // --- 3. Main Component ---
// // const EducationCampaigns = () => {
// //     const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
// //     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
// //     const [selectedCampaign, setSelectedCampaign] = useState(null);

// //     const openDetailsModal = (campaign) => {
// //         setSelectedCampaign(campaign);
// //         setIsDetailsModalOpen(true);
// //     };

// //     // Note: The Book Now button does NOT set the selected campaign anymore, 
// //     // as the Booking Modal now allows selecting any campaign inside the form.
// //     const openBookingModal = () => {
// //         setIsBookingModalOpen(true);
// //     };

// //     return (
// //         <div className="min-h-screen p-4 py-12 font-sans sm:p-8">
// //             <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900">
// //                 🌟 Special Campaigns for Rural Children
// //             </h1>
            
// //             {/* Campaign Cards Grid */}
// //             <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2">
// //                 {campaigns.map((campaign) => (
// //                     <div key={campaign.id} className="overflow-hidden transition duration-300 bg-white border-t-4 border-blue-600 shadow-2xl rounded-xl hover:shadow-red-300">
                        
// //                         {/* Image */}
// //                         <div className="h-48 overflow-hidden">
// //                             <img 
// //                                 src={campaign.image} 
// //                                 alt={campaign.title} 
// //                                 className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
// //                             />
// //                         </div>
                        
// //                         {/* Content */}
// //                         <div className="p-6">
// //                             <h2 className="mb-1 text-2xl font-bold text-blue-800">{campaign.title}</h2>
// //                             <p className="mb-4 text-sm font-semibold text-red-600">{campaign.subtitle}</p>
                            
// //                             <p className="mb-6 text-gray-600 line-clamp-3">{campaign.description}</p>
                            
// //                             <div className="flex justify-between space-x-3">
// //                                 <button 
// //                                     onClick={() => openDetailsModal(campaign)}
// //                                     className="flex-1 px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
// //                                 >
// //                                     View Details
// //                                 </button>
// //                                 <button 
// //                                     // This button opens the universal booking modal
// //                                     onClick={openBookingModal} 
// //                                     className="flex-1 px-4 py-2 text-sm font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700"
// //                                 >
// //                                     Book Now
// //                                 </button>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 ))}
// //             </div>
            


// //             {/* Modals are rendered here */}
// //             <DetailsModal 
// //                 isOpen={isDetailsModalOpen} 
// //                 onClose={() => setIsDetailsModalOpen(false)} 
// //                 campaign={selectedCampaign} 
// //             />
            
// //             <BookingModal 
// //                 isOpen={isBookingModalOpen} 
// //                 onClose={() => setIsBookingModalOpen(false)} 
// //                 campaignTitles={campaigns.map(c => c.title)} // Pass all titles for the dropdown
// //             />

// //         </div>
// //     );
// // };

// // export default EducationCampaigns;


// import React, { useState } from 'react';

// // Web3Forms Access Key
// const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// // --- 1. Campaign Data (Final) ---
// const campaigns = [
//     {
//         id: 1,
//         title: "📚 Primary Schooling Kit Distribution",
//         subtitle: "Essential Supplies for Students Aged 5-10",
//         image: "https://images.unsplash.com/photo-1517486808790-a292437651a0?q=80&w=2070&auto=format&fit=crop", 
//         description: "A comprehensive package including school bags, textbooks, notebooks, and stationery provided free of cost to young children in rural areas, ensuring they are equipped for school from day one.",
//         details: [
//             "Target Group: Primary students (Aged 5-10).",
//             "Aid Provided: Full kit (Bag, books, stationery, uniform voucher).",
//             "Location: Village Primary Schools.",
//         ],
//     },
//     {
//         id: 2,
//         title: "📖 Basic Literacy and Numeracy Camp",
//         subtitle: "Foundational Education for Beginners (Ages 7-12)",
//         image: "https://images.unsplash.com/photo-1542744192-eb4ef6f52584?q=80&w=2070&auto=format&fit=crop", 
//         description: "An intensive camp focused on teaching reading, writing, and basic arithmetic to children who have missed early schooling or are struggling with fundamental concepts. Building a strong base for future learning.",
//         details: [
//             "Target Group: Children who need foundational education (Aged 7-12).",
//             "Duration: 6-Week Intensive Camp (5 days/week).",
//             "Focus: Local language literacy, Math basics, General knowledge.",
//             "Location: Community Learning Centers.",
//         ],
//     },
//     {
//         id: 3,
//         title: "💡 Advanced Skills & Stipend Program",
//         subtitle: "Vocational Skills Training + Monthly Study Stipend",
//         image: "https://images.unsplash.com/photo-1509062522246-aa47a06f3353?q=80&w=2070&auto=format&fit=crop", 
//         description: "A program for older students (13+) offering advanced academic help or basic vocational/digital skills training (like coding/tailoring), paired with a small monthly stipend to cover essential study expenses (e.g., transport).",
//         details: [
//             "Target Group: Older students (Aged 13+).",
//             "Aid Provided: Skill training access and a monthly stipend.",
//             "Focus: Skills development and financial assistance.",
//             "Requirement: Need-based assessment required.",
//         ],
//     },
// ];

// // --- 2. Modals ---

// // A. Details Modal
// const DetailsModal = ({ isOpen, onClose, campaign }) => {
//     if (!isOpen || !campaign) return null;

//     return (
//         // Backdrop color removed, defaulting to a transparent overlay or whatever parent provides
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm"> 
//             {/* Modal background set to white for contrast on a potentially light/transparent page background */}
//             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
//                 <button 
//                     onClick={onClose} 
//                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
//                 >
//                     &times;
//                 </button>
                
//                 {/* Text colors adjusted for a light background */}
//                 <h2 className="mb-4 text-3xl font-bold text-blue-800">{campaign.title}</h2> 
//                 <h3 className="pb-2 mb-6 text-xl font-semibold text-gray-700 border-b border-gray-300">{campaign.subtitle}</h3> 
                
//                 <p className="mb-6 text-gray-600">{campaign.description}</p>
                
//                 {/* Accent color for details */}
//                 <h4 className="mb-3 text-lg font-bold text-red-600">Key Campaign Information:</h4> 
//                 <ul className="space-y-2 text-gray-700 list-disc list-inside"> 
//                     {campaign.details.map((detail, index) => (
//                         <li key={index}>{detail}</li>
//                     ))}
//                 </ul>
//             </div>
//         </div>
//     );
// };

// // B. Booking/Application Form Modal (Web3Forms Integrated)
// const BookingModal = ({ isOpen, onClose, campaignTitles }) => {
//     const [status, setStatus] = useState("");
    
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         phone: '',
//         grade: '',
//         campaign: '', 
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         setStatus("Submitting...");

//         const data = new FormData(e.target);
        
//         const selectedCampaignTitle = data.get('campaign');
//         data.append("subject", `New Campaign Booking: ${selectedCampaignTitle}`);
        
//         try {
//             const response = await fetch("https://api.web3forms.com/submit", {
//                 method: "POST",
//                 body: data,
//             });

//             if (response.ok) {
//                 setStatus("Application Submitted Successfully! We will contact you soon.");
//                 e.target.reset();
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
//         // Backdrop color removed, defaulting to transparent
//         <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 backdrop-blur-sm">
//             {/* Modal background set to white */}
//             <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
//                 <button 
//                     onClick={onClose} 
//                     className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
//                 >
//                     &times;
//                 </button>
                
//                 {/* Text colors adjusted for a light background */}
//                 <h2 className="mb-2 text-3xl font-bold text-red-700">Book Your Spot</h2>
//                 <p className="pb-2 mb-6 text-lg text-blue-800 border-b border-gray-300">Apply for a Free Education Campaign</p>
//                 <p className="mb-4 text-sm text-gray-600">Please provide guardian or teacher details.</p>


//                 <form onSubmit={handleSubmit}>
//                     <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                    
//                     {/* Campaign Selection */}
//                     <div className="mb-4">
//                         <label htmlFor="campaign" className="block text-sm font-medium text-gray-700">Select Campaign</label>
//                         <select
//                             id="campaign"
//                             name="campaign"
//                             required
//                             onChange={handleChange}
//                             // Input styles adjusted for light theme
//                             className="block w-full px-3 py-2 mt-1 font-semibold bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         >
//                             <option value="">Choose the campaign you are interested in</option>
//                             {campaigns.map((c) => (
//                                 <option key={c.id} value={c.title}>
//                                     {c.title}
//                                 </option>
//                             ))}
//                         </select>
//                     </div>

//                     {/* Form fields */}
//                     <div className="mb-4">
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Guardian/Teacher)</label>
//                         <input
//                             type="text"
//                             id="name"
//                             name="name"
//                             required
//                             onChange={handleChange}
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         />
//                     </div>

//                     <div className="mb-4">
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//                         <input
//                             type="email"
//                             id="email"
//                             name="email"
//                             required
//                             onChange={handleChange}
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         />
//                     </div>
                    
//                     <div className="mb-4">
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
//                         <input
//                             type="tel"
//                             id="phone"
//                             name="phone"
//                             required
//                             onChange={handleChange}
//                             className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         />
//                     </div>
                    
//                     <div className="mb-6">
//                         <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Student's Current Grade/Age</label>
//                         <select
//                             id="grade"
//                             name="grade"
//                             required
//                             onChange={handleChange}
//                             className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
//                         >
//                             <option value="">Select Grade/Age Group</option>
//                             <option value="Primary (5-10)">Primary (Ages 5-10)</option>
//                             <option value="Junior (11-14)">Junior (Ages 11-14)</option>
//                             <option value="Secondary (15-18)">Secondary (Ages 15-18)</option>
//                         </select>
//                     </div>

//                     {/* Submit Button */}
//                     <button
//                         type="submit"
//                         className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
//                         disabled={status === "Submitting..."}
//                     >
//                         {status === "Submitting..." ? "Submitting..." : "Book Your Spot"}
//                     </button>
                    
//                     {/* Status Message */}
//                     {status && status !== "Submitting..." && (
//                         <p className={`mt-4 text-center text-sm ${status.includes("Successfully") ? 'text-green-600' : 'text-red-600'}`}>
//                             {status}
//                         </p>
//                     )}
//                 </form>
//             </div>
//         </div>
//     );
// };

// // --- 3. Main Component ---
// const EducationCampaigns = () => {
//     const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
//     const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
//     const [selectedCampaign, setSelectedCampaign] = useState(null);

//     const openDetailsModal = (campaign) => {
//         setSelectedCampaign(campaign);
//         setIsDetailsModalOpen(true);
//     };

//     const openBookingModal = () => {
//         setIsBookingModalOpen(true);
//     };

//     return (
//         // Removed `bg-gray-800` from here. The background will now be transparent or browser default.
//         <div className="min-h-screen p-4 py-12 font-sans sm:p-8"> 
//             {/* Heading text color adjusted for better visibility on a potentially light/transparent background */}
//             <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900"> 
//                 🌟 Special Campaigns for Rural Children
//             </h1>
            
//             {/* Campaign Cards Grid */}
//             <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2">
//                 {campaigns.map((campaign) => (
//                     // Card background set to white for clear separation without a page background
//                     <div key={campaign.id} className="overflow-hidden transition duration-300 bg-white border-t-4 border-blue-600 shadow-2xl rounded-xl hover:shadow-red-300">
                        
//                         {/* Image */}
//                         <div className="h-48 overflow-hidden">
//                             <img 
//                                 src={campaign.image} 
//                                 alt={campaign.title} 
//                                 className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
//                             />
//                         </div>
                        
//                         {/* Content */}
//                         <div className="p-6">
//                             <h2 className="mb-1 text-2xl font-bold text-blue-800">{campaign.title}</h2> 
//                             <p className="mb-4 text-sm font-semibold text-red-600">{campaign.subtitle}</p> 
                            
//                             <p className="mb-6 text-gray-600 line-clamp-3">{campaign.description}</p> 
                            
//                             <div className="flex justify-between space-x-3">
//                                 <button 
//                                     onClick={() => openDetailsModal(campaign)}
//                                     className="flex-1 px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
//                                 >
//                                     View Details
//                                 </button>
//                                 <button 
//                                     onClick={openBookingModal} 
//                                     className="flex-1 px-4 py-2 text-sm font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700"
//                                 >
//                                     Book Now
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
            
//             {/* Modals are rendered here */}
//             <DetailsModal 
//                 isOpen={isDetailsModalOpen} 
//                 onClose={() => setIsDetailsModalOpen(false)} 
//                 campaign={selectedCampaign} 
//             />
            
//             <BookingModal 
//                 isOpen={isBookingModalOpen} 
//                 onClose={() => setIsBookingModalOpen(false)} 
//                 campaignTitles={campaigns.map(c => c.title)} 
//             />

//         </div>
//     );
// };

// export default EducationCampaigns;



import React, { useState } from 'react';

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833"; 

// --- 1. Campaign Data (Final) ---
const campaigns = [
    {
        id: 1,
        title: "📚 Primary Schooling Kit Distribution",
        subtitle: "Essential Supplies for Students Aged 5-10",
        image: "https://th.bing.com/th/id/R.38604bd1efd3ce7c72de9c2267690d8a?rik=12vdqiqQInBciw&pid=ImgRaw&r=0", 
        description: "A comprehensive package including school bags, textbooks, notebooks, and stationery provided free of cost to young children in rural areas, ensuring they are equipped for school from day one.",
        details: [
            "Target Group: Primary students (Aged 5-10).",
            "Aid Provided: Full kit (Bag, books, stationery, uniform voucher).",
            "Location: Village Primary Schools.",
        ],
    },
    {
        id: 2,
        title: "📖 Basic Literacy and Numeracy Camp",
        subtitle: "Foundational Education for Beginners (Ages 7-12)",
        image: "https://areai4africa.org/wp-content/uploads/2022/08/FT5.jpg", 
        description: "An intensive camp focused on teaching reading, writing, and basic arithmetic to children who have missed early schooling or are struggling with fundamental concepts. Building a strong base for future learning.",
        details: [
            "Target Group: Children who need foundational education (Aged 7-12).",
            "Duration: 6-Week Intensive Camp (5 days/week).",
            "Focus: Local language literacy, Math basics, General knowledge.",
            "Location: Community Learning Centers.",
        ],
    },
    {
        id: 3,
        title: "💡 Advanced Skills & Stipend Program",
        subtitle: "Vocational Skills Training + Monthly Study Stipend",
        image: "https://images.unsplash.com/photo-1569653402334-2e98fbaa80ee?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1331", 
        description: "A program for older students (13+) offering advanced academic help or basic vocational/digital skills training (like coding/tailoring), paired with a small monthly stipend to cover essential study expenses (e.g., transport).",
        details: [
            "Target Group: Older students (Aged 13+).",
            "Aid Provided: Skill training access and a monthly stipend.",
            "Focus: Skills development and financial assistance.",
            "Requirement: Need-based assessment required.",
        ],
    },
];

// --- 2. Modals ---

// A. Details Modal
const DetailsModal = ({ isOpen, onClose, campaign }) => {
    if (!isOpen || !campaign) return null;

    return (
        // Modal backdrop, minimal semi-transparent dark overlay for focus
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black/30 backdrop-blur-sm"> 
            {/* Modal background white */}
            <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
                <button 
                    onClick={onClose} 
                    className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
                >
                    &times;
                </button>
                
                <h2 className="mb-4 text-3xl font-bold text-blue-800">{campaign.title}</h2> 
                <h3 className="pb-2 mb-6 text-xl font-semibold text-gray-700 border-b border-gray-300">{campaign.subtitle}</h3> 
                
                <p className="mb-6 text-gray-600">{campaign.description}</p>
                
                <h4 className="mb-3 text-lg font-bold text-red-600">Key Campaign Information:</h4> 
                <ul className="space-y-2 text-gray-700 list-disc list-inside"> 
                    {campaign.details.map((detail, index) => (
                        <li key={index}>{detail}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

// B. Booking/Application Form Modal (Web3Forms Integrated)
const BookingModal = ({ isOpen, onClose, campaignTitles }) => {
    const [status, setStatus] = useState("");
    
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        grade: '',
        campaign: '', 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Submitting...");

        const data = new FormData(e.target);
        
        const selectedCampaignTitle = data.get('campaign');
        data.append("subject", `New Campaign Booking: ${selectedCampaignTitle}`);
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: data,
            });

            if (response.ok) {
                setStatus("Application Submitted Successfully! We will contact you soon.");
                e.target.reset();
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
        // Modal backdrop, minimal semi-transparent dark overlay for focus
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 bg-black/30 backdrop-blur-sm">
            {/* Modal background white */}
            <div className="relative w-full max-w-lg p-8 duration-300 bg-white shadow-2xl rounded-xl animate-in zoom-in">
                <button 
                    onClick={onClose} 
                    className="absolute text-3xl text-gray-500 transition duration-200 top-4 right-4 hover:text-red-600"
                >
                    &times;
                </button>
                
                <h2 className="mb-2 text-3xl font-bold text-red-700">Book Your Spot</h2>
                <p className="pb-2 mb-6 text-lg text-blue-800 border-b border-gray-300">Apply for a Free Education Campaign</p>
                <p className="mb-4 text-sm text-gray-600">Please provide guardian or teacher details.</p>


                <form onSubmit={handleSubmit}>
                    <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
                    
                    {/* Campaign Selection */}
                    <div className="mb-4">
                        <label htmlFor="campaign" className="block text-sm font-medium text-gray-700">Select Campaign</label>
                        <select
                            id="campaign"
                            name="campaign"
                            required
                            onChange={handleChange}
                            className="block w-full px-3 py-2 mt-1 font-semibold bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                            <option value="">Choose the campaign you are interested in</option>
                            {campaigns.map((c) => (
                                <option key={c.id} value={c.title}>
                                    {c.title}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Form fields */}
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name (Guardian/Teacher)</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onChange={handleChange}
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
                            onChange={handleChange}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>
                    
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            onChange={handleChange}
                            className="block w-full px-3 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        />
                    </div>
                    
                    <div className="mb-6">
                        <label htmlFor="grade" className="block text-sm font-medium text-gray-700">Student's Current Grade/Age</label>
                        <select
                            id="grade"
                            name="grade"
                            required
                            onChange={handleChange}
                            className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
                        >
                            <option value="">Select Grade/Age Group</option>
                            <option value="Primary (5-10)">Primary (Ages 5-10)</option>
                            <option value="Junior (11-14)">Junior (Ages 11-14)</option>
                            <option value="Secondary (15-18)">Secondary (Ages 15-18)</option>
                        </select>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full px-4 py-3 text-lg font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300 disabled:bg-red-400"
                        disabled={status === "Submitting..."}
                    >
                        {status === "Submitting..." ? "Submitting..." : "Book Your Spot"}
                    </button>
                    
                    {/* Status Message */}
                    {status && status !== "Submitting..." && (
                        <p className={`mt-4 text-center text-sm ${status.includes("Successfully") ? 'text-green-600' : 'text-red-600'}`}>
                            {status}
                        </p>
                    )}
                </form>
            </div>
        </div>
    );
};

// --- 3. Main Component ---
const EducationCampaigns = () => {
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    const openDetailsModal = (campaign) => {
        setSelectedCampaign(campaign);
        setIsDetailsModalOpen(true);
    };

    const openBookingModal = () => {
        setIsBookingModalOpen(true);
    };

    return (
        // **********************************************
        // MAIN PAGE BACKGROUND CLASS REMOVED
        // Browser's default transparent/white background will be used.
        // **********************************************
        <div className="min-h-screen p-4 py-12 font-sans sm:p-8"> 
            <h1 className="mb-10 text-4xl font-extrabold text-center text-gray-900"> 
                🌟 Special Campaigns for Rural Children
            </h1>
            
            {/* Campaign Cards Grid */}
            <div className="grid max-w-6xl gap-8 mx-auto lg:grid-cols-3 md:grid-cols-2">
                {campaigns.map((campaign) => (
                    // Card background remains white
                    <div key={campaign.id} className="overflow-hidden transition duration-300 bg-white border-t-4 border-blue-600 shadow-2xl rounded-xl hover:shadow-red-300">
                        
                        {/* Image */}
                        <div className="h-48 overflow-hidden">
                            <img 
                                src={campaign.image} 
                                alt={campaign.title} 
                                className="object-cover w-full h-full transition-transform duration-500 hover:scale-110" 
                            />
                        </div>
                        
                        {/* Content */}
                        <div className="p-6">
                            <h2 className="mb-1 text-2xl font-bold text-blue-800">{campaign.title}</h2> 
                            <p className="mb-4 text-sm font-semibold text-red-600">{campaign.subtitle}</p> 
                            
                            <p className="mb-6 text-gray-600 line-clamp-3">{campaign.description}</p> 
                            
                            <div className="flex justify-between space-x-3">
                                <button 
                                    onClick={() => openDetailsModal(campaign)}
                                    className="flex-1 px-4 py-2 text-sm font-semibold text-white transition duration-300 bg-gray-600 rounded-lg hover:bg-gray-700"
                                >
                                    View Details
                                </button>
                                <button 
                                    onClick={openBookingModal} 
                                    className="flex-1 px-4 py-2 text-sm font-bold text-white transition duration-300 bg-red-600 rounded-lg hover:bg-red-700"
                                >
                                    Book Now
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* Modals are rendered here */}
            <DetailsModal 
                isOpen={isDetailsModalOpen} 
                onClose={() => setIsDetailsModalOpen(false)} 
                campaign={selectedCampaign} 
            />
            
            <BookingModal 
                isOpen={isBookingModalOpen} 
                onClose={() => setIsBookingModalOpen(false)} 
                campaignTitles={campaigns.map(c => c.title)} 
            />

        </div>
    );
};

export default EducationCampaigns;