import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/signup.scss';

class Signup extends Component {
  render() {
    return (
      <main className="signup_page">
        <article className="signup_part">
          <section className="logo_part"></section>
          <section className="signup_form">
            <h2 className="stargram_description">
              친구들의 사진과 동영상을 보려면 가입하세요.
            </h2>
            <form method="post" action="">
              <div className="signup_div">
                <input type="text" placeholder="이메일 주소" />
              </div>
              <div className="signup_div">
                <input type="text" placeholder="사용자 이름" />
              </div>
              <div className="signup_div">
                <input type="text" placeholder="아이디" />
              </div>
              <div className="signup_div">
                <input type="password" placeholder="비밀번호" />
              </div>
              <div className="signup_div">
                <input type="password" placeholder="비밀번호 확인" />
              </div>
              <button type="submit">
                <div className="signup_btn">가입</div>
              </button>
            </form>
          </section>
        </article>
        <article className="account_exist">
          <p>
            계정이 있으신가요? <Link to="/">로그인</Link>
          </p>
        </article>
      </main>
    );
  }
}

export default Signup;
