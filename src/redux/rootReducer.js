import { combineReducers } from "redux";
import { addingReducer } from "./addReducer";
import { spendingListReducer } from "./spendingListReducer";

export const rootReducer = combineReducers({
  addingReducer,
  spendingListReducer,
});
