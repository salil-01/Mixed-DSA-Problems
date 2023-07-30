/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let res;
  let ans = [...nums1, ...nums2];
  ans = ans.sort(function (a, b) {
    return a - b;
  });
  let n = ans.length;
  // console.log(n)
  if (n % 2 == 0) {
    let p = n / 2 - 1;
    // console.log(p)
    res = ans[p] + ans[p + 1];
    return res / 2;
  } else {
    let p = Math.floor(n / 2);
    res = ans[p];
    return res;
    // console.log(res)
  }
};
