import React from "react";
import './SearchProductCard.css'
import { Link } from "react-router-dom"

const SearchProductCard = (props) => {
    return (  
        <div className="search-card m-2 col-3" onClick={props.onClick}  >
            <Link to={`/product/${props.id}`}>
                <div>
                    <img src={require(`../../../../../images/${props.img}`)} alt=''  />
                </div>
                <div className="d-flex w-100">
                    <p className="m-auto ">{props.brand}</p>
                </div>
                <div className="d-flex w-100">
                    <small className="m-auto ">{props.title}</small>
                </div>
                <div className="d-flex w-100 search-card-price">
                    <p className="m-auto ">${props.price}</p>
                </div>
            </Link>
        </div >
    );
}

export default SearchProductCard