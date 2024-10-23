const express = require("express");
const app = express();
const dotenv = require("dotenv").config();

const {LoginGET, LoginPOST, RegisterGET, RegisterPOST} =  require("./controllers/userController.js")

app.set("view engine", "ejs");
app.use(express.json());

app.route("/").get(LoginGET).post(LoginPOST)
app.route("/register").get(RegisterGET).post(RegisterPOST)

app.listen(process.env.PORT, ()=>{
    console.log("working at PORT", process.env.PORT)
})