import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Register.css'

const Register = () => {
    const [agree, setAgree] = useState(false)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile, updating, error1] = useUpdateProfile(auth);
    const navigate = useNavigate();
    const goToLogin = () => {
        navigate('/login')
    }
    if (error || error1) {
        return <p className='text-danger'>Error: {error?.message} {error1?.message}</p>
    }
    if (loading || updating) {
        return <Loading></Loading>;
    }
    const submitHandle = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        console.log(email, password);
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        console.log('Updated profile');
        navigate('/emailverification')
    }
    return (
        <div className='register-container login-form w-50 mx-auto my-5'>
            <h2 className='text-primary'>Please Register</h2>

            <Form onSubmit={submitHandle}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" name='name' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email'required/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' required/>
                </Form.Group>
                <Form.Group className={agree ? 'text-success mb-3' : 'mb-3'} controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} type="checkbox" name='checkbox' label="Accept term and conditions" />
                </Form.Group>
                <Button disabled={!agree} variant="primary" type="submit">
                    Register
                </Button>
            </Form>
            <p>Have You already register? <span className='btn text-danger' onClick={goToLogin}>Please Login</span></p>
            <SocialLogin></SocialLogin>
        </div>

    );
};

export default Register;