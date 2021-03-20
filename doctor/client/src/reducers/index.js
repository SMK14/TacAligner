import { combineReducers } from 'redux'
import cad from './cad'
import patient from './patient'

export default combineReducers({
    cad,
    patient
});