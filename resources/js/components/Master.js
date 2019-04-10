import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Master extends Component {
  render(){
    return (
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-default bg-primary row">
            <div className="navbar-header">
              <a className="navbar-brand text-white" href="">Book Keeping</a>
            </div>
            <div className="ml-auto text-white">
              <FontAwesomeIcon icon="sign-out-alt" size="lg" inverse/> Logout
            </div>
            <ul className="nav navbar-nav d-none">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="add-item">Create Book</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="display-item">Books</Link></li>
            </ul>
        </nav>
        <div>
            {this.props.children}
        </div>
      </div>
    )
  }
}
export default Master;
