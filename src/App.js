import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'


import { Container } from 'semantic-ui-react'

import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'

const App = (props) => {
const { isLoading, plants, error } = props
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/signup' component={SignUp} />
           <Route path='/login' component={Login} />
        </Switch>
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
