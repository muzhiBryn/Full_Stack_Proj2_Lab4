// the starting point for your redux store
// this defines what your store state will look like
import { combineReducers } from 'redux';
import PostReducer from './post_reducer';
import AuthReducer from './auth-reducer';
import CountReducer from './count-reducer';

const rootReducer = combineReducers({
  posts: PostReducer,
  count: CountReducer,
  auth: AuthReducer,
});

export default rootReducer;
