import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { editPassword, fetchPassword, clearPassword } from '../../../../services/store/actions'

import Modal from '@material-ui/core/Modal';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormHelperText from '@material-ui/core/FormHelperText';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CheckCircleOutlineIcon from '@material-ui/icons/RadioButtonUnchecked'

import passwordValidation from '../../../../services/helpers/passwordValidation'

const EditPasswordForm = ({ match, history, editPassword, fetchPassword, detailPassword, clearPassword }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [url, setUrl] = useState('')
  
  const [passwordValidate, setPasswordValidate] = useState({})

  useEffect(() => {
    fetchPassword(match.params.id)
  }, [])
  
  useEffect(() => {
    if (detailPassword) {
      setUsername(detailPassword.username)
      setPassword(detailPassword.password)
      setUrl(detailPassword.url)
      passwordValidation(detailPassword.password, setPasswordValidate, setPassword)
    }
  }, [ detailPassword ])

  const handleClose = () => {
    history.push('/')
    clearPassword()
  }

  const localEditPassword = (e) => {
    e.preventDefault()
    editPassword({ id: match.params.id, url, username, password })
    handleClose()
  }

  const localPasswordValidation = (e) => {
    passwordValidation(e.target.value, setPasswordValidate, setPassword)
  }

  const modalStyle = {
    position: 'absolute',
    width: 400,
    backgroundColor: 'white',
    margin: 'auto',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '15px',
    borderRadius: '10px',
    boxShadow: '0 10px 10px rgba(0,0,0,0.1)',
    outline: 0
  }

  const formStyle = {
    width: '100%',
    marginBottom: '20px'
  }

  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={true}
        onClose={handleClose}
      >
        <div style={modalStyle} className='paper'>
          <Typography variant="h5" component="h5" data-testid="edit-password--title" gutterBottom>
            Edit Password
          </Typography>
          <form onSubmit={localEditPassword}>
            <FormControl style={formStyle}>
              <InputLabel htmlFor="input--url">URL</InputLabel>
              <Input id="input--url" required value={ url } defaultValue=" " onChange={(e) => setUrl(e.target.value)} placeholder="URL" autoComplete='off' inputProps={{ "data-testid": "edit-password--input--url" }}/>
            </FormControl>
            <FormControl style={formStyle}>
              <InputLabel htmlFor="input--username">Username</InputLabel>
              <Input id="input--username" required value={ username } defaultValue=" " onChange={(e) => setUsername(e.target.value)} placeholder="Username" autoComplete='off' inputProps={{ "data-testid": "edit-password--input--username" }}/>
            </FormControl>
            <FormControl style={formStyle}>
              <InputLabel htmlFor="input--password">Password</InputLabel>
              <Input id="input--password" required aria-describedby="my-helper-text" value={ password } defaultValue=" " onChange={localPasswordValidation} autoComplete='off' placeholder="Password" inputProps={{ "data-testid": "edit-password--input--password" }}/>
            </FormControl>
            <FormControl style={formStyle} data-testid="edit-password--input--password-validate">
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.uppercase ? <CheckCircleIcon fontSize="small"/> : <CheckCircleOutlineIcon fontSize="small"/>} &nbsp; Password must have atleast one uppercase characther</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.lowercase ? <CheckCircleIcon fontSize="small"/> : <CheckCircleOutlineIcon fontSize="small"/>} &nbsp; Password must have atleast one lowercase characther</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.special ? <CheckCircleIcon fontSize="small"/> : <CheckCircleOutlineIcon fontSize="small"/>} &nbsp; Password must have atleast one special character (#$@!&%...)</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.number ? <CheckCircleIcon fontSize="small"/> : <CheckCircleOutlineIcon fontSize="small"/>} &nbsp; Password must have atleast one number</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.charLength ? <CheckCircleIcon fontSize="small"/> : <CheckCircleOutlineIcon fontSize="small"/>} &nbsp; Password must have more than five character</FormHelperText>
            </FormControl>
            <FormControl style={formStyle}>
              <Button type="submit" variant="contained" color="primary" data-testid="edit-password--submit">
                Submit
              </Button>
            </FormControl>
          </form>
        </div>
      </Modal>

    </>
  )
}

const mapStateToProps = (state) => {
  return {
    detailPassword: state.password.detail.value
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editPassword: (value) => dispatch(editPassword(value)),
    fetchPassword: (value) => dispatch(fetchPassword(value)),
    clearPassword: () => dispatch(clearPassword())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPasswordForm)