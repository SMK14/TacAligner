const mongoose = require('mongoose')
const Schema = mongoose.Schema

const DoctorSchema = new Schema({

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
    price:{
        type: String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
})

module.exports = Post = mongoose.model('doctor', DoctorSchema)