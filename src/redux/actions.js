import { type } from "@testing-library/user-event/dist/type";
import {
  ADD_NEW_EXPENDITURE,
  RENDER_SPENDING_LIST,
  ADD_SPENDING_LIST_ITEM,
  COLOR_NEW_EXPENDITURE_ITEM,
  CREATE_STATISTICS_LIST,
  SHOW_FILTERED_STATISTICS,
  REPLENISH_THE_BALANCE,
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

export function createStatisticsList(spendingListArray, spendingHistoryList) {
  return {
    type: CREATE_STATISTICS_LIST,
    data: { spendingListArray, spendingHistoryList },
  };
}

export function showFilteredStatistics(
  startDate,
  endDate,
  spendingHistoryList,
  spendingListArray
) {
  return {
    type: SHOW_FILTERED_STATISTICS,
    data: { startDate, endDate, spendingHistoryList, spendingListArray },
  };
}

export function replenishTheBalance(newReplenishment) {
  return {
    type: REPLENISH_THE_BALANCE,
    data: { newReplenishment },
  };
}
