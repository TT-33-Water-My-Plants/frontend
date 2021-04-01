import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { Container } from 'semantic-ui-react'

import Home from './components/Home'
import Navbar from './components/Navbar'
import SignUp from './components/SignUp'
import Login from './components/Login'
import PlantsPage from './components/plants/PlantsPage'
import PlantInfo from './components/plants/PlantInfo'

import ProtectedRoute from './utils/protectedRoute';


const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Container>
        <Switch>
           <Route exact path='/' component={Home} />
           <Route path='/signup' component={SignUp} />
           <Route path='/login' component={Login} />
           <ProtectedRoute exact path='/plants' component={PlantsPage} />
           <Route exact path='/plants/:plantsId' component={PlantInfo} /> {/*PrivateRoute wasn't passing needed params. Keep it a regular route for now.*/}
        </Switch>
      </Container>
    </div>
  )
}

const mapToStateProps = state => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error
  }
}
export default connect(mapToStateProps,{})(App);
