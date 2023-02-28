const db = require('../models/index')
const Measurement = db.measurements

class MeasurementsDataAccessor {

// Get all Measurement by userId from DB
getAllMeasurementsByUserId = async (_Id) => {
    console.log(_Id);
    const measurement = await Measurement.findAll({where: { userId: _Id }});
   return measurement;
}
//add Measurement
addNewMeasurement = async(weight, measureDate, userId,height,WaistCircumference,HipCircumference)=>{
        const measurement = await Measurement.create({weight, measureDate, userId,height,WaistCircumference,HipCircumference});
        if(measurement){
            return 1
        } else {
            return 0
        }
}

}
const MeasurementdataAccessor = new MeasurementsDataAccessor();
module.exports = MeasurementdataAccessor;
