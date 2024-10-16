const express = require("express");

const app = express();

app.set("view engine", "ejs");

const data = [
    {
      id: 1,
      image_src: "https://img.freepik.com/free-vector/programmers-using-javascript-programming-language-computer-tiny-people-javascript-language-javascript-engine-js-web-development-concept_335657-2412.jpg?w=1380&t=st=1728578702~exp=1728579302~hmac=c5d65eccb4d5508c34539ca384e09da9506e4c92615f2bebe9facaf5fc1f868c",
      title: "Introduction to JavaScript",
      short_description: "Learn the basics of JavaScript, including variables, functions, and loops."
    },
    {
      id: 2,
      image_src: "https://media.licdn.com/dms/image/D4D12AQH5dlcCSBp4cg/article-cover_image-shrink_600_2000/0/1672212317392?e=2147483647&v=beta&t=JYxutLOsSv6Cl9lBkfcZMqAmUIYYbnTgWtuZHrndvVU",
      title: "Understanding React Components",
      short_description: "A guide to creating and managing React components for efficient UI development."
    },
    {
      id: 3,
      image_src: "https://www.oxfordwebstudio.com/user/pages/06.da-li-znate/sta-je-css/sta-je-css.png",
      title: "Mastering CSS Grid",
      short_description: "Explore advanced layouts with CSS Grid for responsive web design."
    }
  ];

app.get("/", (req, res) => {

    const pagename = "Home Page";
    const pagenumber = 1;
    const pagestatus = true;
    res.render("home", {pagename, pagenumber, pagestatus});
});

app.get("/products", (req, res) => {      
    res.render("products", {data});
});

app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const fetchById = (id) =>{
        return data.find((item) => item.id == id);
    }
    const result = fetchById(id);
    res.render("productdetails", {result});
})

app.listen(5000, () => {
    console.log("Server started on port 5000");
});