import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function PlantInfo({match, location}){
    const { params: { plantsId } } = match
    const [plant, setPlant] = useState([])

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
        <h1>{plant.nickname}</h1>
    )
}