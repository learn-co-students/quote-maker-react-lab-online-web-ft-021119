import React, { Component } from 'react';
import { connect } from 'react-redux';
import QuoteCard from '../components/QuoteCard';
import {upvoteQuote,downvoteQuote,removeQuote} from '../actions/quotes';
class Quotes extends Component {

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
              {this.props.quotes.map(quote=>(
                <QuoteCard 
                content={quote.content}
                author={quote.author}
                votes={quote.votes}
                upVote={(id) => this.props.upvote(quote.id)}
                downVote={(id)=> this.props.downvote(quote.id)}
                removeVote={(id) => this.props.remove(quote.id)}


                  />



                ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps =({quotes})=>({quotes})


const mapDispatchToProps = (dispatch) => ({
  upvote: (id) => dispatch(upvoteQuote(id)),
  downvote: (id) => dispatch(downvoteQuote(id)),
  remove: (id) => dispatch(removeQuote(id))
})

//add arguments to connect as needed
export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
