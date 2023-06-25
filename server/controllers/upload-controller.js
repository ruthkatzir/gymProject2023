const fsPromises = require("fs").promises
const path = require("path")
const { v4: uuid } = require("uuid")
const upload = async (req, res) => {
    console.log("uploaddddddddddddddddddddddddddddddddddddddddd");
    if (!req.file) {
        res.status(500).send("No file")
    }
    console.log("1");
    const file = req.file
    const folder = path.join(__dirname, '..', '..', 'server_venv');
    console.log("2");
    const filename = `${uuid()}_${req.file.originalname}`
    console.log("3");
    const fileUrl = `${folder}/${filename}`
    console.log("4");

    try {
        await fsPromises.writeFile(fileUrl, req.file.buffer)
        return res.json({ location: fileUrl, name: filename })
    } catch (err) {
        res.status(500).send(err)

    }
    res.send("test")
}

module.exports = { upload }