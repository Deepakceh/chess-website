import React from 'react'

export default function CurriculumSection() {
  return (
<section className="bg-white py-16 px-4 md:px-20">
  <div className="max-w-6xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-800 border-b-4 border-yellow-500 inline-block pb-2">
      Our Curriculum: From Beginner to Advance
    </h2>

    <div className="grid md:grid-cols-2 gap-10 text-left">
      {/* <!-- Step 1 --> */}
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">1</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Chess Fundamentals</h3>
          <p className="text-gray-600">Master the rules, piece movements, board setup, and core tactics like pins and forks.</p>
        </div>
      </div>

      {/* <!-- Step 2 --> */}
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">2</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Opening Theory</h3>
          <p className="text-gray-600">Study classical and modern openings, traps, and principles to control the game early.</p>
        </div>
      </div>

      {/* <!-- Step 3 --> */}
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">3</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Middlegame Strategy</h3>
          <p className="text-gray-600">Learn how to build plans, handle tension, coordinate pieces, and attack the king.</p>
        </div>
      </div>

      {/* <!-- Step 4 --> */}
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">4</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Endgame Technique</h3>
          <p className="text-gray-600">Master key endgame themes like opposition, pawn promotion, and simple checkmates.</p>
        </div>
      </div>

      {/* <!-- Step 5 --> */}
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">5</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Tactical Vision</h3>
          <p className="text-gray-600">Sharpen your mind with puzzles, tactics training, and real-game combinations.</p>
        </div>
      </div>

      {/* <!-- Step 6 --> */}
      <div className="flex items-start gap-4">
        <div className="bg-yellow-500 text-white font-bold text-lg w-10 h-10 rounded-full flex items-center justify-center">6</div>
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">Tournament Preparation</h3>
          <p className="text-gray-600">Build confidence with timed games, psychological tips, and practical tournament formats.</p>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}
