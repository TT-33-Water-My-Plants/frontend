import React from 'react';
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
import styled from 'styled-components'

export default function LoginForm(props) {
    const { change, submit, disabled, errors, values } = props;

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }


    return (
        <div>
            <Card fluid>
                <Card.Content>
                    <Form onSubmit={submit}>
                        <Form.Field>
                            <div className="errors">
                                <div>{errors.username}</div>
                                <div>{errors.password}</div>
                                <div>{errors.phoneNumber}</div>
                            </div>
                            <label>Username</label>
                            <input value={values.username}
                                onChange={onChange}
                                name="username"
                                type="text" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input value={values.password}
                                onChange={onChange}
                                name="password"
                                type="text" />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone Number</label>
                            <input value={values.phoneNumber}
                                onChange={onChange}
                                name="phoneNumber"
                                type="text" />
                        </Form.Field>
                        <Button disabled={disabled}>Login</Button>
                    </Form>
                </Card.Content>
            </Card>
        </div>
    )
}

// const mapToStateProps = state => {
//     return {
//         isLoading: state.isLoading,
//     }
// }

// export default connect(mapToStateProps, {})(LoginForm)


const StyledLogin = styled.div`
backgound-image: url('https://images.unsplash.com/photo-1525498128493-380d1990a112?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1275&q=80');
`