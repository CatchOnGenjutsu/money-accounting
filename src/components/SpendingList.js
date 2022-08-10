import React from "react";
import NavBar from "./Navbar.js";
import { useDispatch, useSelector } from "react-redux";
import { useState, useRef } from "react";
import SpendingListModal from "./SpendingListModal.js";

function SpendingList() {
  const [isHidden, setIsHidden] = useState(false);

  const dispatch = useDispatch();

  const spendingArray = useSelector((state) => {
    const { spendingListReducer } = state;
    return spendingListReducer.spendingListArr;
  });
  const handleAddExpenditure = (e) => {
    e.preventDefault();
    setIsHidden(!isHidden);
  };
  return (
    <div className="main-block">
      <NavBar />
      <SpendingListModal hidden={isHidden} />
      <div className="content-block">
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

export default SpendingList;
