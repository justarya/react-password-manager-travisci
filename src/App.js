import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import './App.css'
import { Switch, Route } from 'react-router-dom'
import Home from './scenes/Home'
import Auth from './scenes/Auth'
import Navigation from './components/Navigation'
import Error from './components/Error'

import { listener } from './services/store/actions'

function App({listener}) {
  useEffect(() => {
    listener()
  },[])
  
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" component={Home} />
      </Switch>
      <Error/>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    listener: () => dispatch(listener())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(App);
