// const express = require("express");
const scheduleDal = require("../dal/schedule-DB-accessor");
const gymGuideDal = require("../dal/gymGuide-DB-accessor");
const lessonDal = require("../dal/lesson-DB-accessor");
const activeTypeDal = require("../dal/activeType-DB-accessor");
const e = require("express");
const { NUMBER } = require("sequelize");

class schedulesController {
    //שליפת כל המערכות מטבלת המערכות- done!
    // חילוק המערכות למערך של 3
    getAllschedules = async (req, res) => {
        var listByType = [];
        var lessons = [];
        var gym = [];
        var pool = [];
        const schedules = await scheduleDal.getAllSchedule();

        const promises = schedules.map(async e => {
            //change LessonType, ActiveType
            var tmpLesson = e.LessonType;
            e.LessonType = await lessonDal.getLessonName(tmpLesson);
            var tmpActive = e.ActiveType;
            e.ActiveType = await activeTypeDal.getActiveTypeName(tmpActive);
            console.log(e.ActiveType);
            if (e.ActiveType === "lessons") {
                lessons.push(e)
            }
            else if (e.ActiveType === 'gym') {
                gym.push(e);
            }
            else {
                pool.push(e);
            }
        });
        await Promise.all(promises);
        if (!schedules?.length) {
            return res.status(204).json({ message: 'No schedules found' })
        }

        lessons.forEach(async e1 => {
            var tmpGuied = e1.guiedId;
            e1.guiedId = await gymGuideDal.getGuideNameById(tmpGuied);
        });

        listByType[0] = lessons;
        listByType[1] = gym;
        listByType[2] = pool;
        res.json(listByType);
    }

    // שליפת כל השיעורים הפעילים מטבלת מערכות
    getAllActiveSchedule = async (req, res) => {
        const day = parseInt(req.body.day);
        const time = req.body.time;
        const activeNow = await scheduleDal.getAllactiveSchedule(day, time);
        const promises = activeNow.map(async (e) => {
            var tmpLesson = e.LessonType ? e.LessonType : null;
            e.LessonType = await lessonDal.getLessonName(tmpLesson);
            e.ActiveType = await activeTypeDal.getActiveTypeName(e.ActiveType);
        });
        await Promise.all(promises);
        console.log(activeNow);
        res.json(activeNow);
    };
}
const scheduleController = new schedulesController();
module.exports = scheduleController;