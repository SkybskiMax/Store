import React, { Component } from "react"
import PlusIcon from 'react-icons/lib/fa/plus'
import MinusIcon from 'react-icons/lib/fa/minus'
import FaShoppingBagIcon from 'react-icons/lib/fa/cart-plus'
import { connect } from 'react-redux'
import { addToCart, increment, decrement } from '..//..//actionsCreators/cartActions'
import { createNotification } from 'react-redux-notify'
import addToCartNotification from '..//..//components/Notifications'
import fetchItemById from '..//../api/fetchItemById'
import './Product.css'
import { getItemsPending } from '../../reducers/itemsReducer';

class Product extends Component {

    handleAddToCart = (id, count) => {
        this.props.addToCart(id, count);
        this.props.createNotification(addToCartNotification);
    }

    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    componentDidMount() {
        this.props.fetchItemById(this.props.match.params.id)
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.url !== prevProps.match.url) {
            this.props.fetchItemById(this.props.match.params.id)
        };
    };

    shouldComponentRender() {
        if (this.props.pending === true) return false;
        return true;
    }

    render() {

        const { item } = this.props;
        if (!this.shouldComponentRender() || typeof item === "undefined") return <div>Loading..</div>

        return (

            <div className="container mt-5">
                <div className="row bg-product rounded">
                    <div className="col-md-6 py-4 d-flex align-items-center justify-content-center">
                        <img src={require(`../../images/${item.imgPath}`)} alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 py-4 bg-light">
                        <div className="row">
                            <div className="col-md-12">
                                <h2>{item.brand}</h2>
                                <h4>{item.title}</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <span className="monospaced">No. {item.id}</span>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <p className="description">
                                    {item.description}
                                </p>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-12">
                                <h3>${item.price}</h3>
                            </div>
                        </div>
                        {this.props.logged ?
                        <div className="row ">
                            <div className="col-md-6 my-2">
                                <div className="input-group">
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-number border " disabled={!this.props.count >= 1} onClick={this.decrement}>
                                            <MinusIcon />
                                        </button>
                                    </span>
                                    <input type="text" className="form-control input-number" value={this.props.count} />
                                    <span className="input-group-btn">
                                        <button type="button" className="btn btn-default btn-number border " onClick={this.increment}>
                                            <PlusIcon />
                                        </button>
                                    </span>
                                </div>
                            </div>
                            <div className="col-md-6 my-2 my-auto">
                                <button>
                                    <FaShoppingBagIcon onClick={() => { this.handleAddToCart(item.id, this.props.count) }} size={32} />
                                </button >
                            </div>
                        </div>
                        : null
                        }

                        <div className="tab-content">
                            <div className="tab-pane container active" id="home">
                                Lorem Ipsum is simply dummy text
                                of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                                dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled
                                it to make a type specimen book. It has survived not only five centuries, but also the leap int
                                o electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with
                                the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
                                publishing software like Aldus PageMaker including versions of Lorem Ipsum
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id, count) => dispatch(addToCart(id, count)),
    createNotification: (config) => dispatch(createNotification(config)),
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    fetchItemById: (id) => dispatch(fetchItemById(id))
})


const mapStateToProps = (state) => ({
    logged: state.user.logged,
    count: state.cart.counter,
    item: state.fetchedProducts.currentProduct,
    pending: getItemsPending(state),
})

export default connect(mapStateToProps, mapDispatchToProps)(Product);