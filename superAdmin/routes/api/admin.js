const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')
const Admin = require('../../models/Admin')


// @route POST api/admin
// @desc Register Super Admin
// @access Public
router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('username', 'Username is required')
        .not()
        .isEmpty(),
    check('email', 'Email is required')
        .isEmail(),
    check('password', 'Please enter a password with 6 or more characters')
        .isLength({ min: 6 }),
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    
    const { name, username, email, password } = req.body;

    try{
        //see if super admin exists

        let admin = await Admin.findOne({ username })

        if(admin){
            return res.status(400).json({ errors: [ {msg: 'User already exists'}] })
        }

        admin = new Admin({
            name,
            username,
            email,
            password
        });


        //Encrypt Password
        const salt = await bcrypt.genSalt(10);

        admin.password = await bcrypt.hash(password, salt);

        await admin.save();

        //Return jsonwebtoken
        const payload = {
            admin: {
                id: admin.id
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
    }catch(err){
        console.error(err.message)
        res.status(500).send('Server Error')

    }

    

    
})

module.exports = router