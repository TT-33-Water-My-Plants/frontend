import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
import { connect } from 'react-redux'
import * as yup from 'yup'
import formSchema from '../formSchema'
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm'


export default function Login(props) {


    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const initialFormErrors = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const initialDisabled = true;

    const [form, setForm] = useState(formState);
    const [formError, setFormError] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);

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

    const history = useHistory();

    const inputChange = (name, value) => {

        yup.reach(formSchema, name)
            .validate(value)
            .then(() => {
                setFormError({ ...formError, [name]: '' })
            })
            .catch((err) => {
                setFormError({ ...formError, [name]: err.errors[0] })
            })


        setForm({ ...form, [name]: value })
    }

    const formSubmit = (e) => {
        e.preventDefault();
        history.push('/');
    }

    useEffect(() => {
        formSchema.isValid(form)
            .then(valid => setDisabled(!valid))
    }, [form])



    return (
        <Container text>
            <Header>Login to your account</Header>
            < LoginForm
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formError}
                values={form}
            />
        </Container >
    )
}
