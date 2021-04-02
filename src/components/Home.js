import React, { useHistory } from 'react'
import styled from 'styled-components'
import { Button, Card, Container, Grid, Segment, Image, Header } from 'semantic-ui-react'
import { testClick } from '../actions/index'
import { connect } from 'react-redux'

import banner from '../assets/banner.jpg'
import banner2 from '../assets/banner2.jpeg'


import Banner from './Banner'

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;

    li {
        padding-top: 2rem;
    }
`

const Home = (props) => {
    
    return (
        <StyledMain>
            <Container>
                <Card fluid style={{boxShadow: 'none'}}>
                    <Banner/>
                </Card>
            </Container>
            
            <Container style={{paddingTop: '2rem'}}>
                <Segment>
                    <Grid columns={2} relaxed='very'>
                        <Grid.Column>
                            <Header as='h2'>Never forget when it's time to feed your foliage and quench your plants' thirst!</Header>
                            <ul>
                                <li>
                                    <Header as='h3'>Add Plants to the Dashboard</Header>
                                </li>
                                <li>
                                    <Header as='h3'>Add information for the plant such as it name and watering frequency</Header>
                                </li>
                                <li>
                                    <Header as='h3'>Delete Plants you are no longer keeping track of</Header>
                                </li>
                            </ul>
                        </Grid.Column>
                        <Grid.Column>
                            <Image src={banner} fluid/>
                        </Grid.Column>
                    </Grid>
                </Segment>

                
                {/* <section className='intro'>
                    <h1>Water My Plants</h1>
                    <p>Never forget when it's time to feed your foliage and quench your plants' thirst. </p>
                    <Button primary >Sign Up</Button>
                </section>
                <section>
                    <h2>Awesome Features</h2>
                    <p><strong>Etiam tristique libero</strong> eu nibh porttitor ametfermentum. Nullam venenatis erat id vehicula ultrices sed ultricies condimentum.</p>
                    <ul class="feature-icons">
                        <li class="icon solid fa-laptop">Consequat tempus</li>
                        <li class="icon solid fa-bolt">Etiam adipiscing</li>
                        <li class="icon solid fa-signal">Libero nullam</li>
                        <li class="icon solid fa-cog">Blandit condimentum</li>
                        <li class="icon solid fa-map-marker-alt">Lorem ipsum dolor</li>
                        <li class="icon solid fa-code">Nibh amet venenatis</li>
                    </ul>
                    <p>Vehicula ultrices sed ultricies condimentum. Magna sed etiam consequat, et lorem adipiscing sed nulla. Volutpat nisl et tempus et dolor libero, feugiat magna tempus, sed et lorem adipiscing.</p>
                </section>
                <secion>
                    <h2>Photo Gallery</h2>
                    <p><strong>Healthy Plants</strong> nam maximus erat id euismod egestas. Pellentesque sapien ac quam. Lorem ipsum dolor sit nullam.</p>
                </secion> */}
            </Container>
            
            
        </StyledMain>
        
    )
}

const mapToStateProps = state => {
    return {
      isLoading: state.isLoading,
    }
  }
export default connect(mapToStateProps, {testClick})(Home)