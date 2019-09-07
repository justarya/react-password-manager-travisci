export default (value,setPasswordValidate,setPassword) => {
  const validate = {};
  /[A-Z]/g.test(value) ? validate.uppercase = true : validate.uppercase = false;
  /[a-z]/g.test(value) ? validate.lowercase = true : validate.lowercase = false;
  /[\W]/g.test(value) ?  validate.special = true : validate.special = false;
  /[0-9]/g.test(value) ?  validate.number = true : validate.number = false;
  /.{5}/g.test(value) ?  validate.charLength = true : validate.charLength = false;
  setPasswordValidate(validate)
  setPassword(value)
}