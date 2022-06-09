function sayHello( name, city, state ) {
  
    let nameStr = name.join(' ')
    return 'Hello, ' + nameStr + '! Welcome to ' + city + ', ' + state + '!'
  }
  
  //name is an array, city and state are strings
  //split the name array into two string variables
  //return firstName, lastName, city, state
  //OR returning the first index of the array, then second index, then city, state
  
  //first error: name array can have more than 2 elements
  //instead join the array elements split out with the space into a new variable