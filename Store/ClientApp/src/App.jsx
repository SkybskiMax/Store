import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import AdminRoute from './routes/AdminRoute'
import Layout from './components/Layout'
import Home from './pages/Home/Home'
import Confirmation from './pages/Confirmation/Confirmation'
import Product from './pages/Product/Product'
import ListingWrapper from './components/HOC/ListingWrapper'
import Listing from './pages/Listing/Listing'
import Profile from './pages/Profile/Profile'
import fetchItems from './api/fetchItems';
import Checkout from './pages/Checkout/Checkout'
import Register from './components/Register/Register'
import './App.css'
import 'react-redux-notify/dist/ReactReduxNotify.css'
import Login from './components/Login/Login'
import fetchTokenData from './api/fetchTokenData'
import fetchItemsSearch from './api/fetchItemsSearch'

class App extends React.Component {

  componentWillMount() {
    let token = localStorage.getItem("token")
    if (token) 
      this.props.fetchTokenData(token)
  }

  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/listing/:category?/:brand?" component={Listing} />
          <Route path="/searchResults" component={Listing} />
          <Route path="/confirmation" component={Confirmation} />
          <Route path="/product/:id" component={Product} />
          <Route path="/profile" component={Profile} />
          <Route path="/checkout" component={Checkout} />
          <AdminRoute path="/admin" component={Confirmation} /> {/*TBD*/}
        </Layout>
        <Route exact path="/(register)" component={Register} />
        <Route exact path="/(login)" component={Login} />
      </Router>
    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  fetchTokenData: fetchTokenData
}, dispatch)


export default connect(null, mapDispatchToProps)(App)

