
const e = require("express");
const bodyPartDal = require("../dal/bodyPart-DB-accessor");
const exerciseToPartDal = require("../dal/exerciseToPart-DB-accessor");
const lessonDal = require("../dal/lesson-DB-accessor");
const lessonToPartDal = require("../dal/lessonToPart-DB-accessor");
const gymNasticDal = require("../dal/gymNastic-DB-accessor");
//gym nastic

class recommendationsController {

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
        var lessons = [];
        console.log("aaaaaaaaaaa " + lessonsId.length);
        for (var e of lessonsId) {
            // console.log("enter  " + e);
            var eId = e.dataValues['lessonToPartId'];
            console.log("enter  " + eId);
            // var lessonName = await lessonDal.getLessonName(eId);
            // var lessonImgPath= await lessonDal.getOneLesson
            var lesson = await lessonDal.getOneLesson(eId);
            console.log("lesson ", lesson);
            lessons.push(lesson);
            // console.log("endddddddd 1111111111" + lessonName);
        }

        // console.log("endddddddd " + lessons);
        // return res.json(lessons);
        return lessons;
    }


    getAllExercisesByPart = async (req, res) => {
        const partName = req.params.partName;
        console.log("ruth   " + partName);
        const partId1 = await bodyPartDal.getPartIdByPartName(partName);
        if (!partId1) {
            return res.status(400).json({ message: 'No part found' })
        }
        const partId = partId1.dataValues['id'];
        console.log("ruth   " + partId);
        const exerciseId = await exerciseToPartDal.getExercisByPart(partId);
        if (!exerciseId) {
            return res.status(400).json({ message: 'No lessons found' })
        }
        var exercises = [];
        //    console.log("aaaaaaaaaaa " + exerciseId.length);
        for (var e of exerciseId) {
            console.log("enter  " + e);
            var eId = e.dataValues['id'];
            console.log("enter  " + e.exerciseCode);
            var exerciseName = await gymNasticDal.getOnegymNastic(e.exerciseCode);///gym...
            exercises.push(exerciseName);
            console.log("endddddddd 1111111111" + exerciseName);
        }

        console.log("endddddddd " + exercises);
        return exercises;
    }

    //get Recommendations
    getAllRecommendations = async (req, res) => {
        const lessons = await this.getAllLesonssByPart(req, res);
        const exercises = await this.getAllExercisesByPart(req, res);
        const allRecommendations = [];
        allRecommendations.push(lessons, exercises);
        res.json(allRecommendations);
    }
}

const recommendationController = new recommendationsController();
module.exports = recommendationController;

