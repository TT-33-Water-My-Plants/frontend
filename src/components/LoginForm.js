import React from 'react';
import { Button, Card, Form } from 'semantic-ui-react'
import styled from 'styled-components'

function LoginForm(props) {
    const { change, submit, disabled, errors, values, isLoading } = props;

    const onChange = (event) => {
        const { name, value } = event.target;
        change(name, value);
    }


    return (
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
    )
}

const mapToStateProps = state => {
    return {
        isLoading: state.isLoading,
    }
}

export default connect(mapToStateProps, {})(LoginForm)






