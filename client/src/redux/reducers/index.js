import { postsReducer, defaultState as posts } from './posts';

export const reducers = {
  posts: postsReducer
};

export const state = {
  posts
};
