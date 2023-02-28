
const e = require("express");
const bodyPartDal = require("../dal/bodyPart-DB-accessor");
const exerciseToPartDal = require("../dal/exerciseToPart-DB-accessor");
const lessonDal = require("../dal/lesson-DB-accessor");
const lessonToPartDal = require("../dal/lessonToPart-DB-accessor");
const gymNasticDal = require("../dal/gymNastic-DB-accessor");
//gym nastic

class recommendationsController {

    //get Recommendations
    getAllLesonssByPart = async (req, res) => {
        const partName = req.params.partName;
        console.log("ruth   " + partName);
        const partId1 = await bodyPartDal.getPartIdByPartName(partName);
        if (!partId1) {
            return res.status(400).json({ message: 'No part found' })
        }
        const partId = partId1.dataValues['id'];
        console.log("ruth   " + partId);
        const lessonsId = await lessonToPartDal.getLessonsByPart(partId);
        if (!lessonsId) {
            return res.status(400).json({ message: 'No lessons found' })
        }
        //console.log("ruth hh  " + lessonsId);
        var lessons = [];
        console.log("aaaaaaaaaaa " + lessonsId.length);
        for (var e of lessonsId) {
            // console.log("enter  " + e);
            var eId = e.dataValues['lessonToPartId'];
            console.log("enter  " + eId);
            var lessonName = await lessonDal.getLessonName(eId);
            lessons.push(lessonName);
            // console.log("endddddddd 1111111111" + lessonName);
        }

        // console.log("endddddddd " + lessons);
        res.json(lessons);
    }


    getAllExercisesByPart = async (req, res) => {
        const partName = req.params.partName;
        // console.log("ruth   " + partName);
        const partId1 = await bodyPartDal.getPartIdByPartName(partName);
        if (!partId1) {
            return res.status(400).json({ message: 'No part found' })
        }
        const partId = partId1.dataValues['id'];
        //console.log("ruth   " + partId);
        const exerciseId = await exerciseToPartDal.getExercisByPart(partId);
        if (!exerciseId) {
            return res.status(400).json({ message: 'No lessons found' })
        }
        var exercises = [];
       // console.log("aaaaaaaaaaa " + exerciseId.length);
        for (var e of exerciseId) {
            // console.log("enter  " + e);
            var eId = e.dataValues['id'];
            //console.log("enter  " + eId);
            var exerciseName = await gymNasticDal.getOnegymNastic(eId);///gym...
            exercises.push(exerciseName);
            // console.log("endddddddd 1111111111" + lessonName);
        }

        // console.log("endddddddd " + lessons);
        res.json(exercises);
    }
}

const recommendationController = new recommendationsController();
module.exports = recommendationController;

