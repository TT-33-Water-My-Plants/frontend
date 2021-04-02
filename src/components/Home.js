import React, { useHistory } from 'react'
import styled from 'styled-components'
import { Button, Card, Container } from 'semantic-ui-react'
import { testClick } from '../actions/index'
import { connect } from 'react-redux'



import Banner from './Banner'

const StyledMain = styled.main`
    display: flex;
    flex-direction: column;
   
    
`

const Home = (props) => {
    
    return (
        <StyledMain>
            <Container>
                <Card fluid>
                    <Banner/>
                </Card>
            </Container>
            <Card style={{width: '50%'}}>
            <Container>
                <section className='intro'>
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
                </secion>
            </Container>
            </Card>
            
        </StyledMain>
        
    )
}

const mapToStateProps = state => {
    return {
      isLoading: state.isLoading,
    }
  }
export default connect(mapToStateProps, {testClick})(Home)