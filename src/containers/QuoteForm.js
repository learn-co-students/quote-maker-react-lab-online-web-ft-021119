import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

// Our Quote form will have a textarea for a quotes content and an input for a quotes author. 
// We will be using component state for updating the inputs so make sure to have a state of { content: '', author: '' } in your QuoteForm constructor.
// You will make a dispatch action to Redux using an action you will create called addQuote() that will take a quote as an argument and start the reducer process.

class QuoteForm extends Component {

  state = {
    content: '',
    author: '' 
  }

  handleOnChange = event => {
    const {name, value} = event.target;
    this.setState({
      [name]: value
    })
    // Handle Updating Component State
  }

  handleOnSubmit = event => {
    event.preventDefault();
    const quote = {...this.state, id: uuid()}
    this.props.addQuote(quote)
    this.setState({
      content: '',
      author: '' 
    })
    // Handle Form Submit event default
    // Create quote object from state
    // Pass quote object to action creator
    // Update component state to return to default state
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                      <textarea
                        className="form-control"
                        name = "content"
                        value={this.state.content}
                        onChange = {this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input
                        className="form-control"
                        type="text"
                        name="author"
                        value={this.state.author}
                        onChange = {this.handleOnChange}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//Dispatching {addQuote}

export default connect(null, {addQuote})(QuoteForm);
