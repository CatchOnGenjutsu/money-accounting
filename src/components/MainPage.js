import React from "react";
import NavBar from "./Navbar.js";
import MainPageModal from "./MainPageModal.js";
import { useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewExpenditure } from "../redux/actions";

function MainPage() {
  const [isHidden, setIsHidden] = useState(true);
  const count = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.count;
  });

  const spendingHistoryStorage = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.spendingHistoryStorage;
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
      <MainPageModal hidden={isHidden} closeModal={closeModal} />
      <div className="content-block">
        <div className="current-money-block">
          <p className="currency-text">Текущий баланс:</p>
          <p className="currency-count">{count.toFixed(2)} BYN</p>
        </div>
        <div className="spending-history-main">
          {spendingHistoryStorage.map((item) => (
            <div key={item[2]} className="spending-element-main">
              {item[0]} :{" "}
              <span className="spend-value">{Number(item[1]).toFixed(2)}</span>{" "}
              BYN
            </div>
          ))}
        </div>
        <div className="add-spend-button" onClick={handleAddExpenditure}></div>
      </div>
    </div>
  );
}

export default MainPage;
