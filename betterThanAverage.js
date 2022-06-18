// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

// Note:
// Your points are not included in the array of your class's points. For calculating the average point you 
// may add your point to the given array!

//find the average score
//compare our score with the class average and return true  or false based 

//to find average, will need to iterate through the array and add the scores to our score and then divide by number of values

function betterThanAverage(classPoints, yourPoints) {
    let totalPoints = yourPoints
    classPoints.forEach( score => {
      totalPoints += score
    })
    let averagePoints = totalPoints / classPoints.length
    if (yourPoints >= averagePoints){
      return true
    }else return false
  }