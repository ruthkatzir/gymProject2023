const db = require('../models/index')
const Schedule = db.schedules

class SchedulesDataAccessor {

    getAllSchedule = async () => {
        // Get all Schedule from DB
        const schedule = await Schedule.findAll({})
        return schedule;
    }

    //get all schedule by given time
    //כולל פעילויות ששעת ההתחלה שלהם היא מקסימום בעוד שעה
    getAllactiveSchedule = async (day, time) => {
        const schedule = await Schedule.findAll({
            where: { DayOfWeek: day },
            attributes: ['StartHour', 'LessonType', 'guiedId', 'ActiveType']
        });
        const [Th, Tm, Ts] = time.split(':').map(Number);
        const activeNow = schedule.filter(e => {
            const [Eh, Em, Es] = e.StartHour.split(':').map(Number);
            return Th == Eh || Eh == (Th + 1);
        });
        return activeNow;
    };

    // add active to the schedule 
    addActiveToSchedule = async (DayOfWeek, StartHour, LessonType, guiedId, ActiveType) => {
        const active = await Schedule.create({ DayOfWeek, StartHour, LessonType, guiedId, ActiveType });
        if (!active) {
            return res.status(400).json({ message: 'Invalid activity data received' })
        }
        return active;
    }

    // delete active from the schedule
    daleteActiveFromSchedule = async (_id) => {
        await Schedule.destroy({
            where: {
                id: _id
            }
        });
    }
}
const ScheduledataAccessor = new SchedulesDataAccessor();
module.exports = ScheduledataAccessor;
