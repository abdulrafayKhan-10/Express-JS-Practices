
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


const LoginGET = async (req,res) =>{
    return res.render("Login")
}
const LoginPOST = async (req,res) =>{
    const {username, password} = req.body;
    
}
const RegisterGET = async (req,res) =>{
    return res.render("Register")
}
const RegisterPOST= async (req,res) =>{
    const {username, email ,password} = req.body;
    
}

module.exports = {LoginGET, LoginPOST, RegisterGET, RegisterPOST}