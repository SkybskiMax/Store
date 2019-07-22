import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import BannerMainImage from '../../images/banner-main.jpg';
import BannerSynthImage from '../../images/banner-synth-cropped.jpg';
import BannerGuitarImage from '../../images/banner-guitar-cropped.jpg';
import BannerDrumsImage from '../../images/banner-drums-cropped.jpg';

const Home = (props) => {
    return (
        <div className="container mt-5">
            <div className="row d-none d-md-flex ">
                <div className="col-md-12 my-3">
                    <img src={BannerMainImage} className="img-fluid rounded" alt="" />
                    <Link to="/listing/synth" className="banner-main-text border">
                        <h2>Get your first pedal station!</h2>
                    </Link>
                </div>
            </div>
            <div className="row">
                <div className="col-md-4 my-3">
                    <Link to="/listing/guitars">
                        <img src={BannerDrumsImage} className="img-fluid rounded" alt="" />
                    </Link>
                </div>
                <div className="col-md-4 my-3">
                    <Link to="/listing/guitars">
                        <img src={BannerGuitarImage} className="img-fluid rounded" alt="" />
                    </Link>
                </div>
                <div className="col-md-4 my-3">
                    <Link to="/listing/synth">
                        <img src={BannerSynthImage} className="img-fluid rounded" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home