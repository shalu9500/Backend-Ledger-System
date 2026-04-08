const express = require("express")
const authController = require("../controllers/authController")

const router = express.Router()

//POST/API/LOGIN
router.post("/register", authController.userRegisterController)

//POST/API/LOGIN

router.post("/login", authController.userLoginController)










module.exports = router