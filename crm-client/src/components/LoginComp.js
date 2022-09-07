import React,{useState} from "react";
import { Container, Row, Col, Form,Button } from "react-bootstrap";

const initialData = {
    email:"",
    password:""
}
export const LoginComp = ({handleOnClick}) => {
    const [formDt, setFormDt] = useState(initialData)

    const handleOnChange=(e)=>{
        const {name,value} = e.target
        setFormDt({
            ...formDt,
            [name]:value
        })
    }
    const handleOnSubmit=e=>{
        e.preventDefault()
    //   Call axios
        console.log(formDt)
       
    }
  return (
    <Container>
      <Row>
        <Col>
          <h1>Client Login</h1>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" name="email" onChange={handleOnChange} placeholder="Enter email" required/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={handleOnChange} placeholder="Enter Password" required />
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
        <a href="#!" className='text-decoration-none' onClick={handleOnClick}>Forget Password ?</a>
        </Col>
      </Row>
    </Container>
  );
};
