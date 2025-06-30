import React from "react";
import "./ServiceModal.css";

const ServiceModal = ({ onAgree, onClose }) => {
  return (
    <div className="terms-overlay">
      <div className="terms-container">
        <header className="terms-header">
          <img
            src="https://storage.googleapis.com/tagjs-prod.appspot.com/v1/7ZSk7PKSjf/1je1copc_expires_30_days.png"
            alt="뒤로가기"
            className="image"
            onClick={onClose}
          />
          <h1>이용약관</h1>
        </header>

        <div className="terms-box">
            <h2 className="terms-title">마음위로 서비스 이용약관 동의</h2>

            <section className="terms-section">
            <h3># 제1조 (목적)</h3>
            <p>
                본 약관은 주식회사 키온INC(이하 "회사")이 운영하는 정서적 위로 및 심리적 치유 플랫폼 마음위로(이하 "서비스")를 이용함에 있어 이용자와 회사 간의 의무, 권리,
                책임사항 및 회원의 서비스 이용조건과 절차 등 기본적인 사항을 규정하여 회원의 권익을 보호함을 목적으로 합니다.
            </p>
            <p>
                이용자는 본 이용약관을 자세히 읽은 후 이용약관에 동의하지 않을 경우, 본 이용약관에 동의하거나, 서비스에 등록 또는 액세스하거나 이를 이용하지 말아야 합니다.
            </p>
            </section>

            <section className="terms-section">
            <h3>제2조 (용어의 정의)</h3>
            <p>
                1. 마음위로 서비스(이하 '서비스'): 회사가 제공하는 다음의 모든 서비스를 의미합니다.
                <br />- 정서적 위로 및 심리적 치유를 위한 콘텐츠 제공 서비스
                <br />- 감정 기록 및 관리 서비스
                <br />- AI 기반 대화형 정서 지원 서비스
                <br />- 익명 기반 정서적 연결 커뮤니티 서비스
                <br />- 명상, 루틴 등 셀프케어 콘텐츠 제공 서비스
                <br />- 기타 회사가 추가 개발하거나 다른 회사 혹은 개인과 제휴 및 계약 등을 통해 제공하는 서비스
            </p>
            <p>
                2. 이용자: 본 약관에 따라 회사가 제공하는 서비스를 이용하는 회원 및 비회원을 의미합니다.
            </p>
            <p>
                3. 이용계약: 회사가 제공하는 서비스의 이용과 관련하여 회사와 이용자 간에 체결하는 계약을 의미합니다.
            </p>
            <p>
                4. 마음위로 계정: 이용자가 서비스를 사용하기 위하여 필요한 이메일 주소 및 아이디·패스워드 기반의 로그인
            </p>
            <p>
                5. 회원: 본 약관에 동의함으로써 회사와 이용계약을 체결하고 마음위로 계정을 등록한 자로서, 회사가 제공하는 정보와 서비스를 지속적으로 이용할 수 있는 자를 의미합니다.
            </p>
            <p>
                6. 비회원: 회원가입을 하지 않고 '서비스'를 이용하는 사용자를 의미합니다.
            </p>
            <p>
                7. 콘텐츠: 회사가 지식, 정보 등을 전달하기 위하여 만든 부호 · 문자 · 도형 · 색채 · 음성 · 음향 · 이미지 및 영상 등(이들의 복합체를 포함)의 자료 또는 정보 및 회원이 입력 또는 게시하는 모든 정보(게시물)를 의미합니다.
            </p>
            <p>
                8. 포인트: 회원이 일정한 행위를 마친 때에 시스템에 적립되는 서비스 상의 데이터로서 소멸 전까지 서비스상에서 콘텐츠의 구매 등에 사용할 수 있는 것을 말합니다.
            </p>
            <p>
                9. AI: 회사가 서비스 내에서 제공하는 인공지능 기반 대화형 정서 지원 솔루션을 의미합니다.
            </p>
            </section>
        </div>

        <button className="agree-button" onClick={onAgree}>동의하기</button>
      </div>
    </div>
  );
};

export default ServiceModal;