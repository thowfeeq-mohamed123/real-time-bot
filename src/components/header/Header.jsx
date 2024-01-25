import React from "react";
import { Navbar } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import "./Header.css";

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logout: false,
    };
    this.logout = this.logout.bind(this);
  }
  logout() {
    this.setState({ logout: true });
  }
  render() {
    return (
      <div style={{ display: "block", width: "100%", height: "15%" }}>
        <Navbar bg="dark" variant="dark" style={{ height: "57%" }}>
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text
              style={{
                fontWeight: "bold",
                color: "white",
                cursor: "pointer",
                padding: "10px 20px",
              }}
              onClick={this.logout}
            >
              Logout
            </Navbar.Text>
            {this.state.logout && <Navigate to="/login" replace={true} />}
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
