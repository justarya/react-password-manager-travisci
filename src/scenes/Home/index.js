import React from 'react'
import { Route, Link } from 'react-router-dom'

import PasswordList from './components/PasswordList'
import AddPasswordForm from './scenes/AddPasswordForm'
import EditPasswordForm from './scenes/EditPasswordForm'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Home = () => {
  return (
    <>
      <Container fixed>
        <Typography variant="h3" component="h3" gutterBottom>
          Password Manager
        </Typography>
        <div className="main__action">
          <Button  data-testid="button-add-password" variant="contained" color="primary" component={Link} to="/add">
            Add Password
          </Button>
        </div>
        <Route path="/add" component={AddPasswordForm}/>
        <Route path="/edit/:id" component={EditPasswordForm}/>
        <PasswordList/>
      </Container>
    </>
  )
}

export default Home
