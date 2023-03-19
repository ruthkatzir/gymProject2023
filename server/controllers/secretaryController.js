
const scheduleDal = require("../dal/schedule-DB-accessor");
const LessonDal = require("../dal/lesson-DB-accessor");
const activeDal = require("../dal/activeType-DB-accessor");
const gymGuiedDal = require("../dal/gymGuide-DB-accessor");
class secretaryController {

    //add new activity to schedule
    createNewActivity = async (req, res) => {
        const { DayOfWeek, StartHour, LessonType, guied, ActiveType } = req.body
        if (!DayOfWeek || !StartHour || !ActiveType) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        //get id of by name LessonType
        const LessonTypeId = await LessonDal.getLessonId(LessonType);
        //get id of by name ActiveType
        const ActiveTypeId = await activeDal.getActiveTypeId(ActiveType);
        //get id of guied by name guied
        var guiedId = ''
        if (guied) {
            guiedId = await gymGuiedDal.getGuideIdByName(guied);
        }
        const activity = await scheduleDal.addActiveToSchedule(DayOfWeek, StartHour, LessonTypeId, guiedId, ActiveTypeId);
        if (activity) {
            return res.status(201).json({activity});
        } else {
            return res.status(400).json({ message: 'Invalid activity data received' })
        }
    }
    // delete activity from schedule
    deleteActivity = async (req, res) => {
        const _id  = req.params.id;
        // Confirm data
        if (!_id) {
            return res.status(400).json({ message: 'activity ID required' })
        }
        scheduleDal.daleteActiveFromSchedule(_id);
        res.json(`Note  with ID ${_id} deleted`)
    }
}


const secretarycontroller = new secretaryController();
module.exports = secretarycontroller;

