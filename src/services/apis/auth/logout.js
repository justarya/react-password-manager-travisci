import firebase from '../firebase'

export default () => {
  return firebase
    .auth()
    .signOut()
}