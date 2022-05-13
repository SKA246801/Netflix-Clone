const router = require('express').Router()
const List = require('../Models/List')
const verify = require('../Utils/VerifyToken')

// CREATE
router.post('/', verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new List(req.body)

    try {
      const savedList = await newList.save()
      return res.status(201).json(savedList)
    } catch (e) {
      return res.status(500).json(e)
    }
  } else {
    return res.status(403).json('You do not have admin privileges!')
  }
})

// DELETE
router.delete('/:id', verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await List.findByIdAndDelete(req.params.id)
      return res.status(201).json('The list has been deleted')
    } catch (e) {
      return res.status(500).json(e)
    }
  } else {
    return res.status(403).json('You do not have admin privileges!')
  }
})

// GET
router.get('/', verify, async (req, res) => {
  const typeQuery = req.query.type
  const genreQuery = req.query.genre
  let list = []

  try {
    if (typeQuery) {
      if (genreQuery) {
        list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery, genre: genreQuery } }])
      } else {
        list = await List.aggregate([{ $sample: { size: 10 } }, { $match: { type: typeQuery } }])
      }
    } else {
      list = await List.aggregate([{ $sample: { size: 10 } }])
    }
    return res.status(200).json(list)
  } catch (e) {
    return res.status(500).json(e)
  }
})

module.exports = router
