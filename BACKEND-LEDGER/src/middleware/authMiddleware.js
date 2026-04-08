const userModel = require("../models/userModel");
const jwt = require("jsonwebtoken");




async function authSystemUserMiddleware(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1]

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token is missing"
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        const user = await userModel.findById(decoded.userId)
        req.user = user
        return next()
    }

    catch (err) {
        return res.status(401).json({
            message: "Unauthorized access, token is invalid"
        })
    }
}

async function authMiddleware(req, res, next) {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
        return res.status(401).json({
            message: "Unauthorized access, token is missing"
        });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        const userId = decoded.userId || decoded._id;

        const user = await userModel.findById(userId);

        if (!user) {
            return res.status(401).json({
                message: "User not found, invalid token"
            });
        }

        req.user = user;
        return next();
    } catch (err) {
        return res.status(401).json({
            message: "Unauthorized access, token is invalid"
        });
    }
}

module.exports = {
    authMiddleware,
    authSystemUserMiddleware
}