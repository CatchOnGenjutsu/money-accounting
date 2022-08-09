import { RENDER_SPENDING_LIST } from "./types";
import uniqid from "uniqid";

const initialState = {
  spendingListArr: [
    ["Транспорт", uniqid()],
    ["Питание", uniqid()],
    ["Развлечения", uniqid()],
    ["Платежи", uniqid()],
    ["Здоровье", uniqid()],
    ["Гардероб", uniqid()],
    ["Гардероб", uniqid()],
    ["Гардероб", uniqid()],
    ["Гардероб", uniqid()],
    ["Гардероб", uniqid()],
    ["Гардероб", uniqid()],
    ["Гардероб", uniqid()],
  ],
};

export const spendingListReducer = (state = initialState, action) => {
  console.log(state);
  switch (action.type) {
    case RENDER_SPENDING_LIST:
      return (() => ({
        ...state,
      }))();
    default:
      return state;
  }
};
