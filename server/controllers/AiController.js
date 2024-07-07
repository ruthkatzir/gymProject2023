
// const axios = require('axios');

// const pythonServerUrl = 'http://localhost:5000';

// class AIcontroller {
//     permissionChecker = async (req, res) => {
//         // Make a GET request to the Python server
//         pythonCall()async => {
//             axios.get(`${pythonServerUrl}/`)
//                 .then(response => {
//                     console.log(response.data); // Handle the response from the Python server
//                 })
//                 .catch(error => {
//                     console.error(error);
//                 });
//         }


//         const result = await pythonCall();
//         if (!result) {
//             return res.status(400).json({ message: 'No permissionChecker found' })
//         }
//         res.json(result)
//     }

// }

// const AiController = new AIcontroller();
// module.exports = AiController;

const axios = require('axios');

const pythonServerUrl = 'http://localhost:5000';

class AIController {
    permissionChecker = async (req, res) => {
        try {
            const pythonCall = async () => {
                try {
                    const response = await axios.get(`${pythonServerUrl}/`);
                    return response.data;
                } catch (error) {
                    console.error(error);
                    throw error;
                }
            };

            const result = await pythonCall();
            if (!result) {
                return res.status(400).json({ message: 'No permissionChecker found' });
            }

            res.json(result.slice(6));
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
        }
    };
}

const AiController = new AIController();
module.exports = AiController;
