import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const NaverCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const state = searchParams.get('state');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNaverLogin = async () => {
      const res = await fetch('/api/pb/oauth/naver', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ code, state }),
      });

      if (res.ok) {
        navigate('/main');
      } else {
        alert('네이버 로그인 실패');
        navigate('/');
      }
    };

    if (code) fetchNaverLogin();
  }, [code, state, navigate]);

  return <div>네이버 로그인 중...</div>;
};

export default NaverCallback;
