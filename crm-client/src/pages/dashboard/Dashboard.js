import React from 'react'
import { Container,Row,Col,Button, Breadcrumb } from 'react-bootstrap'
import { TicketTable } from '../../ticket-table/TicketTable'
import {BreadCrumbComp} from '../../components/breadcrumb/BreadCrumbComp'
import tickets from '../../dummy-data/dummy-table.json'
import { Link } from 'react-router-dom'

export const Dashboard = () => {
   
  return (
    <Container>
        <Row>
            <Col>
            <BreadCrumbComp page='Dashboard' />
            </Col>
        </Row>
        <Row>
            <Col className='text-center mt-5 mb-2'>
           <Link to='/add-ticket'> <Button variant='info' style={{"font-size":'2rem',"color":"black","padding":"6px 20px"}}>Add New Ticket</Button></Link>
            </Col>
        </Row>
        <Row>
            <Col className='text-center mb-2'>
            <div>Total Tickets: 50</div>
            <div>Pending Tickets: 5</div>
            </Col>
        </Row>
        <Row>
            <Col className='mb-2'>
            Recently Added Tickets
            </Col>
        </Row>
        <Row>
            <Col className='mb-2'>
            <TicketTable tickets={tickets}/>
            </Col>
        </Row>
    </Container>
  )
}
