import React, { useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const KakaoCallback = () => {
  const [searchParams] = useSearchParams();
  const code = searchParams.get('code');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchKakaoLogin = async () => {
      const res = await fetch('/api/pb/oauth/kakao', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ code }),
      });

      if (res.ok) {
        navigate('/main');
      } else {
        alert('카카오 로그인 실패');
        navigate('/');
      }
    };

    if (code) fetchKakaoLogin();
  }, [code, navigate]);

  return <div>카카오 로그인 중...</div>;
};

export default KakaoCallback;