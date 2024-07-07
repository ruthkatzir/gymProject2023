// 

const express = require('express');
const router = express.Router();

const authController = require("../controllers/authController");

router.post('/register', authController.register);
router.post('/login', authController.login);

router.get('/:imgPath', authController.getUserIdByImage);

module.exports = router;
