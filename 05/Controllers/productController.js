// @method : GET
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const prodGet = async (req, res) => {
   return res.render("Products");
}


// @method : POST
const prodPost = async (req, res) => {
    try {
        const { product_name, product_description, product_price, product_category, product_image } = req.body;

        // Trim inputs to remove unnecessary whitespace

  
        const checkProductName = product_name?.trim() ?? null;
        const checkProductDescription = product_description?.trim() ?? null;
        const checkProductPrice = product_price ?? null; // This will be validated later
        const checkProductCategory = product_category?.trim() ?? null;

        // const Hashed_Productid = bcrypt.hashSync(checkProductId, 10);

        // Validate fields
        const errors = {};

        // Name Validation
        if (!checkProductName || !/^[A-Za-zÀ-ÿ0-9\s]+([ '-][A-Za-zÀ-ÿ0-9\s]+)*$/.test(checkProductName)) {
            errors.product_name = "Invalid Product Name";
        }

        // Description Validation
    

        // Price Validation
        if (!checkProductPrice || isNaN(checkProductPrice) || Number(checkProductPrice) <= 0) {
            errors.product_price = "Invalid Product Price";
        }

        // Category Validation
        if (!checkProductCategory) {
            errors.product_category = "Product Category is required";
        }

        // If there are errors, send them back to the client
        if (Object.keys(errors).length > 0) {
            return res.status(400).json({ errors });
        }

        // Create the product object
        const productData = {
            product_name: checkProductName,
            product_description: checkProductDescription,
            product_price: Number(checkProductPrice), // Ensure it's a number
            product_category: checkProductCategory,
            product_image: product_image
        };

        // Send the product data to the API
        await fetch(process.env.MOCK_API_KEY, {
            headers: {
                "Content-Type": "application/json"
            },
            method: "POST",
            body: JSON.stringify(productData)
        });

        console.log("Product Added Successfully");
        return res.status(201).json({ message: "Product Added Successfully", productData });

    } catch (error) {
        console.error("Error At: Post Request", error);
        return res.status(500).send("<h1>Error At: Post Request</h1>");
    }
}



module.exports = { prodGet, prodPost }
