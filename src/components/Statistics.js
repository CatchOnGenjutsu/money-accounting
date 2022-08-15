import React from "react";
import NavBar from "./Navbar";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStatisticsList, showFilteredStatistics } from "../redux/actions";

function Statistics() {
  const [isHidden, setIsHidden] = useState(true);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dispatch = useDispatch();

  // const closeModal = useCallback(() => {
  //   setIsHidden(true);
  // }, []);
  function handleStartDate(e) {
    e.preventDefault();
    setStartDate(e.target.value);
    console.log(startDate);
  }

  function handleEndDate(e) {
    e.preventDefault();
    setEndDate(e.target.value);
  }

  function handleSetDateClick() {
    dispatch(
      showFilteredStatistics(startDate, endDate, spendingHistoryStorage)
    );
    console.log(startDate);
  }

  const spendingListArray = useSelector((state) => {
    const { spendingListReducer } = state;
    return spendingListReducer.spendingListArr;
  });

  const statisticsListArray = useSelector((state) => {
    const { statisticsListReducer } = state;
    return statisticsListReducer.statisticsListArray;
  });

  const spendingHistoryStorage = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.spendingHistoryStorage;
  });

  useEffect(() => {
    dispatch(createStatisticsList(spendingListArray, spendingHistoryStorage));
  }, [spendingHistoryStorage]);

  return (
    <div className="main-block">
      <NavBar />
      <div className="content-block">
        <div className="statistics-general-container">
          <div className="statistics-inputs-container">
            <input
              value={startDate}
              onChange={handleStartDate}
              className="date-inputs"
              type="date"
            />
            <input
              value={endDate}
              onChange={handleEndDate}
              className="date-inputs"
              type="date"
            />
          </div>
          <div onClick={handleSetDateClick} className="set-date-btn">
            УСТАНОВИТЬ
          </div>
        </div>
        <div className="statistics-list-block">
          {statisticsListArray.map((item) => (
            <div key={item[0]} className="statistics-element">
              <div className="statistics-element-name">{item[0]}</div>
              <div className="statistics-text-content">
                <span className="statistics-element-value">
                  {Number(item[1]).toFixed(2)}
                </span>{" "}
                BYN
              </div>
            </div>
          ))}
        </div>
        <div className="add-spend-button"></div>
      </div>
    </div>
  );
}

export default Statistics;
