import React, { useCallback } from "react";
import NavBar from "./Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";

function OverviewPage({ closeOverview }) {
  const dispatch = useDispatch();

  const spendingArray = useSelector((state) => {
    const { spendingListReducer } = state;
    return spendingListReducer.spendingListArr;
  });
  const handleAddExpenditure = (e) => {
    e.preventDefault();
    closeOverview();
  };

  return (
    <div className="overview-main-block">
      <NavBar />
      <div className="overview-content-block">
        <p className="spending-list-name">Статьи расхода:</p>
        <div className="spending-history-list">
          {spendingArray.map((item) => (
            <div key={item[1]} className="spending-element-list">
              {item[0]}
            </div>
          ))}
        </div>
        <div
          className="add-spending-item-button"
          onClick={handleAddExpenditure}
        ></div>
      </div>
    </div>
  );
}

export default OverviewPage;
