import React, { useCallback } from "react";
import NavBar from "./Navbar.js";
import { useSelector } from "react-redux";

function OverviewPage({ closeOverview }) {
  const overviewTitle = useSelector((state) => {
    const { statisticsListReducer } = state;
    return statisticsListReducer.overviewTitle;
  });

  const overviewFilteredArray = useSelector((state) => {
    const { statisticsListReducer } = state;
    return statisticsListReducer.overviewFilteredArray;
  });

  const handleCloseOverview = (e) => {
    e.preventDefault();
    closeOverview();
  };

  return (
    <div className="overview-main-block">
      <NavBar />
      <div className="overview-content-block">
        <div className="overview-name-block">
          <p className="overview-list-name">{overviewTitle}</p>
        </div>
        <div className="overview-list">
          {overviewFilteredArray
            .sort((a, b) => {
              return b[3] - a[3];
            })
            .map((item) => {
              if (item[0] === overviewTitle) {
                return (
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
                );
              }
            })}
        </div>
        <div
          className="add-spending-item-button"
          onClick={handleCloseOverview}
        ></div>
      </div>
    </div>
  );
}

export default OverviewPage;
