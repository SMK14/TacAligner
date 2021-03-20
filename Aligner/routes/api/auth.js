const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const bcrypt = require('bcryptjs')
const SAdmin = require('../../models/SAdmin')
const Doctor = require('../../models/Doctor')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')


//@route    GET api/auth
//@desc     get the user
//@access   Public
router.get('/', auth, async (req, res) => {
    try{
        const sadmin = await SAdmin.findById(req.sadmin.id).select('-password')
        res.json(sadmin)
    }catch (err){
        console.log(err.message)
        res.status(500).send('Server Error')
    }
})


//@route    POST api/auth
//@desc     authentication and get token || Login
//@access   Public
router.post('/', [
    check('email', "Email is required")
        .isEmail(),
    check('password', "Password is required")
        .exists()
],async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {email, password } = req.body

    try{
        //see if the user exists
        sadmin = await SAdmin.findOne({ email })

        if(!sadmin){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }

        const isMatch = await bcrypt.compare(password, sadmin.password)

        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }


        //return jsonwebtoken
        const payload = {
            sadmin: {
                id: sadmin.id
            }
        }

       

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err
                res.json({ token })
            }
        )
    }catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
    
})

//@route    POST api/auth/doctorlogin
//@desc     authentication and get token || Login
//@access   Public
router.post('/doctorlogin', [
    check('email', "Email is required")
        .isEmail(),
    check('password', "Password is required")
        .exists()
],async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const {email, password } = req.body

    try{
        //see if the user exists
        doc = await Doctor.findOne({ email })

        if(!doc){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }

        const isMatch = await bcrypt.compare(password, doc.password)

        if(!isMatch){
            return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] })
        }


        // //return jsonwebtoken
        const payload = {
            dadmin: {
                id: doc.id
            }
        }

       

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 360000 },
            (err, token) => {
                if(err) throw err
                res.json({ token })
            }
        )
    }catch (err) {
        console.log(err.message)
        res.status(500).send('Server Error!')
    }
    
})


module.exports = router