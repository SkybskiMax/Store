import React from 'react';
import './Footer.css';
import SkypeIcon from 'react-icons/lib/fa/skype';
import VkIcon from 'react-icons/lib/fa/vk';
import TwitterIcon from 'react-icons/lib/fa/twitter';
import SlackIcon from 'react-icons/lib/fa/slack';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="container-fluid py-3 bg-dark text-white mt-4">
        <div className="row ">
            <div className="col-md-12 ">
                <p className="text-center"> Copyright 2019 - iTechArt <br />  All rights reserved.</p>
                <div className="text-center">
                    <Link to="/home" className="no-text-decoration"> <SkypeIcon size={24} /> </Link>
                    <Link to="/home" className="no-text-decoration"> <TwitterIcon size={24} /></Link>
                    <Link to="/home" className="no-text-decoration"> <VkIcon size={24} /> </Link>
                    <Link to="/home" className="no-text-decoration"> <SlackIcon size={24} /></Link>
                </div>
            </div>
        </div>
    </footer>
)



export default Footer