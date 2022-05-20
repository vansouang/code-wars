// Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

function between(a, b) {
    // loop from a to b
    // need to push a to an array
    let result = []
    
    for (a; a <= b; a++) result.push(a)
  
    return result
  }
  
  //Learned: pushing values to an array
  //Optimize? Maybe a way to do it without initializing an array variable let result = []