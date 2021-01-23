import { SAVE_POST, Post, BlogActionTypes } from "./blogTypes";

export const savePost = (post: Post): BlogActionTypes => ({
  type: SAVE_POST,
  payload: post,
});
