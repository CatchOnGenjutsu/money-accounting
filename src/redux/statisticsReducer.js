import {
  CREATE_STATISTICS_LIST,
  SHOW_FILTERED_STATISTICS,
  SHOW_FILTERED_OVERVIEW,
} from "./types";

const initialState = {
  overviewTitle: "",
  statisticsListArray: [],
};

export const statisticsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STATISTICS_LIST: {
      let customArray = action.data.spendingListArray.map((i) => [i[0], 0]);
      action.data.spendingHistoryList.forEach((item) => {
        for (let i = 0; i < customArray.length; i++) {
          if (item[0] === customArray[i][0]) {
            return (customArray[i][1] += Number(item[1]));
          }
        }
      });
      return (() => ({
        ...state,
        statisticsListArray: [...customArray],
      }))();
    }
    case SHOW_FILTERED_STATISTICS: {
      // console.log("start " + action.data.startDate);
      // console.log("end " + action.data.endDate);
      let customArray = action.data.spendingListArray.map((i) => [i[0], 0]);
      action.data.spendingHistoryList.forEach((item) => {
        for (let i = 0; i < customArray.length; i++) {
          if (
            item[3] >= new Date(action.data.startDate) &&
            item[3] <= new Date(action.data.endDate) &&
            item[0] === customArray[i][0]
          ) {
            return (customArray[i][1] += Number(item[1]));
          }
        }
      });
      return (() => ({
        ...state,
        statisticsListArray: [...customArray],
      }))();
    }
    case SHOW_FILTERED_OVERVIEW: {
      return {
        ...state,
        overviewTitle: action.data.overviewTitle,
      };
    }

    default:
      return state;
  }
};
