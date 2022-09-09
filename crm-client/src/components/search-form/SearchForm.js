import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Row, Col } from "react-bootstrap";

export const SearchForm = ({handleOnChange,str}) => {
  return (
    <div>
      <Form>
        <Form.Group as={Row}>
          <Form.Label column sm={3}>
            Search:
          </Form.Label>
          <Col ms={9}>
          <Form.Control name='searchStr' onChange={handleOnChange} value={str} type='text' placeholder="Search ..." />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};
