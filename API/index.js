const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./Routes/Auth')

dotenv.config()

mongoose
  .connect(process.env.sometext1, {
    usenewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful'))
  .catch(e => console.log(e))
app.use(express.json())

app.use('/api/auth', authRoute)

app.listen(3001, () => {
  console.log(`Backend server is running!`)
})
