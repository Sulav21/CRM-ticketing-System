import React,{useState} from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";

export const ResetPassword = ({handleOnClick}) => {
    const [email, setEmail] = useState('')

    const handleOnChange=(e)=>{
       setEmail(e.target.value)
    }
    const handleOnSubmit=e=>{
        e.preventDefault()
    //   Call axios
        console.log(email)
       
    }
  return (
    <Container>
      <Row>
        <Col>
          <h1>Reset Password</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" required/>
            </Form.Group>
      
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
          <hr/>
        </Col>
      </Row>
      <Row>
        <Col>
        <a href="#!" className='text-decoration-none' onClick={handleOnClick}>Remember Password, Go to Login ?</a>
        </Col>
      </Row>
    </Container>
  );
};
