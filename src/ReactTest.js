import React from "react";
import { useNavigate } from 'react-router-dom';
import "./ReactTest.css"

export const ReactTest = () => {
	return (
		<div className="contain">
			<div className="scroll-view">
				<div className="column">
					<div className="row-view">
						<span className="text" >
							{"마음위로 LOGO"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/4ql1stty_expires_30_days.png"} 
							className="image"
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/kwkaj3m6_expires_30_days.png"} 
							className="image2"
						/>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/lrzmwa9d_expires_30_days.png"} 
							className="image3"
						/>
					</div>
					<div className="absolute-row-view">
						<span className="text2" >
							{"커뮤니티"}
						</span>
						<span className="text3" >
							{"감정기록"}
						</span>
						<span className="text3" >
							{"하루하루"}
						</span>
						<span className="text4" >
							{"마음치유"}
						</span>
						<span className="text5" >
							{"나를알기"}
						</span>
					</div>
				</div>
				<div className="row-view2">
					<span className="text6" >
						{"소통해요"}
					</span>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/cnytv15m_expires_30_days.png"} 
						className="image4"
					/>
				</div>
				<span className="text7" >
					{"소통해요 인기 게시물"}
				</span>
				<div className="column2">
					<div className="row-view3">
						<div className="column3">
							<span className="text8" >
								{"뭘 해도 똑같고 변함없잖아"}
							</span>
							<span className="text9" >
								{"지금이란 게 영원히 계속될 것 같아 시간아 흘러가 이런 날 좀 봐 눈물만 차올라"}
							</span>
							<span className="text10" >
								{"닉네임"}
							</span>
						</div>
						<button className="button"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/s0i7phes_expires_30_days.png"} 
								className="image5"
							/>
						</button>
					</div>
					<div className="row-view4">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/e0ezccea_expires_30_days.png"} 
							className="image6"
						/>
						<span className="text11" >
							{"12"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/bdsys104_expires_30_days.png"} 
							className="image7"
						/>
						<span className="text12" >
							{"30"}
						</span>
						<span className="text13" >
							{"1시간 전"}
						</span>
					</div>
				</div>
				<div className="column4">
					<div className="row-view3">
						<div className="column3">
							<span className="text8" >
								{"뭘 해도 똑같고 변함없잖아"}
							</span>
							<span className="text9" >
								{"지금이란 게 영원히 계속될 것 같아 시간아 흘러가 이런 날 좀 봐 눈물만 차올라"}
							</span>
							<span className="text10" >
								{"닉네임"}
							</span>
						</div>
						<button className="button"
							onClick={()=>alert("Pressed!")}>
							<img
								src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/gkewkyhy_expires_30_days.png"} 
								className="image5"
							/>
						</button>
					</div>
					<div className="row-view4">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/nefcyzru_expires_30_days.png"} 
							className="image6"
						/>
						<span className="text11" >
							{"12"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/h7wl3u1f_expires_30_days.png"} 
							className="image7"
						/>
						<span className="text12" >
							{"30"}
						</span>
						<span className="text13" >
							{"1시간 전"}
						</span>
					</div>
				</div>
				<span className="text7" >
					{"소통해요 추천 게시물"}
				</span>
				<div className="column5">
					<div className="row-view5">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/euwy75dt_expires_30_days.png"} 
							className="image8"
						/>
						<span className="text14" >
							{"서영님의 오늘 마음"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/yvdctesh_expires_30_days.png"} 
							className="image9"
						/>
					</div>
					<button className="button2"
						onClick={()=>alert("Pressed!")}>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/iatesi9u_expires_30_days.png"} 
							className="image10"
						/>
					</button>
					<span className="text15" >
						{"뭘 해도 똑같고 변함없잖아 그래도 뭐라도 하긴 하지만 나를 에워싼 아픔이 가실 기미가 안 보이지 지금이란 게 영원히 계속될 것 같아 시간아 흘러가 이런 날 좀 봐 눈물만 차올라"}
					</span>
					<div className="row-view4">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/o8ua97pr_expires_30_days.png"} 
							className="image6"
						/>
						<span className="text11" >
							{"12"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/ojpryuum_expires_30_days.png"} 
							className="image7"
						/>
						<span className="text12" >
							{"20"}
						</span>
						<span className="text13" >
							{"1시간 전"}
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ReactTest;