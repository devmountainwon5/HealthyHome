import {combineReducers} from 'redux';

const users = (state = {}, action) => {
    switch(action.type){
        case 'set_user':
            return action.payload;
        default: 
            return state;
    }
}

const address = (state = {}, action) => {
    switch(action.type){
        case 'set_address':
            return action.payload;
        default: 
            return state;
    }
}

export default combineReducers({users, address});