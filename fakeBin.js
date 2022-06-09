function fakeBin(x){
    let resultString = ''
    
    for (let i = 0; i < x.length; i++){
      
    if (Number(x[i]) < 5) resultString += '0'
    else resultString += '1'
      
    }
    
    return resultString
  }
  
  //create a null string variable
  //loop through the input string
  //conditional less than 5 push '0' else push '1' to the new string
  //return result