import React from 'react'

export default function PlantInfo({match, location}){
    // const { params: { plantsId } } = match
    return (
        <>
        <p>
            <strong>Match Props: </strong>
            <code>{JSON.stringify(match, null, 2)}</code>
        </p>
        <p>
            <strong>Location Props: </strong>
            <code>{JSON.stringify(location, null, 2)}</code>
        </p>
    </>
    )
}