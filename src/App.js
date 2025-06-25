import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Main from './Main';
import Signup from './signup/signup';
import InfoVerification from './password-recovery/info-verification';
import Resetpassword from './password-recovery/reset-password';
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
         <Route path="/signup" element={<Signup />} />

         <Route path="/info-verification" element={<InfoVerification />} /> 
         <Route path="/reset-password" element={<Resetpassword />} />

         <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
         <Route path="/oauth/naver/callback" element={<NaverCallback />} />
         <Route path="/oauth/google/callback" element={<GoogleCallback />} />
      </Routes>
    </Router>
  );
}

export default App;