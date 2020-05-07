import { ActionTypes } from '../actions';

const initialState = {
  all_posts: [],
  selected_post: null,
};

const PostReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SET_POSTS:
      return { all_posts: action.payload, selected_post: state.selected };
    case ActionTypes.SET_SELECTED_POST:
      return { all_posts: state.all_posts, selected_post: action.payload };
    default:
      return state;
  }
};

export default PostReducer;
