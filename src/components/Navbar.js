import React, { Children, useState } from 'react'; //eslint-disable-line
import { Link } from 'react-router-dom' //eslint-disable-line
import { connect } from 'react-redux'
import { Menu, Image, Container } from 'semantic-ui-react'; //eslint-disable-line
import { logout } from '../actions/'

const Navbar = (props) => {
    const [active, setActive] = useState('')
    const handleClick = (e, {name}) => setActive(active(name)); //eslint-disable-line

    const { isLoggedIn } = props;

    return (
        <Menu>
        <Container textAlign="right" >
            <Link to='/'>
                <Menu.Item name='Home'>
                    Water My Plants
                </Menu.Item>
            </Link>

            {isLoggedIn === true ? null : <Link to='/signup'>
                <Menu.Item name='Sign Up'>
                Sign Up 
                </Menu.Item>
            </Link>}

            {isLoggedIn === true ? null : <Link to="/login">
                <Menu.Item name='Sign In'>
                Sign In
                </Menu.Item>
            </Link>}

            <Link to="/plants">
                <Menu.Item name='Plants'>
                Plants
                </Menu.Item>
            </Link>

            {isLoggedIn === false ? null : <Menu.Item name='Logout' onClick={() => props.logout()}>
                Logout
            </Menu.Item>}

        </Container>
      </Menu>
    )
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.isLoggedIn
    }
}

export default connect(mapStateToProps,{logout})(Navbar)