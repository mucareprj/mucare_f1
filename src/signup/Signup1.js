import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import './Signup1.css';
import ServiceModal from '../terms/ServiceModal';

const Signup = () => {

    const [isServiceOpen, setIsServiceOpen] = useState(false);

    const openServiceModal = () => setIsServiceOpen(true);
    const closeServiceModal = () => setIsServiceOpen(false);


    const agreeService = () => {
        setTerms(prev => ({ ...prev, service: true }));
        closeServiceModal();
    };


    const navigate = useNavigate();
    const location = useLocation();


    const [email, setEmail] = useState(location.state?.email || '');
    const [password, setPassword] = useState(location.state?.password || '');
    const [passwordConfirm, setPasswordConfirm] = useState(location.state?.passwordConfirm || '');
    const [phone, setPhone] = useState(location.state?.phone || '');
    const [authCode, setAuthCode] = useState(location.state?.authCode || '');

    const [passwordMatch, setPasswordMatch] = useState(null);
    const [showHangulAlert, setShowHangulAlert] = useState(false);
    const [showSpecialCharAlert, setShowSpecialCharAlert] = useState(false);

    const [emailCheckResult, setEmailCheckResult] = useState(
        location.state?.emailCheckResult ?? null
    );

    const [terms, setTerms] = useState(() => ({
        service: location.state?.terms?.service || location.state?.agreeService || false,
        privacy: location.state?.terms?.privacy || false,
        marketing: location.state?.terms?.marketing || false,
    }));


    const isAllChecked = terms.service && terms.privacy && terms.marketing;

    const toggleAllTerms = () => {
        const newValue = !isAllChecked;
        setTerms({
            service: newValue,
            privacy: newValue,
            marketing: newValue,
        });
    };

    const toggleService = () => {
        setTerms({...terms, service: !terms.service});
    };

    const togglePrivacy = () => {
        setTerms({...terms, privacy: !terms.privacy});
    };

    const toggleMarketing =() => {
        setTerms({...terms, marketing: !terms.marketing});
    };


    const isValidEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

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

        if (!isValidEmail(email)) {
            alert('유효한 이메일 형식이 아닙니다.');
            return;
        }

        if (emailCheckResult !== true) {
            alert('이메일 중복 확인을 완료해주세요.');
            return;
        }

        if (password !== passwordConfirm) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }
        if (!terms.service || !terms.privacy) {
            alert('필수 약관에 모두 동의해야 합니다.');
            return;
        }

        try {
            await axios.post('/users/signup', {
                email,
                password,
                agreeService: terms.service ? 1 : 0,
                agreePrivacy: terms.privacy ? 1 : 0,
                agreeMarketing: terms.marketing ? 1 : 0,
            });

            alert('회원가입이 완료되었습니다.');
            navigate('/');
        } catch (error) {
            alert('회원가입 실패, 다시 시도해주세요.');
            console.error(error);
        }
    };

    const goToLogin = () => navigate('/');


    return (
		<div className="outer-wrapper">
            {isServiceOpen && (
                <ServiceModal onAgree={agreeService} onClose={closeServiceModal} />
            )}

			<div className="phone-box background2">
				<div className="header sub_header">
					<div className="icon_wrap">
						<a onClick={goToLogin}>
							<img src="/images/arrow_back.svg" className="header_icon" />
						</a>
					</div>
					<div className="header_title" >
						회원가입
					</div>
				</div>
				<div className="main_wrap">
					<div className="input-group2">
						<input
							placeholder={"이메일 주소"}
							value={email}
							onChange={handleEmailChange}
						/>
						<button className="inner_btn" onClick={handleEmailCheck}>중복확인</button>
					</div>
					<div className="input-group">
						<label>비밀번호</label>
						<input
							type='password'
							placeholder={"비밀번호"}
							value={password}
							onChange={(e) => {
								setPassword(e.target.value);
								checkPasswordMatch(e.target.value, passwordConfirm)
							}}
						/>
					</div>
					<div className="input-group">
						<label>비밀번호 확인</label>
						<input
							type='password'
							placeholder={"비밀번호 확인"}
							value={passwordConfirm}
							onChange={(e) => {
								setPasswordConfirm(e.target.value);
								checkPasswordMatch(password, e.target.value);
							}}
						/>
					</div>

					{passwordMatch === false && <p style={{ color: 'red', fontSize: '0.7rem' }}>비밀번호가 일치하지 않습니다.</p>}
					{passwordMatch === true && <p style={{ color: 'green', fontSize: '0.7rem' }}>비밀번호가 일치합니다.</p>}

					<div className="input-group2 new_input2">
						<input
							placeholder={"휴대전화 번호"}
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
						/>
						<button className="inner_btn">인증요청</button>
					</div>
					<div className="input-group2">
						<input
							placeholder={"인증번호"}
							value={authCode}
							onChange={(e) => setAuthCode(e.target.value)}
						/>
						<button className="inner_btn">확인</button>
					</div>
					<div className="list_box new_input2">
						<div className="list_box_title">약관 동의</div>
						<div className="all_agree_wrap">
							<input
								type='checkbox'
								id='allAgree'
								checked={isAllChecked}
								onChange={toggleAllTerms}
							/>
							<label htmlFor='allAgree'>전체 동의</label>
						</div>
						<div className="agree_wrap">
							<input
								type='checkbox'
								id='subAgree1'
								className="agree_input"
								checked={terms.service}
								onChange={toggleService}
							/>
							<label htmlFor='subAgree1'>서비스 이용약관 <span>(필수)</span></label>
							<div className="view_btn">
								<a onClick={openServiceModal}>보기</a>
							</div>
						</div>
						<div className="agree_wrap">
							<input
								type='checkbox'
								id='subAgree2'
								className="agree_input"
								checked={terms.privacy}
								onChange={togglePrivacy}
							/>
							<label htmlFor='subAgree2'>개인정보 처리방침 <span>(필수)</span></label>
							<div className="view_btn">
								<a >보기</a>
							</div>
						</div>
						<div className="agree_wrap">
							<input
								type='checkbox'
								id='subAgree3'
								className="agree_input"
								checked={terms.marketing}
								onChange={toggleMarketing}
							/>
							<label htmlFor='subAgree3'>마케팅 활용 동의 (선택)</label>
							<div className="view_btn">
								<a >보기</a>
							</div>
						</div>
					</div>
					<div className="fixed_wrap">
						<div className="main_btn_wrap">
							<button className="main_btn" onClick={handleSignup} >가입하기</button>
						</div>
					</div>
				</div>
			</div>
		</div>
    );
};

export default Signup;
