import axios from "axios"
import { ADD_PATIENT, PATIENT_ERROR } from "./types"

export const addPatient = ( bodyformData ) => async dispatch => {
    

    try{
        
        const config = {
            headers: {
                'Content-Type':'multipart/form-data'
            }
        }
        const res = await axios.post('/api/doctor/patient', bodyformData, config)

        dispatch({
            type: ADD_PATIENT,
            payload: res.data
        })
    }catch(err){
        dispatch({
            type: PATIENT_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
        console.log(err)
    }
}