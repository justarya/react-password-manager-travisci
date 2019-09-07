import { RECEIVE_PASSWORDS, RECEIVE_PASSWORD, CLEAR_PASSWORD } from '../actions'
const initialState = {
  list: {
    load: false,
    values: [],
  },
  detail: {
    load: false,
    value: {},
  },
}

const passwordReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_PASSWORDS:
      return { ...state, list: { values: action.passwords } }
    case CLEAR_PASSWORD:
      return { ...state, detail: { value: ''}}
    case RECEIVE_PASSWORD:
      return { ...state, detail: { value: action.password } }
    default:
      return state;
  }
}

export default passwordReducer