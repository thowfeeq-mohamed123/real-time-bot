import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

export class CreateEditModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      name: "",
      email: "",
      phone: "",
    };
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleClose() {
    if (!this.props.isEdit) {
      console.log("create user state ==== ", this.state);
    }
    if (this.props.isEdit) {
      console.log("edit user state ==== ", this.state);
    }
    this.setState({ show: false });
  }

  render() {
    return (
      <>
        {!this.props.isEdit && (
          <Button className="btn btn-success me-3" onClick={this.handleShow}>
            Create
          </Button>
        )}
        {this.props.isEdit && (
          <Button className="btn btn-primary me-3" onClick={this.handleShow}>
            <i className="fas fa-edit"></i>
          </Button>
        )}

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.isEdit ? "Edit" : "Create"}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Mohamed"
                  value={
                    this.props.userInfo
                      ? this.props.userInfo.name
                      : this.state.name
                  }
                  onChange={this.handleChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  value={
                    this.props.userInfo
                      ? this.props.userInfo.email
                      : this.state.email
                  }
                  onChange={this.handleChange}
                  autoFocus
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="number"
                  name="phone"
                  placeholder="9876543210"
                  onChange={this.handleChange}
                  autoFocus
                />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              {this.props.isEdit ? "Save Changes" : "Submit"}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
