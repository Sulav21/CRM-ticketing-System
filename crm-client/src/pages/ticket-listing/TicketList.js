import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadCrumbComp } from "../../components/breadcrumb/BreadCrumbComp";
import { SearchForm } from "../../components/search-form/SearchForm";
import { TicketTable } from "../../ticket-table/TicketTable";
import tickets from '../../dummy-data/dummy-table.json'
import { Link } from "react-router-dom";

export const TicketList = () => {
  const [str, setStr] = useState("");
  const [DisplayTicket, setDisplayTicket] = useState(tickets)

  useEffect(() => {
  }, [str,DisplayTicket]);

  const handleOnChange = (e) => {
    const {value} = e.target
    setStr(e.target.value);
    searchTicket(value)
  };

  const searchTicket = sttr =>{
   const filteredSearch = tickets.filter((item)=>{
    return item.subject.toLowerCase().includes(sttr.toLowerCase())
   })
   setDisplayTicket(filteredSearch)
  }
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
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr/>
      <Row>
        <Col>
        <TicketTable tickets={DisplayTicket}/>
        </Col>
      
      </Row>
    </Container>
  );
};
