/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function(customers, grumpy, minutes) {
    // intial, which are not satisfied
    let initial = 0;
    for(let i=0; i<minutes; i++){
      if(grumpy[i]){
        initial += customers[i]
      }  
    }

    let max = initial;

    for(let i=minutes; i<customers.length; i++){
        // add the new one added in window
        initial += customers[i] * grumpy[i];
        // remove the last one 
        initial -= customers[i-minutes] * grumpy[i-minutes];
        max = Math.max(initial,max)
    }

    let total = max;
    // console.log(total)
    for(let i=0; i<customers.length; i++){
        if(grumpy[i]===0){
            total += customers[i];
        }
    }
    // console.log(total)
    return total;

};