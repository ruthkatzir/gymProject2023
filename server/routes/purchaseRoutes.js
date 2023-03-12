const express = require('express')
const router = express.Router()
const purchasesController = require('../controllers/purchaseController')
const verifyJWT = require("../middleware/verifyJWT")
router.use(verifyJWT)
router.route('/')
    .get(purchasesController.getAllPurchases)
    .post(purchasesController.createNewPurchase)
    .put(purchasesController.updateNumEnterById)
// .patch(purchasesController.UpdateNumEnterById)

router.route('/:id')
    .get(purchasesController.getAllPurchasesByUserId)

module.exports = router

