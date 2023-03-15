
const measurementDal = require("../dal/measurement-DB-accessor");

class measurementsController {
    getAllMeasurementsByUserId = async (req, res) => {
        const userId = req.params.id;
        console.log(userId);
        const measurements = await measurementDal.getAllMeasurementsByUserId(userId);
        if (!measurements?.length) {
            return res.status(400).json({ message: 'No measurements found' })
        }
        res.json(measurements)
    }

    //add new Measurement
    createNewMeasurement = async (req, res) => {
        const { weight, userId, height, WaistCircumference, HipCircumference } = req.body
        if (!weight || !userId || !height || !WaistCircumference || !HipCircumference) {
            return res.status(400).json({ message: 'All fields are required' })
        }
        const d = new Date();
        const measureDate = d.toISOString().slice(0, 10);
        const measurement = await measurementDal.addNewMeasurement(weight, measureDate, userId, height, WaistCircumference, HipCircumference);
        if (measurement) {
            return res.status(201).json({ message: 'New measurement created' })
        } else {
            return res.status(400).json({ message: 'Invalid measurement data received' })
        }
    }
}

const measurementcontroller = new measurementsController();
module.exports = measurementcontroller;

