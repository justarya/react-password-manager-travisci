import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import { login } from '../../../../services/store/actions/'

const Login = ({ login }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const formControlStyle = {
    width: '100%',
    marginBottom: '20px'
  }

  const localLogin = (e) => {
    e.preventDefault()
    login({ email, password })
  }

  return (
    <>
      <form className="auth__form--main" onSubmit={localLogin}>
        <Typography variant="h4" component="h4" gutterBottom data-testid="login--title">
          Login
        </Typography>
        <FormControl style={formControlStyle}>
          <InputLabel htmlFor="input--email">Email</InputLabel>
          <Input id="input--email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "login--input--email" }} />
        </FormControl>
        <FormControl style={formControlStyle}>
          <InputLabel htmlFor="input--password">Password</InputLabel>
          <Input id="input--password" required value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "login--input--password" }} />
        </FormControl>
        <FormControl style={formControlStyle}>
          <Button type="submit" variant="contained" color="primary" data-testid="login--submit">
            Submit
          </Button>
        </FormControl>
        <FormControl>
          <FormHelperText>Doesn't have an account? <Link to="/auth/register">Register</Link></FormHelperText>
        </FormControl>
      </form>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (value) => dispatch(login(value))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Login)