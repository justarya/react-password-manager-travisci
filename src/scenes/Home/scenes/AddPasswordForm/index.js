import React, { useState } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { addPassword } from '../../../../services/store/actions'

import Modal from '@material-ui/core/Modal'
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel'
import Input from '@material-ui/core/Input'
import FormHelperText from '@material-ui/core/FormHelperText'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import CheckCircleIcon from '@material-ui/icons/CheckCircleOutline'
import CheckCircleOutlineIcon from '@material-ui/icons/RadioButtonUnchecked'

import passwordValidation from '../../../../services/helpers/passwordValidation'

const AddPasswordForm = ({ history, addPassword }) => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [url, setUrl] = useState('')

  const [passwordValidate, setPasswordValidate] = useState({})

  const handleClose = () => {
    history.push('/')
  }

  const localAddPassword = (e) => {
    e.preventDefault()
    addPassword({ url, username, password })
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
          <Typography variant="h5" component="h5" gutterBottom data-testid="add-password--title">
            Add Password
          </Typography>
          <form onSubmit={localAddPassword}>
            <FormControl style={formStyle}>
              <InputLabel htmlFor="input--url">URL</InputLabel>
              <Input id="input--url" required value={url} onChange={(e) => setUrl(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "add-password--input--url" }} />
            </FormControl>
            <FormControl style={formStyle}>
              <InputLabel htmlFor="input--username">Username</InputLabel>
              <Input id="input--username" required value={username} onChange={(e) => setUsername(e.target.value)} autoComplete='off' inputProps={{ "data-testid": "add-password--input--username" }} />
            </FormControl>
            <FormControl style={formStyle}>
              <InputLabel htmlFor="input--password">Password</InputLabel>
              <Input id="input--password" required aria-describedby="my-helper-text" value={password} onChange={localPasswordValidation} autoComplete='off' inputProps={{ "data-testid": "add-password--input--password" }} />
            </FormControl>
            <FormControl style={formStyle} data-testid="add-password--input--password-validate">
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.uppercase ? <CheckCircleIcon fontSize="small" /> : <CheckCircleOutlineIcon fontSize="small" />} &nbsp; Password must have atleast one uppercase characther</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.lowercase ? <CheckCircleIcon fontSize="small" /> : <CheckCircleOutlineIcon fontSize="small" />} &nbsp; Password must have atleast one lowercase characther</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.special ? <CheckCircleIcon fontSize="small" /> : <CheckCircleOutlineIcon fontSize="small" />} &nbsp; Password must have atleast one special character (#$@!&%...)</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.number ? <CheckCircleIcon fontSize="small" /> : <CheckCircleOutlineIcon fontSize="small" />} &nbsp; Password must have atleast one number</FormHelperText>
              <FormHelperText style={{ display: 'flex', alignItems: 'center' }}>{passwordValidate.charLength ? <CheckCircleIcon fontSize="small" /> : <CheckCircleOutlineIcon fontSize="small" />} &nbsp; Password must have more than five character</FormHelperText>
            </FormControl>
            <FormControl style={formStyle}>
              <Button type="submit" variant="contained" color="primary" data-testid="add-password--submit">
                Submit
              </Button>
            </FormControl>
          </form>
        </div>
      </Modal>

    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPassword: (value) => dispatch(addPassword(value))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(withRouter(AddPasswordForm))