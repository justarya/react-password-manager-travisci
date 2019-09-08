import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { clearError } from '../../services/store/actions'

import swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const Error = ({ error, clearError }) => {
  const Swal = withReactContent(swal)

  useEffect(() => {
    if (error) {
      Swal.fire({
        title: 'Oops',
        text: error,
        type: 'error',
        onClose: () => {
          clearError()
        }
      })
    }
  }, [error])

  return (<></>)
}

const mapStateToProps = (state) => {
  return {
    error: state.error
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearError: () => dispatch(clearError())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Error)