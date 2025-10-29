// // // // import React from "react";

// // // // const Donate = () => {
// // // //   return (
// // // //     <div className="container px-6 py-12 mx-auto">
// // // //       <h1 className="mb-6 text-3xl font-semibold text-center">Donate Now</h1>
// // // //       <p className="mb-6 text-lg text-center">
// // // //         Your donation can make a real difference. Choose an amount and help us create a positive impact in the lives of those in need.
// // // //       </p>
// // // //       {/* Donation form (simplified for example) */}
// // // //       <form className="max-w-md mx-auto">
// // // //         <div className="mb-4">
// // // //           <label className="block mb-2 text-lg font-medium">Donation Amount</label>
// // // //           <input type="number" placeholder="Enter amount" className="w-full px-4 py-2 border rounded-lg" />
// // // //         </div>
// // // //         <div className="mb-4">
// // // //           <label className="block mb-2 text-lg font-medium">Your Name</label>
// // // //           <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded-lg" />
// // // //         </div>
// // // //         <button type="submit" className="w-full py-3 mt-4 btn-primary">
// // // //           Donate Now
// // // //         </button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // };

// // // // export default Donate;


// // // import React, { useState } from 'react';

// // // const DonationForm = () => {
// // //   const [paymentMethod, setPaymentMethod] = useState("");
// // //   const [amount, setAmount] = useState("");
// // //   const [name, setName] = useState("");
// // //   const [email, setEmail] = useState("");
// // //   const [senderNumber, setSenderNumber] = useState("");
// // //   const [donationAmount, setDonationAmount] = useState("");

// // //   // Web3 integration function
// // //   const handleDonate = async () => {
// // //     // Web3 integration for sending data, like to Gmail or saving the amount
// // //     console.log("Donation info", {
// // //       name,
// // //       email,
// // //       paymentMethod,
// // //       senderNumber,
// // //       donationAmount
// // //     });

// // //     // Example Web3 action for sending to Gmail (pseudo-code)
// // //     // await web3.sendTransaction({
// // //     //   to: 'web3address',
// // //     //   value: donationAmount,
// // //     //   data: { ... }
// // //     // });

// // //     alert("Donation successful!");
// // //     // You can also send email using some API or backend service
// // //   };

// // //   return (
// // //     <div className="donation-form-container">
// // //       <h1 className="mb-6 text-3xl text-center">Donate Now</h1>
// // //       <p className="mb-6 text-center">
// // //         Thank you for your contribution. Please fill out the details below.
// // //       </p>

// // //       <form className="max-w-lg mx-auto">
// // //         {/* Name and Email Fields */}
// // //         <div className="mb-4">
// // //           <label className="block text-lg font-medium">Your Name</label>
// // //           <input
// // //             type="text"
// // //             className="w-full p-3 border rounded"
// // //             value={name}
// // //             onChange={(e) => setName(e.target.value)}
// // //             placeholder="Enter your name"
// // //           />
// // //         </div>

// // //         <div className="mb-4">
// // //           <label className="block text-lg font-medium">Your Email</label>
// // //           <input
// // //             type="email"
// // //             className="w-full p-3 border rounded"
// // //             value={email}
// // //             onChange={(e) => setEmail(e.target.value)}
// // //             placeholder="Enter your email"
// // //           />
// // //         </div>

// // //         {/* Payment Method Selector */}
// // //         <div className="mb-4">
// // //           <label className="block text-lg font-medium">Payment Method</label>
// // //           <div className="flex gap-4">
// // //             <label>
// // //               <input
// // //                 type="radio"
// // //                 name="paymentMethod"
// // //                 value="bKash"
// // //                 onChange={(e) => setPaymentMethod(e.target.value)}
// // //               />
// // //               bKash
// // //             </label>
// // //             <label>
// // //               <input
// // //                 type="radio"
// // //                 name="paymentMethod"
// // //                 value="Nagad"
// // //                 onChange={(e) => setPaymentMethod(e.target.value)}
// // //               />
// // //               Nagad
// // //             </label>
// // //             <label>
// // //               <input
// // //                 type="radio"
// // //                 name="paymentMethod"
// // //                 value="Rocket"
// // //                 onChange={(e) => setPaymentMethod(e.target.value)}
// // //               />
// // //               Rocket
// // //             </label>
// // //           </div>
// // //         </div>

// // //         {/* Payment Info */}
// // //         <div className="mb-4">
// // //           <label className="block text-lg font-medium">Payment Number</label>
// // //           <input
// // //             type="text"
// // //             className="w-full p-3 border rounded"
// // //             placeholder="Sender's Number (e.g., 01724519674)"
// // //             value={senderNumber}
// // //             onChange={(e) => setSenderNumber(e.target.value)}
// // //           />
// // //         </div>

// // //         {/* Donation Amount */}
// // //         <div className="mb-4">
// // //           <label className="block text-lg font-medium">Donation Amount</label>
// // //           <input
// // //             type="number"
// // //             className="w-full p-3 border rounded"
// // //             placeholder="Enter donation amount"
// // //             value={donationAmount}
// // //             onChange={(e) => setDonationAmount(e.target.value)}
// // //           />
// // //         </div>

// // //         <div className="flex justify-center">
// // //           <button
// // //             type="button"
// // //             className="px-8 py-3 text-white bg-orange-500 rounded btn-primary"
// // //             onClick={handleDonate}
// // //           >
// // //             Donate Now
// // //           </button>
// // //         </div>
// // //       </form>
// // //     </div>
// // //   );
// // // };

// // // export default DonationForm;


// // import React, { useState } from 'react';
// // import emailjs from 'emailjs-com'; // Import emailjs

// // const DonationForm = () => {
// //   const [paymentMethod, setPaymentMethod] = useState("");
// //   const [amount, setAmount] = useState("");
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [senderNumber, setSenderNumber] = useState("");
// //   const [donationAmount, setDonationAmount] = useState("");

// //   const handleDonate = async () => {
// //     const donationData = {
// //       name,
// //       email,
// //       paymentMethod,
// //       senderNumber,
// //       donationAmount,
// //       accessCode: "d8bc3a52-5209-4956-93bf-25881ea36833", // Access code for Web3
// //     };

// //     // Send data to Gmail using EmailJS
// //     emailjs
// //       .send(
// //         'YOUR_SERVICE_ID', // EmailJS service ID
// //         'YOUR_TEMPLATE_ID', // EmailJS template ID
// //         donationData,
// //         'YOUR_USER_ID' // Your EmailJS user ID
// //       )
// //       .then(
// //         (response) => {
// //           console.log('Success:', response);
// //           alert("Donation successful, check your Gmail!");
// //         },
// //         (error) => {
// //           console.log('Error:', error);
// //           alert("Something went wrong. Please try again.");
// //         }
// //       );
// //   };

// //   return (
// //     <div className="donation-form-container">
// //       <h1 className="mb-6 text-3xl text-center">Donate Now</h1>
// //       <p className="mb-6 text-center">
// //         Thank you for your contribution. Please fill out the details below.
// //       </p>

// //       <form className="max-w-lg mx-auto">
// //         {/* Name and Email Fields */}
// //         <div className="mb-4">
// //           <label className="block text-lg font-medium">Your Name</label>
// //           <input
// //             type="text"
// //             className="w-full p-3 border rounded"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Enter your name"
// //           />
// //         </div>

// //         <div className="mb-4">
// //           <label className="block text-lg font-medium">Your Email</label>
// //           <input
// //             type="email"
// //             className="w-full p-3 border rounded"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Enter your email"
// //           />
// //         </div>

// //         {/* Payment Method Selector */}
// //         <div className="mb-4">
// //           <label className="block text-lg font-medium">Payment Method</label>
// //           <div className="flex gap-4">
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="paymentMethod"
// //                 value="bKash"
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               />
// //               bKash
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="paymentMethod"
// //                 value="Nagad"
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               />
// //               Nagad
// //             </label>
// //             <label>
// //               <input
// //                 type="radio"
// //                 name="paymentMethod"
// //                 value="Rocket"
// //                 onChange={(e) => setPaymentMethod(e.target.value)}
// //               />
// //               Rocket
// //             </label>
// //           </div>
// //         </div>

// //         {/* Payment Info */}
// //         <div className="mb-4">
// //           <label className="block text-lg font-medium">Payment Number</label>
// //           <input
// //             type="text"
// //             className="w-full p-3 border rounded"
// //             placeholder="Sender's Number (e.g., 01724519674)"
// //             value={senderNumber}
// //             onChange={(e) => setSenderNumber(e.target.value)}
// //           />
// //         </div>

// //         {/* Donation Amount */}
// //         <div className="mb-4">
// //           <label className="block text-lg font-medium">Donation Amount</label>
// //           <input
// //             type="number"
// //             className="w-full p-3 border rounded"
// //             placeholder="Enter donation amount"
// //             value={donationAmount}
// //             onChange={(e) => setDonationAmount(e.target.value)}
// //           />
// //         </div>

// //         <div className="flex justify-center">
// //           <button
// //             type="button"
// //             className="px-8 py-3 text-white bg-orange-500 rounded btn-primary"
// //             onClick={handleDonate}
// //           >
// //             Donate Now
// //           </button>
// //         </div>
// //       </form>
// //     </div>
// //   );
// // };

// // export default DonationForm;


// // import React, { useState } from "react";
// // import { FaEnvelope, FaPhone, FaHeadphones } from "react-icons/fa6";
// // import { ToastContainer, toast } from "react-toastify";
// // import "react-toastify/dist/ReactToastify.css";

// // const DonationForm = () => {
// //   const [loading, setLoading] = useState(false);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);

// //     const formData = new FormData(e.target);
// //     formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

// //     const response = await fetch("https://api.web3forms.com/submit", {
// //       method: "POST",
// //       body: formData,
// //     });

// //     const result = await response.json();
// //     setLoading(false);

// //     if (result.success) {
// //       toast.success("✅ Donation information sent successfully!");
// //       e.target.reset();
// //     } else {
// //       toast.error("❌ Submission failed. Please check your connection.");
// //     }
// //   };

// //   return (
// //     <section className="my-24 max-padd-container">
// //       <ToastContainer position="top-center" autoClose={2500} />

// //       {/* Donation Form and Details */}
// //       <div className="flex flex-col gap-20 py-6 xl:flex-row">
// //         {/* Donation Form */}
// //         <div>
// //           <div className="max-w-lg pb-16">
// //             <h3 className="capitalize h3">
// //               Make a <span className="font-[400]">Donation</span>
// //             </h3>
// //             <p>
// //               Your contribution helps to make a difference. Please fill out the form below.
// //             </p>
// //           </div>

// //           {/* Form */}
// //           <form onSubmit={handleSubmit}>
// //             {/* Name and Email Fields */}
// //             <div className="flex gap-x-5">
// //               <div className="w-1/2 mb-4">
// //                 <input
// //                   type="text"
// //                   name="name"
// //                   placeholder="Enter your name"
// //                   required
// //                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
// //                 />
// //               </div>
// //               <div className="w-1/2 mb-4">
// //                 <input
// //                   type="email"
// //                   name="email"
// //                   placeholder="Enter your email"
// //                   required
// //                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
// //                 />
// //               </div>
// //             </div>

// //             {/* Payment Method */}
// //             <div className="mb-4">
// //               <label className="block text-lg font-medium">Payment Method</label>
// //               <div className="flex gap-4">
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="bKash"
// //                     required
// //                   />
// //                   bKash
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="Nagad"
// //                     required
// //                   />
// //                   Nagad
// //                 </label>
// //                 <label>
// //                   <input
// //                     type="radio"
// //                     name="paymentMethod"
// //                     value="Rocket"
// //                     required
// //                   />
// //                   Rocket
// //                 </label>
// //               </div>
// //             </div>

// //             {/* Payment Number */}
// //             <div className="mb-4">
// //               <label className="block text-lg font-medium">Payment Number</label>
// //               <input
// //                 type="text"
// //                 name="senderNumber"
// //                 placeholder="Sender's Number (e.g., 01724519674)"
// //                 required
// //                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
// //               />
// //             </div>

// //             {/* Donation Amount */}
// //             <div className="mb-4">
// //               <label className="block text-lg font-medium">Donation Amount</label>
// //               <input
// //                 type="number"
// //                 name="donationAmount"
// //                 placeholder="Enter donation amount"
// //                 required
// //                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
// //               />
// //             </div>

// //             <div className="flex justify-center">
// //               <button
// //                 type="submit"
// //                 disabled={loading}
// //                 className="btn-secondary !rounded shadow-sm disabled:opacity-50"
// //               >
// //                 {loading ? "Sending..." : "Donate Now"}
// //               </button>
// //             </div>
// //           </form>
// //         </div>

// //         {/* Contact Details */}
// //         <div>
// //           <div className="max-w-lg pb-16">
// //             <h3 className="capitalize h3">
// //               Contact <span className="font-[400]">Details</span>
// //             </h3>
// //             <p>
// //               Feel free to reach out to us through any of the following methods.
// //             </p>
// //           </div>

// //           <div className="flex flex-col gap-3">
// //             <div className="flex flex-col">
// //               <h5 className="mr-4 capitalize h5">Location:</h5>
// //               <p className="flexStart gap-x-2">
// //                 <FaLocationDot /> 1234 Elm Street, Springfield, IL, USA
// //               </p>
// //             </div>

// //             <div className="flex flex-col">
// //               <h5 className="mr-4 capitalize h5">Email:</h5>
// //               <p className="flexStart gap-x-2">
// //                 <FaEnvelope /> info@donationplatform.com
// //               </p>
// //             </div>

// //             <div className="flex flex-col">
// //               <h5 className="mr-4 capitalize h5">Phone:</h5>
// //               <p className="flexStart gap-x-2">
// //                 <FaPhone /> +1 (800) 123-4567
// //               </p>
// //             </div>

// //             <div className="flex flex-col">
// //               <h5 className="mr-4 capitalize h5">Support:</h5>
// //               <p className="flexStart gap-x-2">
// //                 <FaHeadphones /> 24/7 Support is available
// //               </p>
// //             </div>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default DonationForm;


// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaHeadphones, FaLocationDot } from "react-icons/fa";  // Corrected import
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DonationForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     setLoading(false);

//     if (result.success) {
//       toast.success("✅ Donation information sent successfully!");
//       e.target.reset();
//     } else {
//       toast.error("❌ Submission failed. Please check your connection.");
//     }
//   };

//   return (
//     <section className="my-24 max-padd-container">
//       <ToastContainer position="top-center" autoClose={2500} />

//       {/* Donation Form and Details */}
//       <div className="flex flex-col gap-20 py-6 xl:flex-row">
//         {/* Donation Form */}
//         <div>
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//               Make a <span className="font-[400]">Donation</span>
//             </h3>
//             <p>
//               Your contribution helps to make a difference. Please fill out the form below.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Name and Email Fields */}
//             <div className="flex gap-x-5">
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   required
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Payment Method</label>
//               <div className="flex gap-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="bKash"
//                     required
//                   />
//                   bKash
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Nagad"
//                     required
//                   />
//                   Nagad
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Rocket"
//                     required
//                   />
//                   Rocket
//                 </label>
//               </div>
//             </div>

//             {/* Payment Number */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Payment Number</label>
//               <input
//                 type="text"
//                 name="senderNumber"
//                 placeholder="Sender's Number (e.g., 01724519674)"
//                 required
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//               />
//             </div>

//             {/* Donation Amount */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Donation Amount</label>
//               <input
//                 type="number"
//                 name="donationAmount"
//                 placeholder="Enter donation amount"
//                 required
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//               />
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-secondary !rounded shadow-sm disabled:opacity-50"
//               >
//                 {loading ? "Sending..." : "Donate Now"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div>
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//               Contact <span className="font-[400]">Details</span>
//             </h3>
//             <p>
//               Feel free to reach out to us through any of the following methods.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Location:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaLocationDot /> 1234 Elm Street, Springfield, IL, USA
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Email:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaEnvelope /> info@donationplatform.com
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Phone:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaPhone /> +1 (800) 123-4567
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Support:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaHeadphones /> 24/7 Support is available
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DonationForm;


// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaHeadphones, FaMapMarkerAlt } from "react-icons/fa";  // Changed FaLocationDot to FaMapMarkerAlt
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DonationForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     setLoading(false);

//     if (result.success) {
//       toast.success("✅ Donation information sent successfully!");
//       e.target.reset();
//     } else {
//       toast.error("❌ Submission failed. Please check your connection.");
//     }
//   };

//   return (
//     <section className="my-24 max-padd-container">
//       <ToastContainer position="top-center" autoClose={2500} />

//       {/* Donation Form and Details */}
//       <div className="flex flex-col gap-20 py-6 xl:flex-row">
//         {/* Donation Form */}
//         <div>
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//               Make a <span className="font-[400]">Donation</span>
//             </h3>
//             <p>
//               Your contribution helps to make a difference. Please fill out the form below.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Name and Email Fields */}
//             <div className="flex gap-x-5">
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   required
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Payment Method</label>
//               <div className="flex gap-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="bKash"
//                     required
//                   />
//                   bKash
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Nagad"
//                     required
//                   />
//                   Nagad
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Rocket"
//                     required
//                   />
//                   Rocket
//                 </label>
//               </div>
//             </div>

//             {/* Payment Number */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Payment Number</label>
//               <input
//                 type="text"
//                 name="senderNumber"
//                 placeholder="Sender's Number (e.g., 01724519674)"
//                 required
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//               />
//             </div>

//             {/* Donation Amount */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Donation Amount</label>
//               <input
//                 type="number"
//                 name="donationAmount"
//                 placeholder="Enter donation amount"
//                 required
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//               />
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-secondary !rounded shadow-sm disabled:opacity-50"
//               >
//                 {loading ? "Sending..." : "Donate Now"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div>
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//               Contact <span className="font-[400]">Details</span>
//             </h3>
//             <p>
//               Feel free to reach out to us through any of the following methods.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Location:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaMapMarkerAlt /> 1234 Elm Street, Springfield, IL, USA
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Email:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaEnvelope /> info@donationplatform.com
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Phone:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaPhone /> +1 (800) 123-4567
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Support:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaHeadphones /> 24/7 Support is available
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DonationForm;


// import React, { useState } from "react";
// import { FaEnvelope, FaPhone, FaHeadphones, FaMapMarkerAlt } from "react-icons/fa";  // Changed FaLocationDot to FaMapMarkerAlt
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const DonationForm = () => {
//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     const formData = new FormData(e.target);
//     formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

//     const response = await fetch("https://api.web3forms.com/submit", {
//       method: "POST",
//       body: formData,
//     });

//     const result = await response.json();
//     setLoading(false);

//     if (result.success) {
//       toast.success("✅ Donation information sent successfully!");
//       e.target.reset();
//     } else {
//       toast.error("❌ Submission failed. Please check your connection.");
//     }
//   };

//   return (
//     <section className="my-24 max-padd-container">
//       <ToastContainer position="top-center" autoClose={2500} />

//       {/* Donation Form and Details */}
//       <div className="flex flex-col gap-20 py-6 xl:flex-row">
//         {/* Donation Form */}
//         <div>
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//               Make a <span className="font-[400]">Donation</span>
//             </h3>
//             <p>
//               Your contribution helps to make a difference. Please fill out the form below.
//             </p>
//           </div>

//           {/* Form */}
//           <form onSubmit={handleSubmit}>
//             {/* Name and Email Fields */}
//             <div className="flex gap-x-5">
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Enter your name"
//                   required
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//               <div className="w-1/2 mb-4">
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Enter your email"
//                   required
//                   className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//                 />
//               </div>
//             </div>

//             {/* Payment Method */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Payment Method</label>
//               <div className="flex gap-4">
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="bKash"
//                     required
//                   />
//                   bKash
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Nagad"
//                     required
//                   />
//                   Nagad
//                 </label>
//                 <label>
//                   <input
//                     type="radio"
//                     name="paymentMethod"
//                     value="Rocket"
//                     required
//                   />
//                   Rocket
//                 </label>
//               </div>
//             </div>

//             {/* Payment Number Display */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Payment Number</label>
//               <p className="text-sm text-gray-600">
//                 Please make your donation to this number: <strong>01724519674</strong>
//               </p>
//             </div>

//             {/* Sender Number Field */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Sender's Number</label>
//               <input
//                 type="text"
//                 name="senderNumber"
//                 placeholder="Enter the sender's number"
//                 required
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//               />
//             </div>

//             {/* Donation Amount */}
//             <div className="mb-4">
//               <label className="block text-lg font-medium">Donation Amount</label>
//               <input
//                 type="number"
//                 name="donationAmount"
//                 placeholder="Enter donation amount"
//                 required
//                 className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
//               />
//             </div>

//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="btn-secondary !rounded shadow-sm disabled:opacity-50"
//               >
//                 {loading ? "Sending..." : "Donate Now"}
//               </button>
//             </div>
//           </form>
//         </div>

//         {/* Contact Details */}
//         <div>
//           <div className="max-w-lg pb-16">
//             <h3 className="capitalize h3">
//               Contact <span className="font-[400]">Details</span>
//             </h3>
//             <p>
//               Feel free to reach out to us through any of the following methods.
//             </p>
//           </div>

//           <div className="flex flex-col gap-3">
//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Location:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaMapMarkerAlt /> 1234 Elm Street, Springfield, IL, USA
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Email:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaEnvelope /> info@donationplatform.com
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Phone:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaPhone /> +1 (800) 123-4567
//               </p>
//             </div>

//             <div className="flex flex-col">
//               <h5 className="mr-4 capitalize h5">Support:</h5>
//               <p className="flexStart gap-x-2">
//                 <FaHeadphones /> 24/7 Support is available
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DonationForm;


import React, { useState, useEffect } from "react";
import { FaEnvelope, FaPhone, FaHeadphones, FaMapMarkerAlt } from "react-icons/fa";  // Changed FaLocationDot to FaMapMarkerAlt
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DonationForm = () => {
  const [loading, setLoading] = useState(false);
  const [totalFunds, setTotalFunds] = useState(0); // State to store total funds

  // Load total funds from localStorage when component mounts
  useEffect(() => {
    const storedTotal = localStorage.getItem("totalFunds");
    if (storedTotal) {
      setTotalFunds(parseFloat(storedTotal));
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("access_key", "d8bc3a52-5209-4956-93bf-25881ea36833");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    setLoading(false);

    if (result.success) {
      const donationAmount = parseFloat(e.target.donationAmount.value);
      const newTotal = totalFunds + donationAmount;
      setTotalFunds(newTotal);

      // Save new total funds to localStorage
      localStorage.setItem("totalFunds", newTotal.toString());

      toast.success("✅ Donation sent successfully!");
      e.target.reset();
    } else {
      toast.error("❌ Submission failed. Please check your connection.");
    }
  };

  return (
    <section className="my-24 max-padd-container">
      <ToastContainer position="top-center" autoClose={2500} />

      {/* Donation Form and Details */}
      <div className="flex flex-col gap-20 py-6 xl:flex-row">
        {/* Donation Form */}
        <div>
          <div className="max-w-lg pb-16">
            <h3 className="capitalize h3">
              Make a <span className="font-[400]">Donation</span>
            </h3>
            <p>
              Your contribution helps to make a difference. Please fill out the form below.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Name and Email Fields */}
            <div className="flex gap-x-5">
              <div className="w-1/2 mb-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  required
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
                />
              </div>
              <div className="w-1/2 mb-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
                />
              </div>
            </div>

            {/* Payment Method */}
            <div className="mb-4">
              <label className="block text-lg font-medium">Payment Method</label>
              <div className="flex gap-4">
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bKash"
                    required
                  />
                  bKash
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Nagad"
                    required
                  />
                  Nagad
                </label>
                <label>
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="Rocket"
                    required
                  />
                  Rocket
                </label>
              </div>
            </div>

            {/* Payment Number Display */}
            <div className="mb-4">
              <label className="block text-lg font-medium">Payment Number</label>
              <p className="text-sm text-gray-600">
                Please make your donation to this number: <strong>01724519674</strong>
              </p>
            </div>

            {/* Sender Number Field */}
            <div className="mb-4">
              <label className="block text-lg font-medium">Sender's Number</label>
              <input
                type="text"
                name="senderNumber"
                placeholder="Enter the sender's number"
                required
                className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
              />
            </div>

            {/* Donation Amount */}
            <div className="mb-4">
              <label className="block text-lg font-medium">Donation Amount</label>
              <input
                type="number"
                name="donationAmount"
                placeholder="Enter donation amount"
                required
                className="w-full mt-1 py-1.5 px-3 border-none ring-1 ring-slate-900/5 regular-14 bg-white rounded"
              />
            </div>

            <div className="flex justify-center">
              {/* <button
                type="submit"
                disabled={loading}
                className="btn-secondary !rounded shadow-sm disabled:opacity-50 mr-60"
              > */}
              {/* <button
  type="submit"
  disabled={loading}
  className="btn-secondary !rounded shadow-sm disabled:opacity-50"
style={{ marginRight: '400px' }}  // Inline style for 100px left margin
> */}
{/* 
                {loading ? "Sending..." : "Donate Now"}
              </button> */}
              <button 
  type="submit"
  disabled={loading}
  className="btn-secondary !rounded shadow-sm disabled:opacity-50 mr-0 md:mr-[400px]"
>
  {loading ? "Sending..." : "Donate Now"}
</button>

            </div>
          </form>
        </div>

        {/* Contact Details */}
        <div>
          <div className="max-w-lg pb-16">
            <h3 className="capitalize h3">
              Contact <span className="font-[400]">Details</span>
            </h3>
            <p>
              Feel free to reach out to us through any of the following methods.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Location:</h5>
              <p className="flexStart gap-x-2">
                <FaMapMarkerAlt /> 1234 Elm Street, Springfield, IL, USA
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Email:</h5>
              <p className="flexStart gap-x-2">
                <FaEnvelope /> info@donationplatform.com
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Phone:</h5>
              <p className="flexStart gap-x-2">
                <FaPhone /> +1 (800) 123-4567
              </p>
            </div>

            <div className="flex flex-col">
              <h5 className="mr-4 capitalize h5">Support:</h5>
              <p className="flexStart gap-x-2">
                <FaHeadphones /> 24/7 Support is available
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Display Total Funds */}
      <div className="mt-10">
        <h3 className="capitalize h3">Total Funds Raised:</h3>
        <p className="text-xl font-bold">৳ {totalFunds.toFixed(2)}</p>
      </div>
    </section>
  );
};

export default DonationForm;
