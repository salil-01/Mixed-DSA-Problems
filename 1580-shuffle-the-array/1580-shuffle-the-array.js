/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function(nums, n) {
    let pos = n;
    let res = []
    for(let i=0; i<n; i++){
        res.push(nums[i]);
        res.push(nums[pos]);
        pos++;
    };
    // console.log(res)
    return res
};