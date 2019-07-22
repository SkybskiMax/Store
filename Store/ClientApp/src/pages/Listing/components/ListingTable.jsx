import React from 'react'
import ProductTile from './ProductTile.jsx'


const ListingTable = (props) => {
    return (
        <div className="row bg-product rounded">
            {
                props.products.map(item => {
                    return (
                        <ProductTile
                            key={item.id}
                            id={item.id}
                            brand={item.brand}
                            title={item.title}
                            price={item.price}
                            imgSource={item.imgPath} />
                    );
                }
                )
            }
        </div>
    );
}


export default ListingTable