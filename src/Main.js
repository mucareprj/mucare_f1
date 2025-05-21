import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession, logout } from './api/auth';

const Main = () => {
  const [user, setUser] = useState(null);
  const [loginMethod, setLoginMethod] = useState(null);
  const navigate = useNavigate();

  
  useEffect(() => {
    // 세션 상태 확인
    const checkSession = async () => {
      const data = await getSession();
      if (data.loggedIn) {
        setUser(data.userId);
        setLoginMethod(data.loginMethod);
        console.log('세션 데이터:', data);
      } else {
        alert('로그인이 필요합니다.');
        navigate('/');
      }
    };

    checkSession();
  }, [navigate]);

  const handleLogout = async (method) => {
    await logout(method);
    navigate('/');
  };

  return (
    <div style={{ padding: '40px' }}>
      <h1>메인 페이지</h1>
      {user && (
        <div>
          <p><strong>{user}</strong>님, 환영합니다!</p>
          <p>로그인 방식: <strong>{loginMethod}</strong></p>
          <button onClick={() => handleLogout(loginMethod)}>로그아웃</button>
        </div>
      )}
    </div>
  );
};

export default Main;