import React from 'react'
import { Card, Image } from 'semantic-ui-react'


const PlantCard = (props) => {
    const { plant } = props
    return (
        <div>
            <Card>
                <Image src={plant.image} />
                <Card.Content>
                    <Card.Header>{plant.nickname}</Card.Header>
                    <Card.Description>{plant.species}</Card.Description>
                </Card.Content>
            </Card>
        </div>
    )
}
export default PlantCard