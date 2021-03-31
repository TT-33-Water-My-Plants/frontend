import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
import * as yup from 'yup';
import signUpMechanics from './SignUpMechanics';



export default function SignUp(props){

<<<<<<< HEAD
=======
 const SignUp = (props) => {
    const { isLoading } = props 

>>>>>>> main
    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const formStateErrors = {
        username: '',
        password: '',
        phoneNumber: '',
    }

    const initDisabled = true;

    const [form, setForm] = useState(formState);
    const [formErrors, setFormErrors] = useState(formStateErrors);
    const [disabled, isDisabled] = useState(initDisabled);

    const handleChange = (event) => {
        const { name, value } = event.target;
        yup.reach(signUpMechanics, name)
        .validate(value)
        .then(() => {
            setFormErrors({...formErrors, [name]: ''})
        })
        .catch(err => {
            setFormErrors({...formErrors, [name]: err.errors[0]})
        })
        setForm({
            ...form,
            [name]: value
        })
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

    // useEffect(() => {
    //     signUpMechanics.isValid(form).then(valid => isDisabled(!valid))
    // }, [form])


    return (
        <Container text>
            <Header>Create an account</Header>
            <Card fluid>
                <Card.Content>
                    <Form onSubmit={login}>
                    <Form.Field>
                        <label>Username</label>
<<<<<<< HEAD
                        <input
                            name='username'
                            value={form.username}
                            onChange={handleChange}
                             /> 
=======
                        <input  />
>>>>>>> main
                    </Form.Field>
                    <Form.Field>
                        <label>Password</label>
                        <input 
                            name='password'
                            value={form.password}
                            onChange={handleChange}
                            />
                    </Form.Field>
                    <Form.Field>
                        <label>Phone Number</label>
                        <input
                            name='phoneNumber'
                            value={form.phoneNumber}
                            onChange={handleChange}
                             />
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
