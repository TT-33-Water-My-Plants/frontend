import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Container } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import { fetchPlants } from '../../actions/index'

import PlantCard from './PlantCard'


const PlantsPage = (props) => {
    const { isLoading, plants, error, fetchPlants } = props
    
    useEffect(() => {
        fetchPlants()
    },[fetchPlants])

    return (
        <Container >
            <Button primary>Add Plant</Button> 
            {
                plants.map((plant, index) => {
                    return (
                        <>
                        <Link key={index} to={`/plants/${plant.plant_id}`}>
                            <PlantCard plant={plant} />
                        </Link>
                        <br></br>
                        <br></br>
                        </>
                    )
                })
            }
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
export default connect(mapStateToProps, {fetchPlants})(PlantsPage)