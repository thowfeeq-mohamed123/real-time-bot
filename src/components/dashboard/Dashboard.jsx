import React from "react";
import SideBar from "../sidebar/SideBar";
import { Header } from "../header/Header";
import { Container, Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import CardView from "../card-view/CardView";

export class Dashboard extends React.Component {
  render() {
    return (
      <>
        <Container fluid={true} style={{ position: "relative" }}>
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
