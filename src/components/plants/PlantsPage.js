import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Icon } from 'semantic-ui-react'

import { fetchPlants } from '../../actions/index'

import PlantCard from './PlantCard'

const PlantsPage = (props) => {
    const { isLoading, plants, error, fetchPlants } = props
    
    useEffect(() => {
        fetchPlants()
    },[fetchPlants])

    return (
        <Container>
            <Button primary>Add Plant</Button> 
            {
                plants.map(plant => {
                    return (
                        <PlantCard key={plant.nickname} plant={plant} />
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