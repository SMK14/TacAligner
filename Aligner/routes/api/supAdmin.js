const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const SAdmin  = require('../../models/SAdmin')

//@route    POST api/users
//@desc     Registering a super admin
//@access   Public

router.post('/', [
    check('name', "Name is required")
        .not()
        .isEmpty(),
    check('email', "Email is required")
        .isEmail(),
    check('password', "Please enter a password of minimum 6 characters")
        .isLength({ min: 6 })
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    try{
        //see if super admin exists
        sadmin = await SAdmin.findOne({ email })

        if(sadmin){
            return res.status(400).json({ errors: [{
                msg: 'User already exists'
            }] })
        }

        sadmin = new SAdmin({
            name,
            email,
            password
        })

        //encrypt password
        const salt = await bcrypt.genSalt(10)
        sadmin.password = await bcrypt.hash(password, salt)

        await sadmin.save()

        //return json webtoken
        const payload = {
            sadmin: {
                id: sadmin.id
            }
        }

        jwt.sign(
            payload,
            config.get('jwtSecret'),
            { expiresIn: 36000 },
            (err, token) => {
                if(err) throw err
                res.json({ token })
            }
        )
    }catch(err){
        console.log(err.message)
        res.status(500).send('Server Error');
    }
})


module.exports = router