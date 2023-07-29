/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  if (nums.length == 1 && target === nums[0]) {
    return 0;
  }
  let pivotValue = findPivot(nums);
  console.log(pivotValue);
  if (pivotValue == -1) {
    // means array is sorted and no rotation has been done
    let res = binaryS(nums, 0, nums.length - 1, target);
    return res;
  } else if (nums[pivotValue] === target) {
    return pivotValue;
  } else {
    // there exist a pivot so divide and search
    if (nums[0] <= target) {
      let res = binaryS(nums, 0, pivotValue - 1, target);
      return res;
    } else {
      let res = binaryS(nums, pivotValue + 1, nums.length - 1, target);
      return res;
    }
  }
};
// finding pivot
function findPivot(nums) {
  let start = 0;
  let end = nums.length - 1;
  while (start < end && start > -1) {
    let mid = Math.floor(start + (end - start) / 2);
    if (nums[mid] > nums[mid + 1]) {
      return mid;
    }
    if (nums[mid] < nums[mid - 1]) {
      return mid - 1;
    }
    if (nums[start] >= nums[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
}
// binary search
function binaryS(nums, start, end, target) {
  while (start <= end && start > -1) {
    let mid = Math.floor(start + (end - start) / 2);
    console.log("loop", mid);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid + 1] === target) {
      return mid + 1;
    }
    if (nums[mid - 1] === target) {
      return mid - 1;
    }
    if (target < nums[mid]) {
      end = mid - 2;
    } else {
      start = mid + 2;
    }
  }
  return -1;
}
