import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import $ from "jquery";
import MyGlobleSetting from './MyGlobleSetting';

class LoginBook extends Component {
    constructor(props) {
       super(props);
       this.state = {isLoggedIn: false, user: {}};
     }
     componentDidMount(){

     }

  render(){
    const styles = {
      formformat: {
        backgroundColor:"#f1f1f1",
        padding:15,
        width:"45%"
      }
    };
    return (
      <div className="login-form mx-auto mt-5" style={styles.formformat}>
        <form id="login-form" action=""  method="post">
          <div className="container" id="main">
             <div className="form-group">
                <label htmlFor="email"><b>Email</b></label>
                <input
                  autoComplete="off"
                  id="email-input"
                  name="email"
                  type="text"
                  className="center-block form-control"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password"><b>Password</b></label>
                <input
                  autoComplete="off"
                  id="password-input"
                  name="password"
                  type="password"
                  className="center-block form-control"
                  placeholder="Enter password"
                />
              </div>
              <div className="form-group clearfix">
                <div className="button-container float-right">
                  <button
                    type="submit"
                    className="text-center btn btn-primary mr-2"
                    id="email-login-btn"
                    href="#facebook"
                  >
                   Login
                 </button>
                 <Link className="btn btn-danger" to="/register">
                   Register
                 </Link>
                </div>
             </div>
          </div>
        </form>
      </div>
    )
  }
}
export default LoginBook;
