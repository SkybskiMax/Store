import React from 'react'

const CheckoutCartItem = (props) => {
    return (
        <li className="list-group-item d-flex justify-content-between lh-condensed">
            <div>
                <h6 className="my-0">{props.title}</h6>
                <small className="text-muted">Brief description</small>
            </div>
            <span className="text-muted">${props.price}x{props.quantity}</span>
        </li>
    );
}


export default (CheckoutCartItem)
