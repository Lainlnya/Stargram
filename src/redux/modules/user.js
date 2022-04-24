import axios from 'axios';

//회원가입
const signupAPI = (email, userName, userId, pw, pwCheck) => {
  return function (dispatch, { history }) {
    const API = '/user/signup';
    axios
      .post(
        API,
        {
          userEmail: email,
          userName: userName,
          userId: userId,
          userPw: pw,
          userPwCheck: pwCheck,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          baseURL: 'http://localhost:8080',
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data.userName);
        console.log(response.data.pwCheck);
      });
  };
};

//로그인
const loginAPI = (email, password) => {
  return function (dispatch, { history }) {
    const API = '/user/login';
    axios
      .post(
        API,
        {
          userEmail: email,
          password: password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          baseURL: 'http://localhost:8080',
          withCredentials: true,
        }
      )
      .then((response) => {
        console.log(response.data.userEmail);
        console.log(response.data.password);
      });
  };
};

const stargramActions = {
  loginAPI,
  signupAPI,
};

export default stargramActions;
