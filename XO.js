// Check to see if a string has the same amount of 'x's and 'o's. 
// The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

//set all the input to lower case or upper
//iterate through the string and count 'x' and 'o'

//compare if number of 'x' equals number of 'o'

function XO(str) {
    str = str.toLowerCase()
    
    let xcount = 0
    let ocount = 0
    
    for (let i = 0; i < str.length; i++){
      if(str.charAt(i) === 'x'){
        xcount += 1
    }else if (str.charAt(i) === 'o'){
      ocount += 1
    }
    }  
    if(xcount === ocount){
      return true
    }else{
      return false
    
    }
  }