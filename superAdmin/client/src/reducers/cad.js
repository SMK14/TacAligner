import { CAD_LOADED } from "../actions/types";

const initialState = {
    token: localStorage.getItem('token'),
    isAuthenticatedCad: null,
    loading: true,
    cad: null
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type) {
        case CAD_LOADED:
            return{
                ...state,
                isAuthenticatedCad: true,
                loading: false,
                cad: payload
            }
        default:
            return state;
    }
}
