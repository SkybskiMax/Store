import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

const AdminRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={(props) => (
        rest.roles.includes('admin') === true
            ? <Component {...props} />
            : <Redirect to='/login' />
    )} />
)

const mapStateToProps = (state) => ({
    logged: state.user.logged,
    roles: state.user.role
})

export default connect(mapStateToProps)(AdminRoute)