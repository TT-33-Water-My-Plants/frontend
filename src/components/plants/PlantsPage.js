import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Button, Container } from 'semantic-ui-react'
import { Link, useHistory } from 'react-router-dom'

import { fetchPlants } from '../../actions/index'

import PlantCard from './PlantCard'


const PlantsPage = (props) => {
    const { isLoading, plants, error, fetchPlants } = props
    const history = useHistory()
    
    useEffect(() => {
        fetchPlants()
    },[fetchPlants])

    return (
        
        <Container>
            <Button primary onClick={() => history.push('/plants/addplant')} style={{margin: '2rem 0'}}>Add Plant</Button> 
            {
                plants.map((plant) => {
                    return (
                        <>
                        <Link key={plant.plant_id} to={`/plants/${plant.plant_id}`}>
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