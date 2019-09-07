import React from 'react'
import Modal from '@material-ui/core/Modal';

const AddPasswordForm = () => {
  const handleClose = () => {
    console.log('close')
  }

  return (
    <>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open="true"
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          <p id="simple-modal-description">
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
          {/* <SimpleModal /> */}
        </div>
      </Modal>

    </>
  )
}

export default AddPasswordForm