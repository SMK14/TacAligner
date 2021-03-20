import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { loginCad } from '../actions/auth'
import { Redirect } from 'react-router';

const CadLogin = ({ loginCad, isAuthenticatedCad }) => {

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
        loginCad(email, password)
        console.log('Success')
    }

    // //Redirect if logged in
    // if(isAuthenticatedCad){
    //     return <Redirect to="/" />
    // }

    return (
        <div>
            <div id="single-wrapper">
        <form action="#" class="frm-single" onSubmit = {e => onSubmit(e)}>
            <div class="inside">
                <div class="title"><img src="assets/images/tac-logo.png" alt=""/></div>
                {/* <!-- /.title --> */}
                <div class="frm-title margin-top-20"><strong>CAD Login</strong></div>
                {/* <!-- /.frm-title --> */}
                <div class="frm-input"><input type="text" placeholder="Username" name="email" value={email} onChange={ e=>onChange(e) } class="frm-inp"/><i class="fa fa-user frm-ico"></i></div>
                {/* <!-- /.frm-input --> */}
                <div class="frm-input"><input type="password" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} class="frm-inp"/><i class="fa fa-lock frm-ico"></i></div>
                {/* <!-- /.frm-input --> */}
                <div class="clearfix margin-bottom-20">
                    <div class="pull-right"><a href="page-recoverpw.html" class="a-link"><i class="fa fa-unlock-alt"></i>Forgot password?</a></div>
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
    loginCad: PropTypes.func.isRequired,
    isAuthenticatedCad: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticatedCad: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginCad })(CadLogin)
