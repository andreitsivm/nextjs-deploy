import { combineReducers } from "redux";
import { blogReducer } from "./Blog";

export const rootReducer = combineReducers({ blog: blogReducer });

export type RootState = ReturnType<typeof rootReducer>;
