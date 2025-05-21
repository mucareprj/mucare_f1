import React from 'react';

const Home = () => {
  return (
    <div className="login-container">
      <h2>로그인 된 상태입니다.</h2>
      <div className="login-buttons">
        <button className="social kakao">카카오 로그인</button>
        <button className="social naver">네이버 로그인</button>
        <button className="social google">구글 로그인</button>
      </div>

      <div className="login-form">
        <input type="text" placeholder="아이디" />
        <input type="password" placeholder="비밀번호" />
        <button className="login-btn">로그인</button>
      </div>
    </div>
  );
};

export default Home;