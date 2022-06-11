//conditional at the second index of the string to check for the shape
//return shape based on the index


function defineSuit(card) {
    switch (card[card.length-1]){
        case '♣': return 'clubs'
        case '♦': return 'diamonds'
        case '♥': return 'hearts'
        case '♠': return 'spades'
        
    }
      
  }