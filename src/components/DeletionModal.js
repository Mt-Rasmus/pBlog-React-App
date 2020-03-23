import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const DeletionModal = (props) => (   
   <Modal
      isOpen={props.showModal}
      onRequestClose={props.handleCloseDeletionModal} // clicking esc or outside modal
      closeTimeoutMS={200}
      className="modal"
      >
      <h3 className="modal__title">Delete this post?</h3>
      <button className="button button--standard button-modal" onClick={props.onDelete}>Yes</button>
      <button className="button button--standard button-modal" onClick={props.handleCloseDeletionModal}>No</button>
   </Modal>
)

export { DeletionModal as default }