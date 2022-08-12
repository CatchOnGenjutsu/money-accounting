import { ADD_NEW_EXPENDITURE } from "./types";
import uniqid from "uniqid";

const initialState = {
  count: 322.05,
  spendingHistoryStorage: [
    ["Транспорт", 20.15, uniqid(), new Date()],
    ["Развлечения", 25.64, uniqid(), new Date()],
    ["Платежи", 80.12, uniqid(), new Date()],
    ["Гардероб", 15.75, uniqid(), new Date()],
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
    default:
      return state;
  }
};
