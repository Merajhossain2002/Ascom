import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Header from "../Shared/Header/Header";

const Blog = () => {
  return (
    <div>
      <Header />
      <Container>
        <Row>
          <Col
            lg="5"
            xs="12"
            sm="12"
            className="mx-auto shadow my-3 p-3 rounded-3"
          >
            <h3>
              <FaStar /> what is cors?
            </h3>
            <p>
              <span className="fw-semibold">Ans:</span>What is CORS used for?
              Cross-Origin Resource Sharing (CORS) is an HTTP-header based
              mechanism that allows a server to indicate any origins (domain,
              scheme, or port) other than its own from which a browser should
              permit loading resources.
            </p>
          </Col>
          <Col
            lg="5"
            xs="12"
            sm="12"
            className="mx-auto shadow my-3 p-3 rounded-3"
          >
            <h3>
              <FaStar /> Why are you using firebase? What other options do you
              have to implement authentication?
            </h3>
            <p>
              <span className="fw-semibold">Ans:</span>Firebase Authentication
              provides backend services, easy-to-use SDKs, and ready-made UI
              libraries to authenticate users to your app. It supports
              authentication using passwords, phone numbers, popular federated
              identity providers like Google, Facebook and Twitter, and more.
            </p>
          </Col>
          <Col
            lg="5"
            xs="12"
            sm="12"
            className="mx-auto shadow my-3 p-3 rounded-3"
          >
            <h3>
              <FaStar /> How does the private route work?
            </h3>
            <p>
              <span className="fw-semibold">Ans:</span>The private route
              component is similar to the public route, the only change is that
              redirect URL and authenticate condition. If the user is not
              authenticated he will be redirected to the login page and the user
              can only access the authenticated routes If he is authenticated
              (Logged in).
            </p>
          </Col>
          <Col
            lg="5"
            xs="12"
            sm="12"
            className="mx-auto shadow my-3 p-3 rounded-3"
          >
            <h3>
              <FaStar /> What is Node? How does Node work?
            </h3>
            <p>
              <span className="fw-semibold">Ans:</span>Node is used as backend
              service where javascript works on the server-side of the
              application. This way javascript is used on both frontend and
              backend. Node. js runs on chrome v8 engine which converts
              javascript code into machine code, it is highly scalable,
              lightweight, fast, and data-intensive.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Blog;
