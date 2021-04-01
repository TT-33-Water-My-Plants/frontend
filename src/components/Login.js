import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'
import { connect } from 'react-redux' // eslint-disable-line
import * as yup from 'yup'
import formSchema from '../validation/formSchema'
import { useHistory } from 'react-router-dom';
import LoginForm from './LoginForm'

import { login } from '../actions';


function Login(props) {

    const formState = {
        username: '',
        password: ''
    }

    const initialFormErrors = {
        username: '',
        password: ''
    }

    const initialDisabled = true;

    const [form, setForm] = useState(formState);
    const [formError, setFormError] = useState(initialFormErrors);
    const [disabled, setDisabled] = useState(initialDisabled);


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

        axios.post('https://tt-33-water-my-plants-backend.herokuapp.com/auth/login', form)
            .then(res => {
                localStorage.setItem('token', res.data.token);
                props.login();
                history.push('/');
            })
            .catch(err => {
                console.log(err);
            })
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

export default connect(null, {login})(Login)