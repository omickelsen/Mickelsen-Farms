import React, { Fragment, useState } from 'react'

const Login = () => {
  return(
      <Fragment>
        <div className='login' id='login'>
            <div className="row">
                <div className="col-md-8 m-auto">
                <h4 className="display-4 text-center">Log In</h4>
                <p className="lead text-center">Sign in to your account</p>
                <form action="dashboard.html">
                    <div className="form-group">
                    <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" />
                    </div>
                    <div className="form-group">
                    <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" />
                    </div>
                    <input type="submit" className="btn btn-info btn-block mt-4" />
                </form>
                </div>
            </div>
        </div>
      </Fragment>
  )
}

export default Login