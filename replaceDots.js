// The code provided is supposed replace all the dots . in the specified String str with dashes -

// But it's not working properly.

// Task
// Fix the bug so we can all go home early.

// Notes
// String str will never be null.

//split the string into an array seperated by the '.'
//join them back into a string with '-'


var replaceDots = function(str) {
    return str.split('.').join('-')
  }