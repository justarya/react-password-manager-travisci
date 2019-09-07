import { CLEAR_ERROR, CREATE_ERROR } from '../actions'
const initialState = null

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLEAR_ERROR:
      return null
    case CREATE_ERROR:
      return action.error
    default:
      return state
  }
}

export default errorReducer