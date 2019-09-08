import ServiceFetchPasswords from '../../apis/password/fetchPasswords'
import ServiceFetchPassword from '../../apis/password/fetchPassword'
import ServiceDeletePassword from '../../apis/password/deletePassword'
import ServiceAddPassword from '../../apis/password/addPassword'
import ServiceEditPassword from '../../apis/password/editPassword'

import { createError } from './error'
import store from '../index'

export const RECEIVE_ADD_PASSWORD = 'RECEIVE_ADD_PASSWORD'
export const RECEIVE_DELETE_PASSWORD = 'RECEIVE_DELETE_PASSWORD'
export const RECEIVE_PASSWORDS = 'RECEIVE_PASSWORDS'
export const RECEIVE_PASSWORD = 'RECEIVE_PASSWORD'
export const CLEAR_PASSWORD = 'CLEAR_PASSWORD'
export const RECEIVE_UPDATE_PASSWORD = 'RECEIVE_UPDATE_PASSWORD'

export const addPassword = ({url, username, password}) => {
  return dispatch => {
    const uid = store.getState().auth.user.uid
    ServiceAddPassword({url, username, password, uid})
      .then(data => {
        console.log('success')
      })
      .catch(err => dispatch(createError(err)))
  }
}

export const deletePassword = (id) => {
  return dispatch => {
    ServiceDeletePassword(id)
      .then(data => {
        console.log('success')
      })
      .catch(err => dispatch(createError(err)))
  }
}

export const editPassword = ({id, username, password, url}) => {
  return dispatch => {
    ServiceEditPassword({id, username, password, url})
      .then(data => {
        console.log('success')
      })
      .catch(err => dispatch(createError(err)))
  }
}

export const fetchPasswords = () => {
  return dispatch => {
    const uid = store.getState().auth.user.uid    
    if(uid) {
      ServiceFetchPasswords(uid, (passwords) => {
        dispatch(receivePasswords(passwords))
      })
    }
  }
}

export const fetchPassword = (id) => {
  return dispatch => {
    ServiceFetchPassword(id)
      .then(doc => {
        let {url,username,password,createdAt,updatedAt} = doc.data()
        let payload = {
          id: doc.id,
          url,
          username,
          password,
          createdAt,
          updatedAt
        }
        dispatch(receivePassword(payload))
      })
  }
}

export const receivePasswords = (passwords) => {
  return {
    type: RECEIVE_PASSWORDS,
    passwords
  }
}

export const receivePassword = (password) => {
  return {
    type: RECEIVE_PASSWORD,
    password
  }
}

export const clearPassword = () => {
  return {
    type: CLEAR_PASSWORD,
  }
}