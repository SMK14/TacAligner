import axios from 'axios'

import { setAlert } from './alert'
import { LOGIN_SUCCESS, USER_LOADED, AUTH_ERROR, LOGIN_FAILURE, REGISTER_SUCCESS,
    REGISTER_FAILURE, } from './types';

import setAuthToken from '../utils/setAuthToken'


//Load User
export const loadUser = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try{
        const res = await axios.get('/api/auth')

        dispatch({
            type: USER_LOADED,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//Register user
export const register = ({ name, number, email, city, address, role }) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ name, number, email, city, address, role })

    try{
        const res = await axios.post('/api/users', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    }catch(err){
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type:REGISTER_FAILURE
        })
    }

}


//Login User
export const loginUser = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try{
        const res = await axios.post('/api/auth', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
    }catch(err){
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type:LOGIN_FAILURE
        })
    }

}

//Login Doctor
export const loginDoctor = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try{
        const res = await axios.post('/api/auth/doctorlogin', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })
    }catch(err){
        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }

        dispatch({
            type:LOGIN_FAILURE
        })
    }

}