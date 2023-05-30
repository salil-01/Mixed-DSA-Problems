// Jumping on the clouds Ended
// Description

// There is a new mobile game that starts with consecutively numbered clouds. Some of the clouds are thunderheads and others are cumulus. The player can jump on any cumulus cloud having a number that is equal to the number of the current cloud plus 1 or 2. The player must avoid the thunderheads. Determine the minimum number of jumps it will take to jump from the starting postion to the last cloud. It is always possible to win the game.

// For each game, you will get an array of clouds numbered 0 if they are safe or 1 if they must be avoided.

// Input
// Input Format
// The first line of the input contains an integer t - the number of testcases.

// The next 2*t lines contain the description of the t testcases.

// The first line of each testcase contains an integer n - the size of the array.

// The second line of each testcases contain n space-separated binary integers describing clouds c[i] where 0<=i<n.

// Constraints
// 1 <= t <= 100

// 1 <= n <= 10^5

// 0 <= c[i] <= 1

// c[0] = c[n-1] = 0

// Output
// Output Format
// For each testcase print the minimum number of jumps needed to win the game.

// Sample Input 1

// 2
// 7
// 0 0 1 0 0 1 0
// 6
// 0 0 0 0 1 0
// Sample Output 1

// 4
// 3
// Hint

// First testcase
// The player must avoid c[2] and c[5]. The game can be won with a minimum of 4 jumps:

// 1.PNG

// Second testcase
// The only thundercloud to avoid is c[4]. The game can be won in 3 jumps:

// 2.PNG
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    jump(n, arr);
  }
}
function jump(n, arr) {
  // console.log(n,arr)
  let temp = [];
  let i = 0;
  while (i < n) {
    if (i < n && arr[i + 2] == 0) {
      // console.log(i)
      temp.push(i);
      i = i + 2;
      // console.log(i)
    } else {
      // console.log("no",i)
      temp.push(i);
      i++;
      // console.log("no",i)
      // i++
    }
  }
  // console.log(temp);
  console.log(temp.length - 1);
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
