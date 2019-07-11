export default (state = [], action) => {
  switch(action.type){

  case 'ADD_QUOTE':
    let newState = [...state, action.quote]
    return newState;

  case 'REMOVE_QUOTE':
    newState = state.filter(quote => quote.id !== action.quoteId)
    return newState;

  case 'UPVOTE_QUOTE':
    newState = [...state]
    let quote = newState.find(quote => quote.id === action.quoteId)
    quote.votes++
    return newState;

  case 'DOWNVOTE_QUOTE':
    newState = [...state]
    quote = newState.find(quote => quote.id === action.quoteId)
    if (quote.votes === 0) {
      return state
    } else {
      quote.votes--
      return newState
    }

  default:
    return state

  }

}
