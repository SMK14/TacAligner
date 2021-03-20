import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../actions/cad'
import { Redirect } from 'react-router';
import axios from 'axios'
import { Link } from 'react-router-dom';

const CadLogin = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    console.log(formData)
    const { email, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]:e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log(email)
        login(email, password)
        // const newUser = {
        //         email,
        //         password
        //     }

        //     try{
        //         const config = {
        //             headers: {
        //                 'Content-Type':'application/json'
        //             }
        //         }

        //         const body = JSON.stringify(newUser)

        //         const res = await axios.post('/api/cad', body, config)

        //         console.log(res.data)
        //     }catch(err){
        //         console.log(err.response.data)
        //     }
        console.log('Success')
    }

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/add-patient" />
    }

    return (
        <div>
            <div id="single-wrapper">
        <form action="#" class="frm-single" onSubmit = {e => onSubmit(e)}>
            <div class="inside">
                <div class="title"><img src="assets/images/tac-logo.png" alt=""/></div>
                {/* <!-- /.title --> */}
                <div class="frm-title margin-top-20"><strong>Doctor Login</strong></div>
                {/* <!-- /.frm-title --> */}
                <div class="frm-input"><input type="text" placeholder="Username" name="email" value={email} onChange={ e=>onChange(e) } class="frm-inp"/><i class="fa fa-user frm-ico"></i></div>
                {/* <!-- /.frm-input --> */}
                <div class="frm-input"><input type="password" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} class="frm-inp"/><i class="fa fa-lock frm-ico"></i></div>
                {/* <!-- /.frm-input --> */}
                <div class="clearfix margin-bottom-20">
                    <div class="pull-right"><Link to="/forgot-password" class="a-link"><i class="fa fa-unlock-alt"></i>Forgot password?</Link></div>
                    {/* <!-- /.pull-right --> */}
                </div>
                {/* <!-- /.clearfix --> */}
                <button type="submit" class="frm-submit">Login<i class="fa fa-arrow-circle-right"></i></button>

                {/* <!-- /.row --> */}
                <a href="page-register.html" class="a-link"><i class="fa fa-key"></i>New to TAC Aligners? Register.</a>

                {/* <!-- /.footer --> */}
            </div>
            {/* <!-- .inside --> */}
        </form>
        {/* <!-- /.frm-single --> */}
    </div>
        </div>
    )
}

CadLogin.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.cad.isAuthenticated
});

export default connect(mapStateToProps, { login })(CadLogin)
