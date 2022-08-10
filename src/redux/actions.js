import {
  ADD_NEW_EXPENDITURE,
  RENDER_SPENDING_LIST,
  ADD_SPENDING_LIST_ITEM,
} from "./types";

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

export function addSpendingListItem(newItem) {
  return {
    type: ADD_SPENDING_LIST_ITEM,
    data: { newItem },
  };
}
