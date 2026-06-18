function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <div className="text-2xl font-black">
          <span className="text-red-400">Kid</span>
          <span className="text-orange-400">ro</span>
          <span className="text-green-400">ve</span>
        </div>

        {/* Links */}
        <div className="flex gap-6 text-sm text-gray-400 font-medium">
          <a href="#details" className="hover:text-white transition-colors">Details</a>
          <a href="#outcomes" className="hover:text-white transition-colors">What You Learn</a>
          <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          <a href="#register" className="hover:text-white transition-colors">Register</a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm">
          © 2026 KidRove. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer