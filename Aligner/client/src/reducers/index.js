import { combineReducers } from 'redux'
import auth from './auth'
import user from './user'
import doctor from './doctor'

export default combineReducers({
    auth,
    user,
    doctor
})