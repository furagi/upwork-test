import {
  READ,
  START,
  SUCCESS,
  FAIL,
  POSTS,
  join
} from '../constants';

export const defaultState = {
  page: null,
  loading: true,
  error: null
};

const ACTION_HANDLERS = {
  [join(READ, POSTS, START)]: function(state, action) {
    return { ...state, loading: true, error: null };
  },

  [join(READ, POSTS, SUCCESS)]: function(state, action) {
    return { ...state, page: action.payload.data, loading: false };
  },

  [join(READ, POSTS, FAIL)]: function(state, action) {
    return { ...state, page: null, error: action.payload, loading: false };
  }

};

export function postsReducer(state = defaultState, action) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
};
