import React, { useState } from 'react';
import './terms.css'; // 스타일은 따로 분리

const Marketing = () => {
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
                            마케팅 활용 동의
                        </div>
                    </div>
                <div className="main_wrap">
                    <div className="ctt_box">
                        <div className="ctt_title">
                            마음위로 서비스 이용약관 동의
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_title2">
                                제1장 총칙
                            </div>
                            <div className="ctt_sub_title">
                                제1조 (목적)
                            </div>
                            <div className="ctt_inner">
                                본 약관은 주식회사 키온INC(이하 "회사")이 운영하는 정서적 위로 및 심리적 치유 플랫폼 마음위로(이하 "서비스")를 이용함에 있어 이용자와 회사 간의 의무, 권리, 책임사항 및 회원의 서비스 이용조건과 절차 등 기본적인 사항을 규정하여 회원의 권익을 보호함을 목적으로 합니다.
                                이용자는 본 이용약관을 자세히 읽은 후 이용약관에 동의하지 않을 경우, 본 이용약관에 동의하거나, 서비스에 등록 또는 액세스하거나 이를 이용하지 말아야 합니다.
                            </div>
                        </div>
                    </div>
                    <div className="fixed_wrap">
                        <div className="main_btn_wrap">
                            <button className="main_btn">동의하기</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Marketing;