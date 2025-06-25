import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./signup.css";

export const Signup = () => {

    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [emailCheckResult, setEmailCheckResult] = useState(null);
    const [showHangulAlert, setShowHangulAlert] = useState(false);
    const [showSpecialCharAlert, setShowSpecialCharAlert] = useState(false);

    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [passwordMatch, setPasswordMatch] = useState(null);


    const handleSignup = async () => {
        if (!email.trim()) {
            alert('이메일을 입력해주세요.');
            return;
        }
        if (!password) {
            alert('비밀번호를 입력해주세요.');
            return;
        }
        if (!passwordConfirm) {
            alert('비밀번호 확인을 입력해주세요.');
            return;
        }

        // 비밀번호 일치 체크
        if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('/users/signup', {
                email,
                password,
            });
            console.log(response.data);
            alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
            // 성공하면 로그인 페이지 등으로 이동
            navigate('/');
        } catch (error) {
            alert('회원가입 실패, 다시 시도해주세요.');
            console.error(error);
        }
    };

    const handleLogin = async () => {
        navigate('/');
    };

    const isValidEmail = (email) => {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    };

    const checkPasswordMatch = (pw, pwConfirm) => {
        if (!pwConfirm) {
            setPasswordMatch(null);
        } else {
            setPasswordMatch(pw === pwConfirm);
        }
    };

    const handleEmailChange = (e) => {
        const input = e.target.value;

        const hasHangul = /[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(input);
        const hasInvalidSpecialChar = /[^\w@.]/.test(input);

        if (hasHangul && !showHangulAlert) {
            alert("이메일에는 한글을 입력할 수 없습니다.");
            setShowHangulAlert(true);

            if (showSpecialCharAlert) setShowSpecialCharAlert(false);
        } else if (!hasHangul && hasInvalidSpecialChar && !showSpecialCharAlert) {
            alert("이메일에는 '@', '.'를 제외한 특수문자를 입력할 수 없습니다.");
            setShowSpecialCharAlert(true);
        }

        const filtered = input.replace(/[^a-zA-Z0-9@.]/g, '');
        setEmail(filtered);

        if (!hasHangul && showHangulAlert) setShowHangulAlert(false);
        if (!hasInvalidSpecialChar && showSpecialCharAlert) setShowSpecialCharAlert(false);
    };

    const checkEmail = async (email) => {
        try {
            const res = await axios.get(`/users/check-email?email=${encodeURIComponent(email)}`);
            return res.data.exists;
        } catch (e) {
            console.error('중복 확인 실패', e);
            return true;
        }
    };

    const handleEmailCheck = async () => {
        if (!email) {
            alert('이메일을 입력해주세요.');
            return;
        }

        if (!isValidEmail(email)) {
            alert('유효한 이메일 형식이 아닙니다.');
            return;
        }

        const isDuplicate = await checkEmail(email);
        setEmailCheckResult(!isDuplicate);

        if (isDuplicate) {
            alert('이미 사용 중인 이메일입니다.');
        } else {
            alert('사용 가능한 이메일입니다.');
        }
    };

    return (
        <div className="wrapper">
            <div className="_1">
                <div className="rectangle-1">

                    <div className="div">
                        {/* <label>아이디 입력</label> */}
                        <input
                            type="text"
                            placeholder="이메일 입력"
                            value={email}
                            onChange={handleEmailChange}
                            onBlur={() => {
                                if (email && !isValidEmail(email)) {
                                    return;
                                }
                            }}
                        />
                    </div >
                </div>
                <div className="rectangle-2">
                    <div className="div">
                        {/* <label>비밀번호</label> */}
                        <input
                            type="password"
                            placeholder="비밀번호"
                            value={password}
                            onChange={(e) => {
                                const value = e.target.value;
                                setPassword(value);
                                checkPasswordMatch(value, passwordConfirm);
                            }}
                        />
                    </div>
                </div>
                <div className="rectangle-10">
                    <div className="div">
                        {/* <label>비밀번호 확인</label> */}
                        <input
                            type="password"
                            placeholder="비밀번호 확인"
                            value={passwordConfirm}
                            onChange={(e) => {
                                const value = e.target.value;
                                setPasswordConfirm(value);
                                checkPasswordMatch(password, value);

                            }}
                        />
                        {passwordMatch === false && (
                            <p style={{ color: 'red', fontSize: '0.7rem' }}>
                                비밀번호가 일치하지 않습니다.
                            </p>
                        )}

                        {passwordMatch === true && (
                            <p style={{ color: 'green', fontSize: '0.7rem' }}>
                                비밀번호가 일치합니다.
                            </p>
                        )}
                    </div>
                </div>
                <div className="rectangle-11">
                    <div className="div">
                        {/* <label>휴대전화 번호</label> */}
                        <input
                            type="text"
                            placeholder="휴대전화 번호"
                        />
                    </div>
                </div>
                <div className="rectangle-13"
                >
                    <div className="div">
                        {/* <label>인증 번호</label> */}
                        <input
                            type="text"
                            placeholder="인증 번호"
                        />
                    </div>
                </div>
                <div className="rectangle-15">

                </div>
                <img className="check" src="/icons/check.png" />
                <img className="check2" src="/icons/check.png" />
                <img className="check3" src="/icons/check.png" />
                <div className="rectangle-16"></div>
                <div className="div6">약관 동의</div>
                <div className="div7">전체 동의</div>
                <img className="check-circle" src="/icons/check_circle.png" />
                <div className="div8">
                    <span>
                        <span className="div-8-span">서비스 이용약관</span>
                        <span className="div-8-span2">(필수)</span>
                    </span>
                </div>
                <div className="div9">보기</div>
                <div className="div10">보기</div>
                <div className="div11">보기</div>
                <div className="div12">
                    <span>
                        <span className="div-12-span">개인정보 처리방침</span>
                        <span className="div-12-span2">(필수)</span>
                    </span>
                </div>
                <div className="div13">마케팅 활용 동의 (선택)</div>
                <div className="rectangle-3"></div>
                <div className="div14" onClick={handleSignup}>가입하기</div>
                <div className="rectangle-9"></div>
                <div className="rectangle-12"></div>
                <div className="rectangle-14"></div>
                <div className="div15" onClick={handleEmailCheck}>중복확인</div>
                <div className="div16">인증요청</div>
                <div className="div17">확인</div>
                <div className="frame-13">
                    <div className="div18">회원가입</div>
                    <img className="icon-arrow-back-ios" src="/icons/arrow.png" onClick={handleLogin} />
                </div>
            </div>
        </div>

    );
};

export default Signup;