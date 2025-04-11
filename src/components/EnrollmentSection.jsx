import React from 'react'

export default function EnrollmentSection() {
    return (
        <section className="relative h-[70vh] flex items-center justify-center bg-black text-white overflow-hidden">
            {/* <!-- Background image with controlled height --> */}
            <div className="absolute inset-0 overflow-hidden">
                <img
                    src="/assets/images/enrollment.jpg"
                    alt="Chess Background"
                    className="w-full h-full object-cover object-center max-h-[90vh]"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            {/* <!-- Hero Content --> */}
            <div className="relative z-10 max-w-3xl text-center px-6">
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4">
                    Master the Game <br />
                    with <span className="text-yellow-500">The Chess Classes</span>
                </h1>

                <p className="text-gray-300 text-base sm:text-lg md:text-xl mb-6">
                    Discover the art of strategy, sharpen your thinking, and elevate your chess skills with expert-led online sessions designed for all levels.
                </p>

                <a
                    href="/contact"
                    className="inline-block px-6 py-3 border border-white hover:bg-yellow-500 hover:text-black transition duration-300 rounded-md text-sm sm:text-base font-semibold"
                >
                    GET STARTED
                </a>
            </div>
        </section>

    )
}
