import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { register } from '../../../../services/store/actions/'

const Register = ({ register }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  
  const formControlStyle = {
    width: '100%',
    marginBottom: '20px'
  }

  const localRegister = (e) => {
    e.preventDefault()
    console.log({email, password, name})
    register({email, password, name})
  }

  return (
    <>
      <form className="auth__form--main" onSubmit={ localRegister }>
        <Typography variant="h4" component="h4" gutterBottom data-testid="register--title">
          Register
        </Typography>
        <FormControl style={formControlStyle}>
          <InputLabel htmlFor="input--name">Name</InputLabel>
          <Input id="input--name" required value={name} onChange={(e) => setName(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "register--input--name" }}/>
        </FormControl>
        <FormControl style={formControlStyle}>
          <InputLabel htmlFor="input--email">Email</InputLabel>
          <Input id="input--email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "register--input--email" }}/>
        </FormControl>
        <FormControl style={formControlStyle}>
          <InputLabel htmlFor="input--password">Password</InputLabel>
          <Input id="input--password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "register--input--password" }}/>
        </FormControl>
        <FormControl style={formControlStyle}>
          <Button type="submit" variant="contained" color="primary" data-testid="register">
            Submit
          </Button>
        </FormControl>
        <FormControl>
          <FormHelperText>Already have an account? <Link to="/auth/login">Login</Link></FormHelperText>
        </FormControl>
      </form>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (value) => dispatch(register(value))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Register)