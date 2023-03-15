const db = require('../models/index')
const Purchases = db.purchases

class PurchasesDataAccessor {
    // Get all purchases from DB
    getAllPurchases = async () => {
        const purchases = await Purchases.findAll({})
        return purchases;
    }
    getPurchasesByUserId = async (id) => {
        const purchases = await Purchases.findAll({ where: { userId: id } });
        return purchases;
    }

    createNewPurchase = async (userId, type, numEnters, startDate) => {
        console.log("innnnnnnnn");
        const purchase = await Purchases.create({ userId, startDate, numEnters, type });
    }

    updateNumEnterById = async (numEnter, _purchaseId) => {
        //  const purchases= await Purchases.findAll({ where: { memberId: id },order:[['dateLesson','DESC']]})
        const purchase = await Purchases.update({ numEnters: numEnter }, { where: { purchaseId: _purchaseId } })
        return purchase;
    }
}

const purchasesDataAccessor = new PurchasesDataAccessor();
module.exports = purchasesDataAccessor;
