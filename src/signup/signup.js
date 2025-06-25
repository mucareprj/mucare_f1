import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./signup.css";

const Signup = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [passwordConfirm, setPasswordConfirm] = useState('');
	const [phone, setPhone] = useState('');
	const [authCode, setAuthCode] = useState('');

	const [passwordMatch, setPasswordMatch] = useState(null);
	const [showHangulAlert, setShowHangulAlert] = useState(false);
	const [showSpecialCharAlert, setShowSpecialCharAlert] = useState(false);
	const [emailCheckResult, setEmailCheckResult] = useState(null);

	const [allChecked, setAllChecked] = useState(false);
	const [terms, setTerms] = useState({
		service: location.state?.agreeService || false,
		privacy: false,
		marketing: false,
	});

	const handleAllCheck = () => {
		const newChecked = !allChecked;
		setAllChecked(newChecked);
		setTerms({
			service: newChecked,
			privacy: newChecked,
			marketing: newChecked,
		});
	};

	const handleSingleCheck = (key) => {
		const updatedTerms = {
			...terms,
			[key]: !terms[key],
		};
		setTerms(updatedTerms);
		setAllChecked(Object.values(updatedTerms).every((v) => v));
	};

	const isValidEmail = (email) => {
		const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
		return regex.test(email);
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
		if (!email) return alert('이메일을 입력해주세요.');
		if (!isValidEmail(email)) return alert('유효한 이메일 형식이 아닙니다.');

		const isDuplicate = await checkEmail(email);
		setEmailCheckResult(!isDuplicate);
		alert(isDuplicate ? '이미 사용 중인 이메일입니다.' : '사용 가능한 이메일입니다.');
	};

	const handleEmailChange = (e) => {
		const input = e.target.value;
		const hasHangul = /[ㄱ-ㅎㅏ-ㅣ가-힣]/.test(input);
		const hasInvalidSpecialChar = /[^\w@.]/.test(input);

		if (hasHangul && !showHangulAlert) {
			alert("이메일에는 한글을 입력할 수 없습니다.");
			setShowHangulAlert(true);
		} else if (!hasHangul && hasInvalidSpecialChar && !showSpecialCharAlert) {
			alert("이메일에는 '@', '.'를 제외한 특수문자를 입력할 수 없습니다.");
			setShowSpecialCharAlert(true);
		}

		const filtered = input.replace(/[^a-zA-Z0-9@.]/g, '');
		setEmail(filtered);

		if (!hasHangul && showHangulAlert) setShowHangulAlert(false);
		if (!hasInvalidSpecialChar && showSpecialCharAlert) setShowSpecialCharAlert(false);
	};

	const checkPasswordMatch = (pw, pwConfirm) => {
		if (!pwConfirm) setPasswordMatch(null);
		else setPasswordMatch(pw === pwConfirm);
	};

	const handleSignup = async () => {
		if (!email.trim() || !password || !passwordConfirm) {
			alert('모든 입력란을 채워주세요.');
			return;
		}
		if (password !== passwordConfirm) {
			alert('비밀번호가 일치하지 않습니다.');
			return;
		}

        if(!terms.service || !terms.privacy) {
            alert('필수 약관에 모두 동의해야 합니다.');
            return;
        }


		try {
			await axios.post('/users/signup', {
                email, password,
                agreeService : terms.service ? 1: 0,
                agreePrivacy: terms.privacy ? 1: 0,
                agreeMarketing: terms.marketing ? 1: 0,
             });
             
			alert('회원가입이 완료되었습니다.');
			navigate('/');
		} catch (error) {
			alert('회원가입 실패, 다시 시도해주세요.');
			console.error(error);
		}
	};



	const goToLogin = () => navigate('/');
	const goToTerms = () => navigate('/terms');

	return (
		<div className="join-container">
			<div className="join-scroll-area">
				<div className="join-header">
					<img 
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/v4do9gqc_expires_30_days.png" 
						className="join-header-icon"
						onClick={goToLogin}
					/>
					<span className="join-header-title">회원가입</span>
					<div className="join-header-empty-box"></div>
				</div>

				<div className="join-input-block">
					<input placeholder="이메일 주소" value={email} onChange={handleEmailChange} className="join-input" />
					<div className="join-button-small" onClick={handleEmailCheck}><span className="join-button-text">중복확인</span></div>
				</div>

				<input type='password' placeholder="비밀번호" value={password} onChange={(e) => { setPassword(e.target.value); checkPasswordMatch(e.target.value, passwordConfirm); }} className="join-input-password" />
				<input type='password' placeholder="비밀번호 확인" value={passwordConfirm} onChange={(e) => { setPasswordConfirm(e.target.value); checkPasswordMatch(password, e.target.value); }} className="join-input-password" />
				{passwordMatch === false && <p style={{ color: 'red', fontSize: '0.7rem' }}>비밀번호가 일치하지 않습니다.</p>}
				{passwordMatch === true && <p style={{ color: 'green', fontSize: '0.7rem' }}>비밀번호가 일치합니다.</p>}

				<div className="join-input-block">
					<input placeholder="휴대전화 번호" value={phone} onChange={(e) => setPhone(e.target.value)} className="join-input" />
					<div className="join-button-small"><span className="join-button-text">인증요청</span></div>
				</div>

				<div className="join-input-block join-auth-code-block">
					<input placeholder="인증 번호" value={authCode} onChange={(e) => setAuthCode(e.target.value)} className="join-input" />
					<div className="join-button-small confirm"><span className="join-button-text">확인</span></div>
				</div>

				<div className="join-terms-section">
					<span className="join-terms-title">약관 동의</span>

					
					<div className="terms-all" onClick={handleAllCheck}>
                        <img
                            src={
                            allChecked
                                ? "/images/check_circle.png"
                                : "/images/check_circle_light.png"
                            }
                            className="terms-all-icon"
                            alt="전체 동의 체크"
                        />
						<span className="terms-label-bold">전체 동의</span>
					</div>

					
					<div className="terms-item">
                        <img
                            src={terms.service ? "/images/check.png" : "/images/check_light.png"}
                            className="terms-check-icon"
                            alt="체크"
                            onClick={() => handleSingleCheck('service')}
                        />
						<div className="terms-label-group">
							<span className="terms-label">서비스 이용약관</span>
							<span className="terms-option-type">(필수)</span>
						</div>
						<span className="terms-view-link" onClick={goToTerms}>보기</span>
					</div>

					
					<div className="terms-item">
                        <img
                            src={terms.privacy ? "/images/check.png" : "/images/check_light.png"}
                            className="terms-check-icon"
                            alt="체크"
                            onClick={() => handleSingleCheck('privacy')}
                        />
						<div className="terms-label-group">
							<span className="terms-label">개인정보 처리방침</span>
							<span className="terms-option-type">(필수)</span>
						</div>
						<span className="terms-view-link">보기</span>
					</div>

					
					<div className="terms-item">
                        <img
                            src={terms.marketing ? "/images/check.png" : "/images/check_light.png"}
                            className="terms-check-icon"
                            alt="체크"
                            onClick={() => handleSingleCheck('marketing')}
                        />                        
						<div className="terms-label-group">
							<span className="terms-label">마케팅 활용 동의</span>
							<span className="terms-option-type">(선택)</span>
						</div>
						<span className="terms-view-link">보기</span>
					</div>
				</div>

				<button className="join-submit-button" onClick={handleSignup}>
					<span className="join-submit-text">가입하기</span>
				</button>
			</div>
		</div>
	);
};

export default Signup;