// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

// Example
// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

//test for an null/empty array, if true return an empty array
//iterate through the array
//count positives, sum negatives

function countPositivesSumNegatives(input) {
    positives = 0
    negatives = 0
    newArray = []
    if (input == null || input.length < 1){
      return newArray
    }else {
      for (let i = 0; i < input.length; i++){
      if(input[i] > 0){
        positives += 1
      }else if (input[i] < 0){
        negatives = negatives + input[i]
      }else if (input.length === 0){
        return newArray
      }
    }
    }
      
    newArray.push(positives)
    newArray.push(negatives)
      
    return newArray;
  }