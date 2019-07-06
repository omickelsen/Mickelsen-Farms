import React, { Fragment, useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => setFormData ({ ...formData, [e.target.name]: e.target.value});

  const onSubmit = async e => {
    e.preventDefault();
        console.log('Success');
  }

  return(
    <Fragment>
      <div className='login' id='login'>
          <div className="row">
            <div className="col-md-8 m-auto">
              <h4 className="display-4 text-center">Sign In</h4>
              <p className="lead text-center">Sign into your account</p>
              <form className='form' onSubmit={e => onSubmit(e)}>
                <div className="form-group">
                  <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={e=> onChange(e)} required />
                </div>
                <div className="form-group">
                  <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={password} onChange={e=> onChange(e)} required/>
                </div>
                <input type="submit" className="btn btn-primary" value="Login" />
              </form>
              <p className='my-1'>
                Don't have an account? <a href='#register'>Create Account</a>
              </p>
            </div>
          </div>
      </div>
    </Fragment>
  )
}

export default Login