import React from "react";
import './messageHistory.css'

export const MessageHistory = ({ msg }) => {
  return (
    <>
      {!msg ? (
        <>
          <p className="text-center fw-bold">No message history</p> <hr />
        </>
      ) : (
        <>
          {msg.map((item, i) => {
            return (
              <div className="message-history mt-3" key={i}>
                <div className="send">
                  <div className="sender fw-bold">{item.messageBy}</div>
                  <div className="date">{item.date}</div>
                </div>
                <div className="message">{item.message}</div>
              </div>
            );
          })}
        </>
      )}
    </>
  );
};
