const pricesDal = require("../dal/price-DB-accessor");

class PricesController {

    //get prices by lessonid
    getAllPrices = async (req, res) => {
        console.log("price");
        const prices = await pricesDal.getAllPrices();
        if (!prices?.length)
            return res.status(400).json({ message: 'No prices found' })
        res.json(prices)
    }

    //get lesson by id
    getPriceById = async (req, res) => {
        const id = req.params.id;
        // Confirm data
        if (!id)
            return res.status(400).json({ message: 'All fields are required' })
        const price = await pricesDal.getPriceById(id)
        res.json(price)
    }
}

const pricesController = new PricesController();
module.exports = pricesController;

