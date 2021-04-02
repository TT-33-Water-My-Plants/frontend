import axios from "axios"; // eslint-disable-line
import axiosWithAuth from '../utils/axiosWithAuth';

export const TEST_CLICK = "TEST_CLICK";
export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN SUCCESS";
export const LOGOUT = "LOGOUT";

export const UPDATE_PLANTS_START = "UPDATE_PLANTS_START"
export const UPDATE_PLANTS_SUCCESS = "UPDATE_PLANTS_SUCCESS"

export const ADD_PLANTS_START = "ADD_PLANTS_START"
export const ADD_PLANTS_SUCCESS = "ADD_PLANTS_SUCCESS"
 

//Tester
export const testClick = () => {
   return {type: TEST_CLICK};
};



//C R E A T E
export const addPlants = (data) => {
   return (dispatch) => {
      dispatch({type: ADD_PLANTS_START})
      axiosWithAuth()
      .post(`https://tt-33-water-my-plants-backend.herokuapp.com/api/plants`, data)
      .then(res => {
         dispatch({type: ADD_PLANTS_SUCCESS, payload: res.data})
      })
      .catch(err => {
         console.error(`There was an error adding plant to server: ${err.message}`)
      })
   }
}

//R E A D
//Axios call to server for plant data (Will dynamically create Plant Cards)
export const fetchPlants = () => {
   return (dispatch) => {
      dispatch({type: FETCH_PLANTS_START});
      axiosWithAuth()
      .get(`https://tt-33-water-my-plants-backend.herokuapp.com/api/plants`)
      .then(res => {
         dispatch({type: FETCH_PLANTS_SUCCESS, payload: res.data});
      })
      .catch(err => {
         console.error(`There was a problem retrieving plant data from server: ${err.message}`);
      });
   };
};

export const login = (id) => {
   return (dispatch) => {
      dispatch({type: LOGIN_SUCCESS, payload: {isLoggedIn: true, user_id: id}});
   };
};

export const logout = () => {
   return (dispatch) => {
      dispatch({type: LOGOUT})
   }
}

//U P D A T E  
export const editPlants = (id, data) => dispatch => {
      dispatch({type: UPDATE_PLANTS_START})
      axios
      .put(`https://tt-33-water-my-plants-backend.herokuapp.com/api/plants/${id}`, data)
      .then(res => {
         dispatch({type: UPDATE_PLANTS_SUCCESS, payload: res.data})
      })
      .catch(err => {
         console.error(`There was a problem retrieving plant data from server: ${err.message}`)
      })
   
}