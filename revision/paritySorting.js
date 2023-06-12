// Parity Sorting Ended
// Description

// Given an integer array. Sort the array in such a way that all the odd number are in the beginning of the array followed by the even numbers.

// The odd number and even number should follow an ascending order.

// Input
// Input Format

// The first line contains the number of integers N

// The second line contains the elements of the array

// Constraints

// 1<=N<=10^4

// Output
// Print the final array.

// Sample Input 1

// 5
// 2 5 1 4 2
// Sample Output 1

// 1 5 2 2 4

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  let arr = input[1].trim().split(" ").map(Number);
  sort(n, arr);
}
function sort(n, arr) {
  // console.log(n,arr)
  let odd = [];
  let even = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even.push(arr[i]);
    } else {
      odd.push(arr[i]);
    }
  }
  // console.log(odd,even)
  odd = odd.sort(function (a, b) {
    return a - b;
  });
  even = even.sort(function (a, b) {
    return a - b;
  });
  let res = [...odd, ...even];
  console.log(res.join(" "));
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
