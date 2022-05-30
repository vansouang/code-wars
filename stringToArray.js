// Write a function to split a string and convert it into an array of words.

// Examples (Input -> Output):
// * "Robin Singh" ==> ["Robin", "Singh"]

// * "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]


//iterate through the array 
//put each word into a separate element
//split() takes a delimiter and puts each word into its own element

// function stringToArray(string){

//     newArray = string.split(" ")
  
//     return newArray 
  
//   }

  //I think return string.split(" ") would work without using newArray variable

  function stringToArray(string){

    return string.split(" ")
  
  }