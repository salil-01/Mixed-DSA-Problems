// Container with most water Ended
// Description

// You are given an integer arrayheightof lengthn. There are n vertical lines drawn such that the two endpoints of theithline are(i, 0)and(i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Note: that you may not slant the container.

// Input
// Input Format
// The input consists of multiple testcases.

// The first line of input contains an integer t - the number of testcases.

// The next 2*t lines contain the description of the t testcases.

// The first line of each testcase contains an integer n, the size of the array.

// The second line of each testcase contains n space separated integers height[0],height[1]....height[n-1] denoting the n elements of the height array.

// Constraints
// 1 <=t<= 10^3

// 1 <=n<= 10^5

// 1 <=height[i]<= 10^4

// Output
// Output Format
// For each testcase output the maximum amount of water a container can store.

// Sample Input 1

// 1
// 9
// 1 8 6 2 5 4 8 3 7
// Sample Output 1

// 49
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);
    water(n, arr);
  }
}
function water(n, arr) {
  //two pointer
  let area = 0;
  let left = 0;
  let right = n - 1;
  while (left < right) {
    height = Math.min(arr[left], arr[right]);
    waterCover = height * (right - left);
    area = Math.max(waterCover, area);
    if (arr[left] < arr[right]) {
      left++;
    } else {
      right--;
    }
  }
  console.log(area);
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
