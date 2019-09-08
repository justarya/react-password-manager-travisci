import firebase from '../firebase'

export default (uid, cb) => {
  return firebase.firestore().collection('passwords')
    .orderBy('createdAt', 'desc')
    .where('uid','==',uid)
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