import React from 'react';
import { connect } from 'react-redux';
import { sortBy } from '../../actionsCreators/filterActions'

const ListingFilter = (props) => {
    return (
        <div className="row bg-product rounded p-4">
            <div className="d-flex col-md-4 justify-content-end">
                <div className="form-group">
                    <select className="form-control"
                        value={props.filters.sortBy}
                        onChange={(e) => {
                            props.dispatch(sortBy(e.target.value))
                        }}>>
                            <option value='priceAsc'>Price: lowest first</option>
                        <option value='priceDesc'>Price: highest first</option>
                        <option value='title'>Title</option>
                    </select>
                </div>
            </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ListingFilter);