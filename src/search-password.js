import React, { useState } from 'react';
import './search-password.css'; // 스타일은 따로 분리

const Searchpassword = () => {
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
                            비밀번호 찾기
                        </div>
                    </div>
                <div className="main_wrap">
                    <div className="input-group">
                        <label>이메일 주소</label>
                        <input
                        placeholder={"이메일 주소"}
                        />
                    </div>
                    <div className="input-group2 new_input">
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
                    <div className="fixed_wrap">
                        <div className="main_btn_wrap">
                            <button className="main_btn">다음</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Searchpassword;