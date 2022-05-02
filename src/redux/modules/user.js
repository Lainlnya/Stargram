import axios from 'axios';

//회원가입
const signupAPI = (email, name, username, password, passwordCheck) => {
  return function (dispatch, { history }) {
    const API = '/api/signup';
    axios
      .post(
        API,
        {
          email: email,
          name: name,
          username: username,
          password: password,
          passwordCheck: passwordCheck,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          baseURL: 'http://13.209.79.189',
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data.name);
        console.log(response.data.password);
      });
  };
};

//로그인
const loginAPI = (username, password) => {
  return function (dispatch, { history }) {
    const API = '/api/login';
    axios
      .post(
        API,
        {
          username: username,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          baseURL: 'http://13.209.79.189',
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data.username);
        console.log(response.data.password);
      });
  };
};

const stargramActions = {
  loginAPI,
  signupAPI,
};

export default stargramActions;
