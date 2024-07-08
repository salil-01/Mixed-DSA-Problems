/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function(numBottles, numExchange) {
    let total = numBottles;
    while(numBottles >= numExchange){
        let newFilledBottles = Math.floor(numBottles/numExchange);  
        if(numBottles % numExchange === 0){
            // means we can get exchange all the bottles
            total += newFilledBottles;
            numBottles  =  newFilledBottles;
        }else{
            let remainingEmptyBottles = numBottles % numExchange; // remaining empty bottles which can't be exchanged
            total +=  newFilledBottles
            numBottles  =  newFilledBottles + remainingEmptyBottles;
        }
    }
    // console.log(total, numBottles)
    return total;
};