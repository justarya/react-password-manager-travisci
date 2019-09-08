import firebase from '../firebase'

export default ({email, password, name}, cb) => {
  alert('ini tuh jalan')
  return firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      firebase
        .auth()
        .onAuthStateChanged((user) => {
          if (user) {
            user.updateProfile({
              displayName: name,
            })
            cb(user)
          }
        })
    })
}