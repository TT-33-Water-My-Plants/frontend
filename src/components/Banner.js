import React from 'react'

import styled from 'styled-components'
import { Button, Card, Container, Image } from 'semantic-ui-react'
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpeg'
import banner3 from '../assets/banner3.jpg'
import { NavLink } from 'react-router-dom'
import mediaQueries from '../styles/breakpoints'

const StyledH1 = styled.h1`
    position: absolute;
    z-index: 1;
    top: 25%;
    right: 32%;
    color: #fff;
    font-size: 4rem;

    .header-btn {
        position: absolute;
        z-index: 1;
        top: 25%;
        right: 32%;
        color: #fff;
        font-size: 4rem;
    }
    ${mediaQueries.tablet`
       display: none;
    `}

`

export default function Banner() {
    return (
       <Container>
             <Image src={banner3} fluid/>
             <StyledH1>Water My Plants</StyledH1>
             <NavLink to="/signup"><Button primary  style={{position: 'absolute', top: '40%', right: '46%'}}>Get Started</Button></NavLink>
        </Container>
    )
}