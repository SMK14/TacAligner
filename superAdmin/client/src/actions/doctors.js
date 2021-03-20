import axios from "axios"
import { setAlert } from "./alert"
import { ADD_DOCTORS, DOCTOR_ERROR } from "./types"

export const addDoctor = ( name, number, email, city, address, clinicname ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(name)
    const body = JSON.stringify({ name, number, email, city, address, clinicname });

    try{
        const res = await axios.post('/api/doctors/register', body, config)

        dispatch({
            type: ADD_DOCTORS,
            payload: res.data
        })

        dispatch(setAlert('Doctor Created', 'success'))
    }catch(err){
        dispatch({
            type: DOCTOR_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}