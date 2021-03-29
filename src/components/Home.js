import React from 'react'
import styled from 'styled-components'
import { Button, Container } from 'semantic-ui-react'
import { testClick } from '../actions/index'
import { connect } from 'react-redux'



import Banner from './Banner'

const StyledMain = styled.main`
    display: flex;
`

const Home = (props) => {
    const { testClick, isLoading } = props
    return (
        <StyledMain>
            <Container>
                <h1>Hello World!</h1>
                <Button loading={isLoading} color='blue' onClick={() => testClick()} >Test Button</Button>
            </Container>
            <Container>
                <Banner/>
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