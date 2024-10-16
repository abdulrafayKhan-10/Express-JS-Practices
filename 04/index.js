const express = require("express");
const app = express();
const dotenv = require("dotenv").config()

const {prodGet, prodPost} = require("./controllers/productController")

app.set("view engine", "ejs");


app.use(express.json())


app.route("/").get(prodGet).post(prodPost)

app.listen(process.env.PORT, () => {
    console.log("WORKING");
})
