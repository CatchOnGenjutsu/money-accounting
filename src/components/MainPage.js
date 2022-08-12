import React from "react";
import NavBar from "./Navbar.js";
import MainPageModal from "./MainPageModal.js";
import { useState, useCallback } from "react";
import { useSelector } from "react-redux";

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

  // const dispatch = useDispatch();

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
