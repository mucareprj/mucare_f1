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

    const [phoneNumber, setPhoneNumber] = useState('');

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

        if (!phoneNumber) {
            alert('휴대전화 번호를 입력해주세요.');
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
                phoneNumber,
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
        <div className="signup-wrapper">
            <div className="signup-container">
                <div className="input-wrapper email">
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
                </div>

                <div className="input-wrapper password">
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

                <div className="input-wrapper password-confirm">
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
                        <p className="warning">비밀번호가 일치하지 않습니다.</p>
                    )}
                    {passwordMatch === true && (
                        <p className="success">비밀번호가 일치합니다.</p>
                    )}
                </div>

                <div className="input-wrapper phone">
                    <input
                        type="text"
                        placeholder="휴대전화 번호"
                        value={phoneNumber}
                        onChange={(e) => {
                            const input = e.target.value;

                            // 숫자만 허용 (하이픈 포함 X)
                            const validPattern = /^[0-9]*$/;

                            if (!validPattern.test(input)) {
                                alert('숫자만 입력할 수 있습니다.');
                                return; // 숫자가 아니면 입력 무시
                            }

                            setPhoneNumber(input);
                        }}
                        inputMode="numeric"
                        maxLength={11} // 예: 01012345678
                    />
                </div>

                <div className="input-wrapper auth-code">
                    <input type="text" placeholder="인증 번호" />
                </div>

                <div className="terms-wrapper">
                    <div className="terms-header">약관 동의</div>
                    <div className="terms-all">전체 동의</div>
                    <div className="terms-item">서비스 이용약관 (필수)</div>
                    <div className="terms-item">개인정보 처리방침 (필수)</div>
                    <div className="terms-item">마케팅 활용 동의 (선택)</div>
                </div>

                <div className="button-wrapper">
                    <button className="signup-button" onClick={handleSignup}>가입하기</button>
                </div>

                <button className="email-check-button" onClick={handleEmailCheck}>중복확인</button>
                <button className="send-auth-code-button">인증요청</button>
                <button className="verify-auth-code-button">확인</button>

                <div className="signup-header">
                    <div className="signup-title">회원가입</div>
                    <img className="back-button" src="/icons/arrow.png" onClick={handleLogin} />
                </div>
            </div>
        </div>
    );
};

export default Signup;