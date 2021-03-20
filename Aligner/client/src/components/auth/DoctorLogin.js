
import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import tacLogo from '../../img/tac-logo.png'
import { loginDoctor } from '../../actions/auth'

const DoctorLogin = ({ loginDoctor, isAuthenticated }) => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { email, password } = formData

    const onChange = e => setFormData({ ...formData, [e.target.name] : e.target.value })

    const onSubmit = async e => {
        e.preventDefault()
        loginDoctor(email, password)
    }

    //Redirect if authenticated
    if(isAuthenticated){
        return <Redirect to="/doctor-dashboard" />
    }
    return (
        <div>
            <div id="single-wrapper">
            <form className="frm-single" onSubmit={e => onSubmit(e)}>
                <div className ="inside">
                <div className="title"><img src={tacLogo} /></div>
                <div className="frm-title margin-top-20" ><strong>Doctor Login</strong></div>

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
            </div>
            </form>
            {/* <p className="my-1">
               Don't have an account? <Link to="/register">Sign Up</Link>
            </p> */}
        </div>
        </div>
    )
}

DoctorLogin.propTypes = {
    loginDoctor: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state=> ({
    isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps, { loginDoctor })(DoctorLogin)
