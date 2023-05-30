// Number of Segments with Good Sum Ended
// Description

// Given an array of n integers arr[i]. The segment of the array arr[l...r], where (1<=l<=r<=n), is said to be good if the sum of elements on this segment is less than or equal to k. Your task is to find the number of good segments.

// Input
// Input Format

// First-line contains T, no of test cases.

// First-line of each test case contains N, the size of the array, and S, Good sum.

// Second-line of each test case contains N spaced integers, elements of an array.

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 1 <= S <= 10^12

// 1 <= arr[i] <= 10^7

// Output
// For each test case print one integer, the number of good segments in a new line.

// Sample Input 1

// 1
// 7 20
// 2 6 4 3 6 8 9
// Sample Output 1

// 19
function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
    let tc = +input[0].trim();
    let line = 1;
    for(let i=0; i<tc; i++){
        let [n,s] = input[line++].trim().split(" ").map(Number);
        let arr = input[line++].trim().split(" ").map(Number);
        segment(n,s,arr)
    }
  }
  function segment(n,s,arr){
      // console.log(n,s,arr);
      let count = 0;
      let sum = arr[0];
      let pt1 = 0;
      let pt2 = 0;
      while(pt1<n && pt2<n){
          if(sum<=s){
              pt2++;
              // console.log(pt2)
              if(pt1<=pt2){
                  count += pt2-pt1;
              }
              if(pt2<n){
                  sum = sum + arr[pt2]
              }
          }else{
              sum = sum - arr[pt1];
              pt1++;
          }
      }
      console.log(count)
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
