import React from 'react'
import Table from 'react-bootstrap/Table';

export const TicketTable = () => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Subjects</th>
          <th>Status</th>
          <th>Opened Date</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>sssl issue</td>
          <td>client response pending</td>
          <td>2022-02-10</td>
        </tr>
       
      </tbody>
    </Table>
  )
}
