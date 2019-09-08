export default (cb) => {
  return new Promise((res,rej) => {
    const user = {
      email: 'test@mail.com',
      name: 'TESTER'
    }
    res(cb(user))
  })
}