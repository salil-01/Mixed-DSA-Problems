// Longest subarray with sum less than or equal to K- II Ended
// Description

// Given an array of sizeNand a numberK

// You have to find the longest subarray whose sum is less than or equal toK.

// Input
// The first line of the input contains`T`, the number of test cases.

// The first line of each test case, contains`N`and`K`, the number of elements in the array and the number K

// The next line contains`N`space-separated integers, denoting elements of the array.

// * * *

// **Constraints**

// 1 <=`T`<= 10

// 1 <=`N`<= 10^5

// 1 <=`K`<= 10000

// 1<=`A[i]`<=10000

// Output
// For each test case, print the length of the longest subarray with the given condition.

// Sample Input 1

// 2
// 5 8
// 1 2 3 4 5
// 5 10
// 1 2 3 4 5
// Sample Output 1

// 3
// 4
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    less(n, k, arr);
  }
}
function less(n, k, arr) {
  // console.log(n,k,arr);
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    let temp = [];
    for (let j = i; j < n; j++) {
      temp.push(arr[j]);
      // console.log(temp)
      let res = totalSum(temp);
      if (res <= k) {
        max = Math.max(temp.length, max);
      } else {
        break;
      }
    }
  }
  console.log(max);
}
function totalSum(arr) {
  let ans = 0;
  for (let i = 0; i < arr.length; i++) {
    ans += arr[i];
  }
  return ans;
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
