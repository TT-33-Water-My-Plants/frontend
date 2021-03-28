import React from 'react'
import { Container, Image } from 'semantic-ui-react'
import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpeg'
import banner3 from '../assets/banner3.jpg'

export default function Banner() {
    return (
        <Container>
            <Image src={banner3} fluid/>
        </Container>
    )
}