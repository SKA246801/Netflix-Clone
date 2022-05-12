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

router.post('/login', async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) {
      return res.status(401).json('Wrong username or password!fdsfdsaa')
    }

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.sometext2)
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8)
    if (originalPassword !== req.body.password) {
      return res.status(401).json('Wrong username or password!')
    }
    const { password, ...info } = user._doc
    return res.status(200).json(info)
  } catch (e) {
    res.status(500).json(e)
  }
})

module.exports = router
