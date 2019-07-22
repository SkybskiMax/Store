import React from "react";

const OrderItem = (props) => (
    <div className="row px-4 mt-1 mb-4 border rounded justify-content-center">
        <div className="col-12 col-xs-12 col-md-2 text-center">
            <img className="img-responsive mx-auto" src="http://placehold.it/120x80" width="120" height="80" alt="" />
        </div>
        <div className="d-flex col-12 text-xs-center col-xs-12 text-md-left col-md-6">
            <h4 className="align-self-center">{props.title}</h4>
        </div>
        <div className=" col-12 col-xs-12 text-md-center col-md-4 my-auto">
            <h4>{props.price}$</h4>
        </div>
    </div>
)

export default OrderItem;