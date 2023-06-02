// Find the Difference of Two Arrays Ended
// Description

// Given two 0-indexed integer arrays nums1 and nums2, print a list numbers:

// 1st list is a list of all distinct integers in nums1 which are not present in nums2.
// 2nd list is a list of all distinct integers in nums2 which are not present in nums1.
// Note that the integers in the lists should be printed in sorted order.

// Input
// Input Format

// The first line contains the number of testcases - t

// For each testcase:

// The first line contains the number of elements in nums1 - n and number of elements present in nums2 - m
// The second line contains the elements of nums1
// The third line contains the elements of nums2
// Constraints

// 1<=t<=10

// 1<=n,m<=10^5

// 1<=nums1[i],nums2[j]<=10^6

// Output
// For each testcase : print 2 lists as stated in the question

// Sample Input 1

// 2
// 3 3
// 1 2 3
// 2 4 6
// 4 4
// 1 2 3 3
// 1 1 2 2
// Sample Output 1

// 1 3
// 4 6
// 3

// Hint

// Testcase 1 :

// For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].
// For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].
// Testcase 2 :

// For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].
// Every integer in nums2 is present in nums1. Therefore, answer[1] = [].
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    twoArr(n, m, arr1, arr2);
  }
}
function twoArr(n, m, arr1, arr2) {
  // console.log(n,m,arr1,arr2)
  let temp1 = [];
  let temp2 = [];
  let obj1 = {};
  let obj2 = {};
  for (let i = 0; i < n; i++) {
    if (!obj1[arr1[i]]) {
      obj1[arr1[i]] = 1;
      temp1.push(arr1[i]);
    }
  }
  for (let i = 0; i < m; i++) {
    if (!obj2[arr2[i]]) {
      obj2[arr2[i]] = 1;
      temp2.push(arr2[i]);
    }
  }

  // console.log(temp1,temp2)
  let res1 = [];
  let res2 = [];
  for (let i = 0; i < temp1.length; i++) {
    if (!obj2[temp1[i]]) {
      res1.push(temp1[i]);
    }
  }
  for (let i = 0; i < temp2.length; i++) {
    if (!obj1[temp2[i]]) {
      res2.push(temp2[i]);
    }
  }
  console.log(
    res1
      .sort(function (a, b) {
        return a - b;
      })
      .join(" ")
  );
  console.log(
    res2
      .sort(function (a, b) {
        return a - b;
      })
      .join(" ")
  );
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
