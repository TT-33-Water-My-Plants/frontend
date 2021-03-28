import { TEST_CLICK } from '../actions/index'

export const initialState = {
    isLoading: false,
    plants: null,
    error: 'hello'
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case TEST_CLICK: //This can be used to check actions quickly
            return console.log('hello')
         default:
             return state
    }
}