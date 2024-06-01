import mongoose from "mongoose";
const hospitalSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    location:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    postalCode:{
        type: String,
        required: true
    },
    SpecializedIn:[
        {
            type: String
        }
    ],
    
},{ 
    timestamps: true
});
export const hospital = mongoose.model("hospital", hospitalSchema);










