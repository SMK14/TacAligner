import { combineReducers } from 'redux'
import alert from './alert'
import auth from './auth';
import doctor from './doctor'
import user from './user'
import cad from './cad'

export default combineReducers({
    alert,
    auth,
    doctor,
    user,
    cad
});