import React from 'react';

const StudentAidProgram = () => {
  return (
    <div className="min-h-screen font-sans bg-gray-50">

      {/* 1. Header & Empowering Hero Section */}
      <header id="hero" className="py-20 text-center text-white bg-blue-800 shadow-xl">
        <div className="max-w-5xl px-4 mx-auto">
          <h1 className="mb-4 text-5xl font-extrabold leading-snug tracking-tight sm:text-7xl">
            Your Future, Unlocked.
          </h1>
          <p className="max-w-3xl mx-auto mb-10 text-xl text-blue-200 sm:text-2xl">
            Providing **barrier-free access to quality education** for talented students from low-income families.
          </p>
          <a
            href="#apply"
            className="inline-block px-12 py-4 text-xl font-extrabold text-blue-800 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105"
          >
            Access Free Resources Today →
          </a>
        </div>
      </header>
      
      {/* --- */}

      {/* 2. Impact & Mission (About Us Alternative) */}
      <section id="impact" className="py-16 bg-white border-b-8 border-yellow-400">
        <div className="max-w-6xl px-4 mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold text-gray-900">
            A Hand Up, Not a Handout
          </h2>
          <p className="max-w-4xl mx-auto mb-12 text-lg text-gray-600">
            We are dedicated to fostering self-reliance and academic excellence. Our holistic program offers comprehensive support to transform potential into outstanding achievement.
          </p>
          
          <div className="grid gap-8 mt-10 md:grid-cols-3">
            {/* Metric 1 */}
            <div className="p-6 transition duration-300 shadow-lg bg-blue-50 rounded-xl hover:shadow-xl">
              <span className="block mb-2 text-5xl font-extrabold text-blue-800">3K+</span>
              <h3 className="mb-1 text-xl font-semibold text-gray-800">Students Supported</h3>
              <p className="text-sm text-gray-500">Given access to digital learning tools.</p>
            </div>
            {/* Metric 2 */}
            <div className="p-6 transition duration-300 shadow-lg bg-blue-50 rounded-xl hover:shadow-xl">
              <span className="block mb-2 text-5xl font-extrabold text-blue-800">95%</span>
              <h3 className="mb-1 text-xl font-semibold text-gray-800">Success Rate</h3>
              <p className="text-sm text-gray-500">Of students maintaining high academic standing.</p>
            </div>
            {/* Metric 3 */}
            <div className="p-6 transition duration-300 shadow-lg bg-blue-50 rounded-xl hover:shadow-xl">
              <span className="block mb-2 text-5xl font-extrabold text-blue-800">100+</span>
              <h3 className="mb-1 text-xl font-semibold text-gray-800">Volunteer Mentors</h3>
              <p className="text-sm text-gray-500">Dedicated educators guiding the next generation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 3. Our Specialized Services */}
      <section id="services" className="px-4 py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-12 text-4xl font-bold text-center text-gray-900">
            Our Pillars of Support
          </h2>
          <div className="grid gap-10 lg:grid-cols-2">
            
            {/* Pillar 1: Academic */}
            <div className="p-8 bg-white border-l-8 border-blue-600 shadow-2xl rounded-xl">
                <h3 className="flex items-center mb-4 text-3xl font-bold text-blue-800">
                  <span className="mr-3 text-yellow-500">📚</span> Academic Excellence
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> **High-Quality Digital Curriculum:** Access to paid-for learning platforms, now free.</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> **Tutoring & Test Prep:** Focused preparation for major examinations and admissions.</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> **Language & Computer Skills:** Essential modern skills training programs.</li>
                </ul>
            </div>

            {/* Pillar 2: Material Aid */}
            <div className="p-8 bg-white border-l-8 border-blue-600 shadow-2xl rounded-xl">
                <h3 className="flex items-center mb-4 text-3xl font-bold text-blue-800">
                  <span className="mr-3 text-yellow-500">💰</span> Resources & Financial Aid
                </h3>
                <ul className="space-y-3 text-gray-700">
                    <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> **School Supplies Bundles:** Annual provision of necessary stationery and school bags.</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> **Device Loan Program:** Access to basic tablets or laptops for online study.</li>
                    <li className="flex items-center"><span className="mr-2 text-blue-500">✓</span> **Small Stipends/Scholarships:** Monthly aid for transportation and basic study needs.</li>
                </ul>
            </div>
          </div>
        </div>
      </section>

      {/* --- */}

      {/* 4. Eligibility and Enrollment Process (CTA Focus) */}
      <section id="apply" className="px-4 py-16 text-white bg-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-4 text-4xl font-bold">
            How to Enroll and Receive Support
          </h2>
          <p className="mb-10 text-lg text-blue-200">
            We require proof of financial need to ensure resources reach the most deserving students.
          </p>
          
          <div className="grid gap-6 sm:grid-cols-3">
            {/* Step Card 1 */}
            <div className="p-6 border-2 border-yellow-400 rounded-xl bg-blue-900/50">
                <div className="mb-2 text-4xl font-bold text-yellow-400">1</div>
                <h3 className="mb-1 text-xl font-semibold">Check Eligibility</h3>
                <p className="text-sm text-blue-200">Verify that your family income falls within the set criteria.</p>
            </div>
            {/* Step Card 2 */}
            <div className="p-6 border-2 border-yellow-400 rounded-xl bg-blue-900/50">
                <div className="mb-2 text-4xl font-bold text-yellow-400">2</div>
                <h3 className="mb-1 text-xl font-semibold">Submit Application</h3>
                <p className="text-sm text-blue-200">Complete the detailed application form and upload necessary documents.</p>
            </div>
            {/* Step Card 3 */}
            <div className="p-6 border-2 border-yellow-400 rounded-xl bg-blue-900/50">
                <div className="mb-2 text-4xl font-bold text-yellow-400">3</div>
                <h3 className="mb-1 text-xl font-semibold">Start Learning</h3>
                <p className="text-sm text-blue-200">Upon successful verification, gain immediate access to all resources.</p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="#" // Link to your application form
              className="inline-block px-12 py-4 text-xl font-extrabold text-blue-800 transition duration-300 transform bg-yellow-400 rounded-full shadow-2xl hover:bg-yellow-300 hover:scale-105"
            >
              Start Your Application
            </a>
          </div>

        </div>
      </section>

      {/* --- */}

      {/* 5. Footer (Contact and Quick Links) */}
      <footer className="py-8 text-white bg-gray-800">
        <div className="max-w-6xl px-4 mx-auto text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Student Aid Program. Education for All.</p>
          <div className="mt-2 space-x-4">
            <a href="#" className="text-blue-300 hover:text-yellow-400">Privacy Policy</a>
            <a href="#" className="text-blue-300 hover:text-yellow-400">Contact Us</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default StudentAidProgram;