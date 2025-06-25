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

    return (
        <div className="wrapper">
<div class="_1">
  <div class="rectangle-1"></div>
  <div class="div">이메일 주소</div>
  <div class="rectangle-11"></div>
  <div class="rectangle-13"></div>
  <div class="div2">휴대전화 번호</div>
  <div class="div3">인증 번호</div>
  <div class="rectangle-3"></div>
  <div class="div4" >다음</div>
  <div class="div5">비밀번호 찾기</div>
  <div class="rectangle-12"></div>
  <div class="rectangle-14"></div>
  <div class="div6">인증요청</div>
  <div class="div7" onClick={handlePwReset}>확인</div>
  <img class="icon-arrow-back-ios"  />
</div>

        </div>
    );
};

export default InfoVerification;