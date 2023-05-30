// Greedy florist Ended
// Description

// A group of friends want to buy a bouquet of flowers. The florist wants to maximize his number of new customers and the money he makes. To do this, he decides he'll multiply the price of each flower by the number of that customer's previously purchased flowers plus 1. The first flower will be original price, (0+1)original price, the next will be (1+1)original price and so on.

// Given the size of the group of friends, the number of flowers they want to purchase and the original prices of the flowers, determine the minimum cost to purchase all of the flowers. The number of flowers they want equals the length of the c array.

// Input
// Input Format
// The first line contains two space-separated integers n and k, the number of flowers and the number of friends.

// The second line contains n space-separated positive integers c[i], the original price of each flower.

// Constraints
// 1 <= n,k <= 100

// 1 <= c[i] <= 10^6

// 0 <= i < n

// Output
// Output Format
// Print the minimum cost to purchase all flowers

// Sample Input 1

// 5 3
// 1 3 5 7 9
// Sample Output 1

// 29
// Hint

// The friends buy flowers for 9, 7 and 3, 5 and 1 for a cost of 9 + 7 + 3(1+1) + 5 + 1(1+1) = 29.
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  flower(n, k, arr);
}
function flower(n, k, arr) {
  // console.log(n,k,arr);
  arr = arr.sort(function (a, b) {
    return b - a;
  });
  // console.log(arr);
  let total = 0;
  let flower = 0;
  for (let i = 0, j = 0; i < n; i++, j++) {
    if (j % k == 0) {
      flower++;
    }
    total = total + arr[i] * flower;
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
