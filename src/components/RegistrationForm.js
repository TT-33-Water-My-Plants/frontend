import React, { useState, useEffect } from 'react';
import { Route } from 'react-router'
import axios from 'axios'
import { connect } from 'react-redux'
import * as yup from 'yup';
import RegSchema from './RegSchema';
import styled from 'styled-components';




 const RegistrationForm = (props) => {
    const { isLoading } = props 


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
    const [disabled, isDisabled] = useState(initDisabled); //eslint-disable-line

    const handleChange = (event) => {
        const { name, value } = event.target;
        yup.reach(RegSchema, name)
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

    const signup = e => {
        e.preventDefault()
        axios
        .post(`https://ft-water-my-plants-6.herokuapp.com/auth/register`, form)
        .then(res => {
            console.log(res)
            localStorage.setItem('token', JSON.stringify(res.data.payload))
        })
        .catch(err => {
            console.error(`Cannot login to server: ${err.message}`)
        })
    }

    useEffect(() => {
        RegSchema.isValid(form).then(valid => isDisabled(!valid))
    }, [form])

    const StyledForm = styled.form`
    flex-direction: column;
    justify-content: space-between;
    background-color:rgba(0, 0, 0, 0.5);    
    align-items: center;
    padding: 0 16px;
    border: none;
    border-radius: 15px;
    color: #B0C4DE;
`

const StyledFields = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    margin-top: 10px;
`

// const StyledLink = styled(Link)`
//       text-decoration: none;
//       font-size: 1rem;
//       font-weight: bold;
//       color: #B0C4DE;
//       margin-right: 1rem;
// `

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
        <StyledForm className='form container' onSubmit={signup}>
            <div>
                <h1>Water My Plant App</h1>
            </div>
            <div>
            <h2>Register Here!</h2>
            </div>
            <div className='form=group inputs'>
                <h4>Please provide your details below:</h4>
                <StyledFields>Name -
                    <input
                        name='name'
                        type='text'
                        // value={form.username}
                        onChange={handleChange}
                        placeholder='Your Name Here'
                    />
                </StyledFields>
                <StyledFields>Phone Number -
                    <input
                        name='phone'
                        type='tel'
                        value={form.phoneNumber}
                        onChange={handleChange}
                        placeholder="Your Phone# Here"
                    />
                </StyledFields>
                <StyledFields>Password
                    <input
                        name='password'
                        type='password'
                        value={form.password}
                        onChange={handleChange}
                    />
                </StyledFields>
                </div>
                <div>
                    <StyledBtn loading={isLoading} primary>Register</StyledBtn>
                </div>
                <div>
                <Route to='/'><h4>Already a User?(link to login form)</h4></Route>
                </div>
        </StyledForm>
    )
}

const mapToStateProps = state => {
    return {
      isLoading: state.isLoading,
    }
  }
  export default connect(mapToStateProps, {})(RegistrationForm)
