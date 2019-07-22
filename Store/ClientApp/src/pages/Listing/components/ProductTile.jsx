import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import InfoIcon from 'react-icons/lib/fa/info'
import AddToCartIcon from 'react-icons/lib/io/plus-circled'
import './ProductTile.css'
import { connect } from 'react-redux'
import { createNotification } from 'react-redux-notify'
import addToCartNotification from '../../../components/Notifications'
import { addToCart } from '../../../actionsCreators/cartActions';


class ProductTile extends Component {
    handleAddToCart = (id) => {
        this.props.addToCart(id)
        this.props.createNotification(addToCartNotification)
    }

    render() {
        return (
            <div className="col-md-4 col-xs-3 p-4 product-box">
                <div>
                    <Link to={`/product/${this.props.id}`} >
                        <img className="img-fluid mx-auto" src={require(`../../../images/${this.props.imgSource}`)} alt="" />
                    </Link>
                    <br />
                    <h2>${this.props.price}</h2>
                    <h2>
                        <Link to={`/product/${this.props.id}`} >{this.props.brand}</Link>
                        <p className='font-italic h4'>
                            {this.props.title}
                        </p>
                    </h2>
                    <br />
                    <p className="text-justify">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
                <br />
                <div className="text-center pb-4">
                    { this.props.logged ? 
                        <button type="button" className="btn btn-primary mx-1" onClick={() => { this.handleAddToCart(this.props.id) }}>
                            <AddToCartIcon /> Add
                        </button>
                        : null
                    }
                    <Link to={`/product/${this.props.id}`} >
                        <button type="button" className="btn btn-primary mx-1"> <InfoIcon /> Info</button>
                    </Link>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    logged: state.user.logged
})

const mapDispatchToProps = (dispatch) => ({
    addToCart: (id) => dispatch(addToCart(id, 1)),
    createNotification: (config) => dispatch(createNotification(config)),
})


export default connect(mapStateToProps, mapDispatchToProps)(ProductTile)