const express = require('express')
const router = express.Router()
const scheduleController = require('../controllers/userScheduleController')


router.route('/')
    .get(scheduleController.getAllschedules)
    .post(scheduleController.getAllActiveSchedule)
module.exports = router

