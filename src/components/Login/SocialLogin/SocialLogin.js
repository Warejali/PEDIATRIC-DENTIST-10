import React from 'react';
import google from '../../../images/icon/google.png';
import github from '../../../images/icon/git.png';
import './SocialLogin.css'
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate()
    let errorElement;
    if (error || error1) {
        errorElement =
            <div>
                <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
            </div>
    }
    if (loading || loading1) {
        return <Loading></Loading>;
    }
    if (user || user1) {
        navigate('/home')
    }
    return (
        <div>
            <div className='my-3 d-flex align-items-center justify-content-center'>
                <div className='or-line bg-secondary w-25'></div>
                <p className='px-3 mt-3 fw-bold fs-5'>Or</p>
                <div className='or-line bg-secondary w-25'></div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn alert-primary w-75 d-block mx-auto mt-3'>
                <img className='login-icon' src={google} alt="" />
                SignIn With Google
            </button>
            {errorElement}
            <button onClick={() => signInWithGithub()} className='btn alert-primary w-75 d-block mx-auto mt-3'>
                <img className='login-icon px-2' src={github} alt="" />
                SignIn With github
            </button>
        </div>
    );
};

export default SocialLogin;