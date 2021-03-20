const express = require('express')
const router = express.Router()
const auth = require('../../middleware/auth')
const Cad = require('../../models/Cad')
const jwt = require('jsonwebtoken')
const config = require('config')
const path = require('path')
const bcrypt = require('bcryptjs')
const { check, validationResult } = require('express-validator')
const nodemailer = require('nodemailer')
const sendgridTransport = require('nodemailer-sendgrid-transport')
const Patient = require('../../models/Patient')
const multer = require('multer')



//Static file uploads
router.use(express.static(__dirname+"./public/"))

var Storage = multer.diskStorage({
    destination: "./public/upload/",
    filename:(req, file, cb) => {
        cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname))
    }
});

var upload = multer({
    storage: Storage
})

var uploadMultiple = upload.fields([
{ 
    name: 'patientPhoto'
 },
{
    name: 'frontal'
},
{
    name: 'lateral'
},
{
    name: 'frontalSmile'
},
{
    name: 'frontal1'
},
{
    name: 'frontalRight'
},
{
    name: 'frontalLeft'
},
{
    name: 'upperOcc'
},
{
    name: 'lowOcc'
},
{
    name: 'latCep'
},
{
    name: 'opg'
}
])


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

// @route POST api/doctor/patient
// @desc Create a Patient
// @access Private
router.post('/patient', uploadMultiple ,[ auth, [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('number', 'Number is required')
        .not()
        .isEmpty(),
    check('email', 'Email is required')
        .not()
        .isEmpty(),
    check('age', 'Age is required')
        .not()
        .isEmpty(),
    check('address', 'Address is required')
        .not()
        .isEmpty(),
    check('problem', 'Problem is required')
        .not()
        .isEmpty(),
] ],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        // res.json(errors)
        //console.log(res.getHeader('Content-Type'));
        return res.status(400).json({ errors:  errors.array() });
    }
    try{
        console.log(req.files)
        const name = req.body.name;
        const number = req.body.number;
        const email = req.body.email;
        const age = req.body.age;
        const address = req.body.address;
        const problem = req.body.problem;
        const patientPhoto = req.files.patientPhoto[0].filename;
        const frontal = req.files.frontal[0].filename;
        const frontalSmile = req.files.frontalSmile[0].filename;
        const lateral = req.files.lateral[0].filename;
        const frontal1 = req.files.frontal[0].filename;
        const frontalRight = req.files.frontalRight[0].filename;
        const frontalLeft = req.files.frontalLeft[0].filename;
        const upperOcc = req.files.upperOcc[0].filename;
        const lowOcc = req.files.lowOcc[0].filename;
        const latCep = req.files.latCep[0].filename;
        const opg = req.files.opg[0].filename;

        const newPatient = new Patient({
            patientPhoto,
            name,
            number,
            email,
            age,
            password: '123456',
            address,
            problem,
            frontal, 
            frontalSmile, 
            lateral, 
            frontal1, 
            frontalRight, 
            frontalLeft, 
            upperOcc, 
            lowOcc, 
            latCep, 
            opg

        })

        const salt = await bcrypt.genSalt(10);
        newPatient.password = await bcrypt.hash('123456', salt);



        const patient = await newPatient.save();

        
        res.json(patient);
    }catch(err){
        console.error(err.message);
        return res.status(500).send('Server Error');
    }

    
    
})


module.exports = router