import {combineReducers} from 'redux'
 
const user = (state= {}, action) => {
    switch(action.type){
        case 'setUser':
            return action.payload;
        default:
            return state;
    } 
}

export default combineReducers({user});