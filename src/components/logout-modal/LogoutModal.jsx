import React from "react";
import { Button, Modal, Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";

export class LogoutModal extends React.Component {
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
    this.setState({ isLogout: true });
  }

  render() {
    return (
      <>
        <Navbar.Text
          style={{
            fontWeight: "bold",
            color: "white",
            cursor: "pointer",
            padding: "10px 20px",
          }}
          onClick={this.handleShow}
        >
          Logout
        </Navbar.Text>
        <Modal
          show={this.state.show}
          onHide={this.handleClose}
          backdrop="static"
          keyboard={false}
        >
          <Modal.Header closeButton>
            <Modal.Title>Logout Account</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to logout your account?</Modal.Body>
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
