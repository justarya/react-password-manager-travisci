import ServiceListener from '../../apis/auth/listener'
import ServiceLogin from '../../apis/auth/login'
import ServiceLogout from '../../apis/auth/logout'
import ServiceRegister from '../../apis/auth/register'
import ServiceLoginWithGoogle from '../../apis/auth/loginWithGoogle'

import { createError } from './error'

export const RECEIVE_ISLOGIN = 'RECEIVE_ISLOGIN'
export const RECEIVE_USER = 'RECEIVE_USER'

export const login = ({email, password}) => {
  return dispatch => {
    ServiceLogin({email, password})
      .catch(err => dispatch(createError(err)))
  }
}

export const loginWithGoogle = () => {
  return dispatch => {
    ServiceLoginWithGoogle()
      .catch(err => dispatch(createError(err)))
  }
}

export const logout = () => {
  return dispatch => {
    ServiceLogout()
      .catch(err => dispatch(createError(err)))
  }
}

export const register = (obj) => {
  return dispatch => {
    console.log(obj)
    ServiceRegister(obj)
      .catch(err => dispatch(createError(err)))
  }
}

export const listener = () => {
  return dispatch => {
    ServiceListener((user) => {
      if (user) {
        dispatch(receiveUser(user))
        dispatch(receiveIsLogin(true))
      } else {
        dispatch(receiveUser({}))
        dispatch(receiveIsLogin(false))
      }
    })
  }
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveIsLogin = (isLogin) => {
  return {
    type: RECEIVE_ISLOGIN,
    isLogin
  }
}
