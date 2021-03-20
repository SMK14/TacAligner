const { Router } = require('express')
const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const auth = require('../../middleware/auth')
const User = require('../../models/User')

//@route    POST api/users
//@desc     create new users
//@access   Private
router.post('/', [
    [
        check('name', 'Name is required')
            .not()
            .isEmpty(),
        check('number', 'Number is required')
            .not()
            .isEmpty(),
        check('email', 'Email is required')
            .isEmail(),
        check('city', 'City is required')
            .not()
            .isEmpty(),
            check('address', 'Address is required')
            .not()
            .isEmpty(),
        check('role', 'Role is required')
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

        const newUser = new User({
            name: req.body.name,
            number: req.body.number,
            email: req.body.email,
            city: req.body.city,
            address: req.body.address,
            role: req.body.role,
        })

        const user = await newUser.save()

        res.json(user)
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
    
})

//@route    GET api/users
//@desc     get all the users
//@access  
router.get('/all', [
],
async(req, res) => {
    try{
        const users = await User.find().sort({ date: -1 })
        res.json(users)
    }catch(err)
    {
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
})

module.exports = router;
