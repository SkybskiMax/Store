import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './Login.css'
import {connect} from "react-redux"
import login from "../../api/authorization"
import { bindActionCreators } from 'redux';

class Login extends React.Component {
  render() {
    return (
      <div className="Login">
        <Formik
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .matches(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/, 'Incorrect password!')
              .required('Password is required'),
          })}
          onSubmit={fields => {
            this.props.login(fields)
            this.props.history.push('/home')
          }}
          render={({ errors, touched }) => (
            <Form>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                <ErrorMessage name="email" component="div" className="invalid-feedback" />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                <ErrorMessage name="password" component="div" className="invalid-feedback" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Login</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </div>
            </Form>
          )}
        />
      </div>)
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  login: login
}, dispatch)

export default connect(null, mapDispatchToProps)(Login)