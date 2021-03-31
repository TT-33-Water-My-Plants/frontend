import React from 'react'

export default function PlantInfo(props){
    const { plant } = props
    return (
        <h1>{plant.nickname}</h1>
    )
}