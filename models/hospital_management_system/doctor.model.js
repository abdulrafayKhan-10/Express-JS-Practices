import mongoose from "mongoose";
const doctorSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    Experienced:{
        type: String,
        required: true
    },
    WorkInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "hospital"
        }
    ]

},{
    timestamps: true
});
export const doctor = mongoose.model("doctor", doctorSchema);