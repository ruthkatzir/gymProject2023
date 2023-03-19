const express = require('express')
const router = express.Router()
const priceController = require('../controllers/priceController')


router.route('/')
    .get(priceController.getAllPrices)
router.route('/:id')
    .get(priceController.getPriceById)
module.exports = router
