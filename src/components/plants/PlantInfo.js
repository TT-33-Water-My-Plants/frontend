import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Container, Image } from 'semantic-ui-react'
import styled from 'styled-components'

const StyledMain = styled.section`
    margin-top: 7rem;
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

export default function PlantInfo({match}){
    const { params: { plantsId } } = match
    const [plant, setPlant] = useState([])
    const [editing, isEditing] = useState(false)

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
       </Container>
    )
}