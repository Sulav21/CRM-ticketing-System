import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AddTicketForm } from "../../components/add-ticket-form/AddTicketForm";
import { BreadCrumbComp } from "../../components/breadcrumb/BreadCrumbComp";

export const AddTicket = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Add New Ticket" />
        </Col>
      </Row>
      <AddTicketForm />

      
    </Container>
  );
};
