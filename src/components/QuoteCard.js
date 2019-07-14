import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuoteCard extends Component {
  constructor(props) {
    super(props);

  }

  handleOnClickDown = event => {
    let quoteId = event.target.dataset.id
    this.props.downvoteQuote(quoteId)
  }

  handleOnClickUp = event => {
    let quoteId = event.target.dataset.id
    this.props.upvoteQuote(quoteId)
  }

  handleOnClick = event => {
    let quoteId = event.target.dataset.id
    this.props.removeQuote(quoteId)
  }

render() {
  console.log(this.props)
  return (
    <div>
      <div className="card card-inverse card-success card-primary mb-3 text-center">
        <div className="card-block">
          <blockquote className="card-blockquote">
            {<p>{this.props.content}</p>}
            {<footer>- author <cite title="Source Title">{this.props.content}</cite></footer>}
          </blockquote>
        </div>
        <div className="float-right">
          <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
            <button
              type="button"
              className="btn btn-primary"
              data-id={this.props.id}
              onClick={this.handleOnClickUp}
            >
              Upvote
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              data-id={this.props.id}
              onClick={this.handleOnClickDown}
            >
              Downvote
            </button>
            <button
              type="button"
              className="btn btn-danger"
              data-id={this.props.id}
              onClick={this.handleOnClick}
            >
              <span data-id={this.props.id} aria-hidden="true">&times;</span>
            </button>
          </div>
          {<div>Votes: {this.props.votes}</div>}
      </div>
    </div>
  </div>
  )}
}

export default connect()(QuoteCard);
