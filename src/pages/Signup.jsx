import React from 'react';
import { withRouter } from 'react-router';
import { useDispatch } from 'react-redux';
import { stargramActions as userActions } from '../redux/modules/user';
import '../styles/signup.scss';
import { history } from '../redux/configPages';

const Signup = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [name, setName] = React.useState('');
  const [username, setId] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [passwordCheck, setPwCheck] = React.useState('');

  const handleSignup = (e) => {
    e.preventDefault();

    if (
      email === '' ||
      password === '' ||
      name === '' ||
      username === '' ||
      passwordCheck === ''
    ) {
      alert('모든 정보를 입력해주세요.');
      return;
    }

    if (password != passwordCheck) {
      alert('비밀번호가 동일하지 않습니다.');
      return;
    }
    dispatch(
      userActions.signupAPI(email, name, username, password, passwordCheck)
    );
  };

  return (
    <React.Fragment>
      <main className="signup_page">
        <article className="signup_part">
          <section className="logo_part"></section>
          <section className="signup_form">
            <h2 className="stargram_description">
              친구들의 사진과 동영상을 보려면 가입하세요.
            </h2>
            <form onSubmit={handleSignup}>
              <div className="signup_div">
                <input
                  type="email"
                  placeholder="이메일 주소"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="signup_div">
                <input
                  type="text"
                  placeholder="사용자 이름"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="signup_div">
                <input
                  type="text"
                  placeholder="아이디"
                  onChange={(event) => setId(event.target.value)}
                />
              </div>
              <div className="signup_div">
                <input
                  type="password"
                  placeholder="비밀번호"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="signup_div">
                <input
                  type="password"
                  placeholder="비밀번호 확인"
                  onChange={(event) => setPwCheck(event.target.value)}
                />
              </div>
              <button type="submit">
                <div className="signup_btn">가입</div>
              </button>
            </form>
          </section>
        </article>
        <article className="account_exist">
          <p>
            계정이 있으신가요?{' '}
            <button
              onClick={() => {
                history.push('/');
                window.location.reload();
              }}
            >
              로그인
            </button>
          </p>
        </article>
      </main>
    </React.Fragment>
  );
};

export default Signup;
