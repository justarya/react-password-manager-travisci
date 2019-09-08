import firebase from '../firebase'

export default ({email, password}) => {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
}