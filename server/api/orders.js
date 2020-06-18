const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

// add an order to the database
router.post('/', async (req, res, next) => {
  try {
    const newOrder = await Order.create(req.body)
    res.json(newOrder)
  } catch (error) {
    next(error)
  }
})
