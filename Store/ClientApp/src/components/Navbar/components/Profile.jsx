import React from 'react';
import ProfileIcon from 'react-icons/lib/fa/user';
import { Link } from 'react-router-dom'

const Profile = () => {
    return (
        <li className="py-3 px-2">
            <Link to="/profile" className="no-text-decoration">
                <ProfileIcon size={24} /> Profile
            </Link>
        </li>
    );
}

export default Profile