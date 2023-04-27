const express = require('express')
const router = express.Router()
const RecommendationsController = require('../controllers/UserRecommendationsController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.route('/:partName')
    // .get(RecommendationsController.getAllLesonssByPart)// to do for exercise
    .get(RecommendationsController.getAllExercisesByPart)
module.exports = router

