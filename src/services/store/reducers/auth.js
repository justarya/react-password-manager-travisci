import { RECEIVE_USER, RECEIVE_ISLOGIN } from '../actions'
const initialState = {
  isLogin: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ISLOGIN:
      return { ...state, isLogin: action.isLogin }
    case RECEIVE_USER:
      return { ...state, user: action.user }
    default:
      return state;
  }
}

export default authReducer