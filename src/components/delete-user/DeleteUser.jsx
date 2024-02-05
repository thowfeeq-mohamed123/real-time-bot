import React from "react";
import { Button, Modal } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export class DeleteUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      isLogout: false,
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.isLogout = this.isLogout.bind(this);
  }
  handleShow() {
    this.setState({ show: true });
  }
  handleClose() {
    this.setState({ show: false });
  }
  isLogout() {
    alert("Successfully deleted");
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        <Button className="btn btn-danger" onClick={this.handleShow}>
          <i className="fas fa-trash"></i>
        </Button>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Delete User</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to delete this user?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              No
            </Button>
            <Button variant="primary" onClick={this.isLogout}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>
        {this.state.isLogout && <Navigate to="/login" replace={true} />}
      </>
    );
  }
}
