import React from "react";
import NavBar from "./Navbar.js";
import ExpenditureModal from "./ExpenditureModal.js";
import { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewExpenditure } from "../redux/actions";

function MainPage() {
  const [isHidden, setIsHidden] = useState(true);
  const count = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.count;
  });

  const dispatch = useDispatch();

  const handleAddExpenditure = (e) => {
    e.preventDefault();
    setIsHidden(!isHidden);
  };

  const closeModal = useCallback(() => {
    setIsHidden(true);
  }, []);

  return (
    <div className="main-block">
      <NavBar />
      <ExpenditureModal hidden={isHidden} closeModal={closeModal} />
      <div className="content-block">
        <div className="current-money-block">
          <p className="currency-text">Текущий баланс:</p>
          <p className="currency-count">{count.toFixed(2)} BYN</p>
        </div>
        <div className="spending-history-main">
          <div className="spending-element-main"></div>
          <div className="spending-element-main"></div>
        </div>
        <div className="add-spend-button" onClick={handleAddExpenditure}></div>
      </div>
    </div>
  );
}

export default MainPage;
