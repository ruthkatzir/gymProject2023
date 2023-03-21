const db = require('../models/index')
const User = db.users
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const email = require('../utils/email')

const login = async (req, res) => {
    const { gmail, password } = req.body

    if (!gmail || !password) {
        return res.status(400).json({
            message: 'All fields are required'
        })
    }
    const foundUser = await User.findOne({ where: { gmail: gmail } })


    console.log(foundUser);
    if (!foundUser) {
        return res.status(401).json({ message: 'Unauthorized' })
    }
    const match = await bcrypt.compare(password, foundUser.password)
    if (!match) return res.status(401).json({ message: 'Unauthorized' })

    const userInfo = { gmail: foundUser.gmail, firstName: foundUser.firstName, lastName: foundUser.lastName, phoneNum: foundUser.phoneNum, ImgPath: foundUser.ImgPath, DateOfBirth: foundUser.DateOfBirth, roles: foundUser.roles }
    const accessToken = jwt.sign(userInfo, process.env.ACCESS_TOKEN_SECRET)
    res.json({ accessToken: accessToken, user:userInfo})

}




const register = async (req, res) => {
    const { gmail, firstName, lastName, phoneNum, password, ImgPath, DateOfBirth, roles } = req.body;
    if (!gmail || !firstName || !password || !lastName || !ImgPath || !DateOfBirth) // Confirm data
        return res.status(400).json({ message: 'All fields are required' })
    const duplicate = await User.findOne({ where: { gmail: gmail } })
    if (duplicate) {
        return res.status(409).json({ message: "Duplicate username" })
    }
    const hashedPwd = await bcrypt.hash(password, 10)
    const userObject = { gmail, firstName, lastName, phoneNum, ImgPath, DateOfBirth, roles, password: hashedPwd }

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
module.exports = { login, register }
