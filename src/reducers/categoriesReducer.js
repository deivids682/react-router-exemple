import { actionsTypes } from "../actions";

const initState = [];

export default (state = initState, action) => {
  if (action.type === actionsTypes.FETCH_CATEGORIES) {
    return action.payload;
  }
  return state;
};
