import {
  fetchPostsApi, fetchPostApi, updatePostApi, deletePostApi, createPostApi,
  signUpUserApi, signInUserApi,
} from '../cs52-api';

// keys for actiontypes
export const ActionTypes = {
  SET_POSTS: 'SET_POSTS',
  SET_SELECTED_POST: 'SET_SELECTED_POST',
  ERROR_SET: 'ERROR_SET',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
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


// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  console.log(error);
  return {
    type: ActionTypes.AUTH_ERROR,
    payload: error,
  };
}

export function signinUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));
  return (dispatch) => {
    signInUserApi({ email, password }).then(
      (user) => {
        console.log('signin successfully');
        dispatch({ type: ActionTypes.AUTH_USER });
        console.log(user.token);
        localStorage.setItem('token', user.token);
        history.push('/');
      },
    ).catch((error) => {
      console.log('bad');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


export function signupUser({ email, password }, history) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));
  return (dispatch) => {
    signUpUserApi({ email, password }).then(
      (user) => {
        console.log('signup successfully');
        dispatch({ type: ActionTypes.AUTH_USER });
        console.log(user.token);
        localStorage.setItem('token', user.token);
        history.push('/');
      },
    ).catch((error) => {
      console.log('bad');
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}


// deletes token from localstorage
// and deauths
export function signoutUser(history) {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({ type: ActionTypes.DEAUTH_USER });
    history.push('/');
  };
}
