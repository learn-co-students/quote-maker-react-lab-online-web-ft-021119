export default (state = [], action) => {
  switch (action.type){
    case 'ADD_QUOTE':
      const newState = [...state, action.quote]
      return newState
    case 'REMOVE_QUOTE':
      const tempState = [...state]
      return tempState.filter(quote => quote.id !== action.quoteId)
    // case 'UPVOTE_QUOTE':
    //   const addUpvoteState = [...state]
    //   const quote = addUpvoteState.find(quote => quote.id === action.quoteId)
    //   quote.votes++
    //   return [...addUpvoteState]
    case 'UPVOTE_QUOTE':
      const addUpvoteState = [...state]
      const quotes = addUpvoteState.map(quote => {
        if (quote.id === action.quoteId){
          quote.votes++
        }
        return quote
      })
      return quotes

    case 'DOWNVOTE_QUOTE':
      const addDownvoteState = [...state]
      const quotesdown = addDownvoteState.map(quote => {
        if (quote.id === action.quoteId && quote.votes > 0 ){
          quote.votes--
        }
        return quote
      })
      return quotesdown
    default:
      return state;
  }
}
