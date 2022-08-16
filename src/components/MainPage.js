import React, { useEffect } from "react";
import NavBar from "./Navbar.js";
import MainPageModal from "./MainPageModal.js";
import ReplenishBalanceModal from "./ReplenishBalanceModal.js";
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

function MainPage() {
  const [isHidden, setIsHidden] = useState(true);
  const [isHiddenBalance, setIsHiddenBalance] = useState(true);
  const count = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.count;
  });

  const spendingHistoryStorage = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.spendingHistoryStorage;
  });

  const handleAddExpenditure = (e) => {
    e.preventDefault();
    setIsHidden(!isHidden);
  };

  const handleReplenishBalance = (e) => {
    e.preventDefault();
    setIsHiddenBalance(!isHiddenBalance);
  };

  const closeModal = useCallback(() => {
    setIsHidden(true);
  }, []);

  const closeModalBalance = useCallback(() => {
    setIsHiddenBalance(true);
  }, []);

  return (
    <div className="main-block">
      <NavBar />
      <MainPageModal hidden={isHidden} closeModal={closeModal} />
      <ReplenishBalanceModal
        hidden={isHiddenBalance}
        closeModal={closeModalBalance}
      />
      <div className="content-block">
        <div className="current-money-block" onClick={handleReplenishBalance}>
          <p className="currency-text">Текущий баланс:</p>
          <p className="currency-count">{count.toFixed(2)} BYN</p>
        </div>
        <div className="spending-history-main">
          {spendingHistoryStorage
            .sort((a, b) => {
              return b[3] - a[3];
            })
            .map((item) => (
              <div key={item[2]} className="spending-element-main">
                <div className="date-time">
                  {item[3].toLocaleDateString()}{" "}
                  {item[3].toLocaleTimeString().slice(0, -3)}
                </div>
                <div className="spend-text-content">
                  {item[0]} :{" "}
                  <span className="spend-value">
                    {Number(item[1]).toFixed(2)}
                  </span>{" "}
                  BYN
                </div>
              </div>
            ))}
        </div>
        <div className="add-spend-button" onClick={handleAddExpenditure}></div>
      </div>
    </div>
  );
}

export default MainPage;
