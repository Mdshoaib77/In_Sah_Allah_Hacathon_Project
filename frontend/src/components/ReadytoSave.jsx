// src/components/ReadytoSave.jsx

import React, { useState } from 'react';
import { motion } from 'framer-motion'; 
import { FaHeart, FaSyringe, FaUsers, FaChevronDown } from 'react-icons/fa';

// --- Web3Forms Access Key ---
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";
// -----------------------------

// --- Animation Variants ---
const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

// --- Donate Blood Modal Component (Re-used from BloodHero) ---
const DonateBloodModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
        <div className="p-8">
          <h2 className="flex items-center mb-4 text-3xl font-extrabold text-red-700">
            <FaSyringe className="mr-3 text-red-500" /> Register to Donate Blood
          </h2>
          <p className="pb-4 mb-6 text-gray-600 border-b">
            Your generous donation can save lives. Please provide your details.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Blood Donation Registration (CTA)" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="space-y-4">
              <div>
                <label htmlFor="donor_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name</label>
                <input type="text" id="donor_name" name="name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="donor_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="donor_phone" name="phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-red-500 focus:border-red-500" placeholder="+880 1XXXXXXXXX" required />
              </div>
              <div>
                <label htmlFor="donor_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Blood Group</label>
                <div className="relative">
                  <select id="donor_blood_group" name="blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-red-500 focus:border-red-500" required>
                    <option value="">Select Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                </div>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 font-bold text-white transition duration-200 bg-red-600 rounded-lg shadow-md hover:bg-red-700"
              >
                Submit Donation Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Request Blood Modal Component (Re-used from BloodHero) ---
const RequestBloodModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-70 backdrop-blur-sm">
      <div className="w-full max-w-lg transition-all duration-500 transform scale-100 bg-white shadow-2xl opacity-100 rounded-2xl">
        <div className="p-8">
          <h2 className="flex items-center mb-4 text-3xl font-extrabold text-blue-700">
            <FaUsers className="mr-3 text-blue-500" /> Request for Blood
          </h2>
          <p className="pb-4 mb-6 text-gray-600 border-b">
            If you or someone you know is in urgent need of blood, please fill out this form.
          </p>

          <form action="https://api.web3forms.com/submit" method="POST">
            <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} />
            <input type="hidden" name="subject" value="New Blood Request Received (CTA)" />
            <input type="hidden" name="redirect" value="https://web3forms.com/success" />

            <div className="space-y-4">
              <div>
                <label htmlFor="requester_name" className="block mb-1 text-sm font-semibold text-gray-700">Full Name (Requester)</label>
                <input type="text" id="requester_name" name="requester_name" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="Your Name" required />
              </div>
              <div>
                <label htmlFor="requester_phone" className="block mb-1 text-sm font-semibold text-gray-700">Phone Number</label>
                <input type="tel" id="requester_phone" name="requester_phone" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="+880 1XXXXXXXXX" required />
              </div>
              <div>
                <label htmlFor="required_blood_group" className="block mb-1 text-sm font-semibold text-gray-700">Required Blood Group</label>
                <div className="relative">
                  <select id="required_blood_group" name="required_blood_group" className="w-full px-4 py-2 transition duration-150 bg-white border border-gray-300 rounded-lg appearance-none focus:ring-blue-500 focus:border-blue-500" required>
                    <option value="">Select Required Blood Group</option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                  </select>
                  <FaChevronDown className="absolute text-gray-400 -translate-y-1/2 pointer-events-none right-3 top-1/2" />
                </div>
              </div>
              <div>
                <label htmlFor="patient_condition" className="block mb-1 text-sm font-semibold text-gray-700">Patient Condition / Hospital</label>
                <textarea id="patient_condition" name="patient_condition" rows="3" className="w-full px-4 py-2 transition duration-150 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" placeholder="e.g., Urgent requirement for surgery, Hospital name"></textarea>
              </div>
            </div>
            <div className="flex justify-end mt-6 space-x-3">
              <button
                type="button"
                onClick={onClose}
                className="px-6 py-2 font-medium text-gray-700 transition duration-200 border border-gray-300 rounded-lg hover:bg-gray-100"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-6 py-2 font-bold text-white transition duration-200 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700"
              >
                Submit Blood Request
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};


const ReadytoSave = () => {
    const [isDonateModalOpen, setIsDonateModalOpen] = useState(false);
    const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);

    const openDonateModal = () => setIsDonateModalOpen(true);
    const closeDonateModal = () => setIsDonateModalOpen(false);

    const openRequestModal = () => setIsRequestModalOpen(true);
    const closeRequestModal = () => setIsRequestModalOpen(false);

    return (
        <section className="px-6 py-20">
            <motion.div 
                className="max-w-4xl p-12 mx-auto text-center shadow-xl rounded-3xl"
                // Match the light pink/red background from the image
                style={{ 
                    background: 'linear-gradient(180deg, rgba(255,245,245,1) 0%, rgba(255,230,230,1) 100%)',
                }}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
            >
                <h2 className="mb-4 text-4xl font-extrabold text-gray-900 md:text-5xl">
                    Ready to Save Lives?
                </h2>
                <p className="max-w-2xl mx-auto mb-10 text-lg text-gray-700">
                    Every blood donation can save up to three lives. Join our community of heroes and make a difference today.
                </p>

                <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-6 sm:space-y-0">
                    {/* Register as Donor Button (Opens Donate Modal) */}
                    <button
                        onClick={openDonateModal}
                        className="flex items-center justify-center px-8 py-3 text-lg font-bold text-white transition duration-300 transform bg-red-600 rounded-full shadow-lg hover:bg-red-700 hover:scale-105"
                    >
                        <FaHeart className="inline mr-2" /> Register as Donor
                    </button>

                    {/* Request For Blood Button (Opens Request Modal) */}
                    <button
                        onClick={openRequestModal}
                        className="flex items-center justify-center px-8 py-3 text-lg font-bold text-red-600 transition duration-300 transform bg-white border-2 border-red-300 rounded-full shadow-lg hover:bg-red-50 hover:scale-105"
                    >
                        <FaUsers className="inline mr-2" /> Request For Blood
                    </button>
                </div>
            </motion.div>

            {/* Modals */}
            <DonateBloodModal isOpen={isDonateModalOpen} onClose={closeDonateModal} />
            <RequestBloodModal isOpen={isRequestModalOpen} onClose={closeRequestModal} />
        </section>
    );
};

export default ReadytoSave;