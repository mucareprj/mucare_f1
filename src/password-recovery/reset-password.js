// 비밀번호 재설정 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./reset-password.css";

export const Resetpassword = () => {

    const navigate = useNavigate();

      const goToBack = async (method) => {
    navigate('/info-verification');
  };
    const [input1, onChangeInput1] = useState('');
	const [input2, onChangeInput2] = useState('');
	return (
		<div className="contain">
			<div className="scroll-view">
				<div className="row-view">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/0h8fi8wl_expires_30_days.png"} 
						className="image"
                        onClick={goToBack}
					/>
					<span className="text" >
						{"비밀번호 재설정"}
					</span>
				</div>
				<input
					placeholder={"새 비밀번호"}
					value={input1}
					onChange={(event)=>onChangeInput1(event.target.value)}
					className="input"
				/>
				<input
					placeholder={"신규 비밀번호 확인"}
					value={input2}
					onChange={(event)=>onChangeInput2(event.target.value)}
					className="input2"
				/>
				<button className="button"
					onClick={()=>alert("Pressed!")}>
					<span className="text2" >
						{"비밀번호 재설정하기"}
					</span>
				</button>
			</div>
		</div>
	)
};

export default Resetpassword;