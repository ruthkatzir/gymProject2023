const db = require('../models/index')
const Price = db.prices

class PricesDataAccessor {

getAllPrices = async () => {
    // Get all lessons from DB
    const price = await Price.findAll({})
    return price;
}


getPriceById = async (_id) => {
    const price = await Price.findOne({where:{id:_id}})
    return price;
}


}
const PricedataAccessor = new PricesDataAccessor();
module.exports = PricedataAccessor;
