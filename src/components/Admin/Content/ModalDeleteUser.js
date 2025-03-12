import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = (props) => {
  const { show, setShow, dataDelete, resetDataDelete } = props;

  const handleClose = () => {
    setShow(false);
    // resetDataDelete();
  };

  const handleSubmitDeleteUser = () => {
    alert("delete succeed");
  };

  return (
    <>
      {/* <Button variant="primary" onClick={}>
        Delete
      </Button> */}

      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title> Confirm Delete the User?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure to delete this user. email ={" "}
          <b>{dataDelete && dataDelete.email ? dataDelete.email : ""}</b>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              handleSubmitDeleteUser();
            }}
          >
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
