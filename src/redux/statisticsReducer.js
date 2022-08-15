import { CREATE_STATISTICS_LIST } from "./types";

const initialState = {
  statisticsListArray: [
    ["Транспорт", 0],
    ["Питание", 0],
    ["Развлечения", 0],
    ["Платежи", 0],
    ["Здоровье", 0],
    ["Гардероб", 0],
  ],
};

export const statisticsListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_STATISTICS_LIST:
      let customArray = [
        ["Транспорт", 0],
        ["Питание", 0],
        ["Развлечения", 0],
        ["Платежи", 0],
        ["Здоровье", 0],
        ["Гардероб", 0],
      ];
      action.data.spendingHistoryList.map((item) => {
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
    default:
      return state;
  }
};
