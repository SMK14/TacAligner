const express = require('express')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const auth = require('../../middleware/auth')
const { check, validationResult } = require('express-validator')
const Doctor = require('../../models/Doctor')
const router = express.Router()


// @route POST api/doctors
// @desc Login || Authenticate & get token Doctor
// @access Public
router.post('/login', [
    check('email', 'Username is required')
        .not()
        .isEmpty(),
    check('password', 'Password is required')
        .exists(),
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    
    const { email, password } = req.body;

    try{
        //see if super doctor exists

        let doctor = await Doctor.findOne({ email })

        if(!doctor){
            return res.status(400).json({ errors: [ {msg: 'Invalid Credentials'}] })
        }

        
        const isMatch = await bcrypt.compare(password, doctor.password);

        if(!isMatch){
            return res.status(400).json({ errors: [ {msg: 'Invalid Credentials'}] })
        }
        

        //Return jsonwebtoken
        const payload = {
            doctor: {
                id: doctor.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret1'),
            { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err
                res.json({ token })
            }
        )
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
})

// @route POST api/doctors
// @desc Create a Doctor
// @access Private
router.post('/register', [ auth, [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('number', 'Number is required')
        .not()
        .isEmpty(),
    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('city', 'City is required')
        .not()
        .isEmpty(),
    check('address', 'Address is required')
        .not()
        .isEmpty(),
    check('clinicname', 'Clinic Name is required')
        .not()
        .isEmpty(),
] ],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:  errors.array() });
    }
    try{
        const { name, number, email, city, address, clinicname } = req.body;



        const newDoctor = new Doctor({
            name,
            number,
            email,
            city,
            password: '123456',
            address,
            clinicname
        })

        const salt = await bcrypt.genSalt(10);
        newDoctor.password = await bcrypt.hash('123456', salt);



        const doctor = await newDoctor.save();

        
        res.json(doctor);

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    
    
})

module.exports = router