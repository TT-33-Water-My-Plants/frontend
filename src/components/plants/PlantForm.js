import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
import { editPlants } from '../../actions/index'

const PlantForm = (props) => {
    const { editing, setEditing, updating, plantsId, plant, buttonLoader } = props
    const [form, setForm] = useState({nickname: '', species: '', h2oFrequency: ''})

    const handleChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    return (
    <Container style={{padding: '2rem', display: editing ? 'block' : 'none'}}>
        <Header>Update{}</Header>
            <Card fluid >
                <Card.Content>
                    <Form onSubmit={editPlants(plantsId)}>
                    <Form.Field>
                        <label>Name</label>
                        <input
                            name='nickname'
                            placeholder={plant.nickname}
                            value={form.nickname}
                            onChange={handleChange}
                             /> 
                    </Form.Field>
                    <Form.Field>
                        <label>Species</label>
                        <input 
                            name='species'
                            placeholder={plant.species}
                            value={form.species}
                            onChange={handleChange}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>When to water (hours)</label>
                        <input
                            name='h2oFrequency'
                            placeholder={plant.h2oFrequency}
                            value={form.h2oFrequency}
                            onChange={handleChange}
                             />
                    </Form.Field>
                    <Button 
                    primary
                    onClick={() => setEditing(!editing)} >Submit</Button>
                    </Form>
                </Card.Content>
            </Card>
            <Button 
            onClick={() => setEditing(!editing)} 
            color="red" 
            style={{ fontSize: '1.2rem', display: editing ? 'block' : 'none'}}>Cancel</Button>
        </Container>
       
    )
}
const mapToStateProps = state => {
    return {
        buttonLoader: state.false,
        updating: state.updating,
        error: state.error
    }
}
export default connect(mapToStateProps, {editPlants})(PlantForm)