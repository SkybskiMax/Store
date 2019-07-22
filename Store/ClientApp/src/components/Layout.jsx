import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import React from 'react'
import { Notify } from 'react-redux-notify';


const Layout = (props) => {
    return (
        <div>
            <Navbar />
            {props.children}
            <Footer />
            <Notify />
        </div>
    )
}

export default Layout