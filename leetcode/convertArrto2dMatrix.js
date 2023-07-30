/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findMatrix = function (nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  let res = [];
  // making a matrix from obj & each row contains distinct number
  while (Object.keys(obj).length !== 0) {
    let arr = [];
    for (let key in obj) {
      // console.log(key)
      if (obj[key] > 1) {
        arr.push(key);
        obj[key]--;
      } else {
        arr.push(key);
        delete obj[key];
      }
    }
    res.push(arr);
  }
  // console.log(res)
  return res;
};
