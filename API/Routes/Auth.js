const router = require('express').Router()
const User = require('../Models/User')
const CryptoJS = require('crypto-js')
const dotenv = require('dotenv')
dotenv.config()

router.post('/register', async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(req.body.password, process.env.sometext2).toString(),
  })
  try {
    const user = await newUser.save()
    res.status(200).json(user)
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router
