import React from 'react'
import { Button } from 'semantic-ui-react'
import { testClick } from '../actions/index'
import { connect } from 'react-redux'

import Banner from './Banner'

const Home = (props) => {
    const { testClick, isLoading } = props
    return (
        <>
            <Banner />
            <h1>Hello World!</h1>
            <Button loading={isLoading} color='green' onClick={() => testClick()} >Test Button</Button>
        </>
    )
}

const mapToStateProps = state => {
    return {
      isLoading: state.isLoading,
    }
  }
export default connect(mapToStateProps, {testClick})(Home)