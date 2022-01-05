import { SHOW_CATEGORIES_LOADING, SHOW_LOADER } from "./types";

const initialState = {
  isAllPostsLoading: false,
  isError: false,
  isCategoriesLoading: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, isAllPostsLoading: action.payload };
    case SHOW_CATEGORIES_LOADING:
      return {...state, isCategoriesLoading: action.payload}
    default:
      return state;
  }
};
