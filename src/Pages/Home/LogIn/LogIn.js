import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';

import './LogIn.css'
import ThirdPartyLogIn from './ThirdPartyLogIn/ThirdPartyLogIn';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LogIn = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const navigate = useNavigate();
    let location = useLocation();
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );
    let errorElement;
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const handleSignIn = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password);

    }

    if (user) {
        navigate(from, { replace: true });
        console.log(user);
    }
    const navigateToSignUp = event => {
        navigate('/signUp')
    }
    if (error) {
        errorElement =
            <p className='text-warning'>Error: {error?.message}</p>
    }

    const resetPassword = async () => {

        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email');
        }
        else {
            toast('Please enter your email')
        }
    }
    return (
        <div>
            <h1>Please Log In</h1>
            <div className='form-container mx-auto w-50'>
                <Form onSubmit={handleSignIn}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Log In
                    </Button>
                </Form>
                <p>{errorElement}</p>
                <p>Don't have an account yet? <Link to='/signUp' className='text-danger pe-auto text-decoration-none' onClick={navigateToSignUp}>Please Sign Up </Link></p>
                <p>Forget Password? <Button to='/home' className='text-danger bg-white border-0 pe-auto text-decoration-none' onClick={resetPassword}>Reset Password </Button></p>

            </div>
            <ThirdPartyLogIn></ThirdPartyLogIn>
            <ToastContainer />
        </div>
    );
};

export default LogIn;