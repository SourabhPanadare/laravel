import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
//import TableRow from './TableRow';
import MyGlobleSetting from './MyGlobleSetting';

class DisplayBook extends Component {
  constructor(props) {
       super(props);
       this.state = {value: '', books: ''};
     }
  componentDidMount(){
   axios.get(MyGlobleSetting.url + '/api/books')
   .then(response => {
     this.setState({ books: response.data });
   })
   .catch(function (error) {
     console.log(error);
   })
  }

  handleSubmit(event) {
    event.preventDefault();
    let uri = MyGlobleSetting.url + `/api/books/${this.props.obj.id}`;
    console.log(uri);
    axios.delete(uri);
      browserHistory.push('/display-item');
  }

  render(){
    if(this.state.books instanceof Array){
      var items = this.state.books.map((item) => {
         return(
           <tr>
            <td>{item.isbn}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
            <td align="right">
                  <Link to={"edit/"+item.id} className="btn btn-primary">Edit</Link>
                  <input type="submit" value="Delete" className="btn btn-danger delete-button"/>

             </td>
           </tr>
         )
      });
    }
    return (
      <div className="display-page">
        <div className="row">
          <div className="col-md-10">
            <h3 className="page-title">Simple Crud Using React &amp; Laravel </h3>
          </div>
          <div className="col-md-2">
            <div className="create-button float-right"><Link to="/add-item" className="btn btn-primary">Create Book</Link></div>
          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <table className="table table-hover table-bordered">
              <thead>
              <tr>
                  <td>ISBN</td>
                  <td>Title</td>
                  <td>Author</td>
                  <td width="200px"></td>
              </tr>
              </thead>
              <tbody>
                {items}
              </tbody>
          </table>
        </form>
      </div>
    )
  }
}
export default DisplayBook;
