const mongoose = require('mongoose')
const Schema = mongoose.Schema

const PatientSchema = new Schema({

    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    problem:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('patient', PatientSchema)