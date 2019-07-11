
export default (state = [], action) => {
  switch(action.type){

 	case 'ADD_QUOTE':
 		const newState = [...state, action.quote]
 		return newState;
	  // case 'ADD_QUOTE':
   //    return state.concat(action.quote);

 	case 'REMOVE_QUOTE':
 		return state.filter(quote => quote.id !== action.quoteId)

 	case 'UPVOTE_QUOTE':

 	let tempState2 = [...state]
 	return tempState2.map(quote => {
 		if (quote.id === action.quoteId){
 			quote.votes++
 		}
 		return quote
 	})

 	case 'DOWNVOTE_QUOTE':
 	let	tempState = [...state]
 	let quotesA = tempState.map(quote => {
 		if (quote.id === action.quoteId &&  quote.votes > 0){
 			quote.votes--
 		}
 		return quote
 	})
 	// index = state.findIndex(quote => quote.id === action.id)
 	// 	 return state;
 	
 	// index = state.findIndex(quote => quote.id === action.id)
 	// 	 return state;
 	default: 
 	return state;	
  }
  
}
