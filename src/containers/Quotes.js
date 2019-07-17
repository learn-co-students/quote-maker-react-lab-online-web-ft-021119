import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
// Import the other actions from your action creators file!
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';

// The Quotes Component will render a list of individual QuoteCard components. 
// It needs to be connected to the Redux state so that it can render the quotes. 
// Also make sure to attach the remove, upvote, and downvote actions from the Quotes Actions file to pass down as 
// callback props to the QuoteCard component.

class Quotes extends Component {

  render() {
    // Make the callback action types accessible to the Quotes Container as props
    const { quotes, removeQuote, upvoteQuote, downvoteQuote } = this.props
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              {/* Map over all quotes and render QuoteCard comp's each containing the quote itself, and the other three action types */}
              {quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={removeQuote} upvoteQuote={upvoteQuote} downvoteQuote={downvoteQuote} />)}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    quotes: state.quotes
  })
}


//add arguments to connect as needed
export default connect(mapStateToProps, { removeQuote, upvoteQuote, downvoteQuote })(Quotes);
// export default connect()(Quotes);
