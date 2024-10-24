const cloudinary = require("cloudinary").v2;
const multer = require("multer");
const cloudinary_multer = require("multer-storage-cloudinary");

const ImageAuth = () => {
    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    });

    const storage = new cloudinary_multer.CloudinaryStorage({
        cloudinary: cloudinary,
        params: {
            folder: "users",
            allowed_file: ["jpg", "png"],
        },
    });

    const upload = multer({ storage: storage });
    return upload;
};

module.exports = { ImageAuth };
