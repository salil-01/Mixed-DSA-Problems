// First missing positive Ended
// Description

// Given an unsorted integer array nums, return the smallest missing positive integer.

// You must implement an algorithm that runs inO(n)time and uses constant extra space.

// Input
// Input Format
// The input contains of multiple testcases

// The first line of each testcase contains an integer t.

// The next 2*t line contain the description of the testcases.

// The first line of each testcase contains an integer n, the size of the array.

// The second line of each testcase contain n space-separated integers, denoting the n elements of the array.

// Constraints
// 1 <=t<= 10^3

// 1 <=nums.length<= 10^5

// -2^31 <=nums[i]<= 2^31 - 1

// Output
// Output Format
// For each testcase output one integer, the smallest missing positive integer on a new line.

// Sample Input 1

// 3
// 3
// 1 2 0
// 4
// 3 4 -1 1
// 5
// 7 8 9 11 12
// Sample Output 1

// 3
// 2
// 1
// Hint

// First testcase
// 3 is the smallest positive integer which is not present in the array.

// Second testcase
// We have 1 3 and 4 present in the array, so the smallest positive integer not in the array is 2.

// Third testcase
// 1 is the smallest positive integer not in the array.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    console.log(small(n, arr));
  }
}
function small(n, arr) {
  // console.log(n,arr)
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0 && !obj[arr[i]]) {
      obj[arr[i]] = 1;
    }
  }
  // console.log(obj)
  for (let i = 1; i <= n; i++) {
    if (!obj[i]) {
      return i;
    }
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
