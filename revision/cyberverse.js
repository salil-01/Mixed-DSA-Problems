/*Cyberverse Ended
Description

2022 was approaching and the world was about to end. So the gods created the Cyberverse. But this time disappointed with humans the gods decided not to have humans in this world. So they created a world of cyborgs. A world without humans. Isn’t it interesting? So let us dive into the cyberverse and have a look at their problems.

There are N kid cyborgs with the Chief Cyborg and he has K weapons with him. He wants to distribute those K weapons among N kid cyborgs. Since all the kid cyborgs are very good friends, so they set a rule among themselves for taking those weapons.

The rule states that the difference between kid cyborg having the maximum weapons and the kid cyborg having minimum weapons should be less than or equal to 1.

Find the value of the minimum number of weapons a kid cyborg can have when all the K weapons are distributed among them.


Input
Input Format

The first line contains an integer T, denoting the number of test cases.
Each of the next T lines will contain two space-separated integers denoting N and K respectively.
Constraints

1<=T<=10

1<=N<=10^5

1<=K<=10^9


Output
For each test case ,output a single line containing an integer X denoting the minimum number of weapons a kid cyborg can have in that test case.


Sample Input 1 

1
5 8
Sample Output 1

1
Hint

There are 5 kids and 8 weapons.
Hence we will distribute the weapons such that 3 kids have 2 weapons each and the remaining 2 kids have 1 weapon each.
Hence the minimum number of weapons a kid cyborg has is 1. ( That is, min(1,2) = 1 )
*/
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    cyber(n, k);
  }
}
function cyber(n, k) {
  if (k < n) {
    console.log(console.log(0));
  } else if (k === n) {
    console.log(1);
  } else {
    console.log(Math.floor(k / n));
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
