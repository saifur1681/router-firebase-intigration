import { getAuth } from 'firebase/auth';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../Firebase-init';



const auth = getAuth(app);

const Login = () => {

    const [SignInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        SignInWithGoogle()
            .then(() => {
                navigate(from, { replace: true });
            })
    };

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={handleGoogleSignIn} >Google sign in</button>
            </div>
            <form>
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="submit" value="Login" />
            </form>
        </div>
    );
};

export default Login;