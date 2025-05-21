import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const GoogleCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchGoogleLogin = async () => {
      const res = await fetch('/api/pb/oauth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ code }),
      });

      if (res.ok) {
        navigate('/main');
      } else {
        alert('구글 로그인 실패');
        navigate('/');
      }
    };

    if (code) fetchGoogleLogin();
  }, [code, navigate]);

  return <div>구글 로그인 중...</div>;
};

export default GoogleCallback;
