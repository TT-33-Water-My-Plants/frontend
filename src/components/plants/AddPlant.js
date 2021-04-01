import React, { useState } from 'react'
import { Button, Card, Form, Label } from 'semantic-ui-react'
import { connect } from 'react-redux'

const AddPlant = () => {
    const [form, setForm] = useState({nickname: '', species: '', h2oFrequency: '', image: ''})
    const handleChange = () => {

    }
    return (
        <>
        <Card fluid>
            <Card.Content>
                <Form>
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
                        <Label>Water frequency (hours) </Label>
                        <input 
                            name="h2Frequency"
                            value={form.h2oFrequency}
                            onChange={handleChange}/>
                    </Form.Field>
                    <Button color="green">Submit</Button>
                </Form>
            </Card.Content>
        </Card>
        <Button></Button>
        </>
    )
}
export default connect(null, {})(AddPlant)