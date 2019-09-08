export default jest.fn((id) => {
  return new Promise((res,rej) => {
    console.log(id)
    res()
  })
})