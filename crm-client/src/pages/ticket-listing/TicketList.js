import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumbComp } from "../../components/breadcrumb/BreadCrumbComp";
import { SearchForm } from "../../components/search-form/SearchForm";
import { TicketTable } from "../../ticket-table/TicketTable";
// import tickets from '../../dummy-data/dummy-table.json'
import { Link } from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux'
import { fetchAllTickets } from "./TicketAction";

export const TicketList = () => {
  const dispatch = useDispatch()
const {tickets} = useSelector(state=>state.tickets)
 
  useEffect(() => {
   dispatch(fetchAllTickets())
  }, [dispatch]);

  return (
    <Container>
      <Row>
        <Col>
          <BreadCrumbComp page="Ticket Lists" />
        </Col>
      </Row>
      <Row>
        <Col>
        <Link to='/add-ticket'>  <Button variant="info">Add New Ticket</Button></Link>
        </Col>
        <Col className="text-end">
          <SearchForm  />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
        <TicketTable/>
        </Col>
      
      </Row>
    </Container>
  );
};
