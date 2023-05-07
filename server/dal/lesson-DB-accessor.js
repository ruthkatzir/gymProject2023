const db = require('../models/index')
//const price = require('../models/price')
const Lesson = db.lessons

class LessonsDataAccessor {

    getAllLessons = async () => {
        // Get all lessons from DB
        const lesson = await Lesson.findAll({})
        return lesson;
    }

    getOneLesson = async (_id) => {
        const lesson = await Lesson.findByPk(_id);
        return lesson;
    }

    //get lesson name by id
    getLessonName = async (_id) => {
        const lesson = await Lesson.findOne({ where: { id: _id }, attributes: ['name'] });
        var l = lesson ? lesson.dataValues.name: null;
        console.log("sdfaaaaaaaaaaaa "+l)
        return l;
    }

    //get lesson id by name
    getLessonId = async (lessonName) => {
        const lesson = await Lesson.findOne({ where: { name: lessonName }, attributes: ['id'] });
        if (!lesson) {
            return res.status(400).json({ message: 'not such lesson' });
        }
        var l = lesson.dataValues['id'];
        return l;
    }
}
const LessondataAccessor = new LessonsDataAccessor();
module.exports = LessondataAccessor;

