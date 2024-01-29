import React from "react";
import { Navbar } from "react-bootstrap";
import { LogoutModal } from "../logout-modal/LogoutModal";
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
            <LogoutModal />
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
