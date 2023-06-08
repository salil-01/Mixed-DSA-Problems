// Record Breaker Ended
// Description

// Akhil plays regional volleyball and wants to become a pro. Each season he maintains a record of his play. He tabulates the number of times he breaks his season record for most points and least points in a game. Points scored in the first game establish his record for the season, and he begin counting from there.

// Given the scores for a season, determine the number of times Akhil breaks his records for most and least points scored during the season.

// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of the each test case contains an integer numbers n - the number of season.

// Second-line of the each test case contains n integer numbers a1, a2, ... an — the score of each season.

// Constraints

// 1 <= T <= 10

// 1 <= n <= 10^3

// 1 <= a[i] <= 10^8

// Output
// For each test case, output the two integers first is for breaking most point records, second is for breaking least point records.

// Sample Input 1

// 2
// 9
// 10 5 20 20 4 5 2 25 1
// 10
// 3 4 21 36 10 28 35 5 24 42
// Sample Output 1

// 2 4
// 4 0
// Hint

// For the first test case,

// The diagram below depicts the number of times Akhil broke his best and worst records throughout the season:

// image

// He broke his best record twice (after games 2and 7) and his worst record four times (after games 1, 4, 6, and 8), so we print2 4as our answer. Note that hedid notbreak his record for best score during game 3, as his score during that game wasnotstrictly greater than his best record at the time.

// For the second test case,

// The diagram below depicts the number of times Akhil broke his best and worst records throughout the season:

// image

// He broke his best record four times (after games 1, 2, 3, and 9) and his worst record zero times (no score during the season was lower than the one he earned during his first game), so we print4 0as our answer.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    record(n, arr);
  }
}
function record(n, arr) {
  // console.log(n,arr)
  let high = arr[0];
  let low = arr[0];
  let count1 = 0;
  let count2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = arr[i];
      count1++;
    }
    if (arr[i] < low) {
      low = arr[i];
      count2++;
    }
  }
  console.log(count1, count2);
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
