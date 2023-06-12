// Units Consumed Ended
// Description

// Electricity consumption is measured via slab rates for a particular wattage capacity, which is as follows

// test.png

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// Given the bill, write a program to find the number of units consumed.

// Input
// Input Format:

// First and the only line of input contains the bill amount

// Constraints:

// Bill amount is an integer <= 1000

// Output
// Output the number of units consumed

// Sample Input 1

// 930
// Sample Output 1

// 170

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let amt = +input[0].trim();
  unit(amt);
}
function unit(amt) {
  // console.log(amt)
  amt = amt - 80;
  let res = 0;
  if (amt <= 150) {
    res = amt / 3;
  } else if (amt <= 650) {
    res = 50 + (amt - 150) / 5;
  } else {
    res = 150 + (amt - 650) / 10;
  }
  console.log(res);
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
