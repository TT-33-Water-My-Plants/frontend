import { TEST_CLICK, ALERT } from '../actions/index'

export const initialState = {
    isLoading: false,
    plants: null,
    error: 'hello'
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case TEST_CLICK: //This can be used to check actions quickly
            return console.log('hello')
        // case ALERT:
        //     return console.log('HELLO!!!')
         default:
             return state
    }
}