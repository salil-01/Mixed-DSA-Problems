/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let n = height.length;
  let stack1 = [];
  let right = new Array(n);
  for (let i = 0; i < n; i++) {
    while (stack1.length !== 0 && stack1[stack1.length - 1] <= height[i]) {
      stack1.pop();
    }
    if (stack1.length == 0) {
      right[i] = height[i];
    } else {
      right[i] = stack1[0];
    }
    stack1.push(height[i]);
  }
  // console.log(right)
  let stack2 = [];
  let left = new Array(n);
  for (let i = n - 1; i >= 0; i--) {
    while (stack2.length !== 0 && stack2[stack2.length - 1] <= height[i]) {
      stack2.pop();
    }
    if (stack2.length == 0) {
      left[i] = height[i];
    } else {
      left[i] = stack2[0];
    }
    stack2.push(height[i]);
  }
  // console.log(left)
  let stored = 0;
  for (let i = 0; i < n; i++) {
    stored += Math.min(left[i], right[i]) - height[i];
  }
  return stored;
};
