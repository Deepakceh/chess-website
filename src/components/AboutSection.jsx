'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="flex flex-col md:flex-row bg-white text-black p-8 md:p-16 gap-10">

      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1 space-y-6"
      >
        <div className="text-sm font-semibold text-yellow-600 uppercase underline ">Who we are</div>
        <h2 className="text-2xl md:text-3xl font-bold">Welcome to The Chess Classes,<br /> where strategy builds success.</h2>
        <p className="text-gray-600">
          The Chess Classes is an online platform dedicated to making chess exciting, accessible, and enriching for players of all levels. Whether you're a complete beginner or looking to sharpen your advanced skills, we offer personalized coaching to help you level up.
        </p>

        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="text-2xl bg-black text-white p-2 rounded"><i className="fas fa-chess"></i></div>
            <div>
              <h4 className="font-semibold">Online Chess Coaching</h4>
              <p className="text-sm text-gray-600">Interactive live sessions to help you understand openings, strategies, tactics, and endgames effectively from anywhere.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex items-start gap-4"
          >
            <div className="text-2xl bg-black text-white p-2 rounded"><i className="fas fa-chess-knight"></i></div>
            <div>
              <h4 className="font-semibold">Practice & Game Analysis</h4>
              <p className="text-sm text-gray-600">Play real-time games and get in-depth feedback to track your progress and improve your decision-making.</p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="flex-1 bg-black text-white p-6 md:p-10 rounded-md relative"
      >
        <h3 className="text-xl md:text-2xl font-semibold mb-4">
          Passion, focus, and commitment — learn chess the right way with personal mentorship and live guidance.
        </h3>
        <p className="text-gray-400 mb-6">
          Join a community of learners who are passionate about chess. With structured lessons and regular practice, we ensure every session adds value to your journey.
        </p>
        <p className="italic text-lg font-signature">Akash Kumar</p>
        <p className="uppercase text-sm text-yellow-500 font-semibold mt-1">Founder & Chess Coach</p>

        {/* <img src="/assets/images/about.png" alt="Coach" className="absolute bottom-0 right-0 w-40 md:w-60 rounded-md hidden md:block object-cover" /> */}
      </motion.div>
    </section>
  );
}
