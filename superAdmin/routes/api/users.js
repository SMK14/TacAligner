const express = require('express')
const router = express.Router()
const { check, validationResult } = require('express-validator')
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth')

const User = require('../../models/User');
const Cad = require('../../models/Cad');
const Accountant = require('../../models/Accountant');
const Planner = require('../../models/Planner');
const OfficeAdmin = require('../../models/OfficeAdmin');


// @route POST api/users
// @desc Create a User with roles
// @access Private
router.post('/', [ auth, [
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
    check('role', 'Role is required')
        .not()
        .isEmpty(),
] ],async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors:  errors.array() });
    }
    try{
        const { name, number, email, city, address, role } = req.body;



        const newUser = new User({
            name,
            number,
            email,
            city,
            address,
            role
        })

        const user = await newUser.save();

        if(role === 'accountant'){
            const newAccountant = new Accountant({
                name,
                number,
                email,
                password: '123456',
                city,
                address
            });

            const salt = await bcrypt.genSalt(10);
            newAccountant.password = await bcrypt.hash('123456', salt);

            const accountant = await  newAccountant.save();

            console.log(accountant);

        }

        if(role === 'cad'){
            const newCad = new Cad({
                name,
                number,
                email,
                password: '123456',
                city,
                address
            });

            const salt = await bcrypt.genSalt(10);
            newCad.password = await bcrypt.hash('123456', salt);

            const cad = await  newCad.save();

            console.log(cad);

        }

        if(role === 'planner'){
            const newPlanner = new Planner({
                name,
                number,
                email,
                password: '123456',
                city,
                address
            });

            const salt = await bcrypt.genSalt(10);
            newPlanner.password = await bcrypt.hash('123456', salt);

            const planner = await  newPlanner.save();

            console.log(planner);

        }

        if(role === 'officeadmin'){
            const newOfficeAdmin = new OfficeAdmin({
                name,
                number,
                email,
                password: '123456',
                city,
                address
            });

            const salt = await bcrypt.genSalt(10);
            newOfficeAdmin.password = await bcrypt.hash('123456', salt);

            const officeAdmin = await  newOfficeAdmin.save();

            console.log(officeAdmin);

        }

        res.json(user);

    }catch(err){
        console.error(err.message);
        res.status(500).send('Server Error');
    }

    
    
})

module.exports = router