import React from 'react'
import LogoutIcon from 'react-icons/lib/fa/sign-out'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import { logout } from '../../../actionsCreators/authorization'


const Logout = (props) => (
    <li className="py-3 px-2">
        <Link to="/home" className="no-text-decoration" alt="" onClick={() => props.signout()}>
            <LogoutIcon size={24} /> Logout
         </Link>
    </li>
)

function mapDispatchToProps(dispatch) {
    return {
        signout: () => {
            dispatch(logout())
            localStorage.removeItem("token")
        }
    }
}

export default connect(null, mapDispatchToProps)(Logout);
