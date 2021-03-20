const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const Doctor = require('../../models/Doctor')
const bcrypt = require('bcryptjs')

//@route    POST api/doctors
//@desc     create new doctor
//@access   Private
router.post('/', [
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('number', 'Number is required')
            .not()
            .isEmpty(),
        check('password', "Please enter a password of minimum 6 characters")
            .isLength({ min: 6 }),
        check('email', 'Email is required')
            .isEmail(),
        check('city', 'City is required')
            .not()
            .isEmpty(),
        check('address', 'Address is required')
            .not()
            .isEmpty(),
        check('price', 'Price is required')
            .not()
            .isEmpty()
    ]
], 
async (req, res) =>{
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    try{

        const newDoctor = new Doctor({
            name: req.body.name,
            number: req.body.number,
            password: req.body.password,
            email: req.body.email,
            city: req.body.city,
            address: req.body.address,
            price: req.body.price,
        })
        //encrypt password
        const salt = await bcrypt.genSalt(10)
        newDoctor.password = await bcrypt.hash(req.body.password, salt)

        const doctor = await newDoctor.save()

        res.json(doctor)
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
    
})

//@route    GET api/doctors
//@desc     get all the doctors
//@access   Private
router.get('/', [
],
async(req, res) => {
    try{
        const doctors = await Doctor.find().sort({ date: -1 })
        res.json(doctors)
    }catch(err)
    {
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
})

module.exports = router;