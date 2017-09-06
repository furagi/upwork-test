import axios from 'axios';

import { POSTS, READ, join } from '../constants';

export function readPosts(page, perPage, sort, order) {
  const params = { page, perPage, sort, order };
  return { type: join(READ, POSTS), payload: axios.get('/api/posts', { params }) };
}
