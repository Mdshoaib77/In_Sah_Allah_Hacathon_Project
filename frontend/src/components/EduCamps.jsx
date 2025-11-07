import React, { useState } from 'react';
import { IoClose, IoCheckmarkCircleOutline } from 'react-icons/io5';

// আপনার দেওয়া JSON ডেটা
const campData = [
    {
        id: 1,
        title: "📚 Primary Schooling Kit Distribution",
        subtitle: "Essential Supplies for Students Aged 5-10",
        image: "https://images.unsplash.com/photo-1517486808790-a292437651a0?q=80&w=2070&auto=format&fit=crop", 
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
        image: "https://images.unsplash.com/photo-1542744192-eb4ef6f52584?q=80&w=2070&auto=format&fit=crop", 
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
        image: "https://images.unsplash.com/photo-1509062522246-aa47a06f3353?q=80&w=2070&auto=format&fit=crop", 
        description: "A program for older students (13+) offering advanced academic help or basic vocational/digital skills training (like coding/tailoring), paired with a small monthly stipend to cover essential study expenses (e.g., transport).",
        details: [
            "Target Group: Older students (Aged 13+).",
            "Aid Provided: Skill training access and a monthly stipend.",
            "Focus: Skills development and financial assistance.",
            "Requirement: Need-based assessment required.",
        ],
    },
];

// Web3Forms Access Key
const WEB3FORMS_ACCESS_KEY = "d8bc3a52-5209-4956-93bf-25881ea36833";


// -------------------------------------------------------------
// I. Details Modal Component (Nested)
// -------------------------------------------------------------
const DetailsModal = ({ camp, closeModal }) => {
    // Modal-এর বাইরে ক্লিক করলে বন্ধ করার জন্য
    const handleOutsideClick = (e) => {
        if (e.target.id === "modal-backdrop-details") {
            closeModal();
        }
    };

    return (
        <div 
            id="modal-backdrop-details"
            onClick={handleOutsideClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
            <div className="bg-white rounded-lg shadow-2xl max-w-lg w-full transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                    <div className="flex items-start justify-between pb-3 mb-4 border-b">
                        <h3 className="text-2xl font-bold text-indigo-700">{camp.title} Details</h3>
                        <button onClick={closeModal} className="text-gray-500 transition duration-150 hover:text-gray-800">
                            <IoClose size={24} />
                        </button>
                    </div>
                    
                    <img className="object-cover w-full h-40 mb-4 rounded-md" src={camp.image} alt={camp.title} />

                    <p className="mb-2 text-lg font-semibold text-gray-700">{camp.subtitle}</p>
                    <p className="mb-4 text-gray-600">{camp.description}</p>

                    <h4 className="pt-4 mt-4 mb-2 text-xl font-semibold text-gray-800 border-t">Key Information:</h4>
                    <ul className="space-y-2">
                        {camp.details.map((detail, index) => (
                            <li key={index} className="flex items-center text-gray-700">
                                <IoCheckmarkCircleOutline className="flex-shrink-0 mr-2 text-green-500" size={20} />
                                <span>{detail}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};


// -------------------------------------------------------------
// II. Booking Modal Component (Nested) - Web3Forms Integration
// -------------------------------------------------------------
const BookingModal = ({ camp, closeModal }) => {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        notes: '',
        campTitle: camp.title, 
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('Submitting...');

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    ...formData,
                    access_key: WEB3FORMS_ACCESS_KEY, // Access Key যোগ করা হয়েছে
                }),
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Booking successful! We will contact you soon.');
                setTimeout(closeModal, 3000); 
            } else {
                console.error("Web3Forms Error:", data);
                setStatus('Submission failed: ' + data.message);
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            setStatus('An unexpected error occurred.');
        }
    };
    
    const handleOutsideClick = (e) => {
        if (e.target.id === "modal-backdrop-booking") {
            closeModal();
        }
    };

    return (
        <div 
            id="modal-backdrop-booking"
            onClick={handleOutsideClick}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50"
        >
            <div className="bg-white rounded-lg shadow-2xl max-w-md w-full transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto">
                <form onSubmit={handleSubmit} className="p-6">
                    <div className="flex items-start justify-between pb-3 mb-4 border-b">
                        <h3 className="text-2xl font-bold text-green-600">Book Camp: {camp.title}</h3>
                        <button type="button" onClick={closeModal} className="text-gray-500 transition duration-150 hover:text-gray-800">
                            <IoClose size={24} />
                        </button>
                    </div>
                    
                    {/* Hidden Field for Web3Forms access key (for security, it's already in the JSON payload) */}
                    {/* <input type="hidden" name="access_key" value={WEB3FORMS_ACCESS_KEY} /> */}
                    
                    <p className="mb-4 text-sm text-gray-600">Please fill out the form to reserve a spot for the camp.</p>

                    {/* Hidden Field for Camp Title */}
                    <input type="hidden" name="Camp_Title" value={camp.title} /> {/* Field name changed for clarity in email */}

                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-bold text-gray-700">Full Name</label>
                        <input type="text" id="name" name="Name" value={formData.name} onChange={handleChange} required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-bold text-gray-700">Email Address</label>
                        <input type="email" id="email" name="Email" value={formData.email} onChange={handleChange} required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"/>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="phone" className="block mb-2 text-sm font-bold text-gray-700">Phone Number</label>
                        <input type="tel" id="phone" name="Phone_Number" value={formData.phone} onChange={handleChange} required className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"/>
                    </div>

                    <div className="mb-6">
                        <label htmlFor="notes" className="block mb-2 text-sm font-bold text-gray-700">Additional Notes (Optional)</label>
                        <textarea id="notes" name="Notes" value={formData.notes} onChange={handleChange} rows="3" className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline focus:border-indigo-500"></textarea>
                    </div>

                    {/* Status Message */}
                    {status && (
                        <p className={`mb-4 text-sm font-semibold ${status.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
                            {status}
                        </p>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            disabled={status === 'Submitting...'}
                            className="px-4 py-2 font-bold text-white transition duration-150 bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline disabled:opacity-50"
                        >
                            {status === 'Submitting...' ? 'Sending...' : 'Confirm Booking'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};


// -------------------------------------------------------------
// III. Main EduCamps Component
// -------------------------------------------------------------
const EduCamps = () => {
    const [selectedCamp, setSelectedCamp] = useState(null);
    const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

    // View Details Modal খোলার ফাংশন
    const openDetailsModal = (camp) => {
        setSelectedCamp(camp);
        setIsDetailsModalOpen(true);
    };

    // Booking Modal খোলার ফাংশন
    const openBookingModal = (camp) => {
        setSelectedCamp(camp);
        setIsBookingModalOpen(true);
    };

    // Modal বন্ধ করার ফাংশন
    const closeModal = () => {
        setSelectedCamp(null);
        setIsDetailsModalOpen(false);
        setIsBookingModalOpen(false);
    };
    
    // ক্যাম্প কার্ড কম্পোনেন্ট (Nested)
    const CampCard = ({ camp }) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white transition-transform duration-300 hover:scale-[1.02] flex flex-col">
            <img className="object-cover w-full h-48" src={camp.image} alt={camp.title} />
            <div className="flex-grow px-6 py-4">
                <div className="mb-2 text-xl font-bold text-indigo-600">{camp.title}</div>
                <p className="mb-3 text-base text-gray-700">
                    {camp.subtitle}
                </p>
                <p className="text-sm text-gray-600 line-clamp-3">
                    {camp.description}
                </p>
            </div>
            <div className="flex justify-between px-6 pt-4 pb-4 border-t">
                <button
                    onClick={() => openDetailsModal(camp)}
                    className="px-4 py-2 text-sm font-bold text-white transition duration-300 bg-indigo-500 rounded-full hover:bg-indigo-700"
                >
                    View Details
                </button>
                <button
                    onClick={() => openBookingModal(camp)}
                    className="px-4 py-2 text-sm font-bold text-white transition duration-300 bg-green-500 rounded-full hover:bg-green-700"
                >
                    Book Now
                </button>
            </div>
        </div>
    );


    return (
        <div className="container p-4 mx-auto">
            <h2 className="mb-10 text-4xl font-extrabold text-center text-gray-800">
                🚀 Our Educational Camps
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {campData.map(camp => (
                    <CampCard 
                        key={camp.id} 
                        camp={camp} 
                    />
                ))}
            </div>

            {/* View Details Modal */}
            {isDetailsModalOpen && selectedCamp && (
                <DetailsModal camp={selectedCamp} closeModal={closeModal} />
            )}

            {/* Booking Form Modal */}
            {isBookingModalOpen && selectedCamp && (
                <BookingModal 
                    camp={selectedCamp} 
                    closeModal={closeModal} 
                />
            )}
        </div>
    );
};

export default EduCamps;