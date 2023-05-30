// Find The Town Judge Ended
// Description

// In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.

// Everybody (except for the town judge) trusts the town judge. There is exactly one person that satisfies properties 1 and 2.

// You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi.

// Print the label of the town judge if the town judge exists and can be identified, or print -1 otherwise.

// Input
// Input Format

// First-line contains two integers N and M, no of peoples.

// M - lines contains two integers a and b, i.e. a trusts b

// Constraints

// 1 <= N <= 1000

// 1 <= M <= 10^4

// a[i] != b[i]

// 1 <= a[i], b[i] <= N

// Output
// Print the label of the town judge if the town judge exists and can be identified, or print -1 otherwise.

// Sample Input 1

// 2 1
// 1 2
// Sample Output 1

// 2
// Sample Input 2

// 3 2
// 1 3
// 2 3
// Sample Output 2

// 3
// Sample Input 3

// 3 3
// 1 3
// 2 3
// 3 1
// Sample Output 3

// -1
// Hint

// 1 trusts 2, therefore 2 is the judge

// 1 and 2 trust 3, therefore 3 is the judge as 3 is not trusting others

// 1 and 2 trust 3 but 3 also trusts 1 therefore ans is -1.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, m] = input[0].trim().split(" ").map(Number);
  let line = 1;
  let obj = {};
  for (let i = 0; i < m; i++) {
    let val = input[line++].trim().split(" ").map(Number);
    if (!obj[val[0]]) {
      obj[val[0]] = val[1];
    }
  }
  //   console.log(obj)
  let line2 = 1;
  let flag = true;
  for (let i = 0; i < n; i++) {
    if (obj[i + 1]) {
    } else {
      flag = false;
      console.log(i + 1);
    }
  }
  if (flag) {
    console.log(-1);
  }
  //   judge(n,m,matrix)
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
