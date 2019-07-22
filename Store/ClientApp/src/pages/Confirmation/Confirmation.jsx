import React from "react";
import OrderItem from './components/OrderItem';
import OrderDetails from './components/OrderDetails';
import { Link } from 'react-router-dom'

const Confirmation = () => (
    <div className="container mt-5">
        <div className="row bg-product rounded">

            <div className="col-md-12 py-1">
                <div className="col-12 text-center">
                    <h1> Order information! </h1>
                </div>
            </div>

            <div className="col-md-12 pb-5">
                <div className="col-12 text-center">
                    <span className="monospaced">No. 1960140180</span>
                </div>
            </div>

            <div className="col-md-12">
                <OrderItem title="Test" price="25"/>
                <OrderItem />
                <OrderItem />
            </div>

            <div className="col-md-12">
                <OrderDetails />
            </div>

            <div className="col-md-12 py-4">
                <div className="col-12 text-center">
                    <Link to="/home" className="btn btn-success btn-lg btn-block" type="submit">Continue shopping</Link>
                </div>
            </div>
        </div>
    </div>
)

export default Confirmation;