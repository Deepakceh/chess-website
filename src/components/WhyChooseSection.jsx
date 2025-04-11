import React from 'react'

export default function WhyChooseSection() {
    return (
        <section className="relative bg-black text-white py-16 px-4 md:px-20 overflow-hidden">
            {/* <!-- Background chess image and overlay --> */}
            <div className="absolute inset-0 z-0">
                <img src="/assets/images/chess-bg.jpg" alt="Chess Background" className="w-full h-full object-cover object-center opacity-20" />
            </div>

            {/* <!-- Main content --> */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* <!-- Section Title --> */}
                <h3 className="text-yellow-500 font-semibold text-sm uppercase mb-2">Why Choose Online Classes?</h3>
                <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                    Discover Why Online Chess Classes Are The Best Choice.
                </h2>
                <p className="text-gray-300 mb-10 max-w-2xl">
                    Unlock your full chess potential from the comfort of your home. Whether you're a beginner or advanced player,
                    our virtual classroom brings expert training right to your screen.
                </p>

                {/* <!-- Features Grid --> */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {/* <!-- Feature 1 --> */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-start">
                        <div className="text-yellow-500 text-3xl mb-4">🕒</div>
                        <h4 className="text-lg font-bold mb-2">Flexible Scheduling</h4>
                        <p className="text-sm text-gray-700">
                            Learn at your own pace with classes available to suit your routine.
                        </p>
                    </div>

                    {/* <!-- Feature 2 --> */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-start">
                        <div className="text-yellow-500 text-3xl mb-4">💰</div>
                        <h4 className="text-lg font-bold mb-2">Cost Effective</h4>
                        <p className="text-sm text-gray-700">
                            Online classes reduce commuting and material costs — more value for less!
                        </p>
                    </div>

                    {/* <!-- Feature 3 --> */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-start">
                        <div className="text-yellow-500 text-3xl mb-4">🎓</div>
                        <h4 className="text-lg font-bold mb-2">Expert Instructors</h4>
                        <p className="text-sm text-gray-700">
                            Train under experienced chess coaches with global exposure.
                        </p>
                    </div>

                    {/* <!-- Feature 4 --> */}
                    <div className="bg-white text-black p-6 rounded-lg shadow-md flex flex-col items-start">
                        <div className="text-yellow-500 text-3xl mb-4">🌍</div>
                        <h4 className="text-lg font-bold mb-2">Learn from Anywhere</h4>
                        <p className="text-sm text-gray-700">
                            All you need is a device and internet – study from home, school, or travel.
                        </p>
                    </div>
                </div>
            </div>
        </section>

    )
}
