import React from 'react';
import SearchIcon from 'react-icons/lib/fa/search';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom'
import SearchDropdownList from './components/SearchDropdownList'
import searchApi from '../../../../api/search'
import './Search.css'

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.onFocus = this.onFocus.bind(this)
        this.onBlur = this.onBlur.bind(this)
    }

    onFocus() {
        this.setState({ isVisible: true })
    }

    onBlur() {
        this.setState({ isVisible: false })
    }

    componentDidMount() {
        this.props.search("")
    }

    handleChange(e) {
        this.props.search(e.target.value)
    }

    render() {
        return (
            <div className="input-group"
                onFocus={this.onFocus}
                onBlur={this.onBlur}>
                <input type="text" className="form-control" placeholder="Search this instrument"
                    onChange={(e) => this.handleChange(e)}
                />
                <ul className={"sb-dropdown rounded " + (this.state.isVisible ? '' : ' d-none')} >
                    <SearchDropdownList />
                </ul>
                <div className="input-group-append">
                    <Link to={`/searchResults?search=${this.props.searchText}`}>
                        <button className="btn btn-secondary" type="submit button">
                            <SearchIcon />
                        </button>
                    </Link>
                </div>
            </div >
        );
    }
}

const mapStateToProps = (state) => {
    return {
        searchText: state.search.searchText
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
    search: searchApi
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Search)