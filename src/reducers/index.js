import { TEST_CLICK, ALERT } from '../actions/index'

export const initialState = {
    isLoading: false,
    plants: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case TEST_CLICK: 
            console.log('HELLO')
            return {
                ...state,
            }
            
     //This can be used to check actions quickly
            
        // case ALERT:
        //     return console.log('HELLO!!!')
         default:
             return state
    }
}