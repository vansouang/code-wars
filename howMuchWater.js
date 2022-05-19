function howMuchWater(water, load, clothes){
    if (clothes > load * 2) return 'Too much clothes'
    else if (clothes < load) return 'Not enough clothes'
    else return +(water * 1.1 ** (clothes - load)).toFixed(2)
}



//ORIGINAL SOLUTION:
// function howMuchWater(water, load, clothes){
  
//     let result = 0
//     if (clothes > load * 2) return 'Too much clothes'
//     else if (clothes < load) return 'Not enough clothes'
//     else {
//       result = (water * 1.1**(clothes - load)).toFixed(2)
//     }
//     return Number(result) 
//   }
  
//Lesson Learned: how to decipher a poorly worded coding challenge and how to round to 2 decimals
//Optimization: When you revisit this code, there is probably a better way to round and dont have to use the result variable

//NOTES:
  //max load = 2 * load
  //min load = load
  //formula water * 1.1**(clothes - load)
  //Number.parseFloat(water * 1.1**(clothes - load)).toFixed(2) this didnt work, kept returning a string
    
  //test if the load is over max or under min
  //if true return too much or not enough clothes
  //if false, return the result in 2 decimals

//Problem:
// My washing machine uses water amount of water to wash load (in JavaScript and Python) or max_load (in Ruby) amount of clothes. You are given a clothes amount of clothes to wash. For each single item of clothes above the load, the washing machine will use 10% more water (multiplicative) to clean.

// For example, if the load is 10, the amount of water it requires is 5 and the amount of clothes to wash is 14, then you need 5 * 1.1 ^ (14 - 10) amount of water.

// Write a function howMuchWater (JS)/how_much_water (Python and Ruby) to work out how much water is needed if you have a clothes amount of clothes. The function will accept 3 arguments: - water, load (or max_loadin Ruby) and clothes.

// My washing machine is an old model that can only handle double the amount of load (or max_load). If the amount of clothes is more than 2 times the standard amount of load (max_load), return 'Too much clothes'. The washing machine also cannot handle any amount of clothes less than load (max_load). If that is the case, return 'Not enough clothes'.

// The answer should be rounded to the nearest 2 decimal places.

