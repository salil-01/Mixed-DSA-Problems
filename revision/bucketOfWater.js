// Bucket Of Water Ended
// Description

// Alice hasNbuckets of water. Each bucket is characterized by two integers: the remaining water volumea[i]and the capacity of the bucketb[i](ai <= bi).Alice has chosen to pour all of the leftover water into only two buckets. PrintYESIf he can successfully do it, otherwise printNO.

// Input
// Input Format:-

// The input contains the number of testcases T, then T testcases follows

// The first line of the input contains single integerN, the number of buckets.

// The second line of the input contains N space-separated integers, a[0], a[1], ..., a[N-1].

// The third line of the input contains N space-separated integers, b[0], b[1], ..., b[N-1].

// Constraints:-

// 1 <= T <= 10

// 2 <= N <= 10^5

// 0 <= a[i] <= b[i] <= 10^6

// Output
// Output Format:-

// For T testcases, each line contains eitherYESorNO.

// Sample Input 1

// 2
// 2
// 3 5
// 3 6
// 3
// 6 8 9
// 6 10 12
// Sample Output 1

// YES
// NO
// Hint

// TestCase 1:There are already 2 buckets, so the answer is "YES".

// TestCase 2:We cannot pour all the water into two buckets. answer is "NO".

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let water = input[line++].trim().split(" ").map(Number);
    let buckets = input[line++].trim().split(" ").map(Number);
    bucketOfWater(n, water, buckets) ? console.log("YES") : console.log("NO");
  }
}

//using inbuilt sort O(NlogN)
function bucketOfWater(n, water, buckets) {
  let totalWater = 0;
  for (let i = 0; i < water.length; i++) {
    totalWater += water[i];
  }

  buckets = buckets.sort((a, b) => b - a);

  let cap = buckets[0] + buckets[1];

  if (cap >= totalWater) {
    return true;
  } else {
    return false;
  }
}
//without inbuilt sort O(N);
function bucketOfWater(n, water, buckets) {
  let totalWater = 0;
  for (let i = 0; i < water.length; i++) {
    totalWater += water[i];
  }
  //without sort
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] > first) {
      first = buckets[i];
    }
  }
  for (let i = 0; i < buckets.length; i++) {
    if (buckets[i] > second && buckets[i] !== first) {
      second = buckets[i];
    }
  }
  let cap = first + second;
  if (cap >= totalWater) {
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
