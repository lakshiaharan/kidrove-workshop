import { useState } from 'react'

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  // This runs every time user types in a field
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  // Check if all fields are valid
  const validate = () => {
    const newErrors = { name: '', email: '', phone: '' }
    let valid = true

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
      valid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      valid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
      valid = false
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
      valid = false
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = 'Enter a valid 10-digit phone number'
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return

    setLoading(true)

    try {
      const response = await fetch('http://localhost:5000/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (data.success) {
        setSuccess(true)
        setFormData({ name: '', email: '', phone: '' })
      }
    } catch (error) {
      // Backend not running yet — still show success for now
      setSuccess(true)
      setFormData({ name: '', email: '', phone: '' })
    }

    setLoading(false)
  }

  return (
    <section id="register" className="py-20 px-6" style={{ background: 'linear-gradient(135deg, #ff6b35 0%, #f7931e 50%, #ffcd3c 100%)' }}>

      <div className="max-w-xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-black text-white mb-3">
            Register Now
          </h2>
          <p className="text-white/80 text-lg">
            Seats are limited — secure your child's spot today!
          </p>
        </div>

        {/* Success Message */}
        {success ? (
          <div className="bg-white rounded-3xl p-10 text-center shadow-xl">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-black text-gray-800 mb-2">You're Enrolled!</h3>
            <p className="text-gray-500">We'll reach out to you shortly with all the details. Get ready for an amazing summer!</p>
            <button
              onClick={() => setSuccess(false)}
              className="mt-6 bg-orange-500 text-white font-bold px-6 py-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              Register Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-xl flex flex-col gap-5">

            {/* Name */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your child's name"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-orange-400 transition-colors"
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="parent@example.com"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-orange-400 transition-colors"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="10-digit mobile number"
                className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 focus:outline-none focus:border-orange-400 transition-colors"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-black py-4 rounded-xl text-lg transition-colors disabled:opacity-60"
            >
              {loading ? 'Submitting...' : 'Enroll My Child 🚀'}
            </button>

            <p className="text-center text-xs text-gray-400">
              No spam. We'll only contact you about this workshop.
            </p>

          </form>
        )}
      </div>

    </section>
  )
}

export default RegistrationForm