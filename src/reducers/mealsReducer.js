import { actionsTypes } from "../actions";

const initState = {
  mealsList: [],
  pageNumber: 1,
};

export default (state = initState, action) => {
  if (action.type === actionsTypes.FETCH_MEAL_BY_SEARCH_VALUE) {
    return {
      ...state,
      mealsList: action.payload,
    };
  } else if (action.type === actionsTypes.CHAGE_PAGE_NUMBER) {
    return {
      ...state,
      pageNumber: action.payload,
    };
  }
  return state;
};
