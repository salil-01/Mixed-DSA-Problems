/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numberOfSubarrays = function(nums, k) {
    let count = 0;
    let obj= {0:1};
    let sum = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]%2===1){
            sum++;
        }
        if(obj[sum-k]){
            count += obj[sum-k] 
        }

        if(!obj[sum]){
            obj[sum] = 1;
        }else{
            obj[sum]++
        }
    }
    // console.log(count)
    return count;
};