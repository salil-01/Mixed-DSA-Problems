/**
 * @param {number[]} nums
 * @return {number}
 */
var minDifference = function(nums) {
    if(nums.length <= 4) return 0;
    nums  = nums.sort((a,b)=>a-b); // asc sorted

    // there will be atmost four cases :p
    bigThreeDiff = nums[nums.length-4] - nums[0]   // after removing big three
    smallThreeDiff = nums[nums.length-1] - nums[3] // after removing small three
    oneSmallTwoBigDiff = nums[nums.length-3] - nums[1] // removing one small two big
    oneBigTwoSmallDiff = nums[nums.length-2] - nums[2] // removing one big two small

    return (Math.min(bigThreeDiff,smallThreeDiff,oneSmallTwoBigDiff,oneBigTwoSmallDiff))
};