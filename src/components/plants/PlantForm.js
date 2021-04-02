import React, { useState } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
import { editPlants } from '../../actions/index'

const PlantForm = (props) => {
    const { editing, setEditing, plantsId, plant, buttonLoader } = props
    const [form, setForm] = useState({nickname: '', species: '', h2oFrequency: '', image: ''})

    const handleChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const history = useHistory()
    const handleSubmit = (e) => {
        e.preventDefault()
        props.editPlants(plantsId, form)
        setTimeout(() => {
            history.push('/plants')
        }, 700)
    }

    return (
    <Container style={{padding: '2rem', display: editing ? 'block' : 'none'}}>
        <Header>Update {plant.nickname}</Header>
            <Card fluid >
                <Card.Content>
                    <Form onSubmit={handleSubmit}>
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
                        <label>Image (URL) </label>
                        <input 
                            name='image'
                            value={form.image}
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
                    color='green'
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