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
            <form action="#" className="frm-single" onSubmit = {e => onSubmit(e)}>
            <div className="inside">
                <div className="title"><img src="assets/images/tac-logo.png" alt=""/></div>
                {/* <!-- /.title --> */}
                <div className="frm-title margin-top-20"><strong>Super Admin Login</strong></div>
                {/* <!-- /.frm-title --> */}
                <div className="frm-input"><input type="text" placeholder="Username" name="username" value={username} onChange={ e=>onChange(e) } className="frm-inp"/><i className="fa fa-user frm-ico"></i></div>
                {/* <!-- /.frm-input --> */}
                <div className="frm-input"><input type="password" placeholder="Password" name="password" value={password} onChange={e=>onChange(e)} className="frm-inp"/><i className="fa fa-lock frm-ico"></i></div>
                {/* <!-- /.frm-input --> */}
                <div className="clearfix margin-bottom-20">
                    <div className="pull-right"><a href="page-recoverpw.html" className="a-link"><i className="fa fa-unlock-alt"></i>Forgot password?</a></div>
                    {/* <!-- /.pull-right --> */}
                </div>
                {/* <!-- /.clearfix --> */}
                <button type="submit" className="frm-submit">Login<i className="fa fa-arrow-circle-right"></i></button>

                {/* <!-- /.footer --> */}
            </div>
            {/* <!-- .inside --> */}
        </form>
        {/* <!-- /.frm-single --> */}
    </div>
        </div>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { login })(Login)