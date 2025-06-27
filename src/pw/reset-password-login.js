// 비밀번호 재설정 페이지
import React, { useEffect, useState } from 'react';
import { getSession } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import "./reset-password.css";

export const Resetpassword_Login = () => {

	const navigate = useNavigate();
	const [user, setUser] = useState(null);
	const [loginMethod, setLoginMethod] = useState(null);
	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const location = useLocation();
	const email = location.state?.email; 
	
	console.log(email);
	const goToBack = async (method) => {
		navigate('/info-verification');
	};

	const handlePasswordChange = async () => {
		if (!newPassword || !confirmPassword) {
			alert("모든 필드를 입력해주세요.");
			return;
		}
		if (newPassword !== confirmPassword) {
			alert("신규 비밀번호가 일치하지 않습니다.");
			return;
		}

		try {
			const response = await axios.post("/api/password/reset", {
				email, 
				newPassword
			});
			alert("비밀번호가 변경되었습니다.");
			navigate("/");
		} catch (error) {
			alert(error.response?.data?.message || "오류가 발생했습니다.");
		}
	};
	return (
		<div className="outer-wrapper">
			<div className="phone-box">
				<div className="header sub_header">
					<div className="icon_wrap">
						<a href="#">
							<img src="/images/arrow_back.svg" className="header_icon" onClick={goToBack} />

						</a>
					</div>
					<div className="header_title" >
						비밀번호 변경
					</div>
				</div>
				<div className="main_wrap">
					<div className="input-group">
					</div>
					<div className="input-group new_input">
						<input
							placeholder="신규 비밀번호" type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)}
						/>
					</div>
					<div className="input-group">
						<input
							placeholder="신규 비밀번호 확인" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}
						/>
					</div>
					<div className="fixed_wrap">
						<div className="main_btn_wrap">
							<button className="main_btn" onClick={handlePasswordChange}>비밀번호 변경하기</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Resetpassword_Login;