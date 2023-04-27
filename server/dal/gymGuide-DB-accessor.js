const db = require('../models/index')
const gymGuide = db.gymGuides

class gymGuidesDataAccessor {
   //Get all guieds
   getAllGuide = async (guideId) => {
      const guide = await gymGuide.findAll({});
      
      return guide;
   }
   
   // Get Guide name by id
   
   
   getGuideNameById = async (guideId) => {
      const giude = await gymGuide.findOne({ guideId, attributes: ['firstName'] });
      var g = giude.dataValues['firstName'];
      return g;
   }
   // Get Guide id by name
   getGuideIdByName = async (guide) => {
      const guideId = await gymGuide.findOne({ where: { firstName: guide }, attributes: ['gmail'] });
      if (!guideId) {
         return res.status(400).json({ message: 'Invalid guide data received' })
      }
      var g = guideId.dataValues['gmail'];
      //var g = guideId.gmail;
      return g;
   }
}
const gymGuidedataAccessor = new gymGuidesDataAccessor();
module.exports = gymGuidedataAccessor;
