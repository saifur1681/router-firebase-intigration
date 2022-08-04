import React from 'react';
import { Link } from 'react-router-dom'
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {

    const { user } = useFirebase()

    return (
        <div className="header-style" >
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/products'>Products</Link>
                <Link to='/orders'>Orders</Link>
                <Link to='/register'>Register</Link>
                {
                    user.uid
                        ?
                        <button>Log out</button>
                        :
                        <Link to='/login'>Login</Link>
                }
            </nav>
        </div>
    );
};

export default Header;