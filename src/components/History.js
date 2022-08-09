import React from "react";
import NavBar from "./navbar";

function History() {
  return (
    <div className="main-block">
      <NavBar />
      <div className="content-block red">
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
