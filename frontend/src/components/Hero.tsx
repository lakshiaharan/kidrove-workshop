function Hero() {
  return (
    <section className="w-full min-h-screen flex flex-col items-center justify-center text-center px-6 py-20"
      style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffcd3c 100%)' }}>

      {/* Badge */}
      <div className="bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-6 inline-block">
        🌟 Summer 2026 — Limited Seats Available!
      </div>

      {/* Title */}
      <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
        AI & Robotics
        <br />
        <span className="text-yellow-200">Summer Workshop</span>
      </h1>

      {/* Subtitle */}
      <p className="text-white/90 text-lg md:text-xl max-w-xl mb-8 font-medium">
        Give your child a head start in the future — 4 weeks of hands-on AI and robotics learning, built for curious minds aged 8–14.
      </p>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#register" className="bg-white text-orange-500 font-black px-8 py-4 rounded-full text-lg hover:scale-105 transition-transform shadow-lg">
          Enroll Now →
        </a>
        <a href="#details" className="bg-white/20 text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white/30 transition-colors border-2 border-white/40">
          See Details
        </a>
      </div>

      {/* Stats row */}
      <div className="flex gap-8 mt-16 text-white">
        <div className="text-center">
          <div className="text-3xl font-black">8–14</div>
          <div className="text-sm text-white/80 font-medium">Age Group</div>
        </div>
        <div className="w-px bg-white/30"></div>
        <div className="text-center">
          <div className="text-3xl font-black">4</div>
          <div className="text-sm text-white/80 font-medium">Weeks</div>
        </div>
        <div className="w-px bg-white/30"></div>
        <div className="text-center">
          <div className="text-3xl font-black">₹2,999</div>
          <div className="text-sm text-white/80 font-medium">Total Fee</div>
        </div>
        <div className="w-px bg-white/30"></div>
        <div className="text-center">
          <div className="text-3xl font-black">Online</div>
          <div className="text-sm text-white/80 font-medium">Mode</div>
        </div>
      </div>

    </section>
  )
}

export default Hero