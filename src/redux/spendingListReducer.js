import { RENDER_SPENDING_LIST, ADD_SPENDING_LIST_ITEM } from "./types";
import uniqid from "uniqid";

const initialState = {
  spendingListArr: [
    ["Транспорт", uniqid()],
    ["Питание", uniqid()],
    ["Развлечения", uniqid()],
    ["Платежи", uniqid()],
    ["Здоровье", uniqid()],
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
    case ADD_SPENDING_LIST_ITEM:
      return () =>
        ({
          ...state,
          spendingListArr: [...state.spendingListArr, action.data.newItem],
        }());
    default:
      return state;
  }
};
