/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // if(x>0 && n==0){
    //     return 1
    // }
    // if(Math.sign(n)===-1){
    //     // for negative power
    //     let val = 1/x;
    //     n = Math.abs(n)
    //     while(n>1){
    //         val = val * 1/x;
    //         n--
    //     }
    //     return val
    // }else{
    //     // for positive power
    //     let val = x;
    //     while(n>1){
    //         val = val * x;
    //         n--
    //     }
    //     return val
    // }
    return x**n;
    
};
