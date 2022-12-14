import React from "react";
import NavBar from "./Navbar";
import OverviewPage from "./OverviewPage";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  createStatisticsList,
  showFilteredStatistics,
  showFilteredOverview,
} from "../redux/actions";

function Statistics() {
  const [isHidden, setIsHidden] = useState(true);
  const [startDate, setStartDate] = useState(
    new Date(new Date().setDate(1))
      .toLocaleDateString()
      .split(".")
      .reverse()
      .join("-")
  );
  const [endDate, setEndDate] = useState(
    new Date().toLocaleDateString().split(".").reverse().join("-")
  );
  const dispatch = useDispatch();

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

  function handleStartDate(e) {
    console.log(
      new Date(new Date().setDate(1))
        .toLocaleDateString()
        .split(".")
        .reverse()
        .join("-")
    );
    e.preventDefault();
    setStartDate(e.target.value);
    // handleSetDateClick();
  }

  function handleEndDate(e) {
    e.preventDefault();
    setEndDate(e.target.value);
    // handleSetDateClick();
  }

  function handleSetDateClick() {
    if (!startDate && !endDate) {
      dispatch(createStatisticsList(spendingListArray, spendingHistoryStorage));
    }
    if (!startDate && endDate) {
      dispatch(
        showFilteredStatistics(
          new Date(0),
          endDate,
          spendingHistoryStorage,
          spendingListArray
        )
      );
    }
    if (startDate && !endDate) {
      let currentEndDate = new Date()
        .toLocaleDateString()
        .split(".")
        .reverse()
        .join("-");
      dispatch(
        showFilteredStatistics(
          startDate,
          currentEndDate,
          spendingHistoryStorage,
          spendingListArray
        )
      );
    }
    if (startDate && endDate) {
      dispatch(
        showFilteredStatistics(
          startDate,
          endDate,
          spendingHistoryStorage,
          spendingListArray
        )
      );
    }
  }

  function handleClearDateClick() {
    setStartDate("");
    setEndDate("");
    dispatch(createStatisticsList(spendingListArray, spendingHistoryStorage));
  }

  const handleOpenOverview = (e) => {
    if (!startDate && !endDate) {
      dispatch(
        showFilteredOverview(
          new Date(0),
          new Date(),
          e.currentTarget.dataset.title,
          spendingHistoryStorage
        )
      );
    }
    if (!startDate && endDate) {
      dispatch(
        showFilteredOverview(
          new Date(0),
          endDate,
          e.currentTarget.dataset.title,
          spendingHistoryStorage
        )
      );
    }
    if (startDate && !endDate) {
      let currentEndDate = new Date()
        .toLocaleDateString()
        .split(".")
        .reverse()
        .join("-");
      dispatch(
        showFilteredOverview(
          startDate,
          currentEndDate,
          e.currentTarget.dataset.title,
          spendingHistoryStorage
        )
      );
    }
    if (startDate && endDate) {
      dispatch(
        showFilteredOverview(
          startDate,
          endDate,
          e.currentTarget.dataset.title,
          spendingHistoryStorage
        )
      );
    }
    setIsHidden(!isHidden);
  };

  const closeOverview = useCallback(() => {
    setIsHidden(true);
  }, []);

  useEffect(() => {
    dispatch(createStatisticsList(spendingListArray, spendingHistoryStorage));
  }, [spendingHistoryStorage]);

  useEffect(() => {
    dispatch(
      showFilteredStatistics(
        startDate,
        endDate,
        spendingHistoryStorage,
        spendingListArray
      )
    );
  }, []);

  return (
    <div className="main-block">
      <NavBar />
      {isHidden || <OverviewPage closeOverview={closeOverview} />}
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
          <div className="statistics-date-btns">
            <div onClick={handleSetDateClick} className="set-date-btn">
              ????????????????????
            </div>
            <div onClick={handleClearDateClick} className="clear-date-btn">
              ??????????
            </div>
          </div>
        </div>
        <div className="statistics-list-block">
          {statisticsListArray.map((item) => (
            <div
              onClick={handleOpenOverview}
              key={item[0]}
              className="statistics-element"
              data-title={item[0]}
            >
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
      </div>
    </div>
  );
}

export default Statistics;
