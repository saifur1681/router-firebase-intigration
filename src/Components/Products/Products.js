import { getAuth } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import app from '../../Firebase-init';



const auth= getAuth(app);

const Products = () => {
   const [user]= useAuthState(auth);

    return (
        <div>
            <h2>This is Products</h2>
            {
                user ? "Current User " + user.displayName : "There is no user"
            }
        </div>
    );
};

export default Products;