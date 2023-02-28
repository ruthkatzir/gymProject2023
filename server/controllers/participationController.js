
const participationDal = require("../dal/participation-db-accessor.js.js");
class ParticpationsController {
    getAllParticipations = async (req, res) => {

        const participations = await participationDal.getAllParticipations();
        if (!participations?.length) {
            return res.status(400).json({ message: 'No participations found' })
        }
        res.json(participations)
    }

<<<<<<< HEAD
    getAllParticipationByMemberId = async (req, res) => {
        const participation = await participationDal.getAllParticipationsByMemberId(req.params.id);
        if (!participation) {
            return res.status(400).json({ message: 'No participation found' })
        }
        res.json(participation)
    }

    getLastParticipationByMemberId = async (req, res) => {
        const participation = await participationDal.getLastParticipationByMemberId(req.params.Last_id);
        if (!participation) {
            return res.status(400).json({ message: 'No participation found' })
        }
        res.json(participation)
    }


    createParticipation = async (req, res) => {
        const { memberId, guideName, dateLesson, lessonType, hour, grading } = req.body
        // Confirm data
        if (!memberId || !guideName || !dateLesson || !lessonType || !hour)
            return res.status(400).json({ message: 'All fields are required' })
        const participation = await participationDal.createParticipation(memberId, guideName, dateLesson, lessonType, hour, grading)

        if (participation) { // Created 
            return res.status(400).json({ message: 'New participation created' })
        }
        return res.status(400).json({ message: 'Invalid participation data received' })
    }

    updateLastParticipation = async (req, res) => {
        const {memberId,grading } = req.body;
        const participationId = this.getLastParticipationByMemberId(memberId);
        // Confirm data
        if (!grading)
            return res.status(400).json({ message: 'grading is required' })
        const participation = await participationDal.updateGradingById(grading, participationId);

        if (participation) { // updated
            return res.status(400).json({ message: 'participation update' })
        }
        return res.status(400).json({ message: 'Invalid grading data received' })
    }
=======
getAllParticipationByUserId=async(req,res)=>{
    const participation = await participationDal.getAllParticipationsByUserId(req.params.id);
     if(!participation){
    return res.status(400).json({message: 'No participation found'})
}
res.json(participation)
}

createParticipation=async(req,res)=>{
    const {userId,guideName,dateLesson,lessonType,hour,grading} = req.body
    // Confirm data
    if (!userId ||  !guideName||  !dateLesson||  !lessonType||  !hour) 
      return res.status(400).json({ message: 'All fields are required' })
    const participation= await participationDal.createParticipation(userId,guideName,dateLesson,lessonType,hour,grading)
    
     if(participation){ // Created 
        return res.status(400).json({message:'New participation created'})}
     return res.status(400).json({ message: 'Invalid participation data received' })
  
     
     
>>>>>>> 11e882431cd15122b3c69bf6bf9d78a42833fb8e
}


const particpationsController = new ParticpationsController();
module.exports = particpationsController;