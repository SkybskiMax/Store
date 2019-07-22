import React from 'react';
import './Checkout.css'
import { connect } from 'react-redux'
import CheckoutCartItem from './components/CheckoutCartItem'
import SimpleReactValidator from 'simple-react-validator';

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            address: '',
            zip: '',
            cardName: '',
            cardNumber: Number,
        };
        this.validator = new SimpleReactValidator({ autoForceUpdate: this });
        this.setFirstName = this.setFirstName.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    setFirstName(firstname) {
        this.setState({ firstName: firstname });
    }

    submitForm() {
        if (this.validator.allValid()) {
            alert('You submitted the form and stuff!');
        } else {
            this.validator.showMessages();
            // rerender to show messages for the first time
            // you can use the autoForceUpdate option to do this automatically`
            this.forceUpdate();
        }
    }

    render() {
        return (
            <div className="container bg-white mt-5 ">
                <div className="py-5 text-center">
                    <h2>Checkout</h2>
                </div>

                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-muted">Your cart</span>
                            <span className="badge badge-secondary badge-pill">{this.props.totalItems}</span>
                        </h4>
                        <ul className="list-group mb-3">

                            {this.props.items.map(item => <CheckoutCartItem id={item.id} title={item.title} price={item.price} quantity={item.quantity} />)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${this.props.total}</strong>
                            </li>
                        </ul>
                        <button className="btn btn-primary btn-lg btn-block mt-3" type="submit" onClick={this.submitForm} >Complete order</button>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Shipping address</h4>
                        <form>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>First name</label>
                                    <input type="text" className="form-control" onChange={(e) => this.setFirstName(e)} />
                                    {this.validator.message('first name', this.state.firstName, 'required|alpha')}
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Last name</label>
                                    <input type="text" className="form-control" />
                                    {this.validator.message('last name', this.state.firstName, 'required|alpha')}
                                </div>
                            </div>

                            <div className="mb-3">
                                <label>Email <span className="text-muted">(Optional)</span></label>
                                <input type="email" className="form-control" placeholder="you@example.com" />
                            </div>

                            <div className="mb-3">
                                <label>Address</label>
                                <input type="text" className="form-control" placeholder="1234 Main St" />
                            </div>

                            <div className="row">
                                <div className="col-md-5 mb-3">
                                    <label>Country</label>
                                    <select className="form-control d-block w-100">
                                        <option value="">Choose...</option>
                                        <option>Belarus</option>
                                    </select>
                                </div>
                                <div className="col-md-4 mb-3">
                                    <label>City</label>
                                    <select className="form-control d-block w-100 ">
                                        <option value="">Choose...</option>
                                        <option>Minsk</option>
                                    </select>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label>Zip</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>

                            <h4 className="mb-3">Payment</h4>

                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label>Name on card</label>
                                    <input type="text" className="form-control" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label>Credit card number</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label>Expiration</label>
                                    <input type="text" className="form-control" />

                                </div>
                                <div className="col-md-3 mb-3">
                                    <label>CVV</label>
                                    <input type="text" className="form-control" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        items: state.cart.addedItems,
        total: state.cart.total,
        totalItems: state.cart.totalItems
    }
}

export default connect(mapStateToProps)(Checkout)