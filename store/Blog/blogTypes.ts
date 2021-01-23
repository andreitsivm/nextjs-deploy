export const SAVE_POST = "BLOG/SAVE_POST";

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
  readonly id: number;
  postId: number;
  body: string;
}
export interface PostData {
  title: string;
  body: string;
}
export interface CommentData {
  body: string;
  postId: number;
}

interface SavePostAction {
  type: typeof SAVE_POST;
  payload: Post;
}

export type BlogActionTypes = SavePostAction;
