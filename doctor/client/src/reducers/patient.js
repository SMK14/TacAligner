import { ADD_PATIENT, PATIENT_ERROR } from "../actions/types";

const initialState = {
    patients: [],
    loading: true,
    error: []
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ADD_PATIENT:
            return {
                ...state,
                patients: [...state.patients, payload],
                loading: false
            }
        default:
            return state;
    }
}