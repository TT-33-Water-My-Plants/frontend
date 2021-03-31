import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Icon } from 'semantic-ui-react'
import { BrowserRouter, Route, useLocation, Link } from 'react-router-dom'

import { fetchPlants } from '../../actions/index'

import PlantCard from './PlantCard'


const PlantsPage = (props) => {
    const { isLoading, plants, error, fetchPlants } = props
    const { pathname, key, url } = useLocation()
    
    useEffect(() => {
        fetchPlants()
    },[fetchPlants])

    return (
        <Container>
            <Button primary>Add Plant</Button> 
            {
                plants.map((plant, index) => {
                    return (
                        <Link key={plant.nickname} to={`/plants/${index}`}>
                            <PlantCard  plant={plant} />
                        </Link>
                        
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