import { ADD_NEW_EXPENDITURE } from "./types";

const initialState = {
  count: 322.0,
};

export const addingReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ADD_NEW_EXPENDITURE:
      return (() => ({
        ...state,
        count: state.count + action.data.increment,
      }))();
    default:
      return state;
  }
};
