import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import { reducer as formReducer,reduxForm,Field } from 'redux-form';
import MyGlobleSetting from './MyGlobleSetting';

class LoginBook extends Component {
    constructor(props) {
       super(props);
       this.state = {value: '', users: ''};
     }
     componentDidMount(){
       axios.get(MyGlobleSetting.url + '/api/users')
       .then(response => {
         this.setState({ users: response.data });
       })
       .catch(function (error) {
         console.log(error);
       })
     }
  render(){
    return (
      <div className="container mt-5">
         <div className="row justify-content-center">
             <div className="col-6">
                 <div className="card">
                     <div className="card-body">
                     <h2 className="text-center font-weight-light mb-4">Sign into your account</h2>
                         <form onSubmit={this.handleSubmit}>
                             <Field
                                 label="Email Address"
                                 name="email"
                                 component={FormField}
                                 id="email"
                                 type="text"
                                 className="form-control"
                             />
                             <Field label="Password" name="password" component={FormField} id="password" type="password" className="form-control" />
                             <div className="form-check">
                                 <label className="form-check-label">
                                     <Field name="remember" component="input" type="checkbox" className="form-check-input mt-2" value="1" />
                                     Remember me
                                 </label>
                             </div>
                             <div className="form-group mt-4">
                                 <button type="submit" className="btn btn-secondary">Login</button>
                             </div>
                         </form>
                     </div>
                 </div>
             </div>
         </div>
     </div>
    )
  }
}
export default LoginBook;
