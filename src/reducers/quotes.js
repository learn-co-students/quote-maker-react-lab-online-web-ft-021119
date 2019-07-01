export default function quotes(state = [], action) {
  switch (action.type) {
    case 'ADD_QUOTE':
      return  [...state, action.quote];
    
    case 'REMOVE_QUOTE':
      return state.filter(quote => quote.id != action.quoteId)

    case 'UPVOTE_QUOTE':
      let quote = state.find(quote => quote.id == action.quoteId)
      quote.votes += 1
      return state

    case 'DOWNVOTE_QUOTE':
      console.log("quote: ")
      console.log(quote)
      console.log("state: ")
      console.log(state)
      console.log("action: ")
      console.log(action)
      if(state){
        let quote = state.find(quote => quote.id == action.quoteId)
        quote.votes > 0 ? quote.votes -= 1 : quote.votes 
      }
      
      return state

    default:
      return state;
  }
}