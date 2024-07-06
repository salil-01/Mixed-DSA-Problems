/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
    let currentPos = 1;
    let direction = 1; // 0 for reverse manner 
     
     while(time){
        if(direction){
            currentPos++;
            time--;
            if(currentPos === n){
                direction = 0;
            }
        }else{
            currentPos--;
            time--
            if(currentPos===1){
                direction = 1;
            }
        }
     }
     return currentPos;
     console.log(currentPos)
};