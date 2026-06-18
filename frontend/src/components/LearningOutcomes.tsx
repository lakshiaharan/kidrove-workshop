const outcomes = [
  {
    icon: '🤖',
    title: 'Build Real Robots',
    desc: 'Kids will assemble and program their own robots from scratch using beginner-friendly tools.',
  },
  {
    icon: '🧠',
    title: 'Understand How AI Works',
    desc: 'Learn the basics of artificial intelligence — how machines think, learn, and make decisions.',
  },
  {
    icon: '💡',
    title: 'Develop Problem-Solving Skills',
    desc: 'Every challenge in the workshop is designed to make kids think creatively and logically.',
  },
  {
    icon: '🐍',
    title: 'Introduction to Python',
    desc: 'Get hands-on with Python — the most popular programming language used in AI today.',
  },
  {
    icon: '🎤',
    title: 'Present Their Own Project',
    desc: 'Each child builds and presents a final project to parents and peers on the last day.',
  },
  {
    icon: '🏅',
    title: 'Earn a Certificate',
    desc: 'Every participant receives an official KidRove certificate of completion.',
  },
]

function LearningOutcomes() {
  return (
    <section id="outcomes" className="py-20 px-6 bg-orange-50">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-800 mb-3">
          What Your Child Will <span className="text-orange-500">Learn</span>
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          6 powerful skills packed into 4 exciting weeks.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {outcomes.map((item) => (
          <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-orange-100">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-lg font-black text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>

    </section>
  )
}

export default LearningOutcomes