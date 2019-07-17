export default (state = [], action) => {
  let index;
  let quote;

  switch (action.type) {

  // If the action type is ADD_QUOTE, concat that quote onto the state's quotes array!
    case 'ADD_QUOTE':
      return state.concat(action.quote)

  // If the action type is REMOVE_QUOTE, filter that particular quote from the state's quote array!
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id !== action.quoteId)
    
  // If the action type is UPVOTE_QUOTE, increment that particular quotes, votes value!
    case 'UPVOTE_QUOTE':
        //Find the quote to be updated (based on its Id) 
        index = state.findIndex(quote => quote.id === action.quoteId);
        // Store that particular quote as 'quote'
        quote = state[index];
      // Create a new state containing the quote with the corrected amount of votes!
      return [
        ...state.slice(0, index),
        Object.assign({}, quote, { votes: quote.votes += 1 }),
        ...state.slice(index + 1)
      ]

  // If the action type is DOWNVOTE_QUOTE, decrement that particular quotes, votes value!
    case 'DOWNVOTE_QUOTE':
        index = state.findIndex(quote => quote.id === action.quoteId);
        quote = state[index];
        if (quote.votes > 0) {
        return [
          ...state.slice(0, index),
          Object.assign({}, quote, { votes: quote.votes -= 1 }),
          ...state.slice(index + 1)
        ]}
        return state;
    // Set default to return current state if action input type is undefined
    default:
      return state;
  }
}
