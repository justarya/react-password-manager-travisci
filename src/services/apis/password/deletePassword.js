import firebase from '../firebase'

export default (id) => {
  return firebase.firestore().collection('passwords')
    .doc(id)
    .delete()
}