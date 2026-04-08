const express = require("express")
const authMiddleware = require("../middleware/authMiddleware")
const accountControler = require("../controllers/accountController")



const router = express.Router()

/**
 * POST /api/accounts
 * create a new account 
 * protected routes
 */
router.post("/",authMiddleware.authMiddleware, accountControler.createAccountController)

/**
 * GET api/accounts
 * Get all accounts of the logged-in user
 * protected Route
 */

router.get("/", authMiddleware.authMiddleware, accountControler.getUserAccountsController)


module.exports=router;