// 로그인 요청 API 함수
export const login = async (id, pw) => {
    const res = await fetch('/api/pb/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({ id, pw }),
    });
    return res;
  };
  
  // 세션 확인
  export const getSession = async () => {
    const res = await fetch('/api/pb/session', {
      credentials: 'include',
    });
    return res.json();
  };
  
  // 로그아웃
  export const logout = async (method) => {
    const options = {
      method: 'POST',
      credentials: 'include',
    };
  
    // // 카카오일 때만 accessToken 추가
    // if (method === 'kakao') {
    //   const kakaoAccessToken = localStorage.getItem('kakaoAccessToken'); // 또는 세션 등
    //   if (!kakaoAccessToken) {
    //     console.error('카카오 accessToken 없음');
    //     return;
    //   }
  
    //   options.headers = {
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //   };
    //   options.body = new URLSearchParams({ accessToken: kakaoAccessToken });
    // }
  
    await fetch(`/api/pb/logout/${method}`, options);
  };