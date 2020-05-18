import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const newAlert = (state, action) => {
  return [...state, action.data];
};

const deleteAlert = (state, action) => {
    const newState = state.filter(alert => alert.id !== action.data.id);
    return newState;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_ALERT:
      return newAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
