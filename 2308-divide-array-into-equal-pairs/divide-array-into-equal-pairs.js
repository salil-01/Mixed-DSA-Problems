/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function (nums) {
    let pairs = nums.length / 2
    let map = {};
    for (let i = 0; i < nums.length; i++) {
        if (!map[nums[i]]) {
            map[nums[i]] = 1;
        } else {
            map[nums[i]]++;
        }
    }
    // console.log(map);
    for (let key in map) {
        if (map[key] % 2 !== 0) {
            return false
        }
    }
    return true
};