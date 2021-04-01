
import { TEST_CLICK, FETCH_PLANTS_SUCCESS, FETCH_PLANTS_START, UPDATE_PLANTS_START, UPDATE_PLANTS_SUCCESS, LOGIN_SUCCESS, LOGOUT, ADD_PLANTS_START, ADD_PLANTS_SUCCESS} from '../actions/index'



export const initialState = {
    buttonLoader: false,
    isLoggedIn: false,
    isLoading: false,
    plants: [],
    updating: [],
    adding: [],
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

        case UPDATE_PLANTS_START:
            return {
                ...state,
                buttonLoader: true
            }
        case UPDATE_PLANTS_SUCCESS: 
            console.log(action.payload)
            return {
                ...state,
                buttonLoader: false,
                updating: action.payload
            }
        case ADD_PLANTS_START: 
            return {
                ...state,
                buttonLoader: true
            }
        case ADD_PLANTS_SUCCESS:
            return {
                ...state,
                adding: action.payload
            }

            
        case LOGIN_SUCCESS:
            return {
                ...state,
                isLoggedIn: action.payload.isLoggedIn
            }

        case LOGOUT:
            localStorage.removeItem('token');
            return {
                ...state,
                isLoggedIn: false
            }

            
         default:
             return state
    }
}