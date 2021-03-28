import React from 'react'

import { connect } from 'react-redux'
import { testClick } from './actions/index'

import { Container, Header } from 'semantic-ui-react'

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
        <button onClick={() => testClick()}>Test Button</button>
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
