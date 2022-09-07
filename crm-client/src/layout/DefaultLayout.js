import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const DefaultLayout = ({ children }) => {
  return (
  <div className="default-layout">
    <div className="header">
    <Header />

    </div>
    <div className="main">
    {children}

    </div>
    <div className="footer">
    <Footer />

    </div>
      </div>
  );
};
