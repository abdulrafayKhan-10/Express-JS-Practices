const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("home");
});

app.get("/products", (req, res) => {
    res.render("products");
});
app.get("/product/:id", (req, res) => {
    res.render("product_details");
});
app.get("/register", (req, res) => {
    res.render("register");
});
app.get("/login", (req, res) => {
    res.render("login");
});


app.listen(5000, ()=>{console.log("Server Running on Port 5000")});