import React, { useState } from 'react';
import './Login.css'; // 스타일은 따로 분리
import { login } from './api/auth';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    const res = await login(id, pw);
    if (res.ok) {
      navigate('/main');
    } else {
      alert('로그인 실패');
    }
  };

  const KAKAO_REST_API_KEY = '70a5316ede9855bd6e30b4369e792aa1';
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';

  // 네이버 로그인 설정
  const NAVER_CLIENT_ID = 'LzQBtRpOwZ_C67N5GxsG';
  const NAVER_REDIRECT_URI = 'http://localhost:3000/oauth/naver/callback';

  const handleKakaoLogin = () => {
    const kakaoAuthUrl =
      `https://kauth.kakao.com/oauth/authorize?` +
      `client_id=${KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  const handleNaverLogin = () => {
    const state = Math.random().toString(36).substring(2, 15);
    const naverAuthUrl =
      `https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=${NAVER_CLIENT_ID}&redirect_uri=${encodeURIComponent(NAVER_REDIRECT_URI)}&state=${state}`;
    window.location.href = naverAuthUrl;
  };

  return (

    <div className="outer-wrapper">
  <div className="phone-box">
    <div className="logo">마음위로 LOGO</div>

    <div className="input-group">
      <label>아이디 입력</label>
      <input
        type="text"
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="아이디 입력"
      />
    </div>

    <div className="input-group">
      <label>비밀번호 입력</label>
      <input
        type="password"
        value={pw}
        onChange={(e) => setPw(e.target.value)}
        placeholder="비밀번호 입력"
      />
    </div>

    <button className="login-button" onClick={handleLogin} >로그인</button>

    <hr className="divider" />

    <div className="simple-login-label">간편로그인</div>
    <div className="social-buttons">
      <img src="/images/kakao_icon.png" alt="카카오톡로그인" onClick={handleKakaoLogin} />
      <img src="/images/naver_icon.png" alt="네이버로그인" onClick={handleNaverLogin} />
      <img src="/images/google_icon.png" alt="구글로그인" />
    </div>
  </div>
</div>

  );
};

export default Login;