import firebase from '../firebase'

export default (cb) => {
  return firebase
    .auth()
    .onAuthStateChanged(cb); 
}