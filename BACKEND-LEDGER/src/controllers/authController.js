const userModel = require("../models/userModel")
const jwt = require("jsonwebtoken")
const emailServices = require("../services/emailServices")

// user register controller
// post  /api/auth/register

async function userRegisterController(req, res) {
    const { email, password, name } = req.body

    const isExists = await userModel.findOne({
        email: email
    })

    if (isExists) {
        return res.status(422).json({
            message: "User already exists with email.",
            status: "failed"
        })
    }

    const user = await userModel.create({
        email, password, name
    })

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "4d" })

    res.cookie("token", token)
    res.status(201).json({
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })


    await emailServices.sendRegistrationEmail(user.email, user.name);

}

//User login controller

async function userLoginController(req, res) {
    const { email, password } = req.body

    const user = await userModel.findOne({ email }).select("password")
    if (!user) {
        return res.status(401).json({
            message: "Email or password is Invalid"
        })
    }

    const isValidPassword = await user.comparePassword(password)

    if (!isValidPassword) {
        return res.status(401).json({
            message: "Email or password is Invalid"
        })
    }

    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "4" })

    res.cookie("token", token)
    res.status(200).json({
        user: {
            _id: user._id,
            email: user.email,
            name: user.name
        },
        token
    })
}



module.exports = {
    userRegisterController,
    userLoginController
}