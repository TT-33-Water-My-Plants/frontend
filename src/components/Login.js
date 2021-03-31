import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Card, Container, Form, Header } from 'semantic-ui-react'
// import * as yup from 'yup'
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';

function Login(props) {

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

    const { isLoading } = props;

    const history = useHistory();

    const updateInput = (name, value) => {

        // yup.reach(schema, name)
        //     .validate(value)
        //     .then(() => {
        //         setFormError({ ...formError, [name]: '' })
        //     })
        //     .catch((err) => {
        //         setFormError({ ...formError, [name]: err.errors[0] })
        //     })


        // setForm({ ...form, [name]: value })
    }

    const handleChange = (e) => {
        e.preventDefault();
        props.submitLogin(form);
        history.push('/');
    }

    // useEffect(() => {
    //     schema.isValid(form)
    //         .then(valid => initialDisabled(!valid))
    // }, [form])



    return (
        <Container text>
            <Header>Login to your account</Header>
            <Card fluid>
                <Card.Content>
                    <Form>

                        <Form.Field>
                            <label>Username</label>
                            <input value={form.username}
                                onChange={handleChange}
                                name="username"
                                type="text" />
                        </Form.Field>
                        <Form.Field>
                            <label>Password</label>
                            <input value={form.password}
                                onChange={handleChange}
                                name="password"
                                type="text" />
                        </Form.Field>
                        <Form.Field>
                            <label>Phone Number</label>
                            <input value={form.phoneNumber}
                                onChange={handleChange}
                                name="phoneNumber"
                                type="text" />
                        </Form.Field>
                        <Button loading={isLoading} primary>Login</Button>

                    </Form>
                </Card.Content>
            </Card>
        </Container >
    )
}
const mapToStateProps = state => {
    return {
        isLoading: state.isLoading,
    }
}
export default connect(mapToStateProps, {})(Login)