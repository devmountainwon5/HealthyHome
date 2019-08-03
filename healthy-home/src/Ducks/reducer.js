import {combineReducers} from 'redux';

const user = (state = {}, action) => {
    switch(action.type){
        case 'set_user':
            return action.payload;
        default: 
            return state;
    }
}

const quizItems = (state = [], action) => {
    switch(action.type){
        case 'set_quizItems':
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

export default combineReducers({user, address, quizItems});