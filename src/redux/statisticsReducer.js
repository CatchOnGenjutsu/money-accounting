import { CREATE_STATISTICS_LIST, SHOW_FILTERED_STATISTICS } from "./types";

const initialState = {
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
      console.log("start " + action.data.startDate);
      console.log("end " + action.data.endDate);
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

    default:
      return state;
  }
};
