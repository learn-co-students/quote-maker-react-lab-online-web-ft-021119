function addQuote(quote) {
  return {
    type: 'ADD_QUOTE',
    quote: {id: quote.id, content: quote.content, author: quote.author, votes: 0}
  }
}

function removeQuote(quoteId) {
  return {
    type: 'REMOVE_QUOTE',
    quoteId: quoteId
  }
}

function upvoteQuote(quoteId) {
  return {
    type: 'UPVOTE_QUOTE',
    quoteId: quoteId
  }
}

function downvoteQuote(quoteId) {
  return {
    type: 'DOWNVOTE_QUOTE',
    quoteId: quoteId
  }
}

export {
  addQuote,
  removeQuote,
  upvoteQuote,
  downvoteQuote
}
