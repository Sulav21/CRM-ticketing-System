import React from "react";
import Table from "react-bootstrap/Table";

export const TicketTable = ({ tickets }) => {
  return (
    <>
      {!tickets.length ? (
        <>
          <p className="text-center fw-bold">No tickets to show</p> <hr />
        </>
      ) : (
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
            {tickets.length &&
              tickets.map((item) => (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.subject}</td>
                  <td>{item.status}</td>
                  <td>{item.date}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
