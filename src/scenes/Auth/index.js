import React, { useEffect } from 'react'
import { withRouter, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Container from '@material-ui/core/Container'

import Login from './scenes/Login'
import Register from './scenes/Register'
import { loginWithGoogle } from '../../services/store/actions'

const Auth = ({ history, loginWithGoogle, isLogin }) => {
  useEffect(() => {
    if (isLogin) history.push('/')
  }, [isLogin])

  const localLoginWithGoogle = () => {
    loginWithGoogle()
  }
  return (
    <>
      <Container>
        <div className="auth__form">
          <Route path="/auth/login" component={Login} />
          <Route path="/auth/register" component={Register} />
          <form className="auth__form--thirdparty">
            <a className="btn btn--google" onClick={localLoginWithGoogle}>Continue with google</a>
          </form>
        </div>
      </Container>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginWithGoogle: () => dispatch(loginWithGoogle())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(Auth))