import {
  ADD_NEW_EXPENDITURE,
  RENDER_SPENDING_LIST,
  ADD_SPENDING_LIST_ITEM,
  COLOR_NEW_EXPENDITURE_ITEM,
  CREATE_STATISTICS_LIST,
} from "./types";

export function addNewExpenditure(newSpend) {
  return {
    type: ADD_NEW_EXPENDITURE,
    data: { newSpend },
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

export function colorSpendingListItem(id) {
  return {
    type: COLOR_NEW_EXPENDITURE_ITEM,
    data: { id },
  };
}

export function createStatisticsList(spendingList) {
  return {
    type: CREATE_STATISTICS_LIST,
    data: { spendingList },
  };
}
