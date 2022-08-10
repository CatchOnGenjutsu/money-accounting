import React from "react";
import NavBar from "./Navbar";

function History() {
  return (
    <div className="main-block">
      <NavBar />
      <div className="content-block">
        <div className="current-money"></div>
        <div className="spending-history">
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
          <div className="spending-element"></div>
        </div>
        <div className="add-spend-button"></div>
      </div>
    </div>
  );
}

export default History;
