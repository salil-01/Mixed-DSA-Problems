/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var numberOfChild = function(n, k) {
    let currentPos = 0;
    let direction = 1; // 0 for reverse manner 
     
     while(k){
        if(direction){
            currentPos++;
            k--;
            if(currentPos === n-1){
                //reached the last point reverse the direction
                direction = 0;
            }
        }else{
            currentPos--; //position will be substracted in reverse manner 
            k--;
            if(currentPos===0){
                // reverse again we reached the first point
                direction = 1;
            }
        }
     }
     return currentPos;
    //  console.log(currentPos)
};