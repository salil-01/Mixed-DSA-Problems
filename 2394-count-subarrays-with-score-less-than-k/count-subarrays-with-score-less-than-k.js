/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function(nums, k) {
    let count = 0
    let low = 0;
    let high = 0;
    let sum = 0;

    while(low<nums.length && high<nums.length){
        sum += nums[high];
        while((sum * (high-low + 1)) >= k){
            sum -= nums[low];
            low++;
        }
        count += high - low + 1;
        high++;
    }
    // console.log(count);
    return count
};