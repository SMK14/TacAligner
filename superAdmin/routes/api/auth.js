const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Admin = require('../../models/Admin')
const jwt = require('jsonwebtoken')
const config = require('config')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')


// @route GET api/auth
// @desc Test Route
// @access Public
router.get('/', auth, async (req, res) => {
    try{
        const admin = await Admin.findById(req.admin.id).select('-password');
        res.json(admin);
    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

})


// @route POST api/auth
// @desc Login || Authenticate & get token Super Admin
// @access Public
router.post('/', [
    check('username', 'Username is required')
        .not()
        .isEmpty(),
    check('password', 'Password is required')
        .exists(),
], async (req, res) => {
    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() })
    }
    
    const { username, password } = req.body;

    try{
        //see if super admin exists

        let admin = await Admin.findOne({ username })

        if(!admin){
            return res.status(400).json({ errors: [ {msg: 'Invalid Credentials'}] })
        }

        
        const isMatch = await bcrypt.compare(password, admin.password);

        if(!isMatch){
            return res.status(400).json({ errors: [ {msg: 'Invalid Credentials'}] })
        }
        

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