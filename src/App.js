import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import KakaoCallback from './callback/KakaoCallback';
import NaverCallback from './callback/NaverCallback';
import GoogleCallback from './callback/GoogleCallback';


import Signup from './signup/signup';

import InfoVerification from './password-recovery/info-verification';
import Resetpassword from './password-recovery/reset-password';

import Main from './Main';
import Mypage from './mypage/mypage';
import Myprofile from './mypage/myprofile/myprofile';
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
          <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
          <Route path="/oauth/naver/callback" element={<NaverCallback />} />
          <Route path="/oauth/google/callback" element={<GoogleCallback />} />


          <Route path="/signup" element={<Signup />} />
          <Route path="/info-verification" element={<InfoVerification />} />
          <Route path="/reset-password" element={<Resetpassword />} />

          <Route path="/main" element={<Main />} />

          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myprofile" element={<Myprofile />} />

        </Routes>
    </Router>
  );
}

export default App;