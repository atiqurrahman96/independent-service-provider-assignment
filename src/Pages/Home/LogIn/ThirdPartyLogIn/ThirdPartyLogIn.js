import React from 'react';

import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';




const ThirdPartyLogIn = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, anotherUser, anotherLoading, anotherError] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;
    if (error || anotherError) {

        errorElement =
            <p className='text-warning'>Error: {error?.message} {anotherError?.message}</p>
    }

    if (user || anotherUser) {
        navigate('/home')
    }

    return (
        <div>
            <div className='d-flex mx-auto w-50 justify-content-center align-items-center'>
                <div style={{ height: ' 1px' }} className='bg-info w-100 '></div>
                <p className='mt-2 m-2'>OR</p>
                <div style={{ height: ' 1px' }} className='bg-info w-100 '></div>
            </div>
            {errorElement}
            <div>
                <button className='m-2' onClick={() => signInWithGoogle()}>Continue with Google</button>
                <br />
                <button onClick={() => signInWithGithub()}>Continue with GitHub</button>
            </div>
        </div>
    );
};

export default ThirdPartyLogIn;