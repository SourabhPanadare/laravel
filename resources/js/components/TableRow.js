import React, { Component } from 'react';
import { Link, browserHistory } from 'react-router';
import MyGlobleSetting from './MyGlobleSetting';

class TableRow extends Component {
  constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/books/${this.props.obj.id}`;
    axios.delete(uri);
      browserHistory.push('/display-item');
  }
  render() {
    return (
        <tr>
          <td>
            {this.props.obj.id}
          </td>
          <td>
            {this.props.obj.isbn}
          </td>
          <td>
            {this.props.obj.title}
          </td>
          <td>
            {this.props.obj.image}
          </td>
          <td>
            {this.props.obj.author}
          </td>
          <td>
            {this.props.obj.description}
          </td>
          <td>
            {this.props.obj.published_year}
          </td>
          <td>
            {this.props.obj.publisher}
          </td>
          <td>
          <form onSubmit={this.handleSubmit}>
            <Link to={"edit/"+this.props.obj.id} className="btn btn-primary">Edit</Link>
           <input type="submit" value="Delete" className="btn btn-danger"/>
         </form>
          </td>
        </tr>
    );
  }
}

export default TableRow;
