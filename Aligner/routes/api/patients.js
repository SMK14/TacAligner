const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const Patient = require('../../models/Patient')
const bcrypt = require('bcryptjs')



//@route    POST api/patient/
//@desc     create new patient
//@access   Private
router.post('/new', [
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
        check('status', 'Price is required')
            .not()
            .isEmpty(),
        check('status', 'Price is required')
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

        const newPatient = new Patient({
            name: req.body.name,
            number: req.body.number,
            password: req.body.password,
            email: req.body.email,
            city: req.body.city,
            address: req.body.address,
            status: req.body.status,
            problem: req.body.problem,
        })
        //encrypt password
        const salt = await bcrypt.genSalt(10)
        newPatient.password = await bcrypt.hash(req.body.password, salt)

        const patient = await newPatient.save()

        res.json(patient)
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
    
})

module.exports = router;