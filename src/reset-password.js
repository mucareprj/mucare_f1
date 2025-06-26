import React, { useState } from 'react';
import './reset-password.css'; // 스타일은 따로 분리

const Resetpassword = () => {
    return (

        <div className="outer-wrapper">
			<div className="phone-box">
                <div className="header sub_header">
                        <div className="icon_wrap">
                            <a href="#">
                                <img src="/images/arrow_back.svg" className="header_icon"/>
                            </a>
                        </div>
                        <div className="header_title" >
                            비밀번호 변경
                        </div>
				    </div>
                <div className="main_wrap">
                    <div className="input-group">
                        <label>기존 비밀번호</label>
                        <input
                        placeholder={"기존 비밀번호"}
                        />
                    </div>
                    <div className="input-group new_input">
                        <input
                        placeholder={"신규 비밀번호"}
                        />
                    </div>
                    <div className="input-group">
                        <input
                        placeholder={"신규 비밀번호 확인"}
                        />
                    </div>
                    <div className="fixed_wrap">
                        <div className="main_btn_wrap">
                            <button className="main_btn">비밀번호 변경하기</button>
                        </div>
                    </div>
                </div>
			</div>
		</div>
    );
};

export default Resetpassword;