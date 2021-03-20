import axios from "axios"
import { setAlert } from "./alert"
import { ADD_USER, USER_ERROR } from "./types"

export const addUser = ( name, number, email, city, address, role ) => async dispatch => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    console.log(name)
    const body = JSON.stringify({ name, number, email, city, address, role });

    try{
        const res = await axios.post('/api/users', body, config)

        dispatch({
            type: ADD_USER,
            payload: res.data
        })

        dispatch(setAlert('User Created', 'success'))
    }catch(err){
        dispatch({
            type: USER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        })
    }
}