import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Button, Container } from 'semantic-ui-react'

const Navbar = () => {
    const [active, setActive] = useState('')
    const handleClick = (e, {name}) => setActive(active(name))
    return (
        <Menu>
        <Container textAlign="right" >
            <Menu.Item
            name='Home'
            
            
            >
            Home 
            </Menu.Item>

            <Menu.Item
            name='Sign Up'
            
            >
            Sign Up 
            </Menu.Item>

            <Menu.Item
            name='Sign In'
            
            >
            Sign In
            </Menu.Item>
        </Container>
      </Menu>
    )
}
export default connect(null,{})(Navbar)