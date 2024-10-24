const express = require("express");
const app = express();
const dotenv = require("dotenv").config();


app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const {ImageAuth} = require("./middlewares/ImageAuth.js");
const multerImage = ImageAuth();

const {LoginGET, LoginPOST, RegisterGET, RegisterPOST} =  require("./controllers/userController.js");

app.route("/").get(LoginGET).post(LoginPOST)
app.route("/register").get(RegisterGET).post(multerImage.single('user_image'),RegisterPOST)

app.listen(process.env.PORT, ()=>{
    console.log("working at PORT", process.env.PORT)
})  
