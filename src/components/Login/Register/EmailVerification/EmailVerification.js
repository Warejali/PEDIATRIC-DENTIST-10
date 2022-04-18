import React from 'react';
import './EmailVerification.css'

const EmailVerification = () => {
    return (
        <div className='verification-section mt-5 container d-flex justify-content-center align-items-center pt-5'>
            <p className='alert-danger py-3 px-5 rounded-2 text-success'>Email Email Verification has been to Your email, Please check inbox or spam</p> 
        </div>
    );
};

export default EmailVerification;