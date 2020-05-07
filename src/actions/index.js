import {
  fetchPostsApi, fetchPostApi, updatePostApi, deletePostApi, createPostApi,
} from '../cs52-api';

// keys for actiontypes
export const ActionTypes = {
  SET_POSTS: 'SET_POSTS',
  SET_SELECTED_POST: 'SET_SELECTED_POST',
  ERROR_SET: 'ERROR_SET',
};

export function fetchPosts() {
  return (dispatch) => {
    fetchPostsApi().then(
      (posts) => {
        dispatch({ type: ActionTypes.SET_POSTS, payload: posts });
      },
    ).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function fetchPost(postID) {
  return (dispatch) => {
    fetchPostApi(postID).then(
      (post) => {
        dispatch({ type: ActionTypes.SET_SELECTED_POST, payload: post });
      },
    ).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function updatePost(postID, post, history) {
  console.log(post);
  return (dispatch) => {
    updatePostApi(postID, post).then(
      () => {
        console.log('updated successfully');
        history.push('/');
      },
    ).catch((error) => {
      console.log('bad');
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}


export function deletePost(postID, history) {
  return (dispatch) => {
    deletePostApi(postID).then(
      () => {
        console.log('deleted successfully');
        history.push('/');
      },
    ).catch((error) => {
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}

export function createPost(post, history) {
  console.log(post);
  return (dispatch) => {
    createPostApi(post).then(
      () => {
        console.log('updated successfully');
        history.push('/');
      },
    ).catch((error) => {
      console.log(error);
      dispatch({ type: ActionTypes.ERROR_SET, error });
    });
  };
}
