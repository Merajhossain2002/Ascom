import React from "react";
import { Accordion, Container } from "react-bootstrap";
import Header from "../Shared/Header/Header";

const Faq = () => {
  return (
    <div>
      <Header />
      <Container>
        <Accordion className="mt-3" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header>what is Ascom?</Accordion.Header>
            <Accordion.Body>
              Ascom is a online platform that offer quality courses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>is Ascom Legit?</Accordion.Header>
            <Accordion.Body>Yes, ascom is legit.</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              I want to purchase a course, what to do?
            </Accordion.Header>
            <Accordion.Body>
              its easy to purchase at ascome. just click on courses choose your
              course and click on get premimum access and purchase.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
