/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zeroCount = 0;
  let oneCount = 0;
  let twoCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      zeroCount++;
    } else if (nums[i] === 1) {
      oneCount++;
    } else {
      twoCount++;
    }
  }
  let position = 0;
  while (zeroCount > 0 && position < nums.length) {
    nums[position] = 0;
    zeroCount--;
    position++;
  }
  while (oneCount > 0 && position < nums.length) {
    nums[position] = 1;
    oneCount--;
    position++;
  }
  while (twoCount > 0 && position < nums.length) {
    nums[position] = 2;
    twoCount--;
    position++;
  }
};
