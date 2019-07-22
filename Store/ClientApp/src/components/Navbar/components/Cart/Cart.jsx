import React from 'react'
import FaShoppingCartIcon from 'react-icons/lib/fa/shopping-cart'
import CartItem from './components/CartItem'
import { Link } from 'react-router-dom'
import { connect } from "react-redux"
import Badge from '@material-ui/core/Badge';

const Cart = (props) => {
    let hasItems = props.items.length > 0
    let addedItems = hasItems ? (
        <React.Fragment> {
            props.items.map(item =>
                <CartItem
                    key={item.id}
                    item_name={item.title}
                    item_price={item.price}
                    id={item.id}
                    quantity={item.quantity} />)
        }
            <p> Total items in Cart: {props.totalItems}  </p>
            <p> Total: $ {props.total}</p>
        </React.Fragment>
    ) : (
            <div>Cart is empty</div>
        )
    return (
        <li className="dropdown py-3 px-2">
            <Link to="/checkout" className="dropdown-toggle no-text-decoration" data-toggle="dropdown" role="button">
                <Badge badgeContent={props.totalItems} color="error">
                    <FaShoppingCartIcon size={24} />
                </Badge>
            </Link>
            <ul className="dropdown-menu dropdown-cart dropdown-menu-md-right p-3 mt-0">
                {addedItems}

                <Link to="/checkout" className={"btn btn-success item mx-auto " + (hasItems ? "" : "disabled")} color="secondary">
                    Checkout
                </Link>
            </ul>
        </li>
    );
}


const mapStateToProps = (state) => {
    return {
        items: state.cart.addedItems,
        totalItems: state.cart.totalItems,
        total: state.cart.total
    }
}


export default connect(mapStateToProps)(Cart);

