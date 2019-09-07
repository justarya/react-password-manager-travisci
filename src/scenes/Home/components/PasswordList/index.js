import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchPasswords } from '../../../../services/store/actions/'

import PasswordListItem from './components/PasswordListItem'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const PasswordList = ({ passwords, fetchPasswords }) => {
  useEffect(() => {
    fetchPasswords()
  }, [])
  return (
    <Paper>
      <Table data-testid="table-password-list">
        <TableHead>
          <TableRow>
            <TableCell>URL</TableCell>
            <TableCell align="left">Username</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">CreatedAt</TableCell>
            <TableCell align="left">UpdatedAt</TableCell>
            <TableCell align="right">Tools</TableCell>
          </TableRow>
        </TableHead>
        <TableBody data-testid="password-list">
          {
            passwords.map((password) => <PasswordListItem password={password} key={password.id}/>)
          }
        </TableBody>
      </Table>
    </Paper>
  )
}

const mapStateToProps = (state) => {
  return {
    passwords: state.password.list.values
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPasswords: () => dispatch(fetchPasswords()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PasswordList)