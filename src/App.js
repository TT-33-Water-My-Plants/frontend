import React from 'react'
import { connect } from 'react-redux'
import { testClick } from './actions/index'

const App = (props) => {
const { isLoading, plants, error } = props
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <h2>{error}</h2>
      <button onClick={() => testClick()}>Test Button</button>
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
