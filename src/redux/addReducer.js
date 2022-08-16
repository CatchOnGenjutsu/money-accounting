import { ADD_NEW_EXPENDITURE, REPLENISH_THE_BALANCE } from "./types";
import uniqid from "uniqid";

const initialState = {
  count: 322.05,
  spendingHistoryStorage: [
    ["Транспорт", 20.15, uniqid(), new Date("2022-01-26")],
    ["Питание", 25.64, uniqid(), new Date("2022-02-26")],
    ["Развлечения", 80.12, uniqid(), new Date("2022-03-26")],
    ["Платежи", 15.75, uniqid(), new Date("2022-02-26")],
    ["Здоровье", 40.15, uniqid(), new Date("2022-04-26")],
    ["Гардероб", 45.64, uniqid(), new Date("2022-05-26")],
    ["Транспорт", 75.15, uniqid(), new Date("2022-06-26")],
    ["Питание", 53.64, uniqid(), new Date("2022-07-26")],
    ["Развлечения", 45.12, uniqid(), new Date("2022-07-26")],
    ["Платежи", 123.75, uniqid(), new Date("2022-07-26")],
    ["Здоровье", 12.15, uniqid(), new Date("2022-06-26")],
    ["Гардероб", 25.64, uniqid(), new Date("2022-02-26")],
    ["Здоровье", 32.15, uniqid(), new Date("2022-03-26")],
    ["Гардероб", 53.64, uniqid(), new Date("2022-01-26")],
    ["Транспорт", 36.15, uniqid(), new Date("2022-07-26")],
    ["Питание", 42.64, uniqid(), new Date("2022-05-26")],
    ["Развлечения", 47.12, uniqid(), new Date("2022-06-26")],
    ["Здоровье", 100.1, uniqid(), new Date("2022-04-26")],
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
        ].sort((a, b) => {
          return b[3] - a[3];
        }),
      }))();
    case REPLENISH_THE_BALANCE:
      return {
        ...state,
        count: state.count + Number(action.data.increment),
      };
    default:
      return state;
  }
};
