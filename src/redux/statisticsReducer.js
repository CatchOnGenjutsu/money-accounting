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
      return (() => ({
        ...state,
        statisticsListArray: [
          action.data.spendingList.map((item) => {
            for (let i = 0; i < state.statisticsListArray.length; i++) {
              if (item[0] === state.statisticsListArray[i][0]) {
                return (state.statisticsListArray[i][1] += item[1]);
              }
            }
          }),
        ],
      }))();
    default:
      return state;
  }
};
