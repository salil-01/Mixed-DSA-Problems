// Trimmed Mean Ended
// Description

// Alex is a gymnast participating in a competition where he receives grades from 5N judges. To determine his final score, the competition rules state that the highest N and lowest N grades should be invalidated, and the average of the remaining 3N grades should be taken. Formally, Alex's score is calculated as follows:

// Sort the grades in ascending order
// Remove the N lowest grades and N highest grades
// Calculate the average of the remaining 3N grades rounded down to the nearest integer
// If the grade given by the i-th judge is Xi, what is Alex's final score rounded down to the nearest integer?

// Input
// Input Format

// The first line contains the number of testcases - T

// For each testcase :

// The first line contains the number - N
// The second line contains 5N integers representing the score by each judge
// Constraints

// 1<=T<=10

// 1<=N<=1000

// 1<=Ai<=1000

// Output
// Print Alex's score.

// Sample Input 1

// 1
// 1
// 10 100 20 50 30
// Sample Output 1

// 33
// Hint

// Since N=1, the grade given by one judge who gave the highest grade, and one with the lowest, are invalidated.The 2-nd judge gave the highest grade (100 points), which is invalidated.Additionally, the 1-st judge gave the lowest grade (10 points), which is also invalidated.Thus, the average is (20+50+30)/3​ =33.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    trim(n, arr);
  }
}
function trim(n, arr) {
  // console.log(n,arr)
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  // console.log(arr)
  for (let i = 0; i < n; i++) {
    arr.shift();
    arr.pop();
  }
  // console.log(arr)
  let sum = 0;
  let val = 3 * n;
  for (let i = 0; i < val; i++) {
    sum += arr[i];
  }
  // console.log(sum/val)
  let avg = Math.floor(sum / val);
  console.log(Math.round(avg));
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
