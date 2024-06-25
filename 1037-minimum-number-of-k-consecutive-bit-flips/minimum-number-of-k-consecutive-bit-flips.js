/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minKBitFlips = function(nums, k) {
    let total = 0;
    let curr = 0;

    for(let i=0; i<nums.length; i++){
        if(i>=k && nums[i-k]===2){
            curr--;
        }
        if((curr%2)=== nums[i]){
            if(i+k>nums.length){
                return -1
            }
            nums[i] = 2;
            curr++;
            total++;
        }
    }
    return total
};