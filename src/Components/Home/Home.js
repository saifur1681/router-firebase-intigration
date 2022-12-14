import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../Firebase-init';



const auth= getAuth(app);

const Home = () => {
   const [user]= useAuthState(auth)

    return (
        <div>
            <h3>This is Home</h3>
            {
                user ? user.displayName : 'No Body'
            }
        </div>
    );
};

export default Home;