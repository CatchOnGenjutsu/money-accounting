import {
  CREATE_STATISTICS_LIST,
  SHOW_FILTERED_STATISTICS,
  SHOW_FILTERED_OVERVIEW,
} from "./types";

const initialState = {
  overviewTitle: "",
  statisticsListArray: [],
  overviewFilteredArray: [],
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
      let customArray = [];
      action.data.spendingHistoryList.forEach((item) => {
        for (let i = 0; i < action.data.spendingHistoryList.length; i++) {
          if (
            action.data.startDate == new Date(0) &&
            action.data.endDate == new Date()
          ) {
            return customArray.push(item);
          }
          if (
            item[3] >= new Date(action.data.startDate) &&
            item[3] <= new Date(action.data.endDate)
          ) {
            return customArray.push(item);
          }
        }
      });
      return {
        ...state,
        overviewTitle: action.data.overviewTitle,
        overviewFilteredArray: [...customArray],
      };
    }

    default:
      return state;
  }
};
