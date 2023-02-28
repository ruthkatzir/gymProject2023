const { Sequelize } = require('sequelize');
const { sequelize } = require('./sequelize');
const { applyExtraSetup } = require('./extra-setup');

const db = {}

db.Sequelize = Sequelize
db.sequelize = sequelize
//********************MODELS*************************//
db.lessons = require('./lesson');
db.prices = require('./price');
db.purchases = require('./purchase');
db.measurements = require('./measurement');

db.users = require('./user');
db.gymGuides = require('./gymguide');
db.activeTypes = require('./activeType');
db.schedules = require('./schedule');
db.participation=require('./participation');

db.bodyParts = require('./bodyPart');
db.exercisesToParts = require('./exerciseToPart');
db.gymNastics = require('./gymnastic');
db.lessonsToPart = require('./lessonTopart');

//********************END MODELS*********************//
applyExtraSetup();

db.sequelize.sync({alter:true, force: false }) //check!
    .then(() => {
        console.log('yes re-sync done!')
    })
module.exports = db