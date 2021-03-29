import React from 'react'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

const PlantsPage = () => {
    return (
        <Container>
            <h1>Hello from plantspage</h1>
        </Container>
    )
}
export default connect()(PlantsPage)