import React, {Component} from 'react';
import {browserHistory} from 'react-router';

import MyGlobleSetting from './MyGlobleSetting';

class CreateBook extends Component {
  constructor(props){
    super(props);
    this.state = {bookIsbn: '', bookTitle: '', bookImage: '', bookAuthor:'', bookDescription: '', bookPublishedyear: '', bookPublisher: ''};

    this.handleChange1 = this.handleChange1.bind(this);
    this.handleChange2 = this.handleChange2.bind(this);
    this.handleChange3 = this.handleChange3.bind(this);
    this.handleChange4 = this.handleChange4.bind(this);
    this.handleChange5 = this.handleChange5.bind(this);
    this.handleChange6 = this.handleChange6.bind(this);
    this.handleChange7 = this.handleChange7.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange1(e){
    this.setState({
      bookIsbn: e.target.value
    })
  }
  handleChange2(e){
    this.setState({
      bookTitle: e.target.value
    })
  }
  handleChange3(e){
    this.setState({
      bookImage: e.target.value
    })
  }
  handleChange4(e){
    this.setState({
      bookAuthor: e.target.value
    })
  }
  handleChange5(e){
    this.setState({
      bookDescription: e.target.value
    })
  }
  handleChange6(e){
    this.setState({
      bookPublishedyear: e.target.value
    })
  }
  handleChange7(e){
    this.setState({
      bookPublisher: e.target.value
    })
  }
  handleSubmit(e){
    e.preventDefault();
    const books = {
      isbn: this.state.bookIsbn,
      title: this.state.bookTitle,
      image: this.state.bookImage,
      author: this.state.bookAuthor,
      description: this.state.bookDescription,
      published_year: this.state.bookPublishedyear,
      publisher: this.state.bookPublisher
    }
    console.log(books);
    let uri = MyGlobleSetting.url + '/api/books';
    axios.post(uri, books).then((response) => {
      browserHistory.push('/display-item');
    });
  }

    render() {
      return (
      <div className="create-page">
        <div className="row">
          <div className="col-md-10">
            <h3 className="page-title">Create Book</h3>
          </div>
          <div className="col-md-2">

          </div>
        </div>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Book ISBN:</label>
                <input type="text" className="form-control" onChange={this.handleChange1} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Book Title:</label>
                <input type="text" className="form-control" onChange={this.handleChange2} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Book Image:</label>
                <input type="text" className="form-control" onChange={this.handleChange3} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Book Author:</label>
                <input type="text" className="form-control" onChange={this.handleChange4} />
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Book Description:</label>
                <textarea className="form-control" onChange={this.handleChange5}></textarea>
              </div>
            </div>
            <div className="col-md-4">
              <div className="form-group">
                <label>Book Published Year:</label>
                <input type="text" className="form-control" onChange={this.handleChange6} />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="form-group">
                <label>Book Publisher:</label>
                <input type="text" className="form-control" onChange={this.handleChange7} />
              </div>
            </div>
          </div>
          <br />
            <div className="form-group">
              <button className="btn btn-primary">Add Book</button>
            </div>
        </form>
      </div>
      )
    }
}
export default CreateBook;
