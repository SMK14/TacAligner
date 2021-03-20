import { CAD_LOADED, LOGIN_SUCCESS } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,
    cad: null
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type) {
        case CAD_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                cad: payload
            }
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        default:
            return state;
    }
}
