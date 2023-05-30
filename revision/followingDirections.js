// Following Directions Ended
// Description

// Alperen is standing at the point (0,0). He is given a string s of length n and performs n moves. The i-th move is as follows:

// if si=L, then move one unit left;
// if si=R, then move one unit right;
// if si=U, then move one unit up;
// if si=D, then move one unit down.

// There is a candy at (1,1) (that is, one unit above and one unit to the right of Alperen's starting point). You need to determine if Alperen ever passes the candy.

// Input
// Input Format

// The first line of the input contains an integer t — the number of testcases.

// The first line of each test case contains an integer n — the length of the string.

// The second line of each test case contains a string s of length n consisting of characters L, R, D, and U, denoting the moves Alperen makes.

// Constraints

// 1<=t<=10

// 1<=n<=100

// Output
// For each test case, output "YES" (without quotes) if Alperen passes the candy, and "NO" (without quotes) otherwise.

// Sample Input 1

// 7
// 7
// UUURDDL
// 2
// UR
// 8
// RRRUUDDD
// 3
// LLL
// 4
// DUUR
// 5
// RUDLL
// 11
// LLLLDDRUDRD
// Sample Output 1

// YES
// YES
// NO
// NO
// YES
// YES
// NO
// Hint

// In the first test case, Alperen follows the path(0,0)→U(0,1)→U(0,2)→U(0,3)→R(1,3)→D(1,2)→D(1,1)→L(0,1). Note that Alperen doesn't need to end at the candy's location of (1,1), he just needs to pass it at some point.

// In the second test case, Alperen follows the path(0,0)→U(0,1)→R(1,1).

// In the third test case, Alperen follows the path(0,0)→R(1,0)→R(2,0)→R(3,0)→U(3,1)→U(3,2)→D(3,1)→D(3,0)→D(3,−1).
// In the fourth test case, Alperen follows the path(0,0)→L(−1,0)→L(−2,0)→L(−3,0).
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let str = input[line++].trim();
    direction(n, str) ? console.log("YES") : console.log("NO");
  }
}
function direction(n, str) {
  // console.log(n,str)
  // let flag = true;
  let x = 0; //up & down
  let y = 0; // left & right
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "U") {
      x = x + 1;
    } else if (str[i] == "D") {
      x = x - 1;
    } else if (str[i] == "L") {
      y = y - 1;
    } else if (str[i] == "R") {
      y = y + 1;
    }
    if (x == 1 && y == 1) {
      return true;
      // flag = false;
      // break;
    }
  }
  return false;
  // if(flag){
  //     console.log("NO")
  // }
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
