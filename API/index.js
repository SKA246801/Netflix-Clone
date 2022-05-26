const express = require('express')
const path = require('path')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const authRoute = require('./Routes/Auth')
const userRoute = require('./Routes/Users')
const movieRoute = require('./Routes/Movies')
const listRoute = require('./Routes/Lists')

dotenv.config({ path: __dirname + '/.env' })
mongoose
  .connect(process.env.sometext1 || 'mongodb://localhost/netflix-clone', {
    usenewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DB Connection Successful'))
  .catch(e => console.log(e))
app.use(express.json())

app.use('/api/auth', authRoute)
app.use('/api/users', userRoute)
app.use('/api/movies', movieRoute)
app.use('/api/lists', listRoute)

const PORT = process.env.PORT || 3001

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../Client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.resolve('Client', 'build', 'index.html'))
  })
}

app.listen(PORT, () => {
  console.log(`Backend server is running!`)
})
