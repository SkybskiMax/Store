import React from 'react'
import AdminIcon from 'react-icons/lib/fa/bar-chart'
import { Link } from 'react-router-dom'

const AdminButton = () => (
    <li className="py-3 px-2">
        <Link to="/admin" className="no-text-decoration" alt="">
            <AdminIcon size={24} /> Admin
         </Link>
    </li>
)

export default AdminButton;