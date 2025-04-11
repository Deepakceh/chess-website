import React from 'react'

export default function ServiceSection() {
  return (
    // <!-- Services Section -->
    <section className="bg-gradient-to-br from-yellow-50 to-white py-20 px-4 md:px-20 text-center">
      <div className="max-w-5xl mx-auto mb-16">
        <h4 className="text-yellow-500 text-sm font-bold uppercase tracking-widest mb-3">Our Services</h4>
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Shape Your Chess Journey with Experts
        </h2>
        <p className="text-gray-600 mt-4 text-base md:text-lg max-w-3xl mx-auto">
          From fundamentals to fierce competition, we’ve got training paths designed for every chess enthusiast.
        </p>
      </div>

      {/* <!-- Services Grid --> */}
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {/* <!-- Card 1 --> */}
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
          <div className="p-5 h-60 overflow-hidden">
            <img src="/assets/images/services/service1.jpg" alt="Beginners Coaching" className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200">Beginners Coaching</h3>
            <p className="text-sm text-gray-600">Master chess basics — rules, piece movements & early tactics to start your journey.</p>
            <a href="#" className="text-yellow-500 font-medium mt-4 inline-block hover:underline">Read more →</a>
          </div>
        </div>

        {/* <!-- Card 2 --> */}
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
          <div className="p-5 h-60 overflow-hidden">
            <img src="/assets/images/services/service2.jpg" alt="Opening Repertoire" className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200">Opening Repertoire</h3>
            <p className="text-sm text-gray-600">Learn powerful opening strategies and traps to dominate from the very first move.</p>
            <a href="#" className="text-yellow-500 font-medium mt-4 inline-block hover:underline">Read more →</a>
          </div>
        </div>

        {/* <!-- Card 3 --> */}
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
          <div className="p-5 h-60 overflow-hidden">
            <img src="/assets/images/services/service3.jpg" alt="Middlegame Tactics" className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200">Middlegame Tactics</h3>
            <p className="text-sm text-gray-600">Sharpen your combinations, attack strategies, and positional awareness.</p>
            <a href="#" className="text-yellow-500 font-medium mt-4 inline-block hover:underline">Read more →</a>
          </div>
        </div>

        {/* <!-- Card 4 --> */}
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
          <div className="p-5 h-60 overflow-hidden">
          <img src="/assets/images/services/service4" alt="Middlegame Tactics" className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200">Endgame Mastery</h3>
            <p className="text-sm text-gray-600">Convert advantages to victories — learn key positions and essential techniques.</p>
            <a href="#" className="text-yellow-500 font-medium mt-4 inline-block hover:underline">Read more →</a>
          </div>
        </div>

        {/* <!-- Card 5 --> */}
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
          <div className="p-5 h-60 overflow-hidden">
          <img src="/assets/images/services/service5" alt="Middlegame Tactics" className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200">Tournament Training</h3>
            <p className="text-sm text-gray-600">Prepare for competitive games with practical drills and psychological tips.</p>
            <a href="#" className="text-yellow-500 font-medium mt-4 inline-block hover:underline">Read more →</a>
          </div>
        </div>

        {/* <!-- Card 6 --> */}
        <div className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 hover:border-yellow-400">
          <div className="p-5 h-60 overflow-hidden">
          <img src="/assets/images/services/service6" alt="Middlegame Tactics" className="h-full w-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300" />
          </div>
          <div className="p-4 text-center">
            <h3 className="text-xl font-semibold mb-2 group-hover:text-yellow-600 transition-colors duration-200">Kids Special Batch</h3>
            <p className="text-sm text-gray-600">Fun-filled interactive sessions tailored to build interest and skill in kids.</p>
            <a href="#" className="text-yellow-500 font-medium mt-4 inline-block hover:underline">Read more →</a>
          </div>
        </div>
      </div>
    </section>
  )
}
