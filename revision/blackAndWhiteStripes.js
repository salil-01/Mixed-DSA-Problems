// Black And White Stripes Ended
// Description

// You have a stripe of checkered paper of length n. Each cell is either white or black.

// What is the minimum number of cells that must be recolored from white to black in order to have a segment of k consecutive black cells on the stripe?

// If the input data is such that a segment of k consecutive black cells already exists, then print 0.

// Input
// The first line contains an integer t (1≤t≤10) — the number of test cases.

// Next, descriptions of t test cases follow.

// The first line of the input contains two integers n and k (1≤k≤n≤2⋅10^5). The second line consists of the letters 'W' (white) and 'B' (black). The line length is n.

// It is guaranteed that the sum of values n does not exceed 2⋅10^5.

// Output
// For each of t test cases print an integer — the minimum number of cells that need to be repainted from white to black in order to have a segment of k consecutive black cells.

// Sample Input 1

// 4
// 5 3
// BBWBW
// 5 5
// BBWBW
// 5 1
// BBWBW
// 1 1
// W
// Sample Output 1

// 1
// 2
// 0
// 1
// Hint

// In the first test case, s="BBWBW" and k=3. It is enough to recolor s3 and get s="BBBBW". This string contains a segment of length k=3 consisting of the letters 'B'.

// In the second test case of the example s="BBWBW" and k=5. It is enough to recolor s3 and s5 and get s="BBBBB". This string contains a segment of length k=5 consisting of the letters 'B'.

// In the third test case of the example s="BBWBW" and k=1. The string s already contains a segment of length k=1 consisting of the letters 'B'.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let str = input[line++].trim();
    color(n, k, str);
  }
}
function color(n, k, str) {
  // console.log(n,k,str)
  let min = Infinity;
  let arr = [];
  for (let i = 0; i < n; i++) {
    let bag = "";
    for (let j = i; j < n; j++) {
      bag += str[j];
      if (bag.length === k) {
        arr.push(bag);
      }
    }
  }
  //
  // console.log(arr)
  for (let i = 0; i < arr.length; i++) {
    let val = checkBag(arr[i]);
    min = Math.min(min, val);
  }
  console.log(min);
}
function checkBag(str) {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (!obj[str[i]]) {
      obj[str[i]] = 1;
    } else {
      obj[str[i]]++;
    }
  }
  if (obj["W"]) {
    return obj["W"];
  } else {
    return 0;
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
