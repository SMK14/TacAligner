import React, { useState } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types';
import { login } from '../actions/auth'
import { Redirect } from 'react-router';

const Login = ({ login, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    console.log(formData)
    const { username, password } = formData;

    const onChange = e => {
        setFormData({ ...formData, [e.target.name]:e.target.value })
    };

    const onSubmit = async e => {
        e.preventDefault();
        console.log(username)
        login(username, password)
        console.log('Success')
    }

    //Redirect if logged in
    if(isAuthenticated){
        return <Redirect to="/" />
    }

    return (
        <div>
            <div id="single-wrapper">
        <form action="#" class="frm-single" onSubmit = {e => onSubmit(e)}>
            <div class="inside">
                <div class="title"><img src="assets/images/tac-logo.png" alt=""/></div>
                {/* <!-- /.title --> */}
                <div class="frm-title margin-top-20"><strong>Admin Login</strong></div>
                {/* <!-- /.frm-title --> */}
                <div class="frm-input"><input type="text" placeholder="Username" name="username" value={username} onChange={ e=>onChange(e) } class="frm-inp"/><i class="fa fa-user frm-ico"></i></div>
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

// Login.PropTypes = {
//     setAlert: PropTypes.func.isRequired,
// };

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)