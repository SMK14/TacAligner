const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Cad = require('../../models/Cad')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')




//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

const transporter = nodemailer.createTransport(sendgridTransport({
    auth: {
        api_key: "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"
    }
}))

// @route GET api/cad
// @desc Test Route
// @access Public
router.get('/', auth, async (req, res) => {
    try{
        const cad = await Cad.findById(req.cad.id).select('-password');
        res.json(cad);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})


// @route POST api/cad/
// @desc Login || Authenticate & get token CAD
// @access Public
router.post('/', [
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
        const transporter = nodemailer.createTransport(sendgridTransport({
            auth: {
                api_key: "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"
            }
        }))
        //see if super admin exists

        let cad = await Cad.findOne({ email })

        if(!cad){
            return res.status(400).json({ errors: [ {msg: 'Invalid Credentials'}] })
        }

        
        const isMatch = await bcrypt.compare(password, cad.password);

        if(!isMatch){
            return res.status(400).json({ errors: [ {msg: 'Invalid Credentials'}] })
        }
        

        //Return jsonwebtoken
        const payload = {
            cad: {
                id: cad.id
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

        await transporter.sendMail({
            to: email,
            from: "apratimdas18@gmail.com",
            subject: "login success",
            html: "<h1>Welcome to Cad</h1>"
        })


    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }
})


module.exports = router