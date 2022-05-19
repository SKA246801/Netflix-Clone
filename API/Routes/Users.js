const router = require('express').Router()
const User = require('../Models/User')
const CryptoJS = require('crypto-js')
const verify = require('../Utils/VerifyToken')

// UPDATE
router.put('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.sometext2).toString()
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
      return res.status(200).json(updatedUser)
    } catch (e) {
      return res.status(500).json(e)
    }
  } else {
    return res.status(403).json('You can only update your account!')
  }
})

// DELETE
router.delete('/:id', verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(req.params.id)
      res.status(200).json('User has been deleted')
    } catch (e) {
      return res.status(500).json(e)
    }
  } else {
    return res.status(403).json('You can only delete your account!')
  }
})

// GET
router.get('/find/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
    const { password, ...info } = user._doc
    return res.status(200).json(info)
  } catch (e) {
    return res.status(500).json(e)
  }
})

// GET ALL
router.get('/', verify, async (req, res) => {
  const query = req.query.new
  if (req.user.isAdmin) {
    try {
      const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
      res.status(200).json(users)
    } catch (e) {
      return res.status(500).json(e)
    }
  } else {
    return res.status(403).json('You do not have admin privileges!')
  }
})

// USER STATS
router.get('/stats', async (req, res) => {
  const today = new Date()
  const lastYear = today.setFullYear(today.setFullYear() - 1)

  try {
    const data = await User.aggregate([
      {
        $project: {
          month: { $month: '$createdAt' },
        },
      },
      {
        $group: {
          _id: '$month',
          total: { $sum: 1 },
        },
      },
    ])
    return res.status(200).json(data)
  } catch (e) {
    return res.status(500).json(e)
  }
})

module.exports = router
