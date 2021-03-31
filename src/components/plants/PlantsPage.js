import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

const PlantsPage = (props) => {
    const { isLoading, plants, error } = props
    const [plantsList, setPlantsList] = useState([])
    
    useEffect(() => {
       
        fetch(`https://tt-33-water-my-plants.herokuapp.com/api/plants`)
        .then(res => {
            return res.json();
        })
        .then(data => {
            console.log(data)
            setPlantsList(data)
        })
        .catch(err => {
            console.error(`There was a problem fetching the plants: ${err.message}`)
        })
    },[])

    return (
        <Container>
            <h1>HELLO from Plants Page</h1>

        </Container>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        plants: state.plants,
        error: state.error
    }
}
export default connect(mapStateToProps, {})(PlantsPage)