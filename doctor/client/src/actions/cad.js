import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';

//Load User

import { CAD_LOADED, LOGIN_SUCCESS, AUTH_ERROR,  LOGIN_FAIL} from "./types";

export const loadCad = () => async dispatch => {
    if(localStorage.token){
        setAuthToken(localStorage.token)
    }

    try{
        const res = await axios.get('/api/doctor');

        dispatch({
            type: CAD_LOADED,
            payload: res.data
        });
    }catch(err){
        dispatch({
            type: AUTH_ERROR
        })
    }
}

//Login User
export const login = ( email, password ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({ email, password })

    try{
        const res = await axios.post('/api/doctor', body, config)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadCad())
    }catch(err){
        const errors = err.response.data.errors

        if(errors){
            console.log(errors)
        }

        dispatch({
            type:LOGIN_FAIL
        })
    }

}