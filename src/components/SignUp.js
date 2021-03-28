import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'

export default function SignUp(){
    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const [form, setForm] = useState(formState)

    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({
            ...form,
            [name]: value
        })
    }
    return (
        <Container text>
            <Header>Create an account</Header>
            <Card fluid>
                <Card.Content>
                    <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input 
                            placeholder='' 
                            name="username"
                            value={form.username}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input 
                            placeholder='' 
                            name="password"
                            value={form.password}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input 
                            placeholder='' 
                            name="phoneNumber"
                            value={form.phoneNumber}
                            onChange={handleChange}
                        />
                    </Form.Field>
                    <Button primary>Register</Button>
                    </Form>
                </Card.Content>
            </Card>
        </Container>
    )
}
