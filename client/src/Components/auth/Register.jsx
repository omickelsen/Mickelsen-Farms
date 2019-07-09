// import React, { Fragment, useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//     password2: ''
//   });

//   const { name, email, password, password2 } = formData;

//   const onChange = e => setFormData ({ ...formData, [e.target.name]: e.target.value});

//   const onSubmit = async e => {
//     e.preventDefault();
//     if(password !== password2) {
//       console.log('Passwords do not match');
//     } else {
//         console.log('Success');
      
//       // const newUser = {
//       //   name,
//       //   email,
//       //   password
//       // }
//       // try {
//       //   const config = {
//       //     headers: {
//       //       'Content-Type': 'Application/json'
//       //     }
//       //   }

//       //   const body = JSON.stringify(newUser);

//       //   const res = await axios.post('/api/users', body, config);
//       //     console.log(res.data);
        
//       // } catch (err) {
//       //     console.log(err.response.data);
          
//       // }
//     }
//   }

//   return(
//     <Fragment>
//       <div className='register' id='register'>
//           <div className="row">
//             <div className="col-md-8 m-auto">
//               <h4 className="display-4 text-center">Sign Up</h4>
//               <p className="lead text-center">Create your User account</p>
//               <form className='form' onSubmit={e => onSubmit(e)}>
//                 <div className="form-group">
//                   <input type="text" className="form-control form-control-lg" placeholder="Name" name="name" value={name} onChange={e=> onChange(e)} required />
//                 </div>
//                 <div className="form-group">
//                   <input type="email" className="form-control form-control-lg" placeholder="Email Address" name="email" value={email} onChange={e=> onChange(e)} required />
//                 </div>
//                 <div className="form-group">
//                   <input type="password" className="form-control form-control-lg" placeholder="Password" name="password" value={password} onChange={e=> onChange(e)} required/>
//                 </div>
//                 <div className="form-group">
//                   <input type="password" className="form-control form-control-lg" placeholder="Confirm Password" name="password2" value={password2} onChange={e=> onChange(e)} required/>
//                 </div>
//                 <input type="submit" className="btn btn-primary" value="Register" />
//               </form>
//               <p className='my-1'>
//                 Already have an account? <a href='#login'>Sign In</a>
//               </p>
//             </div>
//           </div>
//       </div>
//     </Fragment>
//   )
// }

// export default Register