import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Menu, Button, Container } from 'semantic-ui-react'

const Navbar = () => {
    const [active, setActive] = useState()
    const handleClick = (e, {name}) => setActive(active(name))
    return (
        <Menu>
        <Container textAlign="right" >
            <Menu.Item
            name='Home'
            active={active === 'Home'}
            onClick={() => handleClick()}
            
            >
            Home 
            </Menu.Item>

            <Menu.Item
            name='Sign Up'
            active={active === 'Sign Up'}
            onClick={() => handleClick()}
            >
            Sign Up 
            </Menu.Item>

            <Menu.Item
            name='Sign In'
            active={active === 'Sign In'}
            onClick={() => handleClick()}
            >
            Sign In
            </Menu.Item>
        </Container>
      </Menu>
    )
}
export default connect(null,{})(Navbar)