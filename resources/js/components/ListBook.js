import React, {Component} from 'react';
import axios from 'axios';
import { Link } from 'react-router';
import {browserHistory} from 'react-router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import MyGlobleSetting from './MyGlobleSetting';

class ListBook extends Component {
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

     deleteId(event){
       let idValue = event.target.getAttribute('dataid');
       let uri = MyGlobleSetting.url + '/api/books/'+ idValue;
       axios.delete(uri);
       browserHistory.push('/display-item');
     }
  render(){
    if(this.state.books instanceof Array){
      var items = this.state.books.map((item) => {
         return(
           <tr key={item.id}>
              <td>{item.isbn}</td>
              <td>{item.title}</td>
              <td>{item.author}</td>
              <td align="right">
                <Link to={"edit/"+item.id} className="btn btn-primary">Edit</Link>
                <input type="button" value="Delete" className="btn btn-danger delete-button" dataid={item.id} onClick={this.deleteId.bind(this)}/>
              </td>
           </tr>
         )
      });
    }
    return (
      <div className="display-page">
        <table className="table table-hover table-bordered">
            <thead>
            <tr>
                <td>ISBN</td>
                <td>Title</td>
                <td>Author</td>
                <td width="200" className="text-center"><Link to="/add-item" className="btn btn-primary"><FontAwesomeIcon icon="plus" size="lg" inverse/></Link></td>
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
export default ListBook;
