import { actionsTypes } from "../actions";

const initState = {
  mealsList: [],
};

export default (state = initState, action) => {
  if (action.type === actionsTypes.FETCH_MEAL_BY_SEARCH_VALUE) {
    return {
      ...state,
      mealsList: action.payload,
    };
  }
  return state;
};
