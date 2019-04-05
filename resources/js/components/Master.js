import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';

class Master extends Component {
  render(){
    return (
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-default bg-primary">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand text-white" href="http://sourabhportfolio.in">Sourabh Portfolio</a>
            </div>
            <ul className="nav navbar-nav">
              <li className="nav-item"><Link className="nav-link text-white" to="/">Home</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="add-item">Create Book</Link></li>
              <li className="nav-item"><Link className="nav-link text-white" to="display-item">Books</Link></li>
            </ul>
          </div>
      </nav>
          <div>
              {this.props.children}
          </div>
      </div>
    )
  }
}
export default Master;
