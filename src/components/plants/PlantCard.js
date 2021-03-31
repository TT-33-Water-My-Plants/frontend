import React from 'react'
import { Link, useLocation, Switch, Route} from 'react-router-dom'
import { Card, Image } from 'semantic-ui-react'
import PlantInfo from './PlantInfo'


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