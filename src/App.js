import React from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import Home from './scenes/Home'
import Navigation from './components/Navigation'

function App() {
  return (
    <>
      <Navigation/>
      <Route path="/" component={Home}/>
    </>
  );
}

export default App;
