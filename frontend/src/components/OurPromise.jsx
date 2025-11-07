// // src/components/OurPromise.jsx

// import React from 'react';
// import { FaHeartbeat, FaMobileAlt, FaUserCheck, FaGlobeAmericas } from 'react-icons/fa';

// const features = [
//   {
//     icon: FaHeartbeat,
//     title: "Real-Time Requests",
//     description: "Instantly respond to urgent blood needs in your city and nearby areas.",
//   },
//   {
//     icon: FaMobileAlt,
//     title: "Mobile-Friendly",
//     description: "Access BloodConnect easily from any device, anytime and anywhere.",
//   },
//   {
//     icon: FaUserCheck,
//     title: "Verified Donors",
//     description: "Every donor is strictly verified to ensure trust and safety.",
//   },
//   {
//     icon: FaGlobeAmericas,
//     title: "Nationwide Coverage",
//     description: "We connect lives across cities and remote areas all over the country.",
//   },
// ];

// const OurPromise = () => {
//   return (
//     <section className="px-6 py-20 mb-10 bg-red-50/50"> {/* Use a very light pink background */}
//       <div className="max-w-6xl mx-auto text-center">
        
//         {/* Title and Subtitle Area */}
//         <span className="text-sm font-bold tracking-widest text-red-500 uppercase">
//           OUR PROMISE
//         </span>
//         <h2 className="mt-2 mb-4 text-5xl font-extrabold text-gray-900">
//           Why <span className="text-red-600">BloodConnect</span> Stands Out
//         </h2>
//         <p className="max-w-3xl mx-auto mb-16 text-lg text-gray-700">
//           We go beyond just connecting donors and patients — we ensure safety, accessibility, and a reliable network that truly saves lives.
//         </p>

//         {/* Feature Cards Grid */}
//         <div className="grid gap-8 md:grid-cols-4">
//           {features.map((feature, index) => (
//             <div 
//               key={index} 
//               className="p-8 transition duration-300 transform bg-white border-b-4 border-red-100 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1" // Subtle border bottom for depth
//             >
//               <div className="inline-block p-4 mb-6 border border-red-100 rounded-full bg-red-50">
//                 <feature.icon className="text-3xl text-red-600" />
//               </div>
              
//               <h3 className="mb-3 text-xl font-bold text-gray-800">
//                 {feature.title}
//               </h3>
//               <p className="text-gray-600">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default OurPromise;

// src/components/OurPromise.jsx

import React from 'react';
// Import motion
import { motion } from 'framer-motion'; 
import { FaHeartbeat, FaMobileAlt, FaUserCheck, FaGlobeAmericas } from 'react-icons/fa';

const features = [
  {
    icon: FaHeartbeat,
    title: "Real-Time Requests",
    description: "Instantly respond to urgent blood needs in your city and nearby areas.",
  },
  {
    icon: FaMobileAlt,
    title: "Mobile-Friendly",
    description: "Access BloodConnect easily from any device, anytime and anywhere.",
  },
  {
    icon: FaUserCheck,
    title: "Verified Donors",
    description: "Every donor is strictly verified to ensure trust and safety.",
  },
  {
    icon: FaGlobeAmericas,
    title: "Nationwide Coverage",
    description: "We connect lives across cities and remote areas all over the country.",
  },
];

// Animation Variants
const containerVariants = {
    // Start state (Hidden)
    hidden: { opacity: 0 },
    // End state (Visible) - Stagger the children's animation
    visible: { 
        opacity: 1, 
        transition: {
            staggerChildren: 0.15, // Delay between each card's animation
            when: "beforeChildren"
        } 
    }
};

const cardVariants = {
    // Start state (Hidden)
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    // End state (Visible)
    visible: { 
        y: 0, 
        opacity: 1, 
        scale: 1,
        transition: { 
            type: "spring", 
            stiffness: 100, // Makes it a bit bouncy
            damping: 10 
        } 
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const OurPromise = () => {
  return (
    <section className="px-6 py-20 bg-red-50/50"> {/* Use a very light pink background */}
      <div className="max-w-6xl mx-auto text-center">
        
        {/* Title and Subtitle Area (Animated) */}
        <motion.div
            initial="hidden"
            whileInView="visible" // Animation triggers when section scrolls into view
            viewport={{ once: true, amount: 0.3 }} // Ensures it only runs once
            transition={{ staggerChildren: 0.1 }}
        >
          <motion.span 
              className="text-sm font-bold tracking-widest text-red-500 uppercase"
              variants={textVariants}
            >
            OUR PROMISE
          </motion.span>
          <motion.h2 
              className="mt-2 mb-4 text-5xl font-extrabold text-gray-900"
              variants={textVariants}
            >
            Why <span className="text-red-600">BloodConnect</span> Stands Out
          </motion.h2>
          <motion.p 
              className="max-w-3xl mx-auto mb-16 text-lg text-gray-700"
              variants={textVariants}
            >
            We go beyond just connecting donors and patients — we ensure safety, accessibility, and a reliable network that truly saves lives.
          </motion.p>
        </motion.div>


        {/* Feature Cards Grid (Animated) */}
        <motion.div 
            className="grid gap-8 md:grid-cols-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animation triggers when section scrolls into view
            viewport={{ once: true, amount: 0.5 }} // Ensures it only runs once, starts when 50% visible
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="p-8 transition duration-300 transform bg-white border-b-4 border-red-100 shadow-lg rounded-xl hover:shadow-2xl hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className="inline-block p-4 mb-6 border border-red-100 rounded-full bg-red-50">
                <feature.icon className="text-3xl text-red-600" />
              </div>
              
              <h3 className="mb-3 text-xl font-bold text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurPromise;