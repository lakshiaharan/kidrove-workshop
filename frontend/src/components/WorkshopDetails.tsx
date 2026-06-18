const details = [
  { icon: '👦', label: 'Age Group', value: '8 – 14 Years' },
  { icon: '📅', label: 'Start Date', value: '15 July 2026' },
  { icon: '⏱️', label: 'Duration', value: '4 Weeks' },
  { icon: '💻', label: 'Mode', value: 'Online' },
  { icon: '💰', label: 'Fee', value: '₹2,999' },
]

function WorkshopDetails() {
  return (
    <section id="details" className="py-20 px-6 bg-white">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-800 mb-3">
          Workshop <span className="text-orange-500">Details</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          Everything you need to know before enrolling your child.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-4">
        {details.map((item) => (
          <div key={item.label} className="flex flex-col items-center text-center bg-orange-50 border border-orange-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-3">{item.icon}</div>
            <div className="text-xs font-semibold text-orange-400 uppercase tracking-wide mb-1">{item.label}</div>
            <div className="text-lg font-black text-gray-800">{item.value}</div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default WorkshopDetails