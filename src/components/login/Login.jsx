import React from "react";
import { Link } from "react-router-dom";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import "../../App.css";

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ ...this.state, [e.target.name]: e.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("this.state ==== ", this.state);
  }

  render() {
    return (
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="shadow">
              <Card.Body>
                <div className="mb-3 mt-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Sign In</h2>

                  <Form className="mb-3" onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className="text-center">
                        Email Address
                      </Form.Label>

                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        name="email"
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>

                      <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange}
                        required
                      />
                    </Form.Group>

                    <div className="d-grid">
                      <Button
                        variant="primary"
                        type="submit"
                        style={{
                          backgroundColor: "#2c4053",
                          border: "#2c4053",
                        }}
                      >
                        Login
                      </Button>
                    </div>
                  </Form>

                  <div className="mt-3">
                    <p className="mb-0  text-center">
                      Forgot <Link to="/forgot-password">Password?</Link>
                    </p>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
