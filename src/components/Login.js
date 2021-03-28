import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'

export default function Login(){
    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const [form, setForm] = useState(formState)
    return (
        <Container text>
            <Header>Create an account</Header>
            <Card fluid>
                <Card.Content>
                    <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input placeholder='' />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input placeholder='' />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input placeholder='' />
                    </Form.Field>
                    <Button primary>Register</Button>
                    </Form>
                </Card.Content>
            </Card>
        </Container>
    )
}
