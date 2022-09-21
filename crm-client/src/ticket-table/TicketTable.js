import React from "react";
import Table from "react-bootstrap/Table";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const TicketTable = () => {

const {searchTicketList,isLoading,error} = useSelector(state=>state.tickets)
if(isLoading) return <h2>Loading ...</h2>
if(error) return <h2>{error}</h2>
  return (
    <>
      {!searchTicketList.length ? (
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
            {searchTicketList.length &&
              searchTicketList.map((item) => (
                <tr key={item._id}>
                  <td>{item._id}</td>
                  <Link to={`/ticket/${item._id}`}>
                  <td>{item.subject}</td></Link>
                  <td>{item.status}</td>
                  <td>{item.openAt}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </>
  );
};
