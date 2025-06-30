import React, { useState } from 'react';
import './terms.css'; // 스타일은 따로 분리

const Terms = () => {
    return (

        <div className="outer-wrapper outer_modal">
            <div className="phone-box background2 modal_wrap">
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
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제2조 (용어의 정의)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>마음위로 서비스(이하 '서비스') : 회사가 제공하는 다음의 모든 서비스를 의미합니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>정서적 위로 및 심리적 치유를 위한 콘텐츠 제공 서비스</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>감정 기록 및 관리 서비스</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>AI 기반 대화형 정서 지원 서비스</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>익명 기반 정서적 연결 커뮤니티 서비스</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>명상, 루틴 등 셀프케어 콘텐츠 제공 서비스</li>
                                </ul>
                                <ul>
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
                                    <li>본 약관에 동의하는 것은 회사가 운영하는 서비스의 홈페이지를 정기적으로 방문하여 약관의 변경사항을 확인하는 것에 동의함을 의미합니다. 변경된 약관에 대한 정보를 알지 못하여 발생하는 회원의 피해에 대하여 회사는 책임이 없습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>7.</li>
                                    <li>이 약관은 이용자가 이 약관에 동의한 날로부터 회원 탈퇴 시까지 적용하는 것을 원칙으로 합니다. 단, 본 약관의 회원 의무 규정, 개인정보 및 콘텐츠 저작권 규정, 손해배상 및 분쟁해결 규정 등은 회원이 탈퇴 후에도 유효하게 적용될 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_title2">
                                제2장 서비스 이용계약
                            </div>
                            <div className="ctt_sub_title">
                                제4조 (서비스 이용계약의 성립)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>이용자는 회사가 정한 이용약관에 대하여 '동의'를 선택하고 회원가입에 필요한 온라인 신청 양식을 작성하여 서비스 이용을 신청한 후 이용 신청에 대하여 회사가 이를 승낙함으로써 성립합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>이용자가 유료 서비스를 결제한 후 어떠한 이유로 회원가입을 하지 않거나 이용신청의 정정, 취소를 원할 경우 회사는 환불 규정 및 소정의 절차에 따라 이를 진행하여야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>다만 이용자가 유료 서비스를 취소하지 않은 상황에서 어떠한 이유로 지불 방법에 요금이 청구될 수 없는 경우 미수금에 대한 책임은 이용자에게 있고, 회사는 이용자가 결제 방법 정보를 업데이트할 때 회사의 결제 방법에 요금을 청구하려고 시도하며 이로 인해 후속 유료 서비스의 시작 날짜 등이 변경될 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제5조 (이용신청의 승낙과 제한)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 이용자가 온라인 신청 양식의 각 사항을 정확히 기재하고 본 약관에 동의할 경우 기술상 지장이 없는 한 서비스의 이용신청을 승낙합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사는 다음 각 호의 경우에는 이용자의 서비스 이용 신청의 승낙을 거절할 수 있습니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>온라인 신청 양식의 기재 사항에 허위, 기재누락, 도용, 오기가 있는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>신용정보의 이용과 보호에 관한 법률에 의한 PC통신, 인터넷 서비스의 신용불량자로 등록되어 있는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>이용 신청자가 본 약관에 의하여 이전에 회원자격을 상실한 사실이 있는 경우(다만 회원자격 상실 후 6개월이 경과한 자로서 회사로부터 회원 재가입 승낙을 얻은 경우는 예외로 합니다.)</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>기타 회사가 정한 이용 신청의 요건이 만족되지 않은 경우</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사는 다음 각 호의 경우에는 이용자의 서비스 이용 신청의 승낙을 유보할 수 있습니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>서비스 관련 설비의 여유가 없거나 기술상 또는 업무상 문제가 있는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>기타 회사의 귀책사유로 이용 신청의 승낙이 곤란한 경우</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사가 본조 제2항과 제3항에 따라 회원가입 신청의 승낙을 거절하거나 유보한 경우에는 팝업창을 통하여 즉시 이용 신청자에게 알립니다. 단, 회사의 귀책 사유 없이 이용자에게 알릴 수 없는 경우에는 예외로 합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제6조 (회원정보)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회원은 언제든지 자신의 개인정보를 열람하고 수정할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회원이 전항의 변경사항을 수정하지 않아 발생한 불이익에 대하여 회사는 책임지지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원은 자신의 감정 상태, 심리적 경험, 개인적 사연 등을 서비스 내에 기록할 수 있으며, 이러한 정보에는 민감정보가 포함될 수 있다는 사실을 인정합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>효율적이고 지속적인 정서적 지원을 위하여 회원 개인정보, 감정 기록 그리고 회사가 운영하는 앱이나 인터넷 사이트 등 플랫폼 상의 활동 내용, 회원이 게시한 글이나 사진 등 저작물 등 서비스 관련 모든 정보와 자료는 회사가 보관하면서, 서비스 개선과 회원 지원을 위해 활용할 수 있습니다. 더 나아가 상기 서비스 관련 모든 정보와 자료는 익명화하여 서비스의 제공, 더 나은 서비스의 개발과 연구, 통계, 홍보, 빅데이터 활용 등을 위하여 활용될 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제7조 (회원의 아이디 및 비밀번호의 관리에 대한 의무)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회원은 아이디와 비밀번호에 대한 모든 관리 책임이 있으며, 이를 제3자에게 제공 또는 공유, 공개하여 제3자가 이용하도록 하여서는 안 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사는 전항의 경우 회원의 자격을 박탈할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원은 자신의 아이디 및 비밀번호가 유출되어 제3자에 의해 사용되고 있음을 인지한 경우, 즉시 회사에 알려야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 전항의 경우 회원의 개인정보보호 및 기타 서비스 부정이용행위 방지 등을 위하여 회원에게 비밀번호의 변경 등 필요한 조치를 요구할 수 있으며, 회원은 회사의 요구가 있는 즉시 회사의 요청에 성실히 응해야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회사는 회원이 본조 제1항 및 제3항에 따른 의무를 성실히 이행하지 않아 발생한 불이익에 대하여 책임지지 않습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제8조 (이용계약의 해지)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회원이 이용계약의 해지를 원할 경우에는 서비스 내의 회원 탈퇴 기능을 통하여 언제든지 회원탈퇴를 신청할 수 있습니다. 이 경우 회사는 불가피한 사정이 없는 한 회원의 탈퇴 요청을 지체 없이 처리합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사는 회원이 본 약관 또는 관계법령 등을 위반하는 경우, 이용계약을 해지할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>본 항에 따라 해지를 한 회원은 이 약관이 정하는 회원가입 절차와 관련 조항에 따라 회원으로 다시 가입할 수 있습니다. 다만 회원이 중복 참여가 제한된 판촉 이벤트 중복 참여 등 부정한 목적으로 회원탈퇴 후 재가입 신청하는 경우 회사가 재가입을 일정기간 동안 제한할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회원탈퇴 시 소진되지 않은 포인트 및 혜택은 권리를 포기한 것으로 간주하여 탈퇴와 동시에 전부 소멸됩니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_title2">
                                제3장 서비스 이용
                            </div>
                            <div className="ctt_sub_title">
                                제9조 (서비스의 제공 및 변경)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 이용자에게 서비스에 대한 정보를 제공합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>서비스의 이용은 연중 무휴 1일 24시간을 원칙으로 합니다. 다만, 시스템 점검, 증설과 교체 및 고장 등의 이유로 회사가 정한 기간에는 서비스가 일시 중지될 수 있습니다. 이 경우 회사는 사전에 사이트에 해당 사실을 공지합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사가 통제할 수 없는 사유로 인하여 서비스가 중단됨으로써 사전 공지가 불가능한 경우에는 사후 공지로 갈음합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 서비스가 변경되는 경우 변경되는 서비스 내용 및 제공 일자를 사이트를 통하여 공지하거나 회원에게 통지합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제10조 (회원의 권한 및 의무)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회원은 관계법령, 본 약관의 규정, 이용안내 및 서비스 상에 공지한 주의사항, 회사가 통지한 사항을 준수해야 하며, 기타 회사의 업무를 방해하는 행위를 하여서는 안 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회원은 정서적 위로와 심리적 치유를 받기 위한 목적으로만 서비스를 이용하여야 하며, 광고, 스토킹, 장난 등의 목적으로 서비스를 이용하여서는 안 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원은 서비스 이용에 필요한 최소한의 구체적이고 진실한 정보를 제공하여야 하며, 정보 부족 시 서비스의 이용에 제한을 받을 수 있습니다. 단, 회원 자신과 타인의 개인정보 등을 작성하는 방법 등으로 타인의 명예를 훼손하거나 기타 권리를 침해해서는 안 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회원은 서비스를 통하여 취득한 정보를 회사의 사전 서면 승낙 없이 제3자에게 공개하거나 복제ㆍ편집ㆍ전시ㆍ전송ㆍ배포ㆍ판매ㆍ방송ㆍ공연하는 등의 행위를 하여서는 안 됩니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제11조 (AI 서비스 이용에 관한 특별 규정)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 서비스 내에서 AI 기반 대화형 정서 지원 서비스를 제공할 수 있으며, 회원은 이를 이용함에 있어 본 조항의 규정을 준수해야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>AI 서비스는 정신의학적 진단, 치료, 상담을 대체하지 않으며, 심각한 정신건강 문제가 있는 경우 반드시 전문가의 도움을 구해야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원은 AI와의 대화에서 자살, 자해 등의 위험한 내용을 언급하거나 타인에게 해를 입히는 방법을 요청하는 등의 행위를 해서는 안 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>AI 서비스는 회원이 제공한 정보와 대화 내용을 기반으로 응답하며, 회사는 AI의 응답 내용에 대해 정확성이나 적합성을 보장하지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회원과 AI 간의 모든 대화 내용은 서비스 품질 개선, 연구 및 개발 목적으로 회사에 의해 수집, 분석될 수 있으며, 이 과정에서 개인식별정보는 익명화하여 처리됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>6.</li>
                                    <li>회사는 AI 서비스의 품질 향상을 위해 회원의 피드백을 요청할 수 있으며, 회원은 이에 자발적으로 참여할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>7.</li>
                                    <li>회사는 회원이 AI와의 대화 내용 중 자신이나 타인에게 심각한 위해를 가할 가능성이 있다고 판단되는 경우, 관련 기관에 필요한 정보를 제공할 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제12조 (회사의 권리와 의무)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사가 제공하는 서비스 및 콘텐츠에 대한 지적재산권은 회사에 귀속됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회원이 회사에 제공한 개인정보, 감정 기록, 커뮤니티 활동 내용, 회원이 게시한 글과 사진 등 저작물과 기타 자료 등은 모든 자료와 정보를 익명화하여 회사가 서비스 제공, 홍보, 연구, 통계 등의 목적으로 활용할 수 있습니다. 회사가 취득한 정보와 저작물 기타 자료 등의 이용기간은 특별한 사유가 없는 한 영구적으로 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사는 서비스의 향상과 신규 서비스 개발, 심리 관련 연구 등을 위하여, 회원의 감정 기록, 서비스 이용 패턴 등 서비스 제공 과정에서 생성된 모든 자료와 정보를 수집하고, 익명화하여 통계나 감정 분석 연구 내지는 정서적 위로 솔루션 개발에 활용할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 본 약관 및 관계법령에 따라 서비스를 제공하여야 하며, 다음 각 호의 사유가 발생한 경우를 제외하고 계속적, 안정적으로 서비스를 제공하기 위하여 최선의 노력을 다합니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>서비스용 설비의 보수, 정기점검 또는 공사로 인한 부득이한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>전기통신사업법에 규정된 기간통신사업자가 전기통신 서비스를 중지한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>전시, 사변, 천재지변 또는 이에 준하는 국가비상사태가 발생하거나 발생할 우려가 있는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>설비장애 또는 이용 폭주 등으로 인하여 서비스 이용에 지장이 있는 경우</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제13조 (회원의 개인정보 보호)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 개인정보보호와 관련된 자세한 사항을 개인정보 처리방침으로 정하고 이를 전자적 표시 형태로 제공하여야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사는 회원의 개인정보에 대하여 철저한 보안을 유지하여야 하며 서비스 운영 및 개선에만 사용하여야 하고, 이외의 목적으로 타 기관 및 개인에게 제공하지 않습니다. 다만 다음 각 호에 해당하는 경우에는 그렇지 않습니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>관계법령에 의해 수사상의 목적으로 관계기관으로부터 요청이 있는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>정보통신윤리위원회의 요청이 있는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>기타 관계법령에서 정한 절차에 따른 요청이 있는 경우</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사는 회원의 개인정보 관리를 위하여 회원의 개인정보를 제3자에게 위탁할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 회원의 귀책 사유로 인하여 노출된 개인정보에 대하여서는 일체의 책임을 지지 않습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_title2">
                                제4장 콘텐츠 및 저작권
                            </div>
                            <div className="ctt_sub_title">
                                제14조 (서비스 게시물의 등록 및 관리)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회원은 약관에서 정하는 범위 내에서 자율적으로 게시물을 작성할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회원의 게시물이 정보통신망법 및 저작권법 등 관련법에 위반되는 내용을 포함하는 경우, 권리자는 관련법이 정한 절차에 따라 해당 게시물의 게시중단 및 삭제 등을 요청할 수 있으며, 회사는 관련법에 따라 조치를 취하여야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사는 전항에 따른 권리자의 요청이 없는 경우라도 권리침해가 인정될 만한 사유가 있거나 기타 회사 정책 및 관련법에 위반되는 경우에는 관련법에 따라 해당 게시물에 대해 임시조치 등을 취할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 회원이 게시하거나 전달하는 서비스 내의 모든 게시물(텍스트, 이미지, 동영상, 각종 파일, 링크, 댓글, 답글 등을 모두 포함)이 다음 각 호 중 하나에 해당한다고 판단되면 사전 통지 없이 삭제할 수 있으며, 이에 대해 회사는 어떠한 책임도 부담하지 않습니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>음란물, 욕설 등 공공질서와 미풍양속에 위반되는 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>범죄행위와 관련이 있다고 판단되는 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>자살을 목적으로 하거나 이를 미화, 방조 또는 권유하여 자살 충동을 일으킬 우려가 있는 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>회사, 타인의 저작권 등 지적재산권을 침해하는 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>타인과의 분쟁을 일으킬 수 있는 내용으로, 이러한 분쟁으로 인하여 회사의 업무가 방해되거나 방해되리라고 판단되는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>타인의 개인정보, 사생활을 침해하거나 비방, 허위사실 등으로 명예를 손상시키는 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>동일한 내용을 중복하여 다수 게시하는 등 게시의 목적에 어긋나는 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>불필요하거나 승인되지 않은 광고, 판촉물의 내용</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>관리자 사칭 등 커뮤니티 서비스를 본 목적에 어긋나게 사용하는 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>기타 관계법령에 위반된다고 판단되는 내용</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제15조 (서비스 게시물 등의 저작권)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>마음위로 서비스에서 회원이 작성한 모든 게시물은 법적인 저작물로서 저작권의 보호 대상이 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>타인의 지적 재산권에 속하는 대상물을 마음위로 내에서 이용할 경우에는 반드시 해당 권리자의 사전 동의를 받아야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원이 서비스 내에 게시한 게시물의 저작권은 해당 게시물의 저작자에게 귀속됩니다. 다만, 회사는 저작물을 무상으로 영구히 이용할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>본조 제3항에도 불구하고, 회원이 서비스 내에서 작성하는 감정 기록, 대화 내용과 게시하는 글과 사진 등 저작물의 저작권 내지 저작물의 이용권은 회사에 무상으로 영구히 귀속되고, 모든 자료와 정보를 익명화하여 수집하여 심리 위로 및 정신건강 관련 연구, 통계, 솔루션 개발에 활용할 수 있습니다. 더 나아가 빅데이터 활용 내지 연구를 위해 제3자에게 재이용권을 허락할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회원이 서비스 내에 게시하는 게시물의 내용은 포털사이트 등 인터넷의 검색 결과 내지 서비스 프로모션 등에 노출될 수 있으며, 해당 노출을 위해 필요한 범위 내에서는 일부 수정, 편집되어 게시될 수 있습니다. 또한 약관에 의해 포털사이트 등에서 운영하는 타 서비스 등에 전송되거나 게시될 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제16조 (회원 및 제3자의 권리 보호)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회원은 타인의 저작권을 포함한 지적 재산권 및 인격권 등 기타 권리를 침해해서는 안 됩니다. 만일 이와 같은 내용의 게시물로 인해 발생하는 결과에 대한 모든 책임은 회원 본인에게 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>저작권자의 명시적 동의 없이 타인의 저작물의 전부 또는 일부를 복제, 배포, 전송 등의 방법으로 이용하는 것은 저작권자의 권리를 침해하는 행위임으로 복제 등의 방법으로 타인의 저작권을 침해한 게시물을 서비스에 게재 또는 등록하여서는 안 됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원은 공표된 저작물의 보도·비평·교육·연구 등을 위하여 정당한 범위 안에서 공정한 관행에 합치되게 이를 인용할 수 있으며, 반드시 출처를 명시해야 합니다. 하지만 인용이 저작자의 저작 인격권을 침해하는 것이 되어서는 안 되며 이러한 경우 출처를 밝히더라도 저작권 침해에 해당될 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회원의 게시물에 대하여 제3자로부터 저작권 및 기타 권리의 침해로 소송 및 기타 법률적 이의가 제기된 경우 해당 회원은 상담 비용을 포함하여 권리침해로 야기된 제반 법률 문제를 해결하기 위한 비용을 부담하는 등 기타 조치로 회사를 보호할 의무가 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회원의 게시물에 대하여 제3자로부터 저작권 및 기타 권리의 침해로 이의가 제기된 경우 회사는 당해 게시물을 임시 삭제할 수 있으며, 이의를 제기한 자와 게시물 등록자 간에 소송, 합의 등을 통해 당해 게시물에 관한 법적 문제가 종결된 후 이를 근거로 회사에 신청이 있는 경우에만 상기 임시 삭제된 게시물은 다시 등록될 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>6.</li>
                                    <li>회원은 서비스를 이용함으로써 얻은 정보 내지 대화 내용을 외부에 공개하거나 회사의 사전 승낙 없이 복제, 송신, 출판, 전송, 배포, 방송 기타 방법에 의하여 영리 목적으로 이용하거나 제3자에게 이용하게 해서는 안 됩니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_title2">
                                제5장 포인트 정책
                            </div>
                            <div className="ctt_sub_title">
                                제17조 (포인트 적립 및 이용)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 회사에서 정한 정책에 따라 지정한 서비스 이용을 완료한 회원에게 포인트를 부여할 수 있습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>포인트 적립 기준은 회사의 내부 방침에 따라 임의로 변경될 수 있으며, 회사는 회원에게 사이트, 모바일 앱을 통하여 변경내용을 별도로 게시하여 통지합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원은 회사의 유상 서비스 구매 시 다른 결제 수단과 함께 포인트를 사용할 수 있습니다. 다만, 포인트 사용조건은 서비스별로 다를 수 있고, 회사의 내부 방침에 따릅니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회원은 본인이 소유한 포인트를 타인에게 양도, 대여 또는 담보의 목적으로 이용할 수 없습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회원은 적립된 포인트를 금전 등 다른 지급수단의 형태로 교환 또는 환불해 줄 것을 요청할 수 없습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>6.</li>
                                    <li>회원은 다른 회원이 적립한 포인트를 부정하게 이용하여서는 아니 되며, 회사는 포인트에 대한 적법한 권리가 있는 회원으로부터 부정이용 신고 등을 접수한 경우에는 즉시 이를 해결하기 위한 조치를 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>7.</li>
                                    <li>부정한 방법으로 포인트를 획득한 사실이 확인될 경우 회사는 회원의 포인트 회수, 계정 삭제 및 형사 고발 등 조치를 취할 수 있습니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제18조 (포인트 정정)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>적립된 포인트에 오류가 있을 경우 회원은 오류발생 시점부터 7일 이내 회사에 정정 신청을 하여야 하며, 회사는 회원의 정정 신청일로부터 최대 30일 이내에 조치를 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>클라이언트 변경, 해킹, 매크로 등 부정한 방법으로 포인트를 적립하신 경우, 부정 적립이 되어 그 포인트는 0으로 초기화 됩니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제19조 (포인트 유효기간 및 소멸)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>포인트의 유효기간은 적립된 날로부터 2년입니다. 다만, 회사가 별도로 유효기간을 정한 때에는 이에 따릅니다. 위 유효기간 내에 사용되지 않은 포인트는 적립된 날을 기준으로 차례로 소멸됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>전항에도 불구하고 회원이 다음 각 호의 사유에 해당하는 경우, 포인트가 각 호에서 정한 바에 따라 소멸됩니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>회원탈퇴로 인한 포인트 소멸: 회원탈퇴 요청일에 현재까지 적립된 포인트는 사용이 불가하며, 적립된 포인트의 유효기간 만료 이내에 재가입하더라도 복원되지 않습니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>자격 상실로 인한 포인트 소멸: 적립된 포인트는 복구가 불가한 상태로 즉시 소멸되며, 적립된 포인트의 유효기간 만료 이내에 재가입하더라도 복원되지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사는 유효기간 만료에 따른 소멸예정 포인트, 소멸시기 등 포인트 소멸과 관련된 내용을 회원이 모바일 앱에서 확인할 수 있도록 조치합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_title2">
                                제6장 회원자격 박탈 및 분쟁의 조정
                            </div>
                            <div className="ctt_sub_title">
                                제20조 (회원자격의 박탈)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 다음 각 호의 경우 회원의 서비스 이용기간을 제한하거나 회원자격을 예고 없이 박탈할 수 있습니다.</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>회원의 개인신상정보가 사실과 다를 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>타인에게 ID를 양도, 대여한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>다른 이용자의 ID를 부정 사용한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>서비스를 통하여 취득한 다른 회원의 정보를 수집, 저장, 양도하거나 중개에 이용한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>불법 정보, 유해 정보 또는 회사로부터 허가 받지 않은 광고, 브로커 제안, 장난글 등을 게시한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>서비스를 통해 진행한 대화의 내용을 회사 및 회원의 사전 승낙없이 복제ㆍ편집ㆍ전시ㆍ전송ㆍ배포ㆍ판매ㆍ방송ㆍ공연하는 등의 행위를 한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>회사 직원, 운영자 등을 포함한 타인을 사칭한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>서비스의 운영에 지장을 주거나 줄 우려가 있는 행위를 한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>본 약관을 포함하여 기타 회사가 정한 규정 또는 이용조건을 위반한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>성적인 대화, 협박, 욕설, 스토킹 등 다른 회원을 괴롭히는 행위를 한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>컴퓨터 소프트웨어, 하드웨어, 전기통신 장비의 정상적인 가동을 방해, 파괴할 목적으로 고안된 컴퓨터 바이러스, 기타 다른 컴퓨터 코드, 파일, 프로그램을 포함하고 있는 자료를 게시하거나 전자 우편으로 배포하는 행위를 한 경우</li>
                                </ul>
                                <ul>
                                    <li>-</li>
                                    <li>기타 법령에 위배되는 행위를 한 경우</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사는 회원의 서비스 이용 권한을 일정 기간 제한하거나 이용 권한을 박탈한 경우, 회원에게 시정 또는 소명 기회를 부여할 수 있습니다. 회원의 이의신청이 정당한 경우 회사는 즉시 회원이 서비스를 이용할 수 있도록 필요한 조치를 취하여야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회원이 회원자격을 상실할 경우 보유한 포인트, 혜택은 전부 소멸됩니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제21조 (면책조항)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사는 천재지변 또는 이에 준하는 불가항력으로 인하여 서비스를 제공할 수 없거나 제공이 지연된 경우에는 서비스 제공에 관한 책임이 면제됩니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사는 회원의 귀책사유로 인하여 발생한 서비스 이용의 장애에 대해서는 책임을 지지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사는 회원이 서비스와 관련하여 게시 또는 제공한 정보, 자료, 사실의 신뢰도, 정확성 등의 내용에 대해서는 책임을 지지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사는 AI 기반 대화형 정서 지원 서비스의 정확성, 적합성, 특정 목적에의 적합성 등에 대하여 어떠한 보증도 제공하지 않으며, AI의 대화 내용으로 인해 발생하는 결과에 대해 책임을 지지 않습니다. 단, 회사는 AI 서비스의 품질 향상을 위해 지속적인 개선 노력을 기울입니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>5.</li>
                                    <li>회사는 회원 상호간 또는 회원과 제3자 간에 콘텐츠를 매개로 하여 발생한 분쟁 등에 대하여 책임을 지지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>6.</li>
                                    <li>본 약관의 규정을 위반함으로 인하여 회사에 손해가 발생하는 경우, 해당 위반자는 회사에 발생되는 모든 손해를 배상하여야 하며, 동 손해로부터 회사를 면책 시켜야 합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제22조 (분쟁의 해결)
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>1.</li>
                                    <li>회사와 회원은 서비스와 관련하여 발생한 분쟁을 원만하게 해결하기 위하여 서로 성실하게 노력하여야 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>2.</li>
                                    <li>회사가 제공하는 서비스는 합법적인 목적으로만 사용되어야 하며, 대한민국 법령에 반하는 형태의 사용은 금지됩니다. 회원의 금지된 형태의 사용으로 인하여 손해가 발생할 경우 회사는 이에 대하여 책임을 지지 않습니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>3.</li>
                                    <li>회사와 회원 사이에 발생한 소송의 관할법원은 회사의 본사 소재지 관할 법원으로 합니다.</li>
                                </ul>
                            </div>
                            <div className="ctt_inner">
                                <ul>
                                    <li>4.</li>
                                    <li>회사와 회원 사이에 발생한 소송에는 대한민국 법령을 적용합니다.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_sub_title">
                                제23조 (링크)
                            </div>
                            <div className="ctt_inner">
                                회사는 회원에게 타인의 웹사이트 또는 자료에 대한 링크를 제공할 수 있습니다. 회사는 해당 웹사이트나 자료의 내용 등에 대하여 책임이 없으며, 회원이 자발적으로 이를 이용하거나 신뢰함으로 인하여 야기된 손해에 대하여 책임을 지지 않습니다.
                            </div>
                        </div>
                        <div className="ctt_wrap">
                            <div className="ctt_inner">
                                공고일자: [날짜]
                            </div>
                            <div className="ctt_inner ctt_date">
                                시행일자: [날짜]
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