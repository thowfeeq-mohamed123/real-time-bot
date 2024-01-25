import React from "react";
import SideBar from "../sidebar/SideBar";
import { Header } from "../header/Header";
import { Container, Row, Col } from "react-bootstrap";
import { CardView } from "../card-view/CardView";
import "./Dashboard.css";

export class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Container fluid={true} style={{ position: "fixed" }}>
          <Header />
          <Row>
            <Col xs={2} id="sidebar-wrapper">
              <SideBar />
            </Col>
            <Col xs={10} id="page-content-wrapper" style={{ padding: "10px" }}>
              <CardView />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
