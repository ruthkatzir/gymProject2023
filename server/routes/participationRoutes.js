const express = require('express')
const router = express.Router()
const participationController = require('../controllers/participationController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.route('/')
    .get(participationController.getAllParticipations)
    .post(participationController.createParticipation)
    // .put(participationController.updateLastParticipation)

router.route('/:id')
    .get(participationController.getAllParticipationByMemberId)
    .post(participationController.updateGradingByParticipationId)
module.exports = router
