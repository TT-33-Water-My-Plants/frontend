import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Button, Container, Icon } from 'semantic-ui-react'
import { BrowserRouter, Route, useLocation } from 'react-router-dom'

import { fetchPlants } from '../../actions/index'

import PlantCard from './PlantCard'
import PlantInfo from './PlantInfo'

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
                plants.map(plant => {
                    return (
                        <BrowserRouter>
                            <Route exact path={`${pathname}`} render={ props => <PlantCard {...props}  key={plant.nickname} plant={plant} />}  />
                        </BrowserRouter>
                        // <PlantCard key={plant.nickname} plant={plant} />
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