import axios from 'axios'
import { setAlert } from './alert'
import {
    GET_DOCTORS,
    DOCTOR_ERROR,
} from './types'

//Get posts
export const getDoctors = () => async dispatch => {
    try{
        const res = await axios.get('/api/doctors')

        dispatch({
            type: GET_DOCTORS,
            payload: res.data
        })

    }catch(err){
        dispatch({
            type:DOCTOR_ERROR,
            payload: {msg: err.response.statusText, status:err.response.status}
        })
    }
}
