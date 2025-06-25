import React, { useEffect, useState } from 'react';
import { getSession, logout } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./myprofile.css";


export const Myprofile = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loginMethod, setLoginMethod] = useState(null);
    const [email, setEmail] = useState(''); 
    useEffect(() => {
        // 세션 상태 확인
        const checkSession = async () => {
            const data = await getSession();
            if (data.loggedIn) {
                setUser(data.userId);
                setLoginMethod(data.loginMethod);
                setEmail(data.email);
                console.log('세션 데이터:', data);

                loadProfile(data.userId);  // userId를 인자로 전달
            } else {
                alert('로그인이 필요합니다.');
                navigate('/');
            }
        };

        checkSession();
    }, [navigate]);

    const [nickname, onChangeNickname] = useState('');
    const [name, onChangeName] = useState('');
    const [birthTime, onChangeBirthTime] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedBloodType, setSelectedBloodType] = useState(null);
    const [birthDate, setBirthDate] = useState('');


    const goToBack = async () => {
        navigate('/mypage');
    };

    const loadProfile = async (userId) => {
        try {
            const response = await axios.get(`/myprofile/load/${userId}`);
            if (response.status === 200) {
                const profileData = response.data;
                onChangeNickname(profileData.nickname);
                onChangeName(profileData.name);
                setSelectedGender(profileData.gender);
                setBirthDate(profileData.birthDate);
                onChangeBirthTime(profileData.birthTime);
                setSelectedBloodType(profileData.bloodType);
            }
        } catch (error) {
            console.error('Error loading profile:', error);
            alert('프로필 정보를 불러오는 데 실패했습니다.');
        }
    };

    const handleGenderClick = (gender) => {
        const genderValue = gender === 'male' ? 'M' : gender === 'female' ? 'F' : 'Other';
        setSelectedGender(genderValue === selectedGender ? null : genderValue);
    };

    const handleBloodTypeClick = (bloodType) => {
        setSelectedBloodType(bloodType === selectedBloodType ? null : bloodType);
    };

    const handleBirthDateChange = (e) => setBirthDate(e.target.value);

    const handleProfileSubmit = async () => {
        if (!nickname || !name || !selectedGender || !birthDate || !birthTime || !selectedBloodType) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        const payload = {
            userId: user,
            nickname,
            name,
            gender: selectedGender,
            birthDate,
            birthTime,
            bloodType: selectedBloodType,
            email: email
        };

        try {
            const response = await axios.post('/myprofile/save', payload);
            if (response.status === 200) {
                alert('프로필이 성공적으로 저장되었습니다!');
                navigate('/mypage');
            }
        } catch (error) {
            console.error('Error saving profile:', error);
            alert('프로필 저장에 실패했습니다.');
        }
    };

    return (
        <div className="contain">
            <div className="scroll-view">
                <div className="row-view">
                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/0e5hdukh_expires_30_days.png"}
                        className="image"
                        onClick={goToBack}
                    />
                    <span className="text" >
                        {"프로필 설정"}
                    </span>
                </div>
                <div className="view">
                    <img
                        src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/ieloammb_expires_30_days.png"}
                        className="image2"
                    />
                </div>
                <input
                    placeholder={"닉네임"}
                    value={nickname}
                    onChange={(event) => onChangeNickname(event.target.value)}
                    className="input"
                />
                <input
                    placeholder={"이름"}
                    value={name}
                    onChange={(event) => onChangeName(event.target.value)}
                    className="input"
                />
                <div className="row-view2">
                    <button
                        className={`button ${selectedGender === 'M' ? 'selected' : ''}`}
                        onClick={() => handleGenderClick('male')}
                    >
                        <span className="text2">{"남성"}</span>
                    </button>
                    <button
                        className={`button ${selectedGender === 'F' ? 'selected' : ''}`}
                        onClick={() => handleGenderClick('female')}
                    >
                        <span className="text2">{"여성"}</span>
                    </button>
                </div>
                <input
                    type="date"
                    className="input-date"
                    value={birthDate}
                    onChange={handleBirthDateChange}
                />
                <input
                    type="time"
                    placeholder={"태어난 시"}
                    value={birthTime}
                    onChange={(event) => onChangeBirthTime(event.target.value)}
                    className="input"
                />
                <div className="row-view2">
                    <button
                        className={`button ${selectedBloodType === 'A' ? 'selected' : ''}`}
                        onClick={() => handleBloodTypeClick('A')}
                    >
                        <span className="text2">{"A형"}</span>
                    </button>
                    <button
                        className={`button ${selectedBloodType === 'B' ? 'selected' : ''}`}
                        onClick={() => handleBloodTypeClick('B')}
                    >
                        <span className="text2">{"B형"}</span>
                    </button>
                </div>
                <div className="row-view3">
                    <button
                        className={`button ${selectedBloodType === 'O' ? 'selected' : ''}`}
                        onClick={() => handleBloodTypeClick('O')}
                    >
                        <span className="text2">{"O형"}</span>
                    </button>
                    <button
                        className={`button ${selectedBloodType === 'AB' ? 'selected' : ''}`}
                        onClick={() => handleBloodTypeClick('AB')}
                    >
                        <span className="text2">{"AB형"}</span>
                    </button>
                </div>
                <button className="button2"
                    onClick={handleProfileSubmit} >
                    <span className="text4" >
                        {"확인"}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default Myprofile;