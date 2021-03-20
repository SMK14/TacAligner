import { ADD_DOCTORS } from "../actions/types";

const initialState = {
    doctors: [],
    loading: true,
    error: []
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ADD_DOCTORS:
            return {
                ...state,
                doctors: [...state.doctors, payload],
                loading: false
            }
        default:
            return state;
    }
}