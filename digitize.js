// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]
// 0 => [0]

//convert the number to a string
//convert the string to an array
//reverse the array
//iterate through the array and convert elements to digits


function digitize(n) {
    return String(n).split('').reverse().map(Number)
  }