import { ADD_COMMENT, SET_TITLE, SET_BODY, CommentData } from "./types";

export const saveComment = (comment: CommentData) => {
  return {
    type: ADD_COMMENT,
    payload: comment,
  };
};

export const setTitle = (text: string) => {
  return {
    type: SET_TITLE,
    payload: text,
  };
};
export const setBody = (text: string) => {
  return {
    type: SET_BODY,
    payload: text,
  };
};
