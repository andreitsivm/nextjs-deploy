import { SAVE_POST, BlogState, BlogActionTypes } from "./types";

const initialState: BlogState = {
  posts: [],
};

export const blogReducer = (
  state = initialState,
  action: BlogActionTypes
): BlogState => {
  switch (action.type) {
    case SAVE_POST: {
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
