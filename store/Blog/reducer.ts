import { ADD_COMMENT, SET_BODY, SET_TITLE, BlogState } from "./types";

const initialState: BlogState = {
  title: "",
  body: "",
  id: "",
};

export const blogReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COMMENT: {
      return {
        ...state,
        inputedComment: action.payload,
      };
    }
    case SET_TITLE: {
      return {
        ...state,
        inputedTitle: action.payload,
      };
    }
    case SET_BODY: {
      return {
        ...state,
        inputedBody: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
