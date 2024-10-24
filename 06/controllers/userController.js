const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const LoginGET = async (req,res) =>{
    return res.render("Login")
}
const LoginPOST = async (req,res) =>{
    try{
    const { email, password } = req.body;
    
        const Fetch_API = await fetch(process.env.API);
        const All_Data = await Fetch_API.json();
    
        const Check_Data = All_Data.filter((user) => user.email === email);
    
        if (Check_Data.length === 0) return res.send("Incorrect Credentials!");
        
        const checkPassword = await bcrypt.compare(password, Check_Data[0].password);
    
        if (checkPassword === false) return res.send("Incorrect Password!");
    
        const authenticateUserData = Check_Data[0];
        const Secret_Key = process.env.TOKEN_SECRET_KEY;
    
        const Token = jwt.sign(authenticateUserData, Secret_Key, { expiresIn: "1hr" });
    
        return res.status(201).render("Dashboard");
        
    } catch (error) {
        console.error("Error:", error); // Log the error for debugging
        return res.send("<h1>Error At: GET Request</h1>");
    }
}
const RegisterGET = async (req,res) =>{
    return res.render("Register")
}
const RegisterPOST= async (req,res) =>{
    try {
        const { username, password, email } = req.body

        const checkUsername = username ?? null
        const checkPassword = password ?? null
        const checkEmail = email ?? null
        const salt = await bcryptjs.genSalt(10)
        const hashpassword = await bcryptjs.hash(checkPassword, salt)

        if (checkEmail && checkPassword && checkUsername) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            const nameRegex = /^[A-Za-zÀ-ÿ]+([ '-][A-Za-zÀ-ÿ]+)*$/;

            const validateEmail = emailRegex.test(checkEmail) ? "<h1>Valid Email</h1>" : "<h1>Invalid Email</h1>";
            const validateName = nameRegex.test(checkUsername) ? "<h1>Valid Name</h1>" : "<h1>Invalid Name</h1>";
            const validatePassword = checkPassword.length > 5 ? "<h1>Valid Password</h1>" : "<h1>Invalid Password</h1>";

            const user_image = req.file.path;
            console.table([checkUsername, checkEmail, hashpassword, user_image])

            const getUsers = {
                username: username,
                email: email,
                password: hashpassword,
                image: user_image
            }

            const send_data = await fetch(process.env.API, {
                headers: {
                    "Content-Type": "application/json"
                },
                method: "POST",
                body: JSON.stringify(getUsers)
            }).then(() => {
                console.log("Registered Successfully");
            }).catch((e) => {
                console.log("Not Registered", e);
            })

            return res.send({ "Email": validateEmail, "Name": validateName, "Password": validatePassword });

        } else {
            const { username, password, email } = req.body
            console.log(username)
            console.log(password)
            console.log(email)
            return res.send("<h1>Fill All The Input Fields</h1>")
        }

    } catch (error) {
        return res.send("<h1>Error At: Post Request</h1>")
    }
}

module.exports = {LoginGET, LoginPOST, RegisterGET, RegisterPOST}
