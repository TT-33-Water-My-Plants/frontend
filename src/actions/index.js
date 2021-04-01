import axios from "axios"; // eslint-disable-line
import axiosWithAuth from '../utils/axiosWithAuth';

export const TEST_CLICK = "TEST_CLICK";
export const FETCH_PLANTS_START = "FETCH_PLANTS_START";
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS";
export const LOGIN_SUCCESS = "LOGIN SUCCESS";
export const LOGOUT = "LOGOUT";

//Tester
export const testClick = () => {
   return {type: TEST_CLICK};
};

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

export const login = () => {
   return (dispatch) => {
      dispatch({type: LOGIN_SUCCESS, payload: {isLoggedIn: true}});
   };
};

export const logout = () => {
   return (dispatch) => {
      dispatch({type: LOGOUT})
   }
}