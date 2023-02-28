const db = require('../models/index')
const gymNastic = db.gymNastics

class gymNasticDataAccessor {

    // getAllLessons = async () => {
    //     // Get all lessons from DB
    //     const lesson = await Lesson.findAll({})
    //     return lesson;
    // }

    //get exercise by id
    getOnegymNastic = async (_id) => {
        const gymnastic = await gymNastic.findByPk(_id);
        var l= gymnastic.dataValues['Name'];
        return l;
    }
}
const gymNasticsDataAccessor = new gymNasticDataAccessor();
module.exports = gymNasticsDataAccessor;

