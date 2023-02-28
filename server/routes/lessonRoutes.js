const express = require('express')
const router = express.Router()
const lessonController = require('../controllers/lessonController')
const verifyJWT = require("../middleware/verifyJWT")

router.route('/')
    .get(lessonController.getAllLessons)
    //.get(lessonController.getAllPrices)
    // .post(noteController.createNewNote)
    // .patch(noteController.updateNote)
    // .delete(noteController.deleteNote)
router.route('/:id')
    .get(lessonController.getLessonById)
module.exports = router
