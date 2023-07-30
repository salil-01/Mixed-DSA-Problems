/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let left = 0;
  let right = nums.length - 1;
  let count = 0;
  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum < k) {
      left++;
    } else if (sum > k) {
      right--;
    } else {
      count++;
      left++;
      right--;
    }
  }
  // console.log(count)
  return count;
};
