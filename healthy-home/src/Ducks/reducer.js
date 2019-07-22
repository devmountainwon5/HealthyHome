<<<<<<< HEAD
import {combineReducers} from 'redux'
 
const user = (state= {}, action) => {
    switch(action.type){
        case 'setUser':
            return action.payload;
        default:
            return state;
    } 
=======
import {combineReducers} from 'redux';

const user = (state = {}, action) => {
    switch(action.type){
        case 'set_user':
            return action.payload;
        default: 
            return state;
    }
>>>>>>> dev
}

export default combineReducers({user});