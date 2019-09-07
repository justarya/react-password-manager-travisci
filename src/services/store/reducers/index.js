import { combineReducers } from 'redux';

import auth from './auth'
import password from './password'

const reducers = combineReducers({
  auth,
  password
})

export default reducers