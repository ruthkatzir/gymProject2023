const db = require('../models/index')
const activeType = db.activeTypes

class activeTypeAccessor {
    // get active name by id
    getActiveTypeName = async (_id) => {
        const active = await activeType.findOne({ where: activeType.id = _id, attributes: ['type'] });
        var a = active.dataValues['type'];
        return a;
    }
    // get active id by name
    getActiveTypeId = async (activeName) => {
        const active = await activeType.findOne({ where:{type:activeName}, attributes: ['id'] });
        if(!active)
        {
            return res.status(400).json({ message: 'Invalid activeType data received' })
        }
        var a = active.dataValues['id'];
        return a;
    }
}
const activeTypesAccessor = new activeTypeAccessor();
module.exports = activeTypesAccessor;
