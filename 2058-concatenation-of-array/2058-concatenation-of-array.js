/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function(nums) {
    let res = [...nums,...nums];
    // console.log(res)
    return res;
};