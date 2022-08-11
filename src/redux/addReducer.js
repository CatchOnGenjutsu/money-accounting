import { ADD_NEW_EXPENDITURE, COLOR_NEW_EXPENDITURE_ITEM } from "./types";
import uniqid from "uniqid";

const initialState = {
  count: 322.05,
  spendingHistoryStorage: [
    ["Транспорт", 20.15, uniqid(), false],
    ["Развлечения", 25.64, uniqid(), false],
    ["Платежи", 80.12, uniqid(), false],
    ["Гардероб", 15.75, uniqid(), false],
  ],
};

export const addingReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NEW_EXPENDITURE:
      return (() => ({
        ...state,
        count: state.count - action.data.newSpend[1],
        spendingHistoryStorage: [
          action.data.newSpend,
          ...state.spendingHistoryStorage,
        ],
      }))();
    case COLOR_NEW_EXPENDITURE_ITEM:
      return (() => ({
        ...state,
        spendingHistoryStorage: [
          ...state.spendingHistoryStorage.map((item) => {
            if (item[2] === action.data.key) {
              item[3] = !item[3];
            }
            return item;
          }),
        ],
      }))();
    default:
      return state;
  }
};
