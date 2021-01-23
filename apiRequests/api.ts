import axios, { AxiosResponse } from "axios";
import { Routes, api } from "const";
import { Post, PostData, CommentData } from "store";

const config = {
  headers: { "Content-Type": "application/json" },
};
export const blogApi = {
  getPosts: (): Promise<AxiosResponse<Post[]>> =>
    axios.get(Routes.baseUrl + api.POSTS),
  getSinglePost: (id: string | string[]): Promise<AxiosResponse<Post>> =>
    axios.get(`${Routes.baseUrl}${api.POSTS}/${id}${api.WITH_COMMENTS}`),
  createPost: (data: PostData): Promise<AxiosResponse<void>> =>
    axios.post(Routes.baseUrl + api.POSTS, data, config),
  deletePost: (id: number): Promise<AxiosResponse<void>> =>
    axios.delete(`${Routes.baseUrl}${api.POSTS}/${id}`),
  updatePost: (id: number, data: PostData): Promise<AxiosResponse<void>> =>
    axios.put(`${Routes.baseUrl}${api.POSTS}/${id}`, data, config),
  createComment: (data: CommentData): Promise<AxiosResponse<void>> =>
    axios.post(Routes.baseUrl + api.COMMENTS, data, config),
};
