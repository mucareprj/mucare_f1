import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import './font.css';
import './common.css';
import Main from './Main';
import MainTest from './MainTest';
import ReactTest from './ReactTest';
import Resetpassword from './reset-password';
import KakaoCallback from './callback/KakaoCallback';
import NaverCallback from './callback/NaverCallback';
import GoogleCallback from './callback/GoogleCallback';
// import Home from './Home'; // 로그인 후 페이지

function App() {
  //const isLoggedIn = false; // 추후 로그인 여부에 따라 제어

  return (
    <Router>
      <Routes>
        {/* {!isLoggedIn ? (
          <Route path="*" element={<Login />} />
        ) : (
          <Route path="/" element={<Main />} />
        )}
         */}
         <Route path="/" element={<Login />} />
         <Route path="/main" element={<Main />} />

         {/* Figma -> React 코드 변환 및 연동 테스트 페이지 입니다. */}
         <Route path="/MainTest" element={<MainTest/>} />
         <Route path="/ReactTest" element={<ReactTest/>} />

                  <Route path="/reset-password" element={<Resetpassword/>} />

         <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
         <Route path="/oauth/naver/callback" element={<NaverCallback />} />
         <Route path="/oauth/google/callback" element={<GoogleCallback />} />
      </Routes>
    </Router>
  );
}

export default App;