import React from "react"
import { apiBaseUrl } from "../../constants/ApiUrl"
import queryString from 'query-string'

export default function ListingWrapper(WrappedComponent, fetch) {
    return class Wrapper extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }

        componentDidMount() {
            const query = queryString.parse(this.props.location.search)
            if (this.props.match.path == "/searchResults") {
                fetch(query.search).then((res) => this.setState({ data: res }))
            }
            else {
                fetch(this.props.match.url).then((res) => this.setState({ data: res }))
            }
        }

        componentDidUpdate = (prevProps) => {
            const query = queryString.parse(this.props.location.search)
            if (this.props.location.search !== prevProps.location.search) {
                fetch(query.search).then((res) => this.setState({ data: res }))
            };
            if (this.props.match.url !== prevProps.match.url)
            {
                fetch(this.props.match.url).then((res) => this.setState({ data: res }))
            }
        };

        render() {
            if (this.state.data.length == 0) return null
            return <WrappedComponent products={this.state.data} {...this.props} />;
        }
    };
}