/**
 * @param {number[]} nums
 * @return {number}
 */
var minOperations = function(nums) {
    let total = 0;
    for(let i=1; i<nums.length; i++){
        if(nums[i-1]>nums[i]){
            let diff = nums[i-1]-nums[i];
            let increment = diff + 1;
            total = total + increment;
            nums[i] += increment; 
        }else if(nums[i-1]=== nums[i]){
            total += 1;
            nums[i] += 1;
        }
    }
    return total
};