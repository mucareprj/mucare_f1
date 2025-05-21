import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import KakaoCallback from './callback/KakaoCallback';
import NaverCallback from './callback/NaverCallback';
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
         <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
         <Route path="/oauth/naver/callback" element={<NaverCallback />} />
      </Routes>
    </Router>
  );
}

export default App;