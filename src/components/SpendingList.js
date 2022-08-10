import React from "react";
import NavBar from "./navbar";
import { useDispatch, useSelector } from "react-redux";

function SpendingList() {
  const dispatch = useDispatch();

  const spendingArray = useSelector((state) => {
    const { spendingListReducer } = state;
    return spendingListReducer.spendingListArr;
  });

  return (
    <div className="main-block">
      <NavBar />
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
          // onClick={handleAddExpenditure}
        ></div>
      </div>
    </div>
  );
}

export default SpendingList;
