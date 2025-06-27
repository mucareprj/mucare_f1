import React, { useEffect, useState } from 'react';
import { getSession, logout } from '../api/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./mypage.css";


export const Mypage = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [loginMethod, setLoginMethod] = useState(null);
    const [profileImage, setProfileImage] = useState(null);

    useEffect(() => {
        // 세션 상태 확인
        const checkSession = async () => {
            const data = await getSession();
            if (data.loggedIn) {
                setUser(data.userId);
                setLoginMethod(data.loginMethod);
                console.log('세션 데이터:', data);


                loadProfile(data.userId);
            } else {
                alert('로그인이 필요합니다.');
                navigate('/');
            }
        };

        checkSession();
    }, [navigate]);

    const loadProfile = async (userId) => {
        try {
            const response = await axios.get(`/myprofile/load/${userId}`);
            if (response.status === 200) {
                const profileData = response.data;

                setEmail(profileData.email);

                // nickname이 있으면 그대로, 없으면 기본 문구로 설정
                const nicknameToDisplay = profileData.nickname ? profileData.nickname : "닉네임을 설정하세요.";
                setNickname(nicknameToDisplay);

                setProfileImage(profileData.profileImage);
            }
        } catch (error) {
            console.error('Error loading profile:', error);
            alert('프로필 정보를 불러오는 데 실패했습니다.');
        }
    };

    const handleMyprofile = async () => {
        navigate('/myprofile');
    };

    const goToBack = async () => {
        navigate('/Main');
    };

    const handleLogout = async (method) => {
        await logout(method);
        navigate('/');
    };

        const handleResetPw = async () => {
        navigate('/reset-password-mypage');
    };

    return (
        <div className="contain1">
            <div className="scroll-view1">
                <div className="row-view1">
                    <img
                        src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/mbfvn80z_expires_30_days.png"
                        className="image1"
                        onClick={goToBack}
                    />
                    <span className="text1">{"내 정보 관리"}</span>
                </div>

                <div className="row-view2">
                    <img
                        src={profileImage ? `http://localhost:8080${profileImage}` : "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/ieloammb_expires_30_days.png"}
                        className="image2"
                    />
                    <div className="column1">
                        <span className="text2">{nickname}</span>
                        <span className="text3">{email}</span>
                    </div>
                </div>

                <div className="column2">
                    <span className="text4" onClick={handleMyprofile} >{"내 프로필"}</span>
                    <div className="box1"></div>
                    <span className="text5">{"내 활동 관리"}</span>
                    <div className="box1"></div>
                    <span className="text6">{"내 포인트 관리"}</span>
                </div>

                <input
                    placeholder="비밀번호 변경"
                    // value={input1}
                    // onChange={(event) => onChangeInput1(event.target.value)}
                    className="input1"
                    onClick={handleResetPw}
                />

                <button className="button1" onClick={handleLogout}>
                    <span className="text7">{"로그아웃"}</span>
                </button>
            </div>
        </div>
    );
};

export default Mypage;