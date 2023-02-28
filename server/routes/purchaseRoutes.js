const express = require('express')
const router = express.Router()
const purchaseController = require('../controllers/purchaseController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.route('/')
    .get(purchaseController.getAllPurchases)
    .post(purchaseController.createNewPurchase)
    .put(purchaseController.updateNumEnterById)
// .patch(purchaseController.UpdateNumEnterById)

router.route('/:id')
    .get(purchaseController.getAllPurchasesByUserId)
module.exports = router

