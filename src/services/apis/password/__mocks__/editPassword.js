export default ({id,url,username,password}) => {
  return new Promise((res,rej) => {
    console.log({id,url,username,password})
    res()
  })
}