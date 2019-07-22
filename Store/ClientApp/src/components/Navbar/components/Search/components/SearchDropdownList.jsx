import React from "react";
import { connect } from 'react-redux';
import SearchProductCard from './SearchProductCard'


class SearchDropdownList extends React.Component {
    render() {
        if (!this.props.products || this.props.products.length==0) return <div>No such products!</div>
        return (
            <div className='d-flex justify-content-center row ' >
                {this.props.products
                    .map(item => {
                        return (
                            <SearchProductCard
                                key={item.id}
                                id={item.id}
                                brand={item.brand}
                                title={item.title}
                                price={item.price}
                                img={item.imgPath}
                                onClick={this.props.onClick}
                                
                            />
                        );
                    }
                    )
                }
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        searchText: state.search.searchText,
        products: state.search.searchProducts
    }
}

export default connect(mapStateToProps, null)(SearchDropdownList)