import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "./Join.css";

export default () => {
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [input4, onChangeInput4] = useState('');
	const [input5, onChangeInput5] = useState('');
	
	const navigate = useNavigate();

	
	const [allChecked, setAllChecked] = useState(false);
	const [terms, setTerms] = useState({
		service: false,
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


		const values = Object.values(updatedTerms);
		setAllChecked(values.every((v) => v));
	};

	const goToMain = () => {
		navigate('/Main');
	};

	const goToTerms = () => {
		navigate('/Terms');
	};

	return (
		<div className="join-container">
			<div className="join-scroll-area">
				<div className="join-header">
					<img 
						src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/v4do9gqc_expires_30_days.png" 
						className="join-header-icon"
						onClick={goToMain}
					/>
					<span className="join-header-title">회원가입</span>
					<div className="join-header-empty-box"></div>
				</div>

				<div className="join-input-block">
					<input placeholder="이메일 주소" value={input1} onChange={(e) => onChangeInput1(e.target.value)} className="join-input" />
					<div className="join-button-small"><span className="join-button-text">중복확인</span></div>
				</div>

				<input placeholder="비밀번호" value={input2} onChange={(e) => onChangeInput2(e.target.value)} className="join-input-password" />
				<input placeholder="비밀번호 확인" value={input3} onChange={(e) => onChangeInput3(e.target.value)} className="join-input-password" />

				<div className="join-input-block">
					<input placeholder="휴대전화 번호" value={input4} onChange={(e) => onChangeInput4(e.target.value)} className="join-input" />
					<div className="join-button-small"><span className="join-button-text">인증요청</span></div>
				</div>

				<div className="join-input-block join-auth-code-block">
					<input placeholder="인증 번호" value={input5} onChange={(e) => onChangeInput5(e.target.value)} className="join-input" />
					<div className="join-button-small confirm"><span className="join-button-text">확인</span></div>
				</div>

				
				<div className="join-terms-section">
					<span className="join-terms-title">약관 동의</span>

					
					<div className="terms-all" onClick={handleAllCheck}>
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/xoh1eyya_expires_30_days.png"
							className="terms-all-icon"
							alt="전체 동의 체크"
							style={{ filter: allChecked ? "none" : "grayscale(100%) brightness(60%)" }}
						/>
						<span className="terms-label-bold">전체 동의</span>
					</div>

					
					<div className="terms-item">
						<img
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/teocz3vz_expires_30_days.png"
							className="terms-check-icon"
							alt="체크"
							style={{ filter: terms.service ? "none" : "grayscale(100%) brightness(60%)" }}
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
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/8hfckgo0_expires_30_days.png"
							className="terms-check-icon"
							alt="체크"
							style={{ 
								filter: terms.privacy ? "none" : "grayscale(100%) brightness(60%)" 
							}}
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
							src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/3jfb6gis_expires_30_days.png"
							className="terms-check-icon"
							alt="체크"
							style={{ filter: terms.marketing ? "none" : "grayscale(100%) brightness(60%)" }}
							onClick={() => handleSingleCheck('marketing')}
						/>
						<div className="terms-label-group">
							<span className="terms-label">마케팅 활용 동의</span>
							<span className="terms-option-type">(선택)</span>
						</div>
						<span className="terms-view-link">보기</span>
					</div>
				</div>

				<button className="join-submit-button" onClick={() => alert("Pressed!")}>
					<span className="join-submit-text">가입하기</span>
				</button>
			</div>
		</div>
	);
};
