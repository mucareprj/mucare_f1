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
    const [nickname, onChangeNickname] = useState('');
    const [name, onChangeName] = useState('');
    const [birthTime, onChangeBirthTime] = useState('');
    const [selectedGender, setSelectedGender] = useState(null);
    const [selectedBloodType, setSelectedBloodType] = useState(null);
    const [birthDate, setBirthDate] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [profileImage, setProfileImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const backendUrl = "http://localhost:8080";


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
                setProfileImage(profileData.profileImage);
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
        console.log('submit nickname:', nickname);
        console.log('submit name:', name);
        if (!nickname || !name || !selectedGender || !birthDate || !birthTime || !selectedBloodType) {
            alert("모든 필드를 입력해주세요.");
            return;
        }

        try {
            let uploadedImagePath = profileImage; // 기존 이미지 경로
            if (selectedFile) {
                const formData = new FormData();
                formData.append("image", selectedFile);
                formData.append("userId", user);
                formData.append("nickname", nickname);
                formData.append("name", name);
                formData.append("gender", selectedGender);
                formData.append("birthDate", birthDate);
                formData.append("birthTime", birthTime);
                formData.append("bloodType", selectedBloodType);
                formData.append("email", email);
                const uploadResponse = await axios.post(`/myprofile/upload-image/${user}`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });

                if (uploadResponse.data.imagePath) {
                    uploadedImagePath = uploadResponse.data.imagePath;  // 업로드된 이미지 경로를 변수에 저장
                    setProfileImage(uploadResponse.data.imagePath);    // 상태 업데이트
                }
            }

            // 프로필 저장시 profileImage 상태 사용
            const payload = {
                userId: user,
                nickname,
                name,
                gender: selectedGender,
                birthDate,
                birthTime,
                bloodType: selectedBloodType,
                email,
                profileImage: uploadedImagePath
            };

            const response = await axios.post('/myprofile/save', payload);

            if (response.status === 200) {
                alert('프로필이 성공적으로 저장되었습니다!');
                navigate('/mypage');
            }
        } catch (error) {
            console.error('프로필 저장 실패:', error);
            alert('프로필 저장에 실패했습니다.');
        }
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedFile(file);

            // 미리보기용 URL 생성
            const previewUrl = URL.createObjectURL(file);
            setPreviewUrl(previewUrl);

            console.log('nickname after image change:', nickname);
            console.log('name after image change:', name);
        }
    };
    return (
        <div className="outer-wrapper">
            <div className="phone-box">
                <div className="header sub_header">
                    <div className="icon_wrap">
                        <img
                            src={"https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/0e5hdukh_expires_30_days.png"}
                            className="image"
                            onClick={goToBack}
                        />
                        <span className="text" >
                            {"프로필 설정"}
                        </span>
                    </div>
                </div>
                <div className="main_wrap">
                    <div className="view5">
                        <label htmlFor="profileImageInput">
                            <img
                                src={previewUrl
                                    ? previewUrl
                                    : profileImage
                                        ? `${backendUrl}${profileImage}`
                                        : "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/ogxOfO8bMe/ieloammb_expires_30_days.png"
                                }
                                className="image2"
                                alt="프로필 이미지"
                                style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input
                            type="file"
                            id="profileImageInput"
                            style={{ display: "none" }}
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                    </div>
                    <input
                        placeholder={"닉네임"}
                        value={nickname}
                        onChange={(event) => onChangeNickname(event.target.value)}
                        className="input5"
                    />
                    <input
                        placeholder={"이름"}
                        value={name}
                        onChange={(event) => onChangeName(event.target.value)}
                        className="input5"
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
                        className="input5"
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
                </div>
                <div className="fixed_wrap">
                    <div className="main_btn_wrap">
                        <button className="button2"
                            onClick={handleProfileSubmit} >
                            <span className="text4" >
                                {"확인"}
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Myprofile;