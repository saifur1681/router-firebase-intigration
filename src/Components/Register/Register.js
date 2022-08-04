import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>Please Register Now</h2>
            <form>
                <input type="name" placeholder="Your Name" />
                <br />
                <input type="email" placeholder='Your Email' />
                <br />
                <input type="password" placeholder="Password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;