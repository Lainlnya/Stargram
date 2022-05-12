import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

import axios from 'axios';

const SET_USER = 'SET_USER';

const setUser = createAction(SET_USER, (user) => ({ user }));

const initialState = {
  username: null,
  is_login: false,
};
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
        const { accessToken } = response.data;
        axios.headers.commom['Authorization'] = `Bearer ${accessToken}`;
        dispatch(setUser({ username: username }));
        window.alert('로그인 성공');
        history.push('/signup');
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.username = action.payload.user.username;
        draft.is_login = true;
      }),
    // [LOG_OUT]: (state, action) =>
    //   produce(state, (draft) => {
    //     draft.user = null;
    //     draft.is_login = false;
    //   }),
  },
  initialState
);
const stargramActions = {
  loginAPI,
  signupAPI,
};

export { stargramActions };
