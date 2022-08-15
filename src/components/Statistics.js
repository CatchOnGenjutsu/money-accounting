import React from "react";
import NavBar from "./Navbar";
import { useEffect, useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStatisticsList } from "../redux/actions";

function Statistics() {
  const [isHidden, setIsHidden] = useState(true);
  const dispatch = useDispatch();

  // const closeModal = useCallback(() => {
  //   setIsHidden(true);
  // }, []);

  const statisticsListArray = useSelector((state) => {
    const { statisticsListReducer } = state;
    return statisticsListReducer.statisticsListArray;
  });

  const spendingHistoryStorage = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.spendingHistoryStorage;
  });

  function handleSelect(ranges) {
    console.log(ranges); // native Date object
  }

  useEffect(() => {
    dispatch(createStatisticsList(spendingHistoryStorage));
  }, [spendingHistoryStorage]);

  return (
    <div className="main-block">
      <NavBar />
      <div className="content-block">
        <div className="statistics-inputs-container">
          <input className="date-inputs" type="date" />
          <input className="date-inputs" type="date" />
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
