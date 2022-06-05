// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"


function nameShuffler(str){
    //put the name into an array separated by the space
    //reverse the array
    //convert the array back into a string
    //return
    
   // str.split(" ").reverse().join(" ")
  //  str.reverse()
    //str.join(" ")
    return str.split(" ").reverse().join(" ")
  }