import { ADD_NEW_EXPENDITURE, RENDER_SPENDING_LIST } from "./types";

export function addNewExpenditure(increment) {
  return {
    type: ADD_NEW_EXPENDITURE,
    data: { increment },
  };
}

export function renderSpendingList(spendingListArr) {
  return {
    type: RENDER_SPENDING_LIST,
    spendingListArr,
  };
}
