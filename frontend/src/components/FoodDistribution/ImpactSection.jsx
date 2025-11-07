import React from 'react';
import { motion } from 'framer-motion';

// Using stable, descriptive placeholder URLs for all 6 sections to ensure compilation.
const RescueFoodPlaceholder = "https://placehold.co/700x500/004d40/ffffff?text=FOOD+RESCUE"; 
const EnvironmentPlaceholder = "https://placehold.co/700x500/388e3c/ffffff?text=ECO+ASSISTANCE"; 
const CommunityPlaceholder = "https://placehold.co/700x500/ffc107/000000?text=COMMUNITY+BUILDING"; 

// Placeholders for the 3 new requested cards
const DistributeFoodPlaceholder = "https://placehold.co/700x500/0288d1/ffffff?text=FREE+FOOD+DISTRIBUTION"; 
const CollectDonationPlaceholder = "https://placehold.co/700x500/6a1b9a/ffffff?text=DONATION+COLLECTION"; 
const AddVolunteerPlaceholder = "https://placehold.co/700x500/d32f2f/ffffff?text=JOIN+VOLUNTEERS"; 

const ImpactSection = () => {
  // Common styles for the primary action links - keeping your original red link style
  const linkClasses = "block mt-4 text-red-600 font-bold hover:text-red-700 transition duration-150 text-base tracking-wider";

  // Framer Motion variants for fade-in-up animation
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15, // Slightly faster stagger for 6 items
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
  };

  const services = [
    // --- ORIGINAL THREE CARDS (with updated descriptions/links for clarity) ---
    {
      title: "WE RESCUE FOOD",
      image: RescueFoodPlaceholder,
      alt: "Volunteer rescuing food from a local business",
      description: "Using our app, we engage volunteers to transfer fresh food surpluses from local businesses to social service agencies serving the food insecure.",
      linkText: "BECOME A FOOD RESCUER",
      linkUrl: "#rescue",
    },
    {
      title: "WE HELP THE ENVIRONMENT",
      image: EnvironmentPlaceholder,
      alt: "People planting in a garden",
      description: "Reducing food waste is critical for the environment, as it contributes significantly to global greenhouse gas emissions. We divert food from landfills.",
      linkText: "LEARN ABOUT OUR IMPACT",
      linkUrl: "#environment",
    },
    {
      title: "WE CREATE COMMUNITY",
      image: CommunityPlaceholder,
      alt: "Group of people at a community event",
      description: "Our model empowers local communities to serve themselves. All donors, rescuers, and partners are members of the communities where we operate.",
      linkText: "START A SITE HERE",
      linkUrl: "#community",
    },
    
    // --- NEW THREE REQUESTED CARDS (using the new titles) ---
    {
      title: "WE DISTRIBUTE FREE FOOD",
      image: DistributeFoodPlaceholder,
      alt: "Volunteers distributing free meals and food parcels",
      description: "We ensure that nourishing, fresh food reaches vulnerable individuals directly, fighting hunger and promoting well-being across all locations we serve.",
      linkText: "GET FOOD ASSISTANCE",
      linkUrl: "#food-assistance",
    },
    {
      title: "WE COLLECT DONATIONS",
      image: CollectDonationPlaceholder,
      alt: "People contributing money and goods to a donation box",
      description: "Every contribution, big or small, directly fuels our missions. We meticulously manage all donations to maximize our operational impact.",
      linkText: "DONATE NOW AND HELP",
      linkUrl: "#donate",
    },
    {
      title: "WE ADD VOLUNTEERS",
      image: AddVolunteerPlaceholder,
      alt: "New volunteers joining hands and signing up for service",
      description: "The heart of our work is our volunteers. We constantly welcome new members, providing training to be the hands and feet of change in the community.",
      linkText: "BECOME A VOLUNTEER TODAY",
      linkUrl: "#volunteer",
    },
  ];

  return (
    <div className="py-12 font-sans bg-gray-50 sm:py-20">
      {/* Section Header */}
      <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          HOW WE MAKE AN IMPACT
        </h2>
        {/* Modern Red Underline with rounded cap */}
        <motion.div 
          className="w-20 h-1.5 mx-auto mt-3 mb-12 bg-red-600 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 80 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>
      </div>

      {/* Six Column Grid Container */}
      <motion.div
        className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="show" // Animate when component comes into view
        viewport={{ once: true, amount: 0.2 }} // Only animate once, when 20% of the item is visible
      >
        {/* This grid will automatically create two rows of three cards on desktop (md:grid-cols-3) */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 xl:gap-16">
          
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="p-6 text-center transition-all duration-300 transform bg-white shadow-2xl rounded-xl hover:shadow-red-300/50 hover:-translate-y-1" 
              variants={itemVariants}
            >
              {/* Image Container */}
              <div className="mb-6 overflow-hidden rounded-lg aspect-[4/3]">
                <img 
                  src={service.image} 
                  alt={service.alt} 
                  // Ensure image covers the area and scales beautifully
                  className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                />
              </div>
              
              <h3 className="mb-4 text-xl font-extrabold text-gray-900 uppercase">
                {service.title}
              </h3>
              
              <p className="text-base leading-relaxed text-gray-600 mb-6 min-h-[5rem]">
                {service.description}
              </p>
              
              {/* Call to Action Link */}
              <a href={service.linkUrl} className={linkClasses}>
                {service.linkText}
              </a>
            </motion.div>
          ))}
          
        </div>
      </motion.div>
    </div>
  );
};

export default ImpactSection;