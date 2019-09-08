export default (cb) => {
  return new Promise((res,rej) => {
    const user = {
      uid: 'iudj830q8e98u',
      email: 'test@mail.com',
      name: 'TESTER'
    }
    res(cb(user))
  })
}