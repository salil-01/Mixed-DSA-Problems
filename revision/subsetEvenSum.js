// Subset even sum Ended
// Description

// Given an array A having N positive integers. Count the number of non-empty subsequences of array A such that for each subsequence, the sum of all it's elements is even.

// Input
// First line: Single integer denoting the value of T - the number of test cases.

// For each test case:

// First line: Single integer denoting the value of N.

// Next line: N single space-separated integers denoting the elements of array A.

// Constraints:

// 1 <= T <= 100
// 1 <= N <= 15
// 1 <= A[ i ] <= 100

// Output
// For each test case, print in a new line, a single integer denoting the required count of subsequences.

// Sample Input 1

// 2
// 4
// 4 3 2 1
// 2
// 2 4
// Sample Output 1

// 7
// 3
// Hint

// Given test cases:

// Test case 1:

// N = 4, A: [ 4, 3, 2, 1 ].
// Subsequences whose sum is even are:
// {4}, {2}, {4,2}, {4,3,1}, {4, 3, 2, 1}, {3, 2, 1}, {3, 1}.

// Test case 2:

// N = 2, A: [ 2, 4].
// Subsequences whose sum of elements is even are:
// {2}, {4}, {2, 4}.
// let count = 0;
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    let count = [];
    subset(arr, [], 0, count);
    console.log(count.length - 1);
  }
}
function subset(arr, temp, index, count) {
  // console.log(n,arr)
  //generate subset
  if (index == arr.length) {
    // console.log(temp)
    let sum = 0;
    for (let i = 0; i < temp.length; i++) {
      //   if(temp[i]){
      sum += temp[i];
      //   }
    }
    if (sum % 2 == 0) {
      count.push(1);
    }
    return;
  }
  //taking in
  subset(arr, [...temp], index + 1, count);
  temp.push(arr[index]);
  // throwing out
  subset(arr, [...temp], index + 1, count);
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
