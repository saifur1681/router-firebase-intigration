import { getAuth } from 'firebase/auth';
import React from 'react';

import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import app from '../../Firebase-init';


const auth = getAuth(app);

const Login = () => {

    const [SignInWithGoogle, user] = useSignInWithGoogle(auth)

    return (
        <div>
            <h2>Please Login</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={() => SignInWithGoogle()} >Google sign in</button>
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