import { actionsTypes } from "../actions/constants";

const initState = {
  mealsList: [],
  mealByCategoryList: [],
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
  } else if (action.type === actionsTypes.FETCH_MEALS_BY_CATEGOREY) {
    return {
      ...state,
      mealByCategoryList: action.payload,
    };
  } else if (action.type === actionsTypes.CLEAN_MEALS_BY_CATEGOREY) {
    return {
      ...state,
      mealByCategoryList: [],
    };
  }
  return state;
};
