const express = require('express')
const router = express.Router()
const AiController = require('../controllers/AiController')
// const verifyJWT = require("../middleware/verifyJWT")

router.route('/')
    .get(AiController.permissionChecker)
module.exports = router
