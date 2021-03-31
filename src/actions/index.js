import axios from "axios"

export const TEST_CLICK = "TEST_CLICK"
export const FETCH_PLANTS_START = "FETCH_PLANTS_START"
export const FETCH_PLANTS_SUCCESS = "FETCH_PLANTS_SUCCESS"

//Tester
export const testClick = () => {
   return {type: TEST_CLICK}
}

//Axios call to server for plant data (Will dynamically create Plant Cards)
export const fetchPlants = () => {
   return (dispatch) => {
      dispatch({type: FETCH_PLANTS_START})
      axios
      .get(`https://tt-33-water-my-plants-backend.herokuapp.com/api/plants`)
      .then(res => {
         console.log(res.data)
         dispatch({type: FETCH_PLANTS_SUCCESS, payload: res.data})
      })
      .catch(err => {
         console.error(`There was a problem retrieving plant data from server: ${err.message}`)
      })
   }
}