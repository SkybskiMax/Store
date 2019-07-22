import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import './Register.css'

class Register extends React.Component {
  sendPost = (form) => {
    fetch('http://localhost:57892/api/Account/register', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
        passwordConfirm: form.passwordConfirm,
        rememberMe: false
      }),
    })
      .then((response) => (
        response.status == 200 ?
          this.props.history.push('/home') :
          null
      ));
  }

  render() {
    return (
      <div className="Register">
        <Formik
          initialValues={{
            email: '',
            password: '',
            passwordConfirm: ''
          }}
          validationSchema={Yup.object().shape({
            email: Yup.string()
              .email('Email is invalid')
              .required('Email is required'),
            password: Yup.string()
              .matches(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{6,15})$/, 'Password must be alphanumeric with at least one number, one letter, and be between 6-15 character in length.')
              .required('Password is required'),
            passwordConfirm: Yup.string()
              .oneOf([Yup.ref('password'), null], 'Passwords must match')
              .required('Confirm Password is required')
          })}
          onSubmit={fields => {
            this.sendPost(fields)
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
                <label htmlFor="passwordConfirm">Confirm Password</label>
                <Field name="passwordConfirm" type="password" className={'form-control' + (errors.passwordConfirm && touched.passwordConfirm ? ' is-invalid' : '')} />
                <ErrorMessage name="passwordConfirm" component="div" className="invalid-feedback" />
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary mr-2">Register</button>
                <button type="reset" className="btn btn-secondary">Reset</button>
              </div>
            </Form>
          )}
        />
      </div>)
  }
}
export default Register