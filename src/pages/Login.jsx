import React from 'react';
import '../styles/login.scss';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import stargramActions, {
  stargramActions as userActions,
} from '../redux/modules/user';

const Login = (props) => {
  const dispatch = useDispatch();
  const [email, setEmail] = React.useState('');
  const [pw, setPassword] = React.useState('');

  const { history } = props;

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === '' || pw === '') {
      alert('이메일과 비밀번호 모두 입력해주세요');
      return;
    }

    //우선은 계정 페이지로 연결되게 만듦
    //아닐경우 api호출
    console.log(email);
    console.log(pw);

    dispatch(stargramActions.loginAPI(email, pw));
  };

  return (
    <>
      <main className="login_page">
        <article className="preview_part">
          <div className="picture_area"></div>
        </article>
        <article className="login_part">
          <section className="login_way">
            <section className="logo_part"></section>
            <section className="login_form">
              <form onSubmit={handleLogin}>
                <div className="login_div">
                  <input
                    type="email"
                    placeholder="이메일"
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
                <div className="login_div">
                  <input
                    type="password"
                    placeholder="비밀번호"
                    onChange={(event) => setPassword(event.target.value)}
                  />
                </div>
                <button type="submit">
                  <div className="login_btn">로그인</div>
                </button>
              </form>
            </section>
            <section className="another_part">
              <div>아이디를 잊으셨나요?</div>
              <div>비밀번호를 잊으셨나요?</div>
            </section>
          </section>
          <section className="signup_way">
            <p>
              계정이 없으신가요?
              <Link to="/signup"> 가입하기</Link>
              {/* <button onClick={() => history.push('/signup')}>가입하기</button> */}
            </p>
          </section>
        </article>
      </main>
    </>
  );
};

export default Login;
