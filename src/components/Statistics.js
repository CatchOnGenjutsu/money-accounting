import React from "react";
import NavBar from "./Navbar";

function Statistics() {
  return (
    <div className="main-block">
      <NavBar />
      <div className="content-block">
        {/* <div className="current-money"></div> */}
        <div className="spending-history-list">
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
          <div className="spending-element-list"></div>
        </div>
        <div className="add-spend-button"></div>
      </div>
    </div>
  );
}

export default Statistics;
