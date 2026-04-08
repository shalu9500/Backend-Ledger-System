require("dotenv").config();
const express = require("express")
const cookieParser = require("cookie-parser")

//Routes
const routes = require("./routes/authRoutes")
const accountRouter = require("./routes/accountRoutes")
const transcationRoutes = require("./routes/transcationRoutes")

const app = express()

app.use(express.json())
app.use(cookieParser())




// use routes
app.use("/api/auth", routes)
app.use("/api/accounts", accountRouter)
app.use("/api/transcation",transcationRoutes)

module.exports = app