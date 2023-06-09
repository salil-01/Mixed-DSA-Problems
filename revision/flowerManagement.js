// Flower Management Ended
// Description

// You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.

// Given an integer arrayflowerbedcontaining0's and1's, where0means empty and1means not empty, and an integern, find out if ifnnew flowers can be planted in theflowerbedwithout violating the no-adjacent-flowers rule.

// Input
// Input Format

// The first line contains the number of testcases T

// The first line of each testcase contains number of plots M, and the required number of flowers to be added N

// The second line of each testcase contains the values of M plots : 0 or 1

// Constraints

// 1<=T<=10

// 1<=M<=10^6

// 1<=N<=10^5

// Output
// Print "Yes" if it is possible to place N flowers else print "No"

// Sample Input 1

// 1
// 5 1
// 1 0 0 0 1
// Sample Output 1

// Yes
// Hint

// One flower can be placed at index 2.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    flower(n, k, arr);
  }
}
function flower(n, k, arr) {
  // console.log(n,k,arr)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count >= k) {
      break;
    } else {
      if (arr[i] === 0) {
        if (i == 0) {
          if (arr[i + 1] == 0) {
            arr[i] = 1;
            count++;
            continue;
          }
        }

        if (i !== 0 && i !== arr.length - 1) {
          if (arr[i - 1] == 0 && arr[i + 1] == 0) {
            arr[i] = 1;
            count++;
          }
        }

        if (i == arr.length - 1) {
          if (arr[i - 1] == 0) {
            arr[i] = 1;
            count++;
          }
        }
      }
    }
  }
  if (count >= k) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  // console.log(count>=k)
  // console.log(arr)
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

//without break
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let [n, k] = input[line++].trim().split(" ").map(Number);
    let arr = input[line++].trim().split(" ").map(Number);
    flower(n, k, arr);
  }
}
function flower(n, k, arr) {
  // console.log(n,k,arr)
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      if (i == 0) {
        if (arr[i + 1] == 0) {
          arr[i] = 1;
          count++;
        }
      } else if (i == arr.length - 1) {
        if (arr[i - 1] == 0) {
          arr[i] = 1;
          count++;
        }
      } else {
        if (arr[i - 1] == 0 && arr[i + 1] == 0) {
          arr[i] = 1;
          count++;
        }
      }
    }
  }
  if (count >= k) {
    console.log("Yes");
  } else {
    console.log("No");
  }
  // console.log(count>=k)
  // console.log(arr)
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
