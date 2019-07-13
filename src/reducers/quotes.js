export default (state = [], action) => {
  let quoteId, newQuotes
  if (action.quoteId) {quoteId = action.quoteId}
  switch(action.type) {
    case "ADD_QUOTE":
      return [...state, action.quote]

    case "REMOVE_QUOTE":
      newQuotes = state.filter(quote => quote.id !== quoteId)
      return newQuotes

    case "UPVOTE_QUOTE":
      newQuotes = state.map(quote => {
        if (quote.id === quoteId) {
          quote.votes++
        }
        return quote
      })
      return newQuotes

    case "DOWNVOTE_QUOTE":
      newQuotes = state.map(quote => {
        if (quote.id === quoteId && quote.votes > 0) {
          quote.votes--
        }
        return quote
      })
      return newQuotes

    default:
      return state
  }
  
}
