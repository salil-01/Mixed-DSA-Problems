// Manage stacks of bricks Ended
// Description

// You want all your bricks to be stacked. Currently, you have N stacks of bricks each with height H1, H2, H3, ... HN(assuming all bricks are of 1 unit height).You did not like the configuration much and want to change the height of each stack. To increase the height of a particular stack you can add some bricks to it and to decrease the height you can take out some bricks from that stack.

// You require X units of effort for putting up an item onto the stack and Y units of effort for removing it. Find an integer which is the minimum effort required.

// NOTE: You just need to make stacks of a given height. Not necessarily each stack should be made from its corresponding stack.

// Input
// Input Format:

// The First Line of input contains an integer t, which is the number of test cases. then, t lines follow where first three lines of each test case contains three integers N, X and Y then N lines follow containing two integers each a[i] and b[i] (Initial height of i-th stack and final height of i-th stack.)

// Constraints:

// t <= 100

// n <= 100000

// a[i], b[i] <= 1000000

// Output
// Output an integer which is the minimum effort required.

// Sample Input 1

// 1
// 3
// 6
// 4
// 3 1
// 1 2
// 1 2
// Sample Output 1

// 10

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let x = +input[line++].trim();
    let y = +input[line++].trim();
    let arr1 = [];
    let arr2 = [];
    for (let j = 0; j < n; j++) {
      let [a, b] = input[line++].trim().split(" ").map(Number);
      arr1.push(a);
      arr2.push(b);
    }
    //   console.log(arr1,arr2)
    managestacksofbricks(n, x, y, arr1, arr2);
  }
}
function managestacksofbricks(n, x, y, arr1, arr2) {
  arr1 = arr1.sort(function (a, b) {
    return a - b;
  });
  arr2 = arr2.sort(function (a, b) {
    return a - b;
  });
  //  console.log(n,x,y,arr1,arr2);
  let total = 0;
  for (let i = 0; i < n; i++) {
    if (arr1[i] == arr2[i]) {
      continue;
    }
    if (arr1[i] < arr2[i]) {
      let diff = arr2[i] - arr1[i];
      // console.log(diff)
      total += diff * x;
    }
    if (arr1[i] > arr2[i]) {
      let diff = arr1[i] - arr2[i];
      //   console.log(diff)
      total += diff * y;
    }
  }
  console.log(total);
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
