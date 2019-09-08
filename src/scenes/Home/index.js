import React, { useEffect } from 'react'
import { withRouter, Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'

import PasswordList from './components/PasswordList'
import AddPasswordForm from './scenes/AddPasswordForm'
import EditPasswordForm from './scenes/EditPasswordForm'

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const Home = ({ history, isLogin }) => {
  useEffect(() => {
    if(!isLogin) history.push('/auth/login')
  }, [isLogin])
  return (
    <>
      <Container fixed>
        <Typography variant="h3" component="h3" gutterBottom>
          Password Manager
        </Typography>
        <div className="main__action">
          <Button data-testid="button-add-password" variant="contained" color="primary" component={Link} to="/add">
            Add Password
          </Button>
        </div>
        <Route path="/add" component={AddPasswordForm} />
        <Route path="/edit/:id" component={EditPasswordForm} />
        <PasswordList />
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin
  }
}

export default connect(
  mapStateToProps
)(withRouter(Home))
