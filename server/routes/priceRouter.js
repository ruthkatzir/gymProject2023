const express = require('express')
const router = express.Router()
const priceController = require('../controllers/priceController')


router.route('/')
    .get(priceController.getAllPrices)
    //.get(lessonController.getAllPrices)
    // .post(noteController.createNewNote)
    // .patch(noteController.updateNote)
    // .delete(noteController.deleteNote)
router.route('/:id')
    .get(priceController.getPriceById)
module.exports = router
