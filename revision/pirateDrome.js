// Piratedromes Ended
// Description

// Captain Jack sparrow, the notorious pirate being inspired by mathematical logic and different varieties of special pattern numbers build his own special numbers called “Piratedromes”. A Piratedrome is defined as the N digit number which has an equal sum of digits at odd and even indices. Jack also needs an algorithm that can print all the N digit Piratedromes for a given N. Since he is a beginner in mathematics and algorithms you have to perform this task for him.

// Hence, you are given a number N, and you are supposed to print all N digit Piratedromes in increasing order of their value.

// Input
// The first line contains a number N which represents the length of the Piratedrome numbers which need to be printed.

// Constraints

// 2 <= n <= 7

// Output
// Print all space-separated Piratedromes of length N in increasing order of their value.

// Sample Input 1

// 2
// Sample Output 1

// 11 22 33 44 55 66 77 88 99
// Hint

// Explanation of Sample 1

// The only numbers from 10 to 100 which have the same sum of digits at even and odd positions are11 22 33 44 55 66 77 88 99 because it is obvious that there are only two consecutive positions in a two-digit number and for the even position sum to be same as the odd position sum we must have same digits at both positions.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let n = +input[0].trim();
  pirateDrome(n);
}
function pirateDrome(n) {
  let diff = n - 2;
  let zeroes = "";
  for (let i = 0; i < diff; i++) {
    zeroes += "0";
  }
  let start = 10 + zeroes;
  let end = 100 + zeroes;
  // findSum(123)

  let ans = num(start, end);
  console.log(
    ans
      .sort(function (a, b) {
        return a - b;
      })
      .join(" ")
  );
}
function num(start, end) {
  start = +start;
  end = +end;
  let res = [];
  for (let i = start; i < end; i++) {
    // let newSum = findSum(i)
    if (findSum(i)) {
      res.push(i);
    }
  }
  return res;
}
function findSum(n) {
  n = n + "";
  let even = 0;
  let odd = 0;
  for (let i = 0; i < n.length; i++) {
    if (i % 2 == 0) {
      even += +n[i];
    } else {
      odd += +n[i];
    }
  }
  // console.log(even,odd)
  if (even == odd) {
    return true;
  } else {
    return false;
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
