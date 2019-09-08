import { combineReducers } from 'redux';

import auth from './auth'
import password from './password'
import error from './error'

const reducers = combineReducers({
  auth,
  password,
  error
})

export default reducers