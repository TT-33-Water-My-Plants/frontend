import axios from 'axios'
import React, { useEffect, useState, useParams } from 'react'
import { Button, Container, Image } from 'semantic-ui-react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import { deletePlant } from '../../actions/index'

import PlantForm from './PlantForm'

const StyledMain = styled.section`
    margin: 7rem 0;
    display: flex;
    justify-content: space-evenly;
    box-shadow: 0 0.125rem 0.375rem 0 rgba(0, 0, 0, 0.4);
    border-radius: 13px;
    
    h1 {
        font-size: 4rem;
    }

    .species {
        font-size: 1.4rem;
        text-transform: uppercase;
    }

`

 const PlantInfo = ({match, user_id, deletePlant}) => {
    const { params: {plantsId} } = match
    const [plant, setPlant] = useState([])
    const [editing, setEditing] = useState(false)


    useEffect(() => {
        axios
        .get(`https://tt-33-water-my-plants-backend.herokuapp.com/api/plants/${plantsId}`)
        .then(res => {
            setPlant(res.data)
        })
        .catch(err => {
            console.error(`There was a problem retrieving plant data: ${err}`)
        })
    },[])

    const handleDelete = () => {
        console.log('delete is being handled')
        deletePlant(plantsId)
        
    }

    return (
        <Container>
            <StyledMain>
                <Container>
                    <Image src={plant.image} />
                </Container>
                <Container style={{paddingLeft: '3rem'}}>
                    <h1>{plant.nickname}</h1>
                    <p class="species">{plant.species}</p>
                    <p>{plant.h2oFrequency}</p>
                </Container>
            </StyledMain>
            <Button
                onClick={() => setEditing(!editing)} 
                primary style={{fontSize: '1.2rem', display: editing ? 'none' : 'block'}}
             >Edit Plant</Button>
             <br></br>
             {/* {user_id === plant.user_id &&  */}
                <Button color='red' style={{fontSize: '1.2rem'}} onClick={handleDelete}>Delete</Button> 
             <PlantForm 
                editing={editing} 
                setEditing={setEditing} 
                plant={plant}
                plantsId={plantsId}
             />
       </Container>
    )
}
const mapToStateProps = state => {
    return {
        user_id: state.currentUser.user_id,
        plants: state.plants
    }
}
export default connect(mapToStateProps, {deletePlant})(PlantInfo)