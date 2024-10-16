// Import Express Package
const express = require("express")

// Import DotEnv Package
const dotenv = require("dotenv").config()


// Import Components From Components Folder
const {regGet, regPost, Login} = require("./controllers/userController")

const app = express()

app.use(express.json())

app.set("view engine", "ejs")

app.route("/").get(regGet).post(regPost)

app.route("/login").post(Login)

app.listen(process.env.PORT, () => {
    console.log("WORKING");
})
