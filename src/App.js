import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './font.css';
import './common.css';
import Login from './Login';
import KakaoCallback from './callback/KakaoCallback';
import NaverCallback from './callback/NaverCallback';
import GoogleCallback from './callback/GoogleCallback';
import InfoVerification from './pw/info-verification';
import Resetpassword_Mypage from './pw/reset-password-mypage';
import Resetpassword_Login from './pw/reset-password-login';
import Main from './Main';
import Mypage from './mypage/mypage';
import Myprofile from './mypage/myprofile/myprofile';
import Terms from './terms/Terms';
import Privacy from './terms/Privacy';
import Marketing from './terms/Marketing';
import Signup from './signup/signup';
import Signup1 from './signup/Signup1';

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

         <Route path="/terms" element={<Terms />} />
         <Route path="/privacy" element={<Privacy />} />
         <Route path="/marketing" element={<Marketing />} />
         <Route path="/signup1" element={<Signup1 />} />


          <Route path="/" element={<Login />} />
          <Route path="/oauth/kakao/callback" element={<KakaoCallback />} />
          <Route path="/oauth/naver/callback" element={<NaverCallback />} />
          <Route path="/oauth/google/callback" element={<GoogleCallback />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/info-verification" element={<InfoVerification />} />
          <Route path="/reset-password-mypage" element={<Resetpassword_Mypage />} />
          <Route path="/reset-password-login" element={<Resetpassword_Login />} />
          <Route path="/main" element={<Main />} />


          <Route path="/mypage" element={<Mypage />} />
          <Route path="/myprofile" element={<Myprofile />} />

        </Routes>
    </Router>
  );
}

export default App;