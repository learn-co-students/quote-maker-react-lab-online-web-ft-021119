export default (state = [], action) => {
  let tempState;
    switch (action.type) {
      case 'ADD_QUOTE':
        const newState = [...state, action.quote]
        return newState;
      case 'UPVOTE_QUOTE':
        tempState = [...state]
        return tempState.map(quote => {
          if (quote.id === action.quoteId) {
            quote.votes++
          }
          return quote;
         })
      case 'DOWNVOTE_QUOTE':
        tempState = [...state];
        return tempState.map(quote => {
          if (quote.id === action.quoteId && quote.votes > 0) {
            quote.votes--;
          }
          return quote;
        })      
      case 'REMOVE_QUOTE':
        tempState = [...state]
        return tempState.filter(quote => quote.id !== action.quoteId);
      default: return state;
    }

    
}
