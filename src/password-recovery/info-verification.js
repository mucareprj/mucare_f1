// 비밀번호 재설정 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./info-verification.css";

export const InfoVerification = () => {

    const navigate = useNavigate();

    const handlePwReset = async () => {
        navigate('/reset-password');
    };

	const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	const [input3, onChangeInput3] = useState('');
	return (
				<div className="contain">
			<div className="scroll-view">
				<div className="row-view">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/18ryxsfu_expires_30_days.png"} 
						className="image"
					/>
					<span className="text" >
						{"비밀번호 찾기"}
					</span>
				</div>
				<input
					placeholder={"이메일 주소"}
					value={input1}
					onChange={(event)=>onChangeInput1(event.target.value)}
					className="input"
				/>
				<div className="row-view2">
					<input
						placeholder={"휴대전화 번호"}
						value={input2}
						onChange={(event)=>onChangeInput2(event.target.value)}
						className="input2"
					/>
					<div className="view">
						<span className="text2" >
							{"인증요청"}
						</span>
					</div>
				</div>
				<div className="row-view3">
					<input
						placeholder={"인증 번호"}
						value={input3}
						onChange={(event)=>onChangeInput3(event.target.value)}
						className="input2"
					/>
					<div className="view2">
						<span className="text2" >
							{"확인"}
						</span>
					</div>
				</div>
				<button className="button"
					onClick={handlePwReset}>
					<span className="text3" >
						{"다음"}
					</span>
				</button>
			</div>
		</div>
	)
};

export default InfoVerification;