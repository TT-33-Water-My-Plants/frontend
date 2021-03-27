import { TEST_CLICK } from '../actions/index'

export const initialState = {
    isLoading: false,
    plants: null,
    error: 'hello'
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case TEST_CLICK:
            return console.log('hello')
         default:
             return state
    }
}