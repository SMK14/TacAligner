const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DoctorSchema= new Schema({
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
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
	clinicname:{
        type: String,
        required: true
    }
})

module.exports = Doctor= mongoose.model('doctor', DoctorSchema)