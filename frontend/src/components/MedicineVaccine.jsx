// import React from 'react';
// import { motion } from 'framer-motion';
// import { Mail, Shield, Heart, Droplet, Users, BookOpen } from 'lucide-react';

// // --- Placeholder Content & Styling Configuration ---

// // Reusable styling for the CTA buttons
// const buttonClasses = "px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center";
// const secondaryButtonClasses = "px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition duration-300 inline-flex items-center justify-center";
// const linkClasses = "text-red-600 font-bold hover:text-red-700 transition duration-150 text-base cursor-pointer";

// // Framer Motion variants for fade-in-up animation
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2,
//     },
//   },
// };

// const itemVariants = {
//   hidden: { y: 30, opacity: 0 },
//   show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
// };

// // --- Campaign Data ---
// const campaigns = [
//   {
//     icon: Heart,
//     title: "Essential Medicine Supply",
//     description: "We provide regular access to vital prescription and over-the-counter medicines for chronic conditions like diabetes and hypertension, ensuring continuous care.",
//     cta: "Request Medicine",
//     altImage: "https://placehold.co/400x250/fddcce/991b1b?text=Medicine+Supply",
//   },
//   {
//     icon: Shield,
//     title: "Community Vaccination Drives",
//     description: "Organizing free vaccination camps, including seasonal flu shots and primary immunizations, to build herd immunity and protect vulnerable populations.",
//     cta: "Find a Vaccine Site",
//     altImage: "https://placehold.co/400x250/fecaca/991b1b?text=Vaccination+Drive",
//   },
//   {
//     icon: BookOpen,
//     title: "Health Screening & Education",
//     description: "Conducting free health screenings (BP, blood sugar, BMI) and workshops on hygiene, nutrition, and disease prevention for better long-term health outcomes.",
//     cta: "See Next Camp",
//     altImage: "https://placehold.co/400x250/fcc2c2/991b1b?text=Health+Education",
//   },
// ];


// // --- MAIN MedicineVaccine COMPONENT ---

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
//               <img 
//                 className="object-cover w-full mb-8 shadow-2xl rounded-xl h-80 lg:mb-0"
//                 src="https://placehold.co/600x400/fcc2c2/991b1b?text=Community+Health+Workers"
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

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Shield, Heart, Droplet, Users, BookOpen } from 'lucide-react';
import VaccineBg from "../assets/img/medibg.jpg"; 

// --- Placeholder Content & Styling Configuration ---

// Reusable styling for the CTA buttons
const buttonClasses = "px-8 py-3 bg-red-600 text-white font-semibold rounded-full shadow-lg hover:bg-red-700 transition duration-300 transform hover:scale-105 inline-flex items-center justify-center";
const secondaryButtonClasses = "px-6 py-3 border border-red-600 text-red-600 font-semibold rounded-full hover:bg-red-50 transition duration-300 inline-flex items-center justify-center";
const linkClasses = "text-red-600 font-bold hover:text-red-700 transition duration-150 text-base cursor-pointer";

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
  hidden: { y: 30, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

// --- Campaign Data ---
const campaigns = [
  {
    icon: Heart,
    title: "Essential Medicine Supply",
    description: "We provide regular access to vital prescription and over-the-counter medicines for chronic conditions like diabetes and hypertension, ensuring continuous care.",
    cta: "Request Medicine",
    altImage: "https://placehold.co/400x250/fddcce/991b1b?text=Medicine+Supply",
  },
  {
    icon: Shield,
    title: "Community Vaccination Drives",
    description: "Organizing free vaccination camps, including seasonal flu shots and primary immunizations, to build herd immunity and protect vulnerable populations.",
    cta: "Find a Vaccine Site",
    altImage: "https://placehold.co/400x250/fecaca/991b1b?text=Vaccination+Drive",
  },
  {
    icon: BookOpen,
    title: "Health Screening & Education",
    description: "Conducting free health screenings (BP, blood sugar, BMI) and workshops on hygiene, nutrition, and disease prevention for better long-term health outcomes.",
    cta: "See Next Camp",
    altImage: "https://placehold.co/400x250/fcc2c2/991b1b?text=Health+Education",
  },
];


// --- MAIN MedicineVaccine COMPONENT ---

const MedicineVaccine = () => {
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
            <a href="#contact" className={secondaryButtonClasses + " bg-transparent border-white text-white hover:bg-white hover:text-red-600"}>
              <Droplet className="w-5 h-5 mr-2" />
              Support Our Mission
            </a>
          </div>
        </div>
      </motion.header>

      {/* 2. About Us Section */}
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
                src="https://placehold.co/600x400/fcc2c2/991b1b?text=Community+Health+Workers"
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
                
                <button className={linkClasses + " mt-auto"}>
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
          <a href="#" className={buttonClasses + " bg-red-500 hover:bg-red-600"}>
            <Mail className="w-5 h-5 mr-2" />
            Contact Our Team
          </a>
        </div>
      </motion.footer>
    </div>
  );
};

export default MedicineVaccine;