export default (state = [], action) => {
  console.log(action)

  
  let index;

 switch (action.type){

 case "ADD_QUOTE" :
 console.log("adding a quote")
 return [...state, action.quote]
 case "REMOVE_QUOTE":
 console.log("removing a quote")
 return state.filter(quote => quote.id !== action.quoteId)
 case "UPVOTE_QUOTE":
console.log("upvoting a quote")

 index = state.findIndex(quote => quote.id === action.quoteId)
 return [...state.slice(0, index), Object.assign({}, state[index], {votes: state[index].votes += 1}), ...state.slice(index + 1)];
 case "DOWNVOTE_QUOTE":
 console.log("downvoting quote")

 index = state.findIndex(quote => quote.id === action.quoteId)
 if (state[index].votes > 0){
 return [...state.slice(0, index), Object.assign({}, state[index], {votes: state[index].votes -= 1}), ...state.slice(index + 1)];
}
default:
return state;
}
}