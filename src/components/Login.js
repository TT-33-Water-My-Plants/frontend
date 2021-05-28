import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { connect } from 'react-redux' // eslint-disable-line
import * as yup from 'yup'
import formSchema from '../validation/formSchema'
import { useHistory, Link } from 'react-router-dom';
import LoginForm from './LoginForm'
import styled from 'styled-components';
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

        axios.post('https://ft-water-my-plants-6.herokuapp.com/auth/login', form)
            .then(res => {
                console.log(res.data)
                localStorage.setItem('token', res.data.token);
                props.login(res.data.data.user_id);
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

    const StyledForm = styled.form`
    background-color:rgba(0, 0, 0, 0.5);    width: 80%;
    align-items: center;
    padding: 0 16px;
    border: none;
    border-radius: 15px;
    margin-bottom: 32px;
    color: #B0C4DE;
    display: flex;
    flex-direction: column;
`

const StyledFields = styled.label`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

const StyledLink = styled(Link)`
      text-decoration: none;
      font-size: 1rem;
      font-weight: bold;
      color: #B0C4DE;
      margin-right: 1rem;
`

const StyledBtn = styled.button`
    background-color: #B0C4DE;
    color: black;
    margin: 1rem;
    padding: 8px 25px;
    font-size: 1rem;
    border-radius: 10px;
    text-decoration: none;
`



    return (
        <StyledForm text>
        
            <h1>Login to your account</h1>
            < LoginForm
                change={inputChange}
                submit={formSubmit}
                disabled={disabled}
                errors={formError}
                values={form}
            />
        </StyledForm>
    )
}

export default connect(null, {login})(Login)