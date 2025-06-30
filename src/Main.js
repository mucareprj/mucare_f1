import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getSession, logout } from './api/auth';
import GoogleCallback from './callback/GoogleCallback';
import './Main.css'; // 
import Mypage from './mypage/mypage';

const Main = () => {
	const [user, setUser] = useState(null);
	const [loginMethod, setLoginMethod] = useState(null);
	const navigate = useNavigate();
	const [isOpen, setIsOpen] = useState(false);
	useEffect(() => {
		// 세션 상태 확인
		const checkSession = async () => {
			const data = await getSession();
			if (data.loggedIn) {
				setUser(data.userId);
				setLoginMethod(data.loginMethod);
				console.log('세션 데이터:', data);
			} else {
				alert('로그인이 필요합니다.');
				navigate('/');
			}
		};

		checkSession();
	}, [navigate, setUser]);

	const toggleDropdown = () => {
		setIsOpen((prev) => !prev);
	};

	const handleLogout = async (method) => {
		await logout(method);
		navigate('/');
	};

	const handleMypage = () => {
		navigate('/mypage');
	};

	return (


		// 								<div style={{ padding: '40px' }}>
		//   <h1>메인 페이지</h1>
		//   {user && (
		//     <div>
		//       <p><strong>{user}</strong>님, 환영합니다!</p>
		//       <p>로그인 방식: <strong>{loginMethod}</strong></p>
		//       <button onClick={() => handleLogout(loginMethod)}>로그아웃</button>
		//     </div>
		//   )}
		// </div>
		<div className="contain">

			<div className="scroll-view">
				<div className="row-view"
					style={{
						backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/unhjofkk_expires_30_days.png)',
					}}
				>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/ktv6gdt1_expires_30_days.png"}
						className="image"
					/>
					<span className="text" >
						{"마음위로"}
					</span>
					<div className="view"
						style={{
							backgroundImage: 'url(https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/46if76m0_expires_30_days.png)',
						}}
					>
						<div className="view2">
							<span className="text2" >
								{"kor"}
							</span>
						</div>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/r5gk070w_expires_30_days.png"}
						className="image2"
					/>

				</div>
				<div className="box">
				</div>
				<div className="row-view2">
					<span className="text3" >
						{"라운지"}
					</span>
					<span className="text4" >
						{"프라이빗"}
					</span>
					<span className="text5" >
						{"오늘하루"}
					</span>
					<span className="text6" >
						{"마음알기"}
					</span>
					<span className="text7" >
						{"마음치료"}
					</span>
				</div>
				<div className="box2">
				</div>
				<div className="row-view3">

					<span className="text8" >
						{"오늘 내 마음"}
					</span>
					<span className="text9" >
						{"글작성"}
					</span>

					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/9rb4ui6s_expires_30_days.png"}
						className="image4"
					/>
					<div className="dropdownContainer">
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/4nzuoqmz_expires_30_days.png"}
							className="image3"
							onClick={toggleDropdown}
						/>
						{isOpen && (
							<div className="dropdownMenu">
								<div className="menuItem" onClick={handleMypage}>내 정보</div>
								<div className="menuItem" onClick={handleLogout}>로그아웃</div>
							</div>
						)}
					</div>
				</div>
				<span className="text10" >
					{"(시간) 날씨가 너무 좋은 아침!!"}
				</span>
				<span className="text11" >
					{"(시간) 오늘 대리한테 혼났다 ㅠㅜ"}
				</span>
				<div className="row-view4">
					<span className="text12" >
						{"(프사) (시간) 저도요. 그래도 힘내요"}
					</span>
					<span className="text13" >
						{"감사"}
					</span>
				</div>
				<div className="row-view5">
					<span className="text14" >
						{"(프사) (시간) 연락처 알려주세요"}
					</span>
					<span className="text13" >
						{"차단"}
					</span>
				</div>
				<div className="row-view6">
					<span className="text8" >
						{"오늘 할 일"}
					</span>
					<span className="text9" >
						{"글작성"}
					</span>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/p4bj8anw_expires_30_days.png"}
						className="image4"
					/>
				</div>
				<div className="row-view7">
					<span className="text15" >
						{"사무실 10분 일찍 도착하기\n\n점심 한 숟가락 덜 먹기\n\n점심에 산책 30분 하기\n\n영어단어 20개 외우기\n\n영양제 챙겨먹기               13:30   알람"}
					</span>
					<div className="column">
						<span className="text16" >
							{"완료"}
						</span>
						<span className="text17" >
							{"완료"}
						</span>
						<span className="text13" >
							{"완료"}
						</span>
					</div>
				</div>
				<span className="text18" >
					{"라운지"}
				</span>
				<div className="row-view8">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/ag5445gn_expires_30_days.png"}
						className="image5"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/aijq8he7_expires_30_days.png"}
						className="image5"
					/>
				</div>
				<div className="row-view9">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/8ha0hgr0_expires_30_days.png"}
						className="image6"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/seo998lx_expires_30_days.png"}
						className="image7"
					/>
				</div>
				<div className="row-view10">
					<span className="text19" >
						{"마음공유   123명"}
					</span>
					<span className="text20" >
						{"마음공유   123명"}
					</span>
				</div>
				<div className="row-view11">
					<span className="text21" >
						{"치유력       100%"}
					</span>
					<span className="text20" >
						{"치유력       100%"}
					</span>
				</div>
				<div className="row-view8">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/zqd29i7u_expires_30_days.png"}
						className="image5"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/xhjdbdbc_expires_30_days.png"}
						className="image5"
					/>
				</div>
				<div className="row-view9">
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/m6i5octt_expires_30_days.png"}
						className="image6"
					/>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/cyx1lgyv_expires_30_days.png"}
						className="image7"
					/>
				</div>
				<div className="row-view10">
					<span className="text19" >
						{"마음공유   123명"}
					</span>
					<span className="text20" >
						{"마음공유   123명"}
					</span>
				</div>
				<div className="row-view12">
					<span className="text21" >
						{"치유력       100%"}
					</span>
					<span className="text20" >
						{"치유력       100%"}
					</span>
				</div>
				<div className="column2">
					<div className="row-view13">
						<span className="text8" >
							{"소소한 이야기"}
						</span>
						<img
							src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/3xemqbes_expires_30_days.png"}
							className="image8"
						/>
					</div>
					<img
						src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/ekmnl9t9_expires_30_days.png"}
						className="image9"
					/>
				</div>
				<img
					src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/m9s5ck76_expires_30_days.png"}
					className="image10"
				/>
			</div>
		</div>

	);
};

export default Main;