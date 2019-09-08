import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { logout } from '../../services/store/actions'

const Navigation = ({ isLogin, logout }) => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }} data-testid="navigation-brand">
            React Password Manager
          </Typography>
          {
            isLogin ?
              <Button color="inherit" onClick={ logout }>Logout</Button>
              :
              <Button color="inherit" to="/auth/login" component={Link}>Login</Button>
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLogin: state.auth.isLogin
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation)
