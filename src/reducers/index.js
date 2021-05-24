import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";
import mealsReducer from "./mealsReducer";

export default combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
});
