const express = require("express");
const app = express();
const dotenv = require("dotenv").config()

const {prodGet, prodPost} = require("./Controllers/productController");
const { ImageAuth } = require("./middlewares/ImageAuth");
const multerImage  = ImageAuth();
app.set("view engine", "ejs");


app.use(express.json())


app.route("/").get(prodGet).post(multerImage.single('product_image'), prodPost)

app.listen(process.env.PORT, () => {
    console.log("WORKING");
})
