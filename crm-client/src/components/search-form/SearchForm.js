import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchSearchTicket } from "../../pages/ticket-listing/TicketsSlice";

export const SearchForm = () => {
  const dispatch = useDispatch()
  const handleOnChange=e=>{
    const {name,value} = e.target
    dispatch(fetchSearchTicket(value))
  }
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Search:
          </Form.Label>
          <Col ms={9}>
          <Form.Control name='searchStr' onChange={handleOnChange} type='text' placeholder="Search ..." />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
