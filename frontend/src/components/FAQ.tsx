import { useState } from 'react'

const faqs = [
  {
    q: 'Do kids need any prior coding experience?',
    a: 'Not at all! This workshop is designed for complete beginners. We start from the very basics and build up gradually, so any curious kid aged 8–14 can join.',
  },
  {
    q: 'What equipment does my child need?',
    a: 'Just a laptop or desktop computer with a stable internet connection. All software used is free and we will guide you through installation before the workshop begins.',
  },
  {
    q: 'How are the online sessions conducted?',
    a: 'Sessions are held live over Zoom with a small batch of students. Kids can ask questions in real time, and recordings are shared after each class.',
  },
  {
    q: 'What happens if my child misses a class?',
    a: 'No worries! Every session is recorded and shared with enrolled students. They can catch up at their own pace without missing anything.',
  },
  {
    q: 'Will my child receive a certificate?',
    a: 'Yes! Every child who completes the workshop receives an official KidRove certificate of completion that they can proudly share.',
  },
]

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 px-6 bg-white">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-black text-gray-800 mb-3">
          Frequently Asked <span className="text-orange-500">Questions</span>
        </h2>
        <p className="text-gray-500 text-lg">
          Got questions? We have got answers.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-orange-100 rounded-2xl overflow-hidden"
          >
            {/* Question row */}
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-6 py-5 text-left bg-orange-50 hover:bg-orange-100 transition-colors"
            >
              <span className="font-bold text-gray-800 text-base pr-4">
                {faq.q}
              </span>
              <span className="text-orange-500 text-2xl font-bold flex-shrink-0">
                {openIndex === index ? '−' : '+'}
              </span>
            </button>

            {/* Answer */}
            {openIndex === index && (
              <div className="px-6 py-5 bg-white text-gray-600 text-sm leading-relaxed">
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>

    </section>
  )
}

export default FAQ