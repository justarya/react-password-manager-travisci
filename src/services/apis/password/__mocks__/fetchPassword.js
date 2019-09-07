export default (id) => {
  return new Promise((res, rej) => {
    const passwords = {
      url: 'http://www.google.com',
      username: 'sampleusername',
      password: 'samplepassword',
      createdAt: {
        seconds: '1567857365'
      },
      updatedAt: {
        seconds: '1567857365'
      }
    }
    const data = () => {
      return passwords
    }
    res({id,data})
  })
}