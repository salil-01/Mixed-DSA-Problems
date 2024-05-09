/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function(happiness, k) {
    happiness = happiness.sort((a,b)=>b-a);
    let ans = 0;
    for(let i=0; i<k; i++){
      ans += Math.max(happiness[i] - i, 0)
    }
    return ans;
};

// brute force 
// var maximumHappinessSum = function(happiness, k) {
//     happiness = happiness.sort((a,b)=>b-a);
//     let ans = 0;
//     for(let i=0; i<k; i++){
//         ans += happiness[0];
//         happiness.shift();
//         for(let j=0; j<happiness.length; j++){
//             if(happiness[j]>0){
//                 happiness[j] = happiness[j] - 1; 
//             }else{
//                 break;
//             }
//         }
//     }
//     return ans;
// };