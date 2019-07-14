import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

class Quotes extends Component {

// removeQuote = () => {
//   this.props.removeQuote
// }

  render() {
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
              /*
                Render Quotes With QuoteCard component and pass down callback props for removing, upvoting and downvoting quotes
               */
               {this.props.quotes.map((quote) => {
                 console.log(quote)
                 console.log(this.props.removeQuote)
                 return <QuoteCard id={quote.id} content={quote.content} author={quote.author} votes={quote.votes} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote}/>
               })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {quotes: state.quotes}
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeQuote: quote => dispatch(removeQuote(quote)),
    upvoteQuote: quote => dispatch(upvoteQuote(quote)),
    downvoteQuote: quote => dispatch(downvoteQuote(quote))
  }
}

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
