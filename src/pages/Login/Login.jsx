import React, { Component } from 'react';
import '../../login.scss';
import { Link } from 'react-router-dom';

class Login extends Component {
  render() {
    return (
      <>
        <main>
          <article className="preview_part"></article>
          <article className="login_part">
            <section className="login_way">
              <section className="logo_part"></section>
              <section className="login_form">
                <form method="post" action="">
                  <div className="login_div">
                    <input type="text" placeholder="이메일" />
                  </div>
                  <div className="login_div">
                    <input type="password" placeholder="비밀번호" />
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
                계정이 없으신가요? <Link to="/signup">가입하기</Link>
              </p>
            </section>
          </article>
        </main>
      </>
    );
  }
}

export default Login;
