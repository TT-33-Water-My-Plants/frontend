import React from 'react'
import axios from 'axios'
import { Container, Header } from 'semantic-ui-react'

export default function Login(){
    const formState = {
        username: '',
        password: '',
        phoneNumber: ''
    }

    const [form, setForm] = useState(formState)
    return (
        <Container text>
            <Header>Create an account</Header>
        </Container>
    )
}
