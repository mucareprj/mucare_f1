// 비밀번호 재설정 페이지
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./reset-password.css";

export const Resetpassword = () => {

    const navigate = useNavigate();

    return (
        <div className="wrapper">
            <div class="_1">
                <div class="rectangle-11"></div>
                <div class="rectangle-13"></div>
                <div class="div">새 비밀번호</div>
                <div class="div2">신규 비밀번호 확인</div>
                <div class="rectangle-3"></div>
                <div class="div3">비밀번호 재설정하기</div>
                <div class="div4">비밀번호 재설정</div>
                <img class="icon-arrow-back-ios" src="/icons/arrow.png" />
            </div>

        </div>
    );
};

export default Resetpassword;