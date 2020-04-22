import * as actionTypes from "../actions/actionTypes";

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
  building: false,
};

const addTable = (state, action) => {
  // const updatedIngredient = { [action.ingredientName]: state.ingredients[action.ingredientName] + 1 }
  // const updatedIngredients = updateObject( state.ingredients, updatedIngredient );
  // const updatedState = {
  //     ingredients: updatedIngredients,
  //     totalPrice: state.totalPrice + INGREDIENT_PRICES[action.ingredientName],
  //     building: true
  // }
  // return updateObject( state, updatedState );
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TABLE:
      return addTable(state, action);
    default:
      return state;
  }
};

export default reducer;
