import fetchWrapper from "../fetchWrapper";

export const actionsTypes = {
  FETCH_CATEGORIES: "FETCH_CATEGORIES",
  FETCH_MEAL_BY_SEARCH_VALUE: "FETCH_MEAL_BY_SEARCH_VALUE",
  CHAGE_PAGE_NUMBER: "CHAGE_PAGE_NUMBER",
};

export const fetchCategories = () => async (dispatch) => {
  const response = await fetchWrapper.get(
    `https://www.themealdb.com/api/json/v1/1/categories.php`
  );
  dispatch({
    type: actionsTypes.FETCH_CATEGORIES,
    payload: response.categories,
  });
};

export const fetchMealBySearchValue = (searchValue) => async (dispatch) => {
  const response = await fetchWrapper.get(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
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
