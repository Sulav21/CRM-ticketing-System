import React,{useState} from 'react'
import { Container, Row, Col, Form,Button } from "react-bootstrap";

const initialState={
  subject:"",
  date:"",
  details:""
}
export const AddTicketForm = () => {
  const [ticketDt, setTicketDt] = useState(initialState)

    const handleOnChange=(e)=>{
     const {name,value} = e.target
     setTicketDt({...ticketDt, [name]:value})

    }
    const handleOnSubmit=e=>{
        e.preventDefault()
        console.log(ticketDt)
        setTicketDt(initialState)

    }
  return (
  
            <div className='jumbotron add-ticket-form'>
              <h2 className='text-info text-center mb-4 mt-0'>Add New Ticket</h2>
          <Form onSubmit={handleOnSubmit}>
            <Form.Group as={Row} className='mb-2'>
              <Form.Label column sm={3}>Subject</Form.Label>
              <Col sm={9}>
              <Form.Control type="text" name="subject" value={ticketDt.subject} onChange={handleOnChange} placeholder="Enter Subject" required/>
              </Col>
            </Form.Group>

            <Form.Group as={Row} className='mb-2'>
              <Form.Label column sm={3}>Issue Found</Form.Label>
              <Col sm={9}>
              <Form.Control type="date" name="date" value={ticketDt.date} onChange={handleOnChange} required />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className='mb-2'>
              <Form.Label column sm={3}>Message</Form.Label>
              <Col sm={9}>
              <Form.Control as='textarea' rows='5' name="details" value={ticketDt.details} onChange={handleOnChange} required />
              </Col>
            </Form.Group>
      
            <Button variant="info" type="submit" className='py-2'block>
              Submit
            </Button>
          </Form>
    </div>
          
  )
}
