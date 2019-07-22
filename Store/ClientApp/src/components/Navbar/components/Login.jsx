import React from 'react'
import LoginIcon from 'react-icons/lib/fa/arrow-circle-right'
import { Link } from 'react-router-dom'

const Login = () => (
    <li className="py-3 px-2">
        <Link to="/login" className="no-text-decoration" alt="">
            <LoginIcon size={24} /> Login
         </Link>
    </li>
)

export default Login;
