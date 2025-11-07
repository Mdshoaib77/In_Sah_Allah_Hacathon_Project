// src/components/GetInTouch.jsx

import React from 'react';
import { motion } from 'framer-motion'; 
import { FaPhoneAlt, FaExclamationTriangle, FaEnvelope, FaRegEnvelopeOpen } from 'react-icons/fa';

// --- Web3Forms Access Key ---
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// -----------------------------

// --- Framer Motion Variants ---
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
        opacity: 1, 
        y: 0, 
        transition: { 
            duration: 0.8, 
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.1,
        } 
    }
};

const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } }
};

const GetInTouch = () => {
  return (
    <section className="px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 md:text-5xl">
            <span className="text-red-600">Get in Touch</span>
          </h2>
        </div>

        {/* Main Content Grid (Animated Container) */}
        <motion.div
          className="grid gap-10 lg:grid-cols-2"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          
          {/* Left Column: Contact Form */}
          <motion.div 
            className="p-8 bg-white border border-gray-100 shadow-xl rounded-2xl"
            variants={itemVariants}
          >
            <form action="https://api.web3forms.com/submit" method="POST" className="space-y-6">
              <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
              <input type="hidden" name="subject" value="New Contact Form Submission" />
              <input type="hidden" name="redirect" value="https://web3forms.com/success" />

              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block mb-2 text-base font-semibold text-gray-700">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="w-full px-5 py-3 transition duration-150 border border-gray-300 rounded-xl focus:ring-red-500 focus:border-red-500" 
                  placeholder="John Doe" 
                  required 
                />
              </div>

              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block mb-2 text-base font-semibold text-gray-700">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="w-full px-5 py-3 transition duration-150 border border-gray-300 rounded-xl focus:ring-red-500 focus:border-red-500" 
                  placeholder="john@example.com" 
                  required 
                />
              </div>

              {/* Message Field */}
              <div>
                <label htmlFor="message" className="block mb-2 text-base font-semibold text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className="w-full px-5 py-3 transition duration-150 border border-gray-300 resize-none rounded-xl focus:ring-red-500 focus:border-red-500" 
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 text-lg font-bold text-white transition duration-300 transform bg-red-600 rounded-xl shadow-lg hover:bg-red-700 hover:scale-[1.01]"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Right Column: Contact Details */}
          <motion.div 
            className="flex flex-col justify-between p-8 bg-white border border-gray-100 shadow-xl rounded-2xl"
            variants={itemVariants}
          >
            <div className="space-y-8">
              {/* Phone */}
              <div className="flex items-start space-x-4">
                <FaPhoneAlt className="mt-1 text-2xl text-red-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Phone</h3>
                  <p className="text-gray-600">+880-1796343549</p>
                  <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                </div>
              </div>
              
              {/* Emergency Contact */}
              <div className="flex items-start space-x-4">
                <FaExclamationTriangle className="mt-1 text-2xl text-red-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Emergency Contact</h3>
                  <p className="text-gray-600">+880-160012233</p>
                  <p className="text-sm font-medium text-red-500">Urgent blood request line (direct)</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <FaEnvelope className="mt-1 text-2xl text-red-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Email</h3>
                  <p className="text-gray-600">khbiqbal31@gmail.com</p>
                  <p className="text-sm text-gray-500">We usually reply within 1 hour</p>
                </div>
              </div>
              
              {/* Support Email */}
              <div className="flex items-start space-x-4">
                <FaRegEnvelopeOpen className="mt-1 text-2xl text-red-600" />
                <div>
                  <h3 className="text-lg font-bold text-gray-800">Support Email</h3>
                  <p className="text-gray-600">support@bloodconnect.org</p>
                  <p className="text-sm text-gray-500">For general inquiries & assistance</p>
                </div>
              </div>
            </div>
            
            {/* Emergency Box */}
            <div className="p-4 mt-8 font-semibold text-red-700 rounded-lg bg-red-50">
                Emergency? Don't hesitate to call us directly.
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default GetInTouch;