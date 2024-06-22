/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
    let count = 0
    let low = 0;
    let high = 0;
    let product = 1;

    while(low<nums.length && high<nums.length){
        product *= nums[high];
        while(product >= k){
            product = (product/nums[low]);
            low++;
        }
        count += high - low + 1;
        high++;
    }
    // console.log(count);
    return count > 0 ? count : 0;
};