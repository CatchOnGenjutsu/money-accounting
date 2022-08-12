import { combineReducers } from "redux";
import { addingReducer } from "./addReducer";
import { spendingListReducer } from "./spendingListReducer";
import { statisticsListReducer } from "./statisticsReducer";

export const rootReducer = combineReducers({
  addingReducer,
  spendingListReducer,
  statisticsListReducer,
});
