// Square Sorting Ended
// Description

// Given an array on N integers , sort the array in increasing order of the squares* of the elements.

// If two elements have same values of squares,then the integer which comes first in the given array remains first in the sorted array.

// Square

// Square of a number x is defined as x^2

// Input
// Input Format

// First line contains T, number of test cases.

// First line of each test case contains N, the size of the array.

// Second line of each test case contains N integers, the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 1000

// -1000<= A[i] <= 1000

// Output
// For each test case, print the sorted array in a new line.

// Sample Input 1

// 1
// 5
// -2 3 1 -4 6
// Sample Output 1

// 1 -2 3 -4 6
// Hint

// In the first test case the squares of all the elements are : [ 4, 9, 1, 16, 36]

// Therefore, the order of elements in the sorted array will be [1, -2, 3, -4, 6]
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    sort(n, arr);
  }
}
function sort(n, arr) {
  // console.log(n,arr)
  // let obj = {};
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      let val1 = Math.pow(Math.abs(arr[j]), 2);
      let val2 = Math.pow(Math.abs(arr[j + 1]), 2);
      if (val1 > val2) {
        //swap value
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  console.log(arr.join(" "));
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
