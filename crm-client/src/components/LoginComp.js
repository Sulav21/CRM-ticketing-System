import React from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";

export const LoginComp = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" placeholder="Password" required />
            </Form.Group>
      
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="#!" className='text-decoration-none'>Forget Password ?</a>
        </Col>
      </Row>
    </Container>
  );
};
