import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import './Marketing.css';

const Marketing = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const previousData = location.state || {};
    const previousTerms = previousData.terms || {};

    const handleAgree = () => {
        navigate('/signup', {
            state: {
                ...previousData,
                terms: {
                    ...previousTerms,
                    marketing: true,
                }
            }
        });
    };

    const handleBack = () => {
        navigate('/signup', {
            state: previousData,
        });
    };

    return (
        <div className="privacy-container">
            <header className="privacy-header">
                <img 
                    src="/images/arrow_back_ios.svg" alt="arrow back icon"
                    className="image"
                    onClick={handleBack}
                />

            </header>

            <button className="agree-button" onClick={handleAgree}>동의하기</button>
        </div>
    );

};

export default Marketing;