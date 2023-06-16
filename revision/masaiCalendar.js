// Masai calendar Ended
// Description

// Here at Masai, the calendar system is unique.

// It shows only number of days, rather than month, year and days.

// So your task is to convert a given number intoxYearyMonthzDay.

// Consider a date system where there is no leap year.

// And note that the number of days per month can be represented as: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31].

// Input
// Input Format
// The first line contains an integer t - the number of testcases.

// Each of the next t lines contain the description of the t testcases.

// The first and the only line of each testcase contains a number n - the number of days.

// Constraints
// 1 ≤ t ≤ 1000

// 1 ≤ n ≤ 10000

// Output
// Output Format
// For each testcase print the days in the desired format, i.e. years months and days.

// Sample Input 1

// 1
// 367
// Sample Output 1

// 1 Year 0 Month 2 Day
// Hint

// Since it is given that the year is not a leap year, and total days are 367, number of year is 1.

// Now the remaining are months and days, since there cannot be a month for 2 days, there are 0 months, and 2 days.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    calendar(n);
  }
}
function calendar(n) {
  // console.log(n)
  let year = Math.floor(n / 365);
  let rem = n % 365;
  let month = 0;
  let arr = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // console.log(rem)
  let i = 0;
  while (rem >= arr[i]) {
    rem = rem - arr[i];
    i++;
    month++;
  }
  console.log(`${year} Year ${month} Month ${rem} Day`);
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
