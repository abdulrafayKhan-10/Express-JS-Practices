import mongoose from "mongoose";
const medicalrecordSchema = new mongoose.Schema({
    
},{
    timestamps: true
});
export const medical_record = mongoose.model("medical_record", medicalrecordSchema);