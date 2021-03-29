import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { Menu, Image, Container } from 'semantic-ui-react'

const Navbar = () => {
    const [active, setActive] = useState('')
    const handleClick = (e, {name}) => setActive(active(name))
    return (
        <Menu>
        <Container textAlign="right" >
            <Link to='/'>
                <Menu.Item name='Home'>
                    Water My Plants
                </Menu.Item>
            </Link>

            <Link to='/signup'>
                <Menu.Item name='Sign Up'>
                Sign Up 
                </Menu.Item>
            </Link>

            <Link to="/login">
                <Menu.Item name='Sign In'>
                Sign In
                </Menu.Item>
            </Link>

            <Link to="/plants">
                <Menu.Item name='Plants'>
                Plants
                </Menu.Item>
            </Link>

        </Container>
      </Menu>
    )
}
export default connect(null,{})(Navbar)