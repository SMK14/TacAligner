const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PatientSchema= new Schema({
    patientPhoto:{
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    age: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
	problem:{
        type: String,
        required: true
    },
    
    frontal:{
        type: String
    },
    frontalSmile:{
        type: String
    },
    lateral:{
        type: String
    },
    frontal1:{
        type: String
    },
    frontalRight:{
        type: String
    },
    frontalLeft:{
        type: String
    },
    upperOcc:{
        type: String
    },
    lowOcc:{
        type: String
    },
    latCep:{
        type: String
    },
    opg:{
        type: String
    }
})

module.exports = Patient= mongoose.model('patient', PatientSchema)