/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */

// brute force 
var maximumHappinessSum = function(happiness, k) {
    happiness = happiness.sort((a,b)=>b-a);
    let ans = 0;
    for(let i=0; i<k; i++){
        ans += Math.max(happiness[i]-i,0)    
    }
    return ans;
};