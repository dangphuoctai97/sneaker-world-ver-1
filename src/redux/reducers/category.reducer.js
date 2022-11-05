import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, CATEGORY_ACTION } from "../constants";

const initialState = {
  categoryList: {
    data: [],
    loading: false,
    error: "",
  },
};

const categoryReducer = createReducer(initialState, {
  [REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST_ACTION)]: (state, action) => {
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST_ACTION)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST_ACTION)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        loading: false,
        error: error,
      },
    };
  },
});

export default categoryReducer;
