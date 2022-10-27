import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "../Pages/Shared/Header/Header";

import LeftSide from "../Pages/Shared/LeftSide";

const Main = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col lg="4">
            <LeftSide></LeftSide>
          </Col>
          <Col lg="8">
            <Outlet />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Main;
