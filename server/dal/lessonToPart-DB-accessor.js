const e = require('express');
const { where } = require('sequelize');
const db = require('../models/index')
const LessonsByPart = db.lessonsToPart

class LessonsByPartDataAccessor {

    // קודי שיעורים לפי קוד אזור
    getLessonsByPart = async (partId) => {
        const lessons = await LessonsByPart.findAll({ where: { partCode: partId } });
        return lessons;
    }
}
const LessonByPartDataAccessor = new LessonsByPartDataAccessor();
module.exports = LessonByPartDataAccessor;
