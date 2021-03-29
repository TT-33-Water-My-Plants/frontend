import React, { useState } from 'react'
import axios from 'axios'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'

 const Login = (props) => {
    const { isLoading } = props
    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }
    const [form, setForm] = useState(formState)

    const handleChange = (e) => {
        
    }

    return (
        <Container text>
            <Header>Login to your account</Header>
            <Card fluid>
                <Card.Content>
                    <Form>
                    <Form.Field>
                        <label>Username</label>
                        <input /> 
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input />
                    </Form.Field>
                    <Button loading={isLoading} primary>Login</Button>
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
  export default connect(mapToStateProps, {})(Login)