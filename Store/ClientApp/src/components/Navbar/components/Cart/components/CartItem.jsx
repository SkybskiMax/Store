import React, {Component} from 'react';
import { connect } from 'react-redux'
import { removeFromCart } from '..//..//..//..//..//actionsCreators/cartActions'

class CartItem extends Component {
    handleRemove = (id) => {
        this.props.removeFromCart(id);
    }
    render() {
        return (

            <div className="row d-flex justify-content-center my-2">
                <div className="d-flex col-2 justify-content-center">
                    <img src="https://via.placeholder.com/30x40" className="" alt="img" />
                </div>
                <div className="d-flex col-8 justify-content-start">
                    <div className="font-weight-bold">
                        {this.props.item_name}
                        <br />
                        ${this.props.item_price}
                        x{this.props.quantity}
                    </div>
                </div>
                <div className="d-flex col-2 justify-content-center">
                    <button className="btn btn-xs btn-danger" onClick={() => { this.handleRemove(this.props.id) }} >x</button>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.cart.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeFromCart: (id) => { dispatch(removeFromCart(id)) }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CartItem);


