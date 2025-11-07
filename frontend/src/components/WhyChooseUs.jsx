// src/components/WhyChooseUs.jsx

import React from 'react';
// Import motion from framer-motion
import { motion } from 'framer-motion';
// Import icons for the 6 features
import { FaHeart, FaMapMarkerAlt, FaShieldAlt, FaBell, FaStar, FaUsers } from 'react-icons/fa';

// --- Feature Data matching the why.png image ---
const features = [
  {
    icon: FaHeart,
    title: "Easy Registration",
    description: "Quick and simple donor registration process with medical verification.",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
  },
  {
    icon: FaMapMarkerAlt,
    title: "Location-Based Matching",
    description: "Find nearby donors and blood banks for urgent requirements.",
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    icon: FaShieldAlt,
    title: "Verified Donors",
    description: "All donors are medically verified for safe blood donation.",
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    icon: FaBell,
    title: "Real-time Requests",
    description: "Instant notifications for urgent blood donation requests.",
    iconColor: "text-purple-500",
    bgColor: "bg-purple-50",
  },
  {
    icon: FaStar,
    title: "Recognition System",
    description: "Earn badges and recognition for your life-saving contributions.",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-50",
  },
  {
    icon: FaUsers,
    title: "Community Support",
    description: "Join a community of heroes dedicated to saving lives.",
    iconColor: "text-pink-500",
    bgColor: "bg-pink-50",
  },
];

// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
        opacity: 1, 
        transition: {
            staggerChildren: 0.1, 
            when: "beforeChildren"
        } 
    }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
        y: 0, 
        opacity: 1, 
        transition: { 
            type: "spring", 
            stiffness: 100, 
            damping: 12 
        } 
    }
};

const textVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};


const WhyChooseUs = () => {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="mx-auto text-center max-w-7xl">
        
        {/* Title and Subtitle Area (Animated) */}
        <motion.div
            initial="hidden"
            whileInView="visible" // Animation triggers when section scrolls into view
            viewport={{ once: true, amount: 0.3 }} // Ensures it only runs once
            transition={{ staggerChildren: 0.1 }}
        >
          <motion.span 
              className="text-sm font-bold tracking-widest text-red-600 uppercase"
              variants={textVariants}
            >
            OUR FEATURES
          </motion.span>
          <motion.h2 
              className="mt-2 mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl"
              variants={textVariants}
            >
            Why <span className="text-red-600">Choose BloodConnect</span>?
          </motion.h2>
          <motion.p 
              className="max-w-3xl mx-auto mb-16 text-lg text-gray-700"
              variants={textVariants}
            >
            Our platform makes blood donation **simple, safe, and impactful**. Join thousands of donors already making a difference.
          </motion.p>
        </motion.div>


        {/* Feature Cards Grid (Animated) */}
        {/* Changed grid to 3 columns to accommodate 6 features nicely */}
        <motion.div 
            className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible" // Animation triggers when section scrolls into view
            viewport={{ once: true, amount: 0.2 }} // Ensures it only runs once
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center justify-start h-full p-8 text-center transition duration-300 transform bg-white border border-gray-100 shadow-xl rounded-2xl hover:shadow-2xl hover:-translate-y-1"
              variants={cardVariants}
            >
              <div className={`inline-block p-4 mb-6 rounded-full ${feature.bgColor}`}>
                <feature.icon className={`text-3xl ${feature.iconColor}`} />
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

export default WhyChooseUs;