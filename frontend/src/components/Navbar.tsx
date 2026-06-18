function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm px-6 py-4 flex items-center justify-between sticky top-0 z-50">
      
      <div className="text-2xl font-black">
        <span className="text-red-500">Kid</span>
        <span className="text-orange-400">ro</span>
        <span className="text-green-500">ve</span>
      </div>

      <div className="hidden md:flex items-center gap-8 text-gray-600 font-semibold text-sm">
        <a href="#details" className="hover:text-orange-500 transition-colors">Details</a>
        <a href="#outcomes" className="hover:text-orange-500 transition-colors">What You Learn</a>
        <a href="#faq" className="hover:text-orange-500 transition-colors">FAQ</a>
      </div>

      <a href="#register" className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded-full text-sm transition-colors">
        Enroll Now
      </a>

    </nav>
  )
}

export default Navbar