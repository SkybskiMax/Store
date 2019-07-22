import React from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/js/src/collapse.js"
import './Navbar.css'
import Search from './components/Search/Search'
import Cart from './components/Cart/Cart'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Logout from './components/Logout'
import AdminButton from './components/AdminButton'
import logo from './logo.png'
import { connect } from 'react-redux'
import Profile from './components/Profile';
const Navbar = (props) => {
    return (
        <nav className="navbar navbar-expand-md navbar-custom shadow-lg py-0">
            {props.roles.includes("admin")
                ?
                <AdminButton />
                :
                <Link to="/home" className="m-15" href="#">
                    <img src={logo} className="navbar-logo" alt="logo" />
                </Link>
            }
            <button className="navbar-toggler navbar-light" type="button" data-toggle="collapse" data-target="#navbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse navbar-collapse justify-content-between" id="navbar">
                <ul className="navbar-nav d-flex justify-content-between align-items-lg-start ">
                    <li className="dropdown p-3 nav-item border">
                        <Link to="/listing/guitars" className="nav-link dropdown-toggle" data-toggle="dropdown" role="button">Guitar</Link>
                        <div className="dropdown-menu dropdown-menu-md-right p-3 mt-0" role="menu">
                            <div>
                                <h1 className="dropdown-header">Acoustic</h1>

                                <Link to="/listing/guitars/yamaha" className="dropdown-item font-weight-bolder">Yamaha</Link>
                                <Link to="/listing/guitars/gibson" className="dropdown-item font-weight-bolder">Gibson</Link>
                                <Link to="/listing/guitars/acoumera" className="dropdown-item font-weight-bolder">Acoumera</Link>
                                <h1 className="dropdown-header">Electric</h1>
                                <Link to="/listing/guitars/fender" className="dropdown-item font-weight-bolder">Fender</Link>
                                <Link to="/listing/guitars/ibanez" className="dropdown-item font-weight-bolder">Ibanez</Link>
                                <Link to="/listing/guitars/yamaha" className="dropdown-item font-weight-bolder">Yamaha</Link>
                            </div>
                        </div>
                    </li>
                    <li className="dropdown p-3 nav-item border">
                        <Link to="/listing/synth" className="nav-link dropdown-toggle" data-toggle="dropdown">Synth</Link>
                        <div className="dropdown-menu dropdown-menu-md-right p-3 mt-0">
                            <div>
                                <h1 className="dropdown-header">Analog</h1>
                                <Link to="/listing/synth/Korg" className="dropdown-item font-weight-bolder">Korg</Link>
                                <Link to="/listing/synth/Roland" className="dropdown-item font-weight-bolder">Roland</Link>
                                <Link to="/listing/synth/Yamaha" className="dropdown-item font-weight-bolder">Yamaha</Link>
                            </div>
                        </div>
                    </li>
                </ul>

                <div className="navbar-nav p-3 search-box">
                    <Search />
                </div>

                <ul className="navbar-nav p-2">
                    {props.logged ?
                        <React.Fragment>
                            <Cart />
                            <Profile />
                            <Logout />
                        </React.Fragment> :
                        <React.Fragment>
                            <SignUp />
                            <Login />
                        </React.Fragment>}
                </ul>
            </div>
        </nav>
    );
}

const mapStateToProps = (state) => ({
    logged: state.user.logged,
    roles: state.user.role
})

export default connect(mapStateToProps)(Navbar)