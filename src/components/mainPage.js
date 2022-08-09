import React from "react";
import NavBar from "./navbar";
import ExpenditureModal from "./expenditureModal";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewExpenditure } from "../redux/actions";

function MainPage() {
  const [isHidden, setIsHidden] = useState(false);
  const count = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.count;
  });

  const dispatch = useDispatch();

  const handleAddExpenditure = (e) => {
    e.preventDefault();
    setIsHidden(!isHidden);
  };

  return (
    <div className="main-block">
      <NavBar />
      <ExpenditureModal hidden={isHidden} />
      <div className="content-block">
        <div className="current-money">
          <p className="currency-text">Текущий баланс:</p>
          <p className="currency-count">{count.toFixed(2)} BYN</p>
        </div>
        <div className="spending-history">
          <div className="spending-element"></div>
          <div className="spending-element"></div>
        </div>
        <div className="add-spend-button" onClick={handleAddExpenditure}></div>
      </div>
    </div>
  );
}

export default MainPage;
