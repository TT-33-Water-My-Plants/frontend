import React, { useState } from 'react'
import { Button, Card, Container, Form, Header, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router'
import { addPlants } from '../../actions/index'

const AddPlant = (props) => {
    
    const [form, setForm] = useState({nickname: '', species: '', h2oFrequency: '', image: ''})

    const history = useHistory()

    const handleChange = e => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const plantObj = {...form, user_id: props.user_id}
        props.addPlants(plantObj)
        setTimeout(() => {
            history.push('/plants')
        }, 700)
    }


    return (
        <Container>
        <Header>Add A New Plant</Header>
        <Card fluid>
            <Card.Content>
                <Form onSubmit={handleSubmit}>
                    <Form.Field>
                        <Label>Name of Plant</Label>
                        <input 
                            name="nickname"
                            value={form.nickname}
                            onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Species of Plant</Label>
                        <input 
                            name="species"
                            value={form.species}
                            onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field> 
                        <Label>Image of plant (url)</Label>
                        <input 
                            name="image"
                            value={form.image}
                            onChange={handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <Label>Water frequency (hours)</Label>
                        <input 
                            name="h2oFrequency"
                            value={form.h2oFrequency}
                            onChange={handleChange}/>
                    </Form.Field>
                    <Button color="green">Submit</Button>
                </Form>
            </Card.Content>
        </Card>
        <Button color="red" onClick={() => history.push('/plants')}>Cancel</Button>
        </Container> 
    )
}

const mapToStateProps = state => {
    return {
        buttonLoader: state.false,
        adding: state.adding,
        error: state.error,
        user_id: state.currentUser.user_id
    }
}
export default connect(mapToStateProps, {addPlants})(AddPlant)