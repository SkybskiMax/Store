import React from 'react';
import RegisterIcon from 'react-icons/lib/fa/chevron-circle-up';
import { Link } from 'react-router-dom'

const SignUp = () => {
    return (
        <li className="py-3 px-2">
            <Link to="/register" className="no-text-decoration">
                <RegisterIcon size={24} /> Sign up
            </Link>
        </li>
    );
}

export default SignUp