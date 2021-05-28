import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'; // eslint-disable-line

export default function LoginForm(props) {
    const { change, submit, disabled, errors, values } = props;

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }
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
        <StyledForm onSubmit={submit}>
            <div>
                <h1>Water My Plants App</h1>
                    <div className="errors">
                        <div>{errors.username}</div>
                        <div>{errors.password}</div>
                        <div>{errors.phoneNumber}</div>
                    </div>
            </div>

            <div className='form-group inputs'>
                <StyledFields>
                    <label>Name -
                    <input 
                        value={values.username}
                        onChange={onChange}
                        name="username"
                        type="text"
                        placeholder="Your Name Here"
                    />
                    </label>
                </StyledFields>

                <StyledFields>
                    <label>Phone Number -
                    <input
                        value={values.phoneNumber}
                        onChange={onChange}
                        name="phone"
                        type="tel"
                        placeholder="Your Phone# Here"
                    />
                    </label>
                </StyledFields>

                <StyledFields>
                    <label>Password -
                    <input
                        value={values.password}
                        onChange={onChange}
                        name="password"
                        type="password"
                        placeholder="Your Password Here" 
                    />
                    </label>
                </StyledFields>
            </div>
            <div>
                <StyledBtn disabled={disabled}>Submit</StyledBtn>
            </div>
            <div>
                <StyledLink to='/signup'><h4>Need to Register? Click Here!(link to register form)</h4></StyledLink>
            </div>
        </StyledForm>
    )
}







