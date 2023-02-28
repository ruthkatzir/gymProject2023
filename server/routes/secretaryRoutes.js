const express = require('express')
const router = express.Router()
const secretaryController = require('../controllers/secretaryController')

router.route('/')
    .post(secretaryController.createNewActivity)
router.route('/:id')
    .delete(secretaryController.deleteActivity)
module.exports = router