'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="relative bg-gradient-to-br from-white to-gray-100 px-6 py-16 md:px-24 flex flex-col md:flex-row gap-14">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-6"
      >
        <span className="text-sm font-semibold text-yellow-500 uppercase tracking-wide">Who We Are</span>
        <h2 className="text-3xl md:text-4xl font-bold leading-snug text-gray-800">
          Welcome to The Chess Classes, where strategy builds success.
        </h2>
        <p className="text-gray-600 text-base leading-relaxed">
          We’re an online platform passionate about making chess fun, accessible, and enriching for all skill levels.
          Whether you're starting out or aiming to master advanced tactics, our personalized coaching helps you level up.
        </p>

        <div className="space-y-6">
          {/* Feature 1 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="text-white bg-gradient-to-tr from-black to-gray-800 p-3 rounded-full shadow-md">
              <i className="fas fa-chess text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">Online Chess Coaching</h4>
              <p className="text-sm text-gray-600">Live sessions tailored to help you master openings, tactics, and endgames from anywhere.</p>
            </div>
          </motion.div>

          {/* Feature 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex items-start gap-4"
          >
            <div className="text-white bg-gradient-to-tr from-black to-gray-800 p-3 rounded-full shadow-md">
              <i className="fas fa-chess-knight text-xl"></i>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 text-lg">Practice & Game Analysis</h4>
              <p className="text-sm text-gray-600">Play games and get detailed feedback to refine your strategy and decision-making.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side: Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 relative rounded-2xl overflow-hidden shadow-xl"
      >
        <img
          src="/assets/images/about.png"
          alt="Chess Board"
          className="object-cover w-full h-full"
        />
      </motion.div>
    </section>
  );
}
