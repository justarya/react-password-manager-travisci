import firebase from '../firebase'

export default (cb) => {
  return firebase.firestore().collection('passwords')
    .orderBy('createdAt', 'desc')
    .onSnapshot((querySnapshot) => {
      const passwords = []
      querySnapshot.forEach((doc) => {
        const { url, username, password, createdAt, updatedAt } = doc.data();
        passwords.push({
          id: doc.id,
          url,
          username,
          password,
          createdAt,
          updatedAt
        });
        // console.log(doc.data())
      })
      cb(passwords)
    })
}