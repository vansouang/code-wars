const rps = (p1, p2) => {
    // rock beats scissors
    // scissors beats paper
    //paper beats rock
    //if p1 == p2 its a a draw
    
    if (p1 === 'rock' && p2 === 'scissors'){
      return 'Player 1 won!'
    }else if (p1 === 'scissors' && p2 === 'paper'){
      return 'Player 1 won!'
    }else if (p1 === 'paper' && p2 === 'rock'){
      return 'Player 1 won!'
    }else if (p1 === p2){
      return 'Draw!'
    }else return 'Player 2 won!'
  };