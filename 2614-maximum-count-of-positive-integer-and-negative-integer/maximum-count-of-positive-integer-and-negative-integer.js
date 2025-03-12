/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function(nums) {
    let posInt = 0;
    let negInt = 0;

    for(let i=0; i<nums.length; i++){
        if(nums[i]<0){
            negInt++;
        }
        if(nums[i]>0){
            posInt++;
        }
    }

    return Math.max(posInt,negInt)
};