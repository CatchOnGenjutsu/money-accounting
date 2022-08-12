import React from "react";
import NavBar from "./Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createStatisticsList } from "../redux/actions";

function Statistics() {
  const dispatch = useDispatch();

  const statisticsListArray = useSelector((state) => {
    const { statisticsListReducer } = state;
    return statisticsListReducer.statisticsListArray;
  });

  const spendingHistoryStorage = useSelector((state) => {
    const { addingReducer } = state;
    return addingReducer.spendingHistoryStorage;
  });
  // useEffect(() => {
  //   dispatch(createStatisticsList(spendingHistoryStorage));
  // }, [statisticsListArray]);

  return (
    <div className="main-block">
      <NavBar />
      <div className="content-block">
        {/* <div className="current-money"></div> */}
        <div className="spending-history-list">
          {statisticsListArray.map((item) => (
            <div key={item[0]} className="spending-element-main">
              <div className="date-time">{item[0]}</div>
              <div className="spend-text-content">
                <span className="spend-value">
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
