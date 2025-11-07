// import React from 'react'

// const WhatWeDo = () => {
//   return (
//     <div>
//         <h1>Alhamdulliah</h1>
//     </div>
//   )
// }

// export default WhatWeDo


import React from 'react';
import { motion } from 'framer-motion';

import rescueFoodImage  from "../../assets/img/image1.jpg"; 
import  createCommunityImage from "../../assets/img/image2.jpg";
import helpEnvironmentImage  from "../../assets/img/7.jpg";  
import DistributeFood  from "../../assets/img/food.avif";  
import CollectDonation  from "../../assets/img/donation.avif";  
import AddVolunteer  from "../../assets/img/volunteer.avif";  
// Replace with actual path to your image

const WhatWeDo = () => {
  // Common styles for the red links
  const linkClasses = "block mt-4 text-red-600 font-bold hover:text-red-700 transition duration-150 text-base";

  // Framer Motion variants for fade-in-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="py-10 bg-white sm:py-16">
      {/* Section Header */}
      <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          WHAT WE DO
        </h2>
        {/* Red Underline - using a div with a fixed width and custom red color */}
        <div className="w-16 h-1 mx-auto mt-2 mb-10 bg-red-600"></div>
      </div>

      {/* Three Column Grid Container */}
      <motion.div
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animate when component comes into view
        viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of the item is visible
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          
          {/* Column 1: WE RESCUE FOOD */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-red-600 uppercase">
              WE RESCUE FOOD
            </h3>
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img 
                src={rescueFoodImage} 
                alt="Volunteer rescuing food" 
                className="object-cover w-full h-64"
              />
            </div>
            
            <p className="text-base leading-relaxed text-gray-600">
              Using our web-based app, we engage volunteers to transfer fresh food surpluses 
              from local businesses to social service agencies serving the food insecure.
            </p>
            <a href="#" className={linkClasses}>
            </a>
          </motion.div>

          {/* Column 2: WE HELP THE ENVIRONMENT */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-red-600 uppercase">
              WE HELP THE ENVIRONMENT
            </h3>
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img 
                src={helpEnvironmentImage} 
                alt="People planting in a garden" 
                className="object-cover w-full h-64"
              />
            </div>
            
            <p className="text-base leading-relaxed text-gray-600">
              Food waste remains one of the top solutions to global warming. Currently, 
              food waste contributes 8 percent of total global greenhouse gas emissions.
            </p>
            <a href="#" className={linkClasses}>
            </a>
          </motion.div>

          {/* Column 3: WE CREATE COMMUNITY */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-red-600 uppercase">
              WE CREATE COMMUNITY
            </h3>
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img 
                src={createCommunityImage} 
                alt="Group of people at a community event" 
                className="object-cover w-full h-64"
              />
            </div>
            
            <p className="text-base leading-relaxed text-gray-600">
              Our model empowers communities to serve themselves with the support of our 
              app. All food donors, rescuers, and agency partners are members of the communities 
              where we operate.
            </p>
            <a href="#" className={linkClasses}>
            </a>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animate when component comes into view
        viewport={{ once: true, amount: 0.3 }} // Only animate once, when 30% of the item is visible
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-12">
          
          {/* Column 1: WE RESCUE FOOD */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-red-600 uppercase">
             FREE FOOD DISTRIBUTION
            </h3>
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img 
                src={ DistributeFood} 
                alt="Volunteer rescuing food" 
                className="object-cover w-full h-64"
              />
            </div>
            
            <p className="text-base leading-relaxed text-gray-600">
             We operate comprehensive free food distribution programs, ensuring direct and dignified access to essential meals for families and individuals experiencing hunger in our communities.
            </p>
            <a href="#" className={linkClasses}>
            </a>
          </motion.div>

          {/* Column 2: WE HELP THE ENVIRONMENT */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-red-600 uppercase">
             WE COLLECT DONATIONS
            </h3>
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img 
                src={CollectDonation} 
                alt="People planting in a garden" 
                className="object-cover w-full h-64"
              />
            </div>
            
            <p className="text-base leading-relaxed text-gray-600">
              Your generosity powers every aspect of our mission. We ensure secure and transparent handling of all funds and goods donated, translating every contribution directly into actionable aid for the community
            </p>
            <a href="#" className={linkClasses}>
            </a>
          </motion.div>

          {/* Column 3: WE CREATE COMMUNITY */}
          <motion.div className="text-center" variants={itemVariants}>
            <h3 className="mb-4 text-lg font-bold text-red-600 uppercase">
              WE ADD VOLUNTEERS
            </h3>
            
            {/* Image */}
            <div className="mb-4 overflow-hidden rounded-lg shadow-md">
              <img 
                src={AddVolunteer} 
                alt="Group of people at a community event" 
                className="object-cover w-full h-64"
              />
            </div>
            
            <p className="text-base leading-relaxed text-gray-600">
              Our model empowers communities to serve themselves with the support of our 
              app. All food donors, rescuers, and agency partners are members of the communities 
              where we operate.
            </p>   
            <a href="#" className={linkClasses}>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default WhatWeDo;