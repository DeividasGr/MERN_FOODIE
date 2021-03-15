import { combineReducers } from 'redux';
import postsReducer from './posts';
import authReducer from './auth';

export const reducers = combineReducers({
  posts: postsReducer,
  auth: authReducer,
});
