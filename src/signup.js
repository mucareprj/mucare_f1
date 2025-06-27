import React, { useState } from 'react';
import './signup.css'; // 스타일은 따로 분리

const Signup = () => {
    return (

        <div className="outer-wrapper">
            <div className="phone-box background2">
                <div className="header sub_header">
                        <div className="icon_wrap">
                            <a href="#">
                                <img src="/images/arrow_back.svg" className="header_icon"/>
                            </a>
                        </div>
                        <div className="header_title" >
                            회원가입
                        </div>
                    </div>
                <div className="main_wrap">
                    <div className="input-group2">
                        <input
                        placeholder={"이메일 주소"}
                        />
                        <button className="inner_btn">중복확인</button>
                    </div>
                    <div className="input-group">
                        <label>비밀번호</label>
                        <input
                        placeholder={"비밀번호"}
                        />
                    </div>
                    <div className="input-group">
                        <label>비밀번호 확인</label>
                        <input
                        placeholder={"비밀번호 확인"}
                        />
                    </div>
                    <div className="input-group2 new_input2">
                        <input
                        placeholder={"휴대전화 번호"}
                        />
                        <button className="inner_btn">인증요청</button>
                    </div>
                    <div className="input-group2">
                        <input
                        placeholder={"인증번호"}
                        />
                        <button className="inner_btn">확인</button>
                    </div>
                    <div className="list_box new_input2">
                        <div className="list_box_title">약관 동의</div>
                        <div className="all_agree_wrap">
                            <input type='checkbox' id='allAgree'></input>
                            <label for='allAgree'>전체 동의</label>
                        </div>
                        <div className="agree_wrap">
                            <input type='checkbox' id='subAgree1' className="agree_input"></input>
                            <label for='subAgree1'>서비스 이용약관 <span>(필수)</span></label>
                            <div className="view_btn">
                                <a href='#'>보기</a>
                            </div>
                        </div>
                        <div className="agree_wrap">
                            <input type='checkbox' id='subAgree2' className="agree_input"></input>
                            <label for='subAgree2'>개인정보 처리방침 <span>(필수)</span></label>
                            <div className="view_btn">
                                <a href='#'>보기</a>
                            </div>
                        </div>
                        <div className="agree_wrap">
                            <input type='checkbox' id='subAgree3' className="agree_input"></input>
                            <label for='subAgree3'>마케팅 활용 동의 (선택)</label>
                            <div className="view_btn">
                                <a href='#'>보기</a>
                            </div>
                        </div>
                    </div>
                    <div className="fixed_wrap">
                        <div className="main_btn_wrap">
                            <button className="main_btn">가입하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;