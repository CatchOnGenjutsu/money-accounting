import { ADD_NEW_EXPENDITURE } from "./types";
import uniqid from "uniqid";

const initialState = {
  count: 322.05,
  spendingHistoryStorage: [
    ["Транспорт", 20.15, uniqid(), new Date()],
    ["Питание", 25.64, uniqid(), new Date()],
    ["Развлечения", 80.12, uniqid(), new Date()],
    ["Платежи", 15.75, uniqid(), new Date()],
    ["Здоровье", 40.15, uniqid(), new Date()],
    ["Гардероб", 45.64, uniqid(), new Date()],
    ["Транспорт", 75.15, uniqid(), new Date()],
    ["Питание", 53.64, uniqid(), new Date()],
    ["Развлечения", 45.12, uniqid(), new Date()],
    ["Платежи", 123.75, uniqid(), new Date()],
    ["Здоровье", 12.15, uniqid(), new Date()],
    ["Гардероб", 25.64, uniqid(), new Date()],
    ["Здоровье", 32.15, uniqid(), new Date()],
    ["Гардероб", 53.64, uniqid(), new Date()],
    ["Транспорт", 36.15, uniqid(), new Date()],
    ["Питание", 42.64, uniqid(), new Date()],
    ["Развлечения", 47.12, uniqid(), new Date()],
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
