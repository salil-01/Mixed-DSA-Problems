/**
 * @param {number[]} nums
 * @return {number}
 */
var minIncrementForUnique = function(nums) {
    nums = nums.sort((a,b)=>a-b);
    let max = nums[0];
    let total = 0;
    for(let i=1; i<nums.length; i++){
        if(max>nums[i] || max === nums[i]){
             total = total + max+1-nums[i];
             // just increment that no by 1
             nums[i] = max + 1;
             max = nums[i];
        }else{
             max = nums[i]
        }
    }
    // console.log(total)
    return total
};