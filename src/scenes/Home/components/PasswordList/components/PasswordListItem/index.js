import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { deletePassword } from '../../../../../../services/store/actions'

import swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import IconButton from '@material-ui/core/IconButton'

import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete'

const PasswordListItem = ({ password, deletePassword }) => {
  const Swal = withReactContent(swal)
  
  const localDeletePassword = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        deletePassword(password.id)
        Swal.fire(
          'Deleted!',
          'Your password has been deleted.',
          'success'
        )
      }
    })
  }
  return (
    <>
      <TableRow data-testid="password-list-item">
        <TableCell component="th" scope="row">
          {password.url}
        </TableCell>
        <TableCell align="left">{password.username}</TableCell>
        <TableCell align="left">{password.password}</TableCell>
        <TableCell align="left">{new Date(password.createdAt.seconds * 1000).toUTCString() || '-'}</TableCell>
        <TableCell align="left">{new Date(password.updatedAt.seconds * 1000).toUTCString() || '-'}</TableCell>
        <TableCell align="right">
          <IconButton to={'/edit/' + password.id} component={Link} data-testid="button--password-list-item--edit">
            <EditIcon/>
          </IconButton>
          <IconButton data-testid="button--password-list-item--delete" onClick={localDeletePassword}>
            <DeleteIcon />
          </IconButton>
        </TableCell>
      </TableRow>
    </>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    deletePassword: (id) => dispatch(deletePassword(id))
  }
}

export default connect(
  null,
  mapDispatchToProps
)(PasswordListItem)
