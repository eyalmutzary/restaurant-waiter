import * as actionTypes from "../actions/actionTypes";

const initialState = [];

const newAlert = (state, { type, ...data }) => {
  const isDuplicated = state.find(
    (alert) =>
      alert.tableNum === data.tableNum && alert.alertType === data.alertType
  );
  if (!isDuplicated) {
    return [...state, data];
  }
  return state;
};

const removeAlert = (state, { type, id }) => {
  const newState = state.filter((alert) => alert.id !== id);
  return newState;
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.NEW_ALERT:
      return newAlert(state, action);
    case actionTypes.REMOVE_ALERT:
      return removeAlert(state, action);
    default:
      return state;
  }
};

export default reducer;
