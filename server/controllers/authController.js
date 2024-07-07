const db = require('../models/index')
const User = db.users
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const email = require('../utils/email')

// process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

const login = async (req, res) => {
    const { gmail, password } = req.body
    if (!gmail || !password) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const foundUser = await User.findOne({ where: { gmail: gmail } })

    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) return res.status(401).json({ message: 'Unauthorized' })

    const userInfo = { gmail: foundUser.gmail, firstName: foundUser.firstName, lastName: foundUser.lastName, phoneNum: foundUser.phoneNum, ImgPath: foundUser.ImgPath, DateOfBirth: foundUser.DateOfBirth, roles: foundUser.roles }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken, user: userInfo })

}




const register = async (req, res) => {
    const { gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth, roles } = req.body;
    console.log(gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth);
    if (!gmail || !firstName || !password || !lastName || !ImgPath || !DateOfBirth) // Confirm data
        return res.status(400).json({ message: 'All fields are required' })
    const duplicate = await User.findOne({ where: { gmail: gmail } })
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    const hashedPwd = await bcrypt.hash(password, 10);
    console.log("rweretw " + DateOfBirth);
    const userObject = { gmail, firstName, lastName, phoneNum, password: hashedPwd, ImgPath, DateOfBirth, roles }

    const user = await User.create(userObject)
    if (user) { // Created
        const status = await email.sentMail(gmail);
        return res.status(201).json({
            message: `New user ${user.gmail} created`
        })
    } else {
        return res.status(400).json({ message: 'Invalid user data received' })
    }
}



// const getUserIdByImage = async (req, res) => {
//     console.log("innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn")
//     console.log(req.params);
//     console.log("222222222222222222")
//     console.log(req.body);
//     const img = req.params.imgPath;
//     console.log(img);

//     const foundUser = await User.findOne({ where: { ImgPath: img } })
//     const userId = foundUser.gmail;
//     if (!userId) {
//         return res.status(400).json({ message: 'No user found' })
//     }
//     res.json(userId)
// }
const getUserIdByImage = async (req, res) => {
    console.log("innnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
    console.log(req.params);
    console.log("222222222222222222");
    console.log(req.body);
    const img = req.params.imgPath;
    console.log(img);

    const foundUser = await User.findOne({ where: { ImgPath: img } });
    const userId = foundUser.gmail;
    if (!userId) {
        return res.status(400).json({ message: 'No user found' });
    }
    res.json(userId);
};

module.exports = { login, register, getUserIdByImage }