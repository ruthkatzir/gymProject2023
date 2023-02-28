const { where } = require('sequelize');
const db = require('../models/index')
const BodyPart = db.bodyParts

class BodyPartDataAccessor {

    // id part by name
    getPartIdByPartName = async (partName) => {
        const partId = await BodyPart.findOne({ where: { part: partName } });
        return partId;
    }
}
const BodyPartsDataAccessor = new BodyPartDataAccessor();
module.exports = BodyPartsDataAccessor;
