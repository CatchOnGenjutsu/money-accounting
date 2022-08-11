import {
  RENDER_SPENDING_LIST,
  ADD_SPENDING_LIST_ITEM,
  COLOR_NEW_EXPENDITURE_ITEM,
} from "./types";
import uniqid from "uniqid";

const initialState = {
  spendingListArr: [
    ["Транспорт", uniqid(), true],
    ["Питание", uniqid(), false],
    ["Развлечения", uniqid(), false],
    ["Платежи", uniqid(), false],
    ["Здоровье", uniqid(), false],
    ["Гардероб", uniqid(), false],
  ],
};

export const spendingListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RENDER_SPENDING_LIST:
      return (() => ({
        ...state,
      }))();
    case ADD_SPENDING_LIST_ITEM:
      return (() => ({
        ...state,
        spendingListArr: [...state.spendingListArr, action.data.newItem],
      }))();
    case COLOR_NEW_EXPENDITURE_ITEM:
      return (() => ({
        ...state,
        spendingListArr: [
          ...state.spendingListArr.map((item) => {
            if (item[1] === action.data.key) {
              item[2] = !item[2];
            }
            return item;
          }),
        ],
      }))();
    default:
      return state;
  }
};
