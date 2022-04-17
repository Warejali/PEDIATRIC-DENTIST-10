import React, { useState } from 'react';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import SocialLogin from './SocialLogin/SocialLogin';
import './Login.css'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(
        auth
    );

    const navigate = useNavigate();
    const submitHandle = (event) => {
        event.preventDefault();
    }

    const emailInput = event => {
        const userEmail = event.target.value;
        setEmail(userEmail)
    }
    const passwordInput = event => {
        const userPassword = event.target.value;
        setPassword(userPassword)
    }
    const goToReset = async (event) => {
        await sendPasswordResetEmail(email);
        alert('Sent email');
    }

    let errorElement;
    if (error) {
        return (
            errorElement = <div>
                <p>Error: {error.message}</p>
            </div>
        );
    }
    if (loading) {
        return <p>Loading...</p>;
    }

    if (user) {
        return (
            navigate('/')
        );
    }
    const goToRegister = () => {
        navigate('/register')
    }
    return (
        <div className='login-container'>
            <div className='login-form w-50 mx-auto my-5'>
                <h1 className='text-primary text-center py-2'>Please Login</h1>
                <Form onSubmit={submitHandle}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onBlur={emailInput} type="email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control onBlur={passwordInput} type="password" required />
                    </Form.Group>
                    <p className='text-danger'>{error}</p>
                    <Button className='mx-auto w-50 d-block' onClick={() => signInWithEmailAndPassword(email, password)} variant="primary" type="submit">
                        Login
                    </Button>
                    {errorElement}
                </Form>
                <div className='text-center'>
                    <p>Are You New Patient? <span className='btn text-primary fw-bold' onClick={goToRegister}>Please register</span></p>
                    <p>Forgotten Password? <span className='btn fw-bold text-primary' onClick={() => goToReset()}>Reset </span></p>
                </div>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;