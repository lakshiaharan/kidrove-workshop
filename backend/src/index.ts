import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

app.post('/api/enquiry', (req, res) => {
  const { name, email, phone } = req.body

  if (!name || !email || !phone) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required.',
    })
  }

  const emailRegex = /\S+@\S+\.\S+/
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Invalid email address.',
    })
  }

  const phoneRegex = /^[0-9]{10}$/
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({
      success: false,
      message: 'Enter a valid 10-digit phone number.',
    })
  }

  console.log('📩 New Enquiry:')
  console.log('Name:', name)
  console.log('Email:', email)
  console.log('Phone:', phone)
  console.log('---')

  return res.status(200).json({
    success: true,
    message: 'Enquiry received! We will contact you shortly.',
  })
})

app.get('/', (req, res) => {
  res.json({ message: 'KidRove API is running!' })
})

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`)
})