/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function (nums, n, left, right) {
    const MOD = 1e9 + 7
    let subSum = []
    for (let i = 0; i < n; i++) {
        let sum = 0;
        for (let j = i; j < n; j++) {
            // calculating sum and pushing in array
            sum += nums[j];
            subSum.push(sum)
        }
    }
    subSum = subSum.sort((a, b) => a - b);

    let ans = 0;
    // console.log(subSum)
    for (let i = left - 1; i < right; i++) {
        ans =  (ans + subSum[i])% MOD
    }
    // console.log(ans)
    return ans

};