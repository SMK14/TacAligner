import { ADD_USER, USER_ERROR } from "../actions/types";

const initialState = {
    users: [],
    loading: true,
    error: []
}

export default function(state = initialState, action){
    const { type, payload } = action;

    switch(type){
        case ADD_USER:
            return {
                ...state,
                users: [...state.users, payload],
                loading: false
            }
        default:
            return state;
    }
}