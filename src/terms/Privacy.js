import React from "react";
import { useNavigate } from "react-router-dom";
import "./Privacy.css";


const Privacy = () => {
    const navigate = useNavigate();

    const signup = () => navigate('/signup');

    const agreePrivacy = () => {
        navigate('/signup', {state : { agreePrivacy: true }})
    };

    return (
        <div className="privacy-container">
            <header className="privacy-header">
                <img 
                    src="/images/arrow_back_ios.svg" alt="arrow back icon"
                    className="image"
                    onClick={signup}
                />

            </header>

            <button className="agree-button" onClick={agreePrivacy}>동의하기</button>
        </div>
    );
};

export default Privacy;