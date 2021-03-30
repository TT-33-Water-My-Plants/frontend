import { TEST_CLICK, FETCH_PLANTS_SUCCESS, FETCH_PLANTS_START } from '../actions/index'

export const initialState = {
    isLoggedIn: false,
    isLoading: false,
    plants: [],
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type){
        case TEST_CLICK: //This can be used to check actions quickly
            console.log('HELLO')
            return {
                ...state,
            }
        case FETCH_PLANTS_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PLANTS_SUCCESS: 
            return {
                ...state,
                isLoading: false,
                plants: action.payload
            }
            
     
            
        
         default:
             return state
    }
}