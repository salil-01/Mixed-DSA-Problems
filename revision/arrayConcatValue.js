// Find the Array Concatenation Value Ended
// Description

// You are given a 0-indexed integer array nums.

// The concatenation of two numbers is the number formed by concatenating their numerals.

// For example, the concatenation of 15, 49 is 1549.The concatenation value of nums is initially equal to 0. Perform this operation until nums becomes empty:

// If there exists more than one number in nums, pick the first element and last element in nums respectively and add the value of their concatenation to the concatenation value of nums, then delete the first and last element from nums.

// If one element exists, add its value to the concatenation value of nums, then delete it.

// Print the concatenation value of the nums.

// Input
// Input Format

// First-line contains t - number of test cases.

// First-line of each test case contains N, length of array nums

// Second-line contains N - integers

// Constraints

// 1 <= t <= 10

// 1 <= N <= 1000

// 1 <= nums[i] <= 10^4

// Output
// For each test case print the required answer.

// Sample Input 1

// 2
// 4
// 7 52 2 4
// 5
// 5 14 13 8 12
// Sample Output 1

// 596
// 673
// Hint

// Explanation: Before performing any operation, nums is [7,52,2,4] and concatenation value is 0.
//  - In the first operation:
// We pick the first element, 7, and the last element, 4.
// Their concatenation is 74, and we add it to the concatenation value, so it becomes equal to 74.
// Then we delete them from nums, so nums becomes equal to [52,2].
//  - In the second operation:
// We pick the first element, 52, and the last element, 2.
// Their concatenation is 522, and we add it to the concatenation value, so it becomes equal to 596.
// Then we delete them from the nums, so nums becomes empty.
// Since the concatenation value is 596 so the answer is 596.

// Explanation: Before performing any operation, nums is [5,14,13,8,12] and concatenation value is 0.
//  - In the first operation:
// We pick the first element, 5, and the last element, 12.
// Their concatenation is 512, and we add it to the concatenation value, so it becomes equal to 512.
// Then we delete them from the nums, so nums becomes equal to [14,13,8].
//  - In the second operation:
// We pick the first element, 14, and the last element, 8.
// Their concatenation is 148, and we add it to the concatenation value, so it becomes equal to 660.
// Then we delete them from the nums, so nums becomes equal to [13].
//  - In the third operation:
// nums has only one element, so we pick 13 and add it to the concatenation value, so it becomes equal to 673.
// Then we delete it from nums, so nums become empty.
// Since the concatenation value is 673 so the answer is 673.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ");
    concat(n, arr);
  }
}
function concat(n, arr) {
  // console.log(n,arr)
  let left = 0;
  let right = n - 1;
  let res = [];
  while (left < right) {
    res.push(arr[left] + arr[right]);
    left++;
    right--;
  }
  // console.log(res)
  let ans = 0;
  for (let i = 0; i < res.length; i++) {
    ans += +res[i];
  }
  // console.log(ans);
  if (n % 2 == 0) {
    console.log(ans);
  } else {
    mid = Math.floor(n / 2);
    // console.log(mid);
    console.log(ans + Number(arr[mid]));
    // console.log(arr[mid]+res)
  }
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
