export default (uid, cb) => {
  const passwords = [{
    id: 1234,
    url: 'http://www.google.com',
    username: 'sampleusername',
    password: 'samplepassword',
    createdAt: {
      seconds: '1567857365'
    },
    updatedAt: {
      seconds: '1567857365'
    },
    uid,
  }]
  cb(passwords)
}