import firebase from '../firebase'

export default ({id, url,username,password}) => {
  return firebase.firestore().collection('passwords')
    .doc(id)
    .update({
      url,
      username,
      password,
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date())
    })
}