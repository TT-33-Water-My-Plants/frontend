import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { testClick, alertTest } from './actions/index'

import { Container, Button } from 'semantic-ui-react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'

const App = (props) => {
const { isLoading, plants, error } = props
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Container text>
        <h1>Hello World!</h1>
        <h2>{error}</h2>
        <Button onClick={(e) => testClick()}>Test Button</Button>
      </Container>
    </div>
  );
}

const mapToStateProps = state => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error
  }
}
export default connect(mapToStateProps,{})(App);
