/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let obj = {};
    for(let i=0; i<nums.length; i++){
        if(!obj[nums[i]]){
            obj[nums[i]] = 1
        }else{
            obj[nums[i]]++;
        }
    }
    // console.log(obj);
    for (let i = 1; i <= nums.length+1; i++) {
        if (!obj[i]) {
            return i;
        }   
    }
};