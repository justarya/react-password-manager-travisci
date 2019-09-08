import firebase from '../firebase'

export default () => {
  const provider = new firebase.auth.GoogleAuthProvider();
  
  return firebase
    .auth()
    .signInWithPopup(provider)
}