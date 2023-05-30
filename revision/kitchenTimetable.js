// Kitchen Timetable Ended
// Description

// There are N students living in the dormitory of Berland State University. Each of them sometimes wants to use the kitchen, so the head of the dormitory came up with a timetable for kitchen's usage in order to avoid the conflicts:

// The first student starts to use the kitchen at the time 0 and should finish the cooking not later than at the time A1.
// The second student starts to use the kitchen at the time A1 and should finish the cooking not later than at the time A2.
// And so on.
// The N-th student starts to use the kitchen at the time AN-1 and should finish the cooking not later than at the time AN
// The holidays in Berland are approaching, so today each of these N students wants to cook some pancakes. The i-th student needs Bi units of time to cook.

// The students have understood that probably not all of them will be able to cook everything they want. How many students will be able to cook without violating the schedule?

// Input
// Input Format

// The first line of the input contains an integer T denoting the number of test cases. The description of T test cases follows.Each test case contains 3 lines of input

// The first line of each test case contains a single integer N denoting the number of students.
// The second line contains N space-separated integers A1, A2, ..., AN denoting the moments of time by when the corresponding student should finish cooking.
// The third line contains N space-separated integers B1, B2, ..., BN denoting the time required for each of the students to cook.
// Constraints

// 1<=t<=10

// 1<=n<=1000

// 1<=ai<=10^5

// 1<=bi<=10^5

// Output
// For each test case, output a single line containing the number of students that will be able to finish the cooking.

// Sample Input 1

// 2
// 3
// 1 10 15
// 1 10 3
// 3
// 10 20 30
// 15 5 20
// Sample Output 1

// 2
// 1
// Hint

// Example case 1. The first student has 1 unit of time - the moment 0. It will be enough for her to cook. The second student has 9 units of time, but wants to cook for 10 units of time, and won't fit in time. The third student has 5 units of time and will fit in time, because needs to cook only for 3 units of time.

// Example case 2. Each of students has 10 units of time, but only the second one will be able to fit in time.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr1 = input[line++].trim().split(" ").map(Number);
    let arr2 = input[line++].trim().split(" ").map(Number);
    kitchen(n, arr1, arr2);
  }
}
function kitchen(n, arr1, arr2) {
  // console.log(n,arr1,arr2)
  let count = 0;

  for (let i = 0; i < n; i++) {
    if (i == 0) {
      if (arr1[i] >= arr2[i]) {
        count++;
      }
    } else {
      if (arr1[i] - arr1[i - 1] >= arr2[i]) {
        count++;
      }
    }
  }
  console.log(count);
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
