import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
const SignUp = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const nameRef = useRef('');
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const handleSignUp = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;

        createUserWithEmailAndPassword(email, password);
    }
    if (user) {
        navigate('/home')
    }

    return (
        <div>
            <h1>Please Sign Up</h1>
            <div className='form-container mx-auto w-50'>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Enter Your Name</Form.Label>
                        <Form.Control ref={nameRef} type="text" placeholder="enter your name" required />

                    </Form.Group>
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
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
                <p>Already have an account? <Link className='text-danger pe-auto text-decoration-none' to='/logIn'>Log In</Link></p>
            </div>
        </div>
    );
};

export default SignUp;