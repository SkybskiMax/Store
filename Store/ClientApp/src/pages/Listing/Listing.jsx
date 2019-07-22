import React from "react"
import ListingFilter from './ListingFilter'
import ListingTable from './components/ListingTable'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchItems from '../../api/fetchItems'
import fetchItemsSearch from '../../api/fetchItemsSearch'
import { getItemsError, getProducts, getItemsPending } from '../../reducers/itemsReducer'
import ReactPaginate from 'react-paginate'

class Listing extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if (this.props.location.pathname == "/searchResults") {
            const { fetchProductsSearch } = this.props
            fetchProductsSearch(this.props.searchText)
        }
        else {
            const { fetchProducts } = this.props;
            fetchProducts(this.props.match.url);
        }
    }

    componentDidUpdate = (prevProps) => {
        if (this.props.match.url !== prevProps.match.url) {
            const { fetchProducts } = this.props;
            fetchProducts(this.props.match.url);
        }
        else if (this.props.location.search !== prevProps.location.search) {
            const { fetchProductsSearch } = this.props
            fetchProductsSearch(this.props.searchText)
        }
    };

    render() {

        const { products } = this.props;
        if (typeof products === "undefined") return <div>Loading..</div>
        return (
            <div className="container mt-5">
                <ListingFilter />
                {/*
                <div className="row bg-product rounded p-4">
                    <div className="d-flex col-md-4 justify-content-end">
                        <ReactPaginate className="row bg-product rounded p-4"
                            previousLabel={'previous'}
                            nextLabel={'next'}
                            breakLabel={'...'}
                            breakClassName={'break-me'}
                            marginPagesDisplayed={2}
                            pageRangeDisplayed={5}
                            containerClassName={'pagination'}
                            subContainerClassName={'pages pagination'}
                            activeClassName={'active'}
                        />
                    </div>
                </div>
                */}
                <ListingTable products={products} />
            </div >
        )
    }
}


const mapStateToProps = state => ({
    error: getItemsError(state),
    products: getProducts(state),
    pending: getItemsPending(state),
    sortBy: state.filters.sortBy,
    searchText: state.search.searchText,
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchProducts: fetchItems,
    fetchProductsSearch: fetchItemsSearch
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Listing);