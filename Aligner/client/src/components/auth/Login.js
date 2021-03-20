import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { loginUser } from '../../actions/auth'
import tacLogo from '../../img/tac-logo.png'
// import axios from 'axios'

const Login = ({ loginUser, isAuthenticated }) => {

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        loginUser(email, password)
    }

    //Redirect if authenticated
    if(isAuthenticated){
        return <Redirect to="/dashboard" />
    }

    return (
        <div id="single-wrapper">
            <form className="frm-single" onSubmit={e => onSubmit(e)}>
                <div className ="inside">
                <div className="title"><img src={tacLogo} /></div>
                <div className="frm-title margin-top-20" ><strong>Admin Login</strong></div>

                <div className="frm-input">
                <input type="text" className="frm-inp" placeholder="Username" name="email" value = {email} onChange = {e => onChange(e)} /><i className="fa fa-user frm-ico"></i>
                </div>

                <div className="frm-input">
                <input
                    className="frm-inp"
                    type="password"
                    placeholder="Password"
                    name="password"
                    value = {password} 
                    onChange = {e => onChange(e)}
                    minLength="6"
                /><i class="fa fa-lock frm-ico"></i>
                </div>

                <div className="clearfix margin-bottom-20">
                    <div className="pull-right"><a href="page-recoverpw.html" className="a-link"><i className="fa fa-unlock-alt"></i>Forgot password?</a></div>
                </div>

                <button type="submit" className="frm-submit "><i class="fa fa-arrow-circle-right"></i>Log In</button>

                <a href="page-register.html" classNAme="a-link"><i classNAme="fa fa-key"></i>New to TAC Aligners? Register.</a>
            </div>
            </form>
            {/* <p className="my-1">
               Don't have an account? <Link to="/register">Sign Up</Link>
            </p> */}
        </div>
    )
}


// "i am an instructor at apratimdas18 "
// i have done this project using react  
// { 
//     public static void main 
// } 

Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state=> ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginUser })(Login)
