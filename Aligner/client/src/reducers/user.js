import {
    GET_USERS,
    USER_ERROR,
} from '../actions/types'

const initialState = {
    users: [],
    user: null,
    error: {}
}

export default function(state = initialState, action){
    const { type, payload } = action
    switch(type){
        case GET_USERS:
            return{
                ...state,
                users:payload,
                loading:false
            }
        case USER_ERROR:
            return{
                ...state,
                error: payload,
                loading: false
            }
        default:
            return state
    }
}