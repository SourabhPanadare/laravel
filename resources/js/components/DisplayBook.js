import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import TableRow from './TableRow';
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

  render(){
    if(this.state.books instanceof Array){
      var items = this.state.books.map((item) => {
         return(
           <tr>
            <td>{item.isbn}</td>
            <td>{item.title}</td>
            <td>{item.author}</td>
           </tr>
         )
      });
    }
    return (
      <div>
        <h1>Books</h1>

        <div className="row">
          <div className="col-md-10"></div>
          <div className="col-md-2">
            <Link to="/add-item">Create Book</Link>
          </div>
        </div><br />

        <table className="table table-hover">
            <thead>
            <tr>
                <td>ISBN</td>
                <td>Title</td>
                <td>Author</td>
                <td width="200px">Actions</td>
            </tr>
            </thead>
            <tbody>
              {items}
            </tbody>
        </table>
    </div>
    )
  }
}
export default DisplayBook;
