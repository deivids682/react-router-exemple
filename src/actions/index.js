import { API_URL } from "../constants";
import fetchWrapper from "../fetchWrapper";
import { actionsTypes } from "./constants";

export const fetchCategories = () => async (dispatch) => {
  const response = await fetchWrapper.get(`${API_URL}categories.php`);
  dispatch({
    type: actionsTypes.FETCH_CATEGORIES,
    payload: response.categories,
  });
};

export const fetchMealBySearchValue = (searchValue) => async (dispatch) => {
  const response = await fetchWrapper.get(
    `${API_URL}search.php?s=${searchValue}`
  );

  dispatch({
    type: actionsTypes.FETCH_MEAL_BY_SEARCH_VALUE,
    payload: response.meals !== null ? response.meals : [],
  });
};

export const changePageNumber = (pageNumber) => async (dispatch) => {
  dispatch({
    type: actionsTypes.CHAGE_PAGE_NUMBER,
    payload: pageNumber,
  });
};

export const fetchMealByCategory = (category) => async (dispatch) => {
  const response = await fetchWrapper.get(`${API_URL}filter.php?c=${category}`);

  dispatch({
    type: actionsTypes.FETCH_MEALS_BY_CATEGOREY,
    payload: response.meals,
  });
};

export const cleanMealByCategory = () => async (dispatch) => {
  dispatch({
    type: actionsTypes.CLEAN_MEALS_BY_CATEGOREY,
  });
};
