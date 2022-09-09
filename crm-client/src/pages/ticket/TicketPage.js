import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumbComp } from "../../components/breadcrumb/BreadCrumbComp";
import { MessageHistory } from "../../components/message-history/MessageHistory";
import { UpdateTicket } from "../../components/update-ticket/UpdateTicket";
import tickets from "../../dummy-data/dummy-table.json";
const ticket = tickets[0];
export const TicketPage = () => {
  const [message, setMessage] = useState("");
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };
  useEffect(() => {}, [message]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    alert(message);
  };

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col className="fw-bold text-secondary">
          <div className="subject">Subject: {ticket.subject}</div>
          <div className="date">Ticket Opened: {ticket.date}</div>
          <div className="status">Status: {ticket.status}</div>
        </Col>
        <Col>
          <Button variant="outline-info">Close Ticket</Button>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <UpdateTicket
            handleOnChange={handleOnChange}
            msg={message}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};
