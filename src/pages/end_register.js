import React from 'react';

import Lottie from 'react-lottie';

import '../styles/end_register.css';

import animationData from '../assets/animations/done.json';

function END_REGISTER() {

    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    return (
        <div className="end_register_container">
            <Lottie
                options={defaultOptions}
                height={300}
                width={300}
            />
            <p className="verify_email_text">Verifique seu e-mail para mais informações.</p>
        </div>
    )
}

export default END_REGISTER;