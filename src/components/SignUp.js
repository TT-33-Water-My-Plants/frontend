import React, { useState } from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'

 const SignUp = (props) => {
    const { isLoading } = props 

    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const [form, setForm] = useState(formState)

    const handleChange = (e) => {
        
    }

    const login = e => {
        e.preventDefault()
        axios
        .post(`https://tt-33-water-my-plants-backend.herokuapp.com/auth/register`, form)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.payload))
        })
        .catch(err => {
            console.error(`Cannot login to server: ${err.message}`)
        })
    }
    
    return (
        <Container text>
            <Header>Create an account</Header>
            <Card fluid>
                <Card.Content>
                    <Form onSubmit={login}>
                    <Form.Field>
                        <label>Username</label>
                        <input  />
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input />
                    </Form.Field>
                    <Button loading={isLoading} primary>Register</Button>
                    </Form>
                </Card.Content>
            </Card>
        </Container>
    )
}

const mapToStateProps = state => {
    return {
      isLoading: state.isLoading,
    }
  }
  export default connect(mapToStateProps, {})(SignUp)
