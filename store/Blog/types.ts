export const ADD_COMMENT = "BLOG/ADD_COMMENT";
export const SET_TITLE = "BLOG/SET_TITLE";
export const SET_BODY = "BLOG/SET_BODY";

export interface Post {
  id: number;
  title: string;
  body: string;
  comments: Comment[];
}

export interface BlogState {
  posts: Post[];
}

export interface Comment {
  id: number;
  postId: number;
  body: string;
}

interface AddCommentAction {
  type: typeof ADD_COMMENT;
  payload: Comment;
}

interface SetPostTitleAction {
  type: typeof SET_TITLE;
  payload: string;
}

interface SetPostBodyAction {
  type: typeof SET_BODY;
  payload: string;
}

export type BlogActionTypes =
  | AddCommentAction
  | SetPostTitleAction
  | SetPostBodyAction;
