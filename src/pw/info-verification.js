// 비밀번호 재설정 페이지
// 비밀번호 재설정 페이지
import React, { useEffect, useState } from 'react';
import { getSession } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./info-verification.css";

export const InfoVerification = () => {

	const navigate = useNavigate();
	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	const [email, setEmail] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [isMatched, setIsMatched] = useState(false);

	useEffect(() => {
		setEmail(input1);
		setPhoneNumber(input2);
	}, [input1, input2]);

	useEffect(() => {
		const checkMatch = async () => {
			if (!email || !phoneNumber) return;

			try {
				const res = await fetch(`/users/match?email=${email}&phoneNumber=${phoneNumber}`);
				const matched = await res.json();
				setIsMatched(matched);
			} catch (err) {
				console.error("매칭 확인 실패", err);
				setIsMatched(false);
			}
		};

		checkMatch();
	}, [email, phoneNumber]);

	const handlePwReset = async () => {
		navigate('/reset-password-login', {
			state: { email: input1 }  
		});
	};

	const handleLogin = async () => {
		navigate('/');
	};

	return (
		<div className="info-verification-contain">
			<div className="info-verification-scroll-view">
				<div className="info-verification-row-view">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/18ryxsfu_expires_30_days.png"}
						className="info-verification-image"
						onClick={handleLogin}
					/>
					<span className="info-verification-text" >
						{"비밀번호 찾기"}
					</span>
				</div>
				<input
					placeholder={"이메일 주소"}
					value={input1}
					onChange={(event) => onChangeInput1(event.target.value)}
					className="info-verification-input"
				/>
				<div className="info-verification-row-view2">
					<input
						placeholder={"휴대전화 번호"}
						value={input2}
						onChange={(event) => onChangeInput2(event.target.value)}
						className="info-verification-input2"
					/>
					<div className="info-verification-view">
						<span className="info-verification-text2" >
							{"인증요청"}
						</span>
					</div>
				</div>
				<div className="info-verification-row-view3">
					<input
						placeholder={"인증 번호"}
						value={input3}
						onChange={(event) => onChangeInput3(event.target.value)}
						className="info-verification-input2"
					/>
					<div className="info-verification-view2">
						<span className="info-verification-text2" >
							{"확인"}
						</span>
					</div>
				</div>
				<button
					className="info-verification-button"
					onClick={handlePwReset}
					disabled={!isMatched}
				>
					<span className="info-verification-text3">다음</span>
				</button>
			</div>
		</div>
	)
};

export default InfoVerification;