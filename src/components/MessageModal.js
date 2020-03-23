import React from 'react';
import Modal from 'react-modal';
Modal.setAppElement('#app');

const MessageModal = (props) => (   
   <Modal
      isOpen={props.showModal}
      onRequestClose={props.handleCloseMessageModal} // clicking esc or outside modal
      closeTimeoutMS={200}
      className="modal"
      >
      <h3 className="modal__title">Post updated!</h3>
      <button className="button button--standard button-modal" onClick={props.handleCloseMessageModal}>Ok</button>
   </Modal>
)

export { MessageModal as default }