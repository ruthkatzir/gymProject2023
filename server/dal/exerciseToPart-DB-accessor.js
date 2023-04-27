const { where } = require('sequelize');
const db = require('../models/index')
const exercisesByPart = db.exercisesToParts

class exercisesByPartDataAccessor {

   // קודי תרגילים לפי קוד אזור
    getExercisByPart = async (partId) => {
        const exercises = await exercisesByPart.findAll({where:{partCode:partId}});
        console.log("exercises " +exercises.length);
        exercises.forEach(e => {
            console.log("innnnnnnn "+e.exerciseCode)
        });
        return exercises;
    }
}
const exerciseByPartDataAccessor = new exercisesByPartDataAccessor();
module.exports = exerciseByPartDataAccessor;
