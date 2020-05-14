import axios from 'axios';

// const ROOT_URL = 'https://platform.cs52.me/api';
const ROOT_URL = 'https://lab5-1.herokuapp.com/api';
// const ROOT_URL = 'http://localhost:9090/api';
const API_KEY = '?key=JIALING';

export const fetchPostsApi = () => {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};


export const fetchPostApi = (postID) => {
  return new Promise((resolve, reject) => {
    axios.get(`${ROOT_URL}/posts/${postID}${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const updatePostApi = (postID, post) => {
  return new Promise((resolve, reject) => {
    const fields = {
      title: post.title, content: post.content, coverUrl: post.coverUrl, tags: post.tags,
    };
    console.log(fields);
    axios.put(`${ROOT_URL}/posts/${postID}${API_KEY}`, fields, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const deletePostApi = (postID) => {
  return new Promise((resolve, reject) => {
    axios.delete(`${ROOT_URL}/posts/${postID}${API_KEY}`, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const createPostApi = (post) => {
  return new Promise((resolve, reject) => {
    const fields = {
      title: post.title, content: post.content, coverUrl: post.coverUrl, tags: post.tags,
    };
    console.log(fields);
    axios.post(`${ROOT_URL}/posts/${API_KEY}`, fields, { headers: { authorization: localStorage.getItem('token') } })
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signUpUserApi = (user) => {
  return new Promise((resolve, reject) => {
    const fields = {
      email: user.email, password: user.password,
    };
    console.log(fields);
    axios.post(`${ROOT_URL}/signup`, fields)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const signInUserApi = (user) => {
  return new Promise((resolve, reject) => {
    const fields = {
      email: user.email, password: user.password,
    };
    console.log(fields);
    axios.post(`${ROOT_URL}/signin`, fields)
      .then((response) => {
        console.log(response.data);
        resolve(response.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export default fetchPostsApi;
