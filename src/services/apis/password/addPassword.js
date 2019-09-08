import firebase from '../firebase'

export default ({url,username,password, uid}) => {
  return firebase.firestore().collection('passwords')
    .add({
      url,
      username,
      password,
      createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
      updatedAt: firebase.firestore.Timestamp.fromDate(new Date()),
      uid: uid
    })
}