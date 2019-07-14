import { addQuote } from '../actions/quotes';
import { removeQuote } from '../actions/quotes';
import { upvoteQuote } from '../actions/quotes';
import { downvoteQuote } from '../actions/quotes';

import uuid from 'uuid';

export default (state = [], action) => {
  switch (action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote];
    case "REMOVE_QUOTE":
      let i = state.findIndex(quote => quote.id === action.quoteId);
      state.splice(i, 1)
      return [...state];
    case "UPVOTE_QUOTE":
      state.find(quote => quote.id === action.quoteId).votes += 1
      return [...state];
    case "DOWNVOTE_QUOTE":
      if (state.find(quote => quote.id === action.quoteId).votes > 0) {
        state.find(quote => quote.id === action.quoteId).votes -= 1
      }
      return [...state];
    default:
      return state;
  }
}
