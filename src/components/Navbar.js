import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Button, Container } from 'semantic-ui-react'

const Navbar = () => {
    const [active, setActive] = useState('')
    const handleClick = (e, {name}) => setActive(active(name))
    return (
        <Menu>
        <Container textAlign="right" >
            <Link to='/'>
                <Menu.Item name='Home'>
                Home 
                </Menu.Item>
            </Link>

            <Link to='/login'>
                <Menu.Item name='Sign Up'>
                Sign Up 
                </Menu.Item>
            </Link>
            
            <Menu.Item name='Sign In'>
            Sign In
            </Menu.Item>
        </Container>
      </Menu>
    )
}
export default connect(null,{})(Navbar)