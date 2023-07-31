/**
 * @param {number[]} nums
 * @return {number}
 */
var countDistinctIntegers = function(nums) {
    let arr = [];
    for(let i=0; i<nums.length; i++){
        
        let temp = nums[i].toString().split("").reverse().join("");
        temp = parseFloat(temp)
        // console.log(temp);
        arr.push(nums[i]);
        arr.push(temp);
    }
    let res = new Set(arr);
    // console.log(res.size);
    return res.size
};