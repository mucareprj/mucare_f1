import React, { useState } from 'react';
import './terms.css'; // 스타일은 따로 분리

const Terms = () => {
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
                            이용약관
                        </div>
                    </div>
                <div className="main_wrap">
                    <div className="ctt_box">
                        <div className="ctt_title">
                            마음위로 서비스 이용약관 동의
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제1조 (목적)
                            </div>
                            <div className="ctt_inner">
                                본 약관은 주식회사 키온INC(이하 "회사")이 운영하는 정서적 위로 및 심리적 치유 플랫폼 마음위로(이하 "서비스")를 이용함에 있어 이용자와 회사 간의 의무, 권리, 책임사항 및 회원의 서비스 이용조건과 절차 등 기본적인 사항을 규정하여 회원의 권익을 보호함을 목적으로 합니다.
                                이용자는 본 이용약관을 자세히 읽은 후 이용약관에 동의하지 않을 경우, 본 이용약관에 동의하거나, 서비스에 등록 또는 액세스하거나 이를 이용하지 말아야 합니다.
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제2조 (용어의 정의)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>마음위로 서비스(이하 '서비스') : 회사가 제공하는 다음의 모든 서비스를 의미합니다.</li>
                                </ul>
                                <ul className="ctt_inner2">
                                    <li>-</li>
                                    <li>정서적 위로 및 심리적 치유를 위한 콘텐츠 제공 서비스</li>
                                </ul>
                                <ul className="ctt_inner2">
                                    <li>-</li>
                                    <li>감정 기록 및 관리 서비스</li>
                                </ul>
                                <ul className="ctt_inner2">
                                    <li>-</li>
                                    <li>AI 기반 대화형 정서 지원 서비스</li>
                                </ul>
                                <ul className="ctt_inner2">
                                    <li>-</li>
                                    <li>익명 기반 정서적 연결 커뮤니티 서비스</li>
                                </ul>
                                <ul className="ctt_inner2">
                                    <li>-</li>
                                    <li>명상, 루틴 등 셀프케어 콘텐츠 제공 서비스</li>
                                </ul>
                                <ul className="ctt_inner2">
                                    <li>-</li>
                                    <li>기타 회사가 추가 개발하거나 다른 회사 혹은 개인과 제휴 및 계약 등을 통해 제공하는 서비스</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>이용자 : 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 의미합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>이용계약 : 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자 간에 체결하는 계약을 의미합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>마음위로 계정 : 이용자가 서비스를 사용하기 위하여 필요한 이메일 주소 및 아이디·패스워드 기반의 로그인 계정 및 간편 로그인 계정을 의미합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회원 : 본 약관에 동의함으로써 회사와 이용계약을 체결하고 마음위로 계정을 등록한 자로서, 회사가 제공하는 정보와 서비스를 지속적으로 이용할 수 있는 자를 의미합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>6.</li>
                                    <li>비회원 : 회원가입을 하지 않고 '서비스'를 이용하는 사용자를 의미합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>7.</li>
                                    <li>콘텐츠 : 회사가 지식, 정보 등을 전달하기 위하여 만든 부호 · 문자 · 도형 · 색채 · 음성 · 음향 · 이미지 및 영상 등(이들의 복합체를 포함)의 자료 또는 정보 및 회원이 입력 또는 게시하는 모든 정보(게시물)를 의미합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>8.</li>
                                    <li>포인트 : 회원이 일정한 행위를 마친 때에 시스템에 적립되는 서비스 상의 데이터로서 소멸 전까지 서비스상에서 콘텐츠의 구매 등에 사용할 수 있는 것을 말합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>9.</li>
                                    <li>AI : 회사가 서비스 내에서 제공하는 인공지능 기반 대화형 정서 지원 솔루션을 의미합니다.</li>
                                </ul>
                            </div>
                            
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제3조 (약관의 효력 및 변경)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>본 약관은 서비스를 이용하고자 하는 모든 이용자에게 그 효력이 발생합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>본 약관의 내용은 회사가 서비스의 인터넷 홈페이지 또는 서비스 화면에 게시하거나 기타의 방법으로 이용자에게 공지하고, 이용자가 이에 동의하면 효력이 발생합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>이용자가 약관을 상세히 읽지 않아 발생한 피해에 대해서 회사는 책임을 지지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 필요하다고 인정되면 본 약관을 변경할 수 있으며, 회사가 약관을 변경할 때에는 적용 일자와 변경사유를 밝혀 본 조 제2항과 같은 방법으로 그 적용 일자 7일 전부터 공지합니다. 다만, 이용자에게 불리한 약관을 변경할 때에는 그 적용일자 30일 전부터 공지하며, 이메일, 문자메시지 등으로 회원에게 개별 통지합니다. (이용자가 연락처를 기재하지 않았거나 변경하여 개별 통지가 어려울 때에는 홈페이지에 변경 약관을 공지하는 것을 개별 통지한 것으로 간주합니다.)</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회사가 본 조 제4항에 따라 변경 약관을 공지하거나 통지하면서, 이용자가 약관 변경 적용일까지 거부 의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 이용자가 변경된 약관의 효력 발생일까지 약관 변경에 대한 거부 의사를 표시하지 않을 때에는 이용자가 변경 약관에 동의한 것으로 간주합니다. 이용자는 변경된 약관에 동의하지 않으면 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>6.</li>
                                    <li>회사가 본 조 제4항에 따라 변경 약관을 공지하거나 통지하면서, 이용자가 약관 변경 적용일까지 거부 의사를 표시하지 않으면 약관의 변경에 동의한 것으로 간주한다는 내용을 공지 또는 통지하였음에도 이용자가 변경된 약관의 효력 발생일까지 약관 변경에 대한 거부 의사를 표시하지 않을 때에는 이용자가 변경 약관에 동의한 것으로 간주합니다. 이용자는 변경된 약관에 동의하지 않으면 서비스 이용을 중단하고 이용계약을 해지할 수 있습니다.</li>
                                </ul>
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

export default Terms;