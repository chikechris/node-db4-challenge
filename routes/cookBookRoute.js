const express = require('express')

const router = express.Router()

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Recipes route' })
})

module.exports = router
