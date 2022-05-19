function howMuchWater(water, load, clothes){
  
    let result = 0
    if (clothes > load * 2) return 'Too much clothes'
    else if (clothes < load) return 'Not enough clothes'
    else {
      result = (water * 1.1**(clothes - load)).toFixed(2)
    }
    return Number(result) 
  }
  
//Lesson Learned: how to round to 2 decimal places
//Optimization: When you revisit this code, there is probably a better way to round and dont have to use the result variable

  //max load = 2 * load
  //min load = load
  //formula water * 1.1**(clothes - load)
  //Number.parseFloat(water * 1.1**(clothes - load)).toFixed(2)
    
  //test if the load is over max or under min
    
  //if true return too much or not enough clothes
    
  //if false, return the result in 2 decimals