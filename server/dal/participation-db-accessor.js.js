const db = require('../models/index')
const Participations = db.participation

class ParticipationsDataAccessor {
  // Get all participations from DB
  getAllParticipations = async () => {
    const participations = await Participations.findAll({})
    return participations;
  }
  getAllParticipationsByMemberId = async (id) => {
    console.log("xfgggggggggggggggggg",id);
    console.log("xfgggggggggggggggggg",Participations)
    const participations = await Participations.findAll({ where: { userId: id } });
    return participations;
  }
  //to check
  // getLastParticipationByMemberId = async (id) => {
  //   const participations = await Participations.findAll({ where: { memberId: id },order:[['dateLesson','DESC']] });
  //   const lastLesson = participations[0];
  //   return lastLesson;
  // }
  createParticipation = async (userId, guideName, dateLesson, lessonType, hour, grading ) => {
    const participation = await Participations.create({userId, guideName, dateLesson, lessonType, hour, grading });
    return participation;
  }

  updateGradingById = async (grade, participationId) => {
    console.log("paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",participationId ,"aaaaaaaagrading",grade)
    const participation = await Participations.update({ grading: grade }, { where: { id: participationId } })
    return participation
  }

}

const participationsDataAccessor = new ParticipationsDataAccessor();
module.exports = participationsDataAccessor;

