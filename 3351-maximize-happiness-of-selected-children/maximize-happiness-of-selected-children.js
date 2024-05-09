/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */

// brute force 
var maximumHappinessSum = function(happiness, k) {
    happiness = happiness.sort((a,b)=>b-a);
    let ans = 0;
    
    console.log(happiness)
    for(let i=0; i<k; i++){
        
    
        // if(happiness[i]>0){
            let temp = happiness[i] - i
             if(temp > 0){
                ans += temp
             }
        // }
        
    }
    return ans;
};