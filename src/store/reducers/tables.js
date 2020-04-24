import * as actionTypes from "../actions/actionTypes";

const initialState = {
  tables: null,
  selectedTableId: null,
  selectedTableNum: null,
};

const getTable = (state, action) => {
  return {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_TABLES:
      return getTable(state, action);
    default:
      return state;
  }
};

export default reducer;
