
const participationDal = require("../dal/participation-db-accessor.js.js");
class ParticpationsController {
    getAllParticipations = async (req, res) => {

        const participations = await participationDal.getAllParticipations();
        if (!participations?.length) {
            return res.status(400).json({ message: 'No participations found' })
        }
        res.json(participations)
    }

    getAllParticipationByMemberId = async (req, res) => {
        const participation = await participationDal.getAllParticipationsByMemberId(req.params.id);
        if (!participation) {
            return res.status(400).json({ message: 'No participation found' })
        }
        res.json(participation)
    }
// //מיותר
//     getLastParticipationByMemberId = async (id) => {
//         const participation = await participationDal.getLastParticipationByMemberId(id);
//         return participation;
//         // if (!participation) {
//         //     return res.status(400).json({ message: 'No participation found' })
//         // }
//         // res.json(participation)
//     }


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

    updateGradingByParticipationId = async (req, res) => {
            const {grading } = req.body;
            const participationId  = req.params.id;
           
            console.log("paaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",participationId ,"grading",grading)
            // Confirm data
            if (!grading)
                return res.status(400).json({ message: 'grading is required' })
            
            const participation = await participationDal.updateGradingById(grading, participationId);
    
            if (participation) { // updated
                return res.status(200).json({ message: 'participation update' })
            }
            return res.status(400).json({ message: 'Invalid grading data received' })

    // updateLastParticipation = async (req, res) => {
    //     const {grading } = req.body;
    //     const memberId  = req.params.id;
    //     //const {memberId,grading } = req.body;
    //     const participationId =await this.getLastParticipationByMemberId(memberId);
    //     console.log("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",participationId,"graing" ,grading)
    //     // Confirm data
    //     if (!grading)
    //         return res.status(400).json({ message: 'grading is required' })
    //     const participation = await participationDal.updateGradingById(grading, participationId);

    //     if (participation) { // updated
    //         return res.status(200).json({ message: 'participation update' })
    //     }
    //     return res.status(400).json({ message: 'Invalid grading data received' })
    // }
}
}

const particpationsController = new ParticpationsController();
module.exports = particpationsController;