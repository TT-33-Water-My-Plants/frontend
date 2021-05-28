import React from 'react'
import './App.css';
import { Switch, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './components/Navbar'
import SignUp from './components/RegistrationForm'
import Login from './components/Login'
import PlantsPage from './components/plants/PlantsPage'
import PlantInfo from './components/plants/PlantInfo'
import AddPlant from './components/plants/AddPlant'

import ProtectedRoute from './utils/protectedRoute';
import styled from 'styled-components'
import RegistrationForm from './components/RegistrationForm'


const App = () => {
  const StyledNav = styled(Link)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
  background-color: #2F4F4F;
  min-height: 10vh;
  &:link{
      text-decoration: none;
  }
  
  a{
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
    color: #B0C4DE;
    margin-right: 1rem;
    
  }
  `

  const PlantContainer = styled.div`

  display:flex;
  width: 100%;
  justify-content: center;
  flex-wrap:wrap;
  `

  return (
    <div className="App">

      <header className="App-header">
        <StyledNav>
          <Route to='/registration'>Registration</Route>
          <Route to='/'>Home</Route>
        </StyledNav>

        <nav>
          <StyledNav to='/'>Home</StyledNav>
          <StyledNav to='/registration'>Registration</StyledNav>
        </nav>
      </header>

      <Switch>
        <Route path='/registration'>
          <RegistrationForm
          />
        </Route>
        <Route path='/'>
          <Login
          />
        </Route>
        <Route exact path='/plants/addplant' component={AddPlant} />
        <ProtectedRoute exact path='/plants' component={PlantsPage} />
        <Route exact path='/plants/:plantsId' component={PlantInfo} /> {/*PrivateRoute wasn't passing needed params. Keep it a regular route for now.*/}
        </Switch>
  )
    </div>
  );
};
const mapToStateProps = state => {
  return {
    isLoading: state.isLoading,
    plants: state.plants,
    error: state.error
  }
}
export default connect(mapToStateProps,{})(App);
// {/* //   return (
// //     <ThemeProvider theme={Theme}>
// //       <GlobalStyle />
// //       <div className="App">
// //         <Navbar />
// //         <Container style={{paddingBottom: '7rem'}}>
// //           <Switch>
// //             <Route exact path='/' component={Home} />
// //             <Route path='/signup' component={RegistrationForm} />
// //             <Route path='/login' component={Login} />
// //             <Route exact path='/plants/addplant' component={AddPlant} />
// //             <ProtectedRoute exact path='/plants' component={PlantsPage} />
// //             <Route exact path='/plants/:plantsId' component={PlantInfo} /> {/*PrivateRoute wasn't passing needed params. Keep it a regular route for now.*/}
// {/* //           </Switch> */}
// {/* //         </Container> */}
// {/* //         <Footer />
// //       </div> */}
// {/* //     </ThemeProvider> */}
// {/* //   )
// // } */
