import { useState } from 'react';

// Booking Modal Component
const BookingModal = ({ isOpen, onClose, campName }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedService, setSelectedService] = useState(campName || services[0]);
    const [loading, setLoading] = useState(false);
    const [submissionMessage, setSubmissionMessage] = useState(null);

    const handleBookingSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setSubmissionMessage(null);

        // Web3 Access Key (your API/Service integration here)
        const accessKey = "d8bc3a52-5209-4956-93bf-25881ea36833";

        // Collect form data
        const formData = new FormData(e.target);
        const bookingData = {
            name: formData.get("name"),
            email: formData.get("email"),
            service: formData.get("service"),
            address: formData.get("address"),
            accessKey: accessKey,
        };

        // Send data to your Web3 backend or email service here (Example: EmailJS, Firebase, etc.)
        fetch('YOUR_BACKEND_API_URL', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(bookingData),
        })
            .then((response) => response.json())
            .then((data) => {
                setLoading(false);
                if (data.success) {
                    setSubmissionMessage({
                        success: true,
                        text: `Success! Booking confirmed for ${selectedService}. You will receive a confirmation email shortly.`,
                    });
                } else {
                    setSubmissionMessage({
                        success: false,
                        text: `Error! Something went wrong. Please try again.`,
                    });
                }

                // Close modal after a delay
                setTimeout(() => {
                    onClose();
                    setSubmissionMessage(null);
                }, 3000);
            })
            .catch((error) => {
                setLoading(false);
                setSubmissionMessage({
                    success: false,
                    text: `Error! Failed to submit booking. Please try again.`,
                });
                console.error("Booking submission error:", error);
            });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50" onClick={onClose}>
            <div 
                className="bg-white p-8 rounded-xl shadow-2xl w-full max-w-2xl transform transition-all duration-300 scale-95 md:scale-100 max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
            >
                <div className="flex justify-end">
                    <button onClick={onClose} className="text-2xl font-semibold text-gray-500 hover:text-gray-900">&times;</button>
                </div>

                <div className="pb-16 mt-4">
                    <h3 className="text-3xl font-semibold capitalize h3">
                        Book <span className="font-normal text-green-700">Your Free Camp</span>
                    </h3>
                    <p className="mt-2 text-base text-gray-600">
                        Fill out the form below to secure your spot for the **{campName || 'Selected Campaign'}**.
                    </p>
                </div>

                {submissionMessage && (
                    <div className={`p-4 mb-4 text-white rounded-lg ${submissionMessage.success ? 'bg-green-500' : 'bg-red-500'}`}>
                        {submissionMessage.text}
                    </div>
                )}

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                    <div className="flex gap-x-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            required
                            className="w-1/2 px-4 py-2 bg-white border rounded shadow-sm ring-1 ring-gray-300 focus:ring-green-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            required
                            className="w-1/2 px-4 py-2 bg-white border rounded shadow-sm ring-1 ring-gray-300 focus:ring-green-400"
                        />
                    </div>

                    {/* Service Dropdown */}
                    <div className="relative mb-4">
                        <div
                            className="flex items-center justify-between w-full px-4 py-2 bg-white rounded shadow-sm cursor-pointer ring-1 ring-gray-300 hover:ring-green-400"
                            onClick={() => setShowDropdown(!showDropdown)}
                        >
                            <span className="text-gray-700">
                                {selectedService || "Select a Service"}
                            </span>
                            <ChevronDown rotate={showDropdown} />
                        </div>

                        {showDropdown && (
                            <ul className="absolute z-20 w-full mt-1 overflow-y-auto bg-white border border-gray-200 rounded shadow-md max-h-48">
                                {services.map((srv, idx) => (
                                    <li
                                        key={idx}
                                        className="px-4 py-2 text-gray-700 cursor-pointer hover:bg-green-50"
                                        onClick={() => {
                                            setSelectedService(srv);
                                            setShowDropdown(false);
                                        }}
                                    >
                                        {srv}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <input type="hidden" name="service" value={selectedService} />

                    <textarea
                        name="address"
                        rows="4"
                        placeholder="Write your address for next campaign" 
                        required
                        className="w-full px-4 py-2 bg-white rounded shadow-sm resize-none ring-1 ring-gray-300 focus:ring-green-400"
                    ></textarea>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3 text-lg font-medium text-white transition rounded-lg shadow-md bg-gradient-to-r from-green-600 to-teal-700 hover:opacity-90 disabled:opacity-50"
                    >
                        {loading ? "Booking..." : "Confirm Booking"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookingModal;
