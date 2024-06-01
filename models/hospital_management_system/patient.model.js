import mongoose from "mongoose";
const patientSchema = new mongoose.Schema({
 name:{
    type: String, 
    required: true
 },
 Diagonsedwith:{
    type: String, 
    required: true
 },
 Address:{
    type: String, 
    required: true
 },
 age:{
    type: Number, 
    required: true
 },
 BloodGroup:{
    type: String, 
    enum: ["A+","A-","B-","B+","O+","O-","AB+","AB-"],
    required: true
 },
 Gender:{
    type: String,
    enum: ["M","F","O"],
    required: true
 },
 AdmittedIn:{
    type: mongoose.Schema.Types.ObjectId,
    ref:"hospital"
 }
},{
    timestamps: true
});
export const patient = mongoose.model("patient", patientSchema);