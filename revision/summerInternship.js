// Summer internship Ended
// Description

// You want to apply for internships for the upcoming summer but for that you need show some experience in your resume.

// So for that you decided to do a startup. This startup is about selling muffins.

// You sell muffins at 5$ a piece, and people are loving your muffins and are standing in a long queue to purchase it.

// Every customer purchases a single muffin and pays you in either5$,10$or20$bills, your task now is to find out if you are able to provide change to everybody in the queue.

// If you can provide change to everyone they will be happy and give you a good referral.

// Initially you have no money i.e. no bills of any kind.

// Output YES if you can provide change to everyone, else NO.

// Input
// Input Format
// The first line of the input gives the number of test cases, T. T test cases follow. Each test case consists of two lines.

// The first line of each test case contains an integer n, representing the number of people in a queue.

// The second line of each test case contains n space separated integer, the ith (1<=i<=n) of which denotes the kind of bill the ith person gives you.

// Constraints
// 1 ≤ t ≤ 10

// 1 ≤ n ≤ 10^5

// bills[i] is either 5,10 or 20

// Output
// Output Format
// For each testcase output YES if you can provide change to everyone, else NO.

// Sample Input 1

// 2
// 5
// 5 5 5 10 20
// 5
// 5 5 10 10 20
// Sample Output 1

// YES
// NO
// Hint

// First testcase
// From the first 3 customers, we collect three5$bills in order.From the fourth customer, we collect a10$bill and give back a5$.From the fifth customer, we give a10$bill and a5$bill.Since all customers got correct change, we output YES.

// Second testcase
// From the first two customers in order, we collect two5$bills.For the next two customers in order, we collect a10$bill and give back a5$bill.For the last customer, we can not give the change of15$back because we only have two10$bills.Since not every customer received the correct change, the answer is NO.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let arr = input[line++].trim().split(" ").map(Number);

    summer(n, arr) ? console.log("YES") : console.log("NO");
  }
}
function summer(n, arr) {
  // console.log(n,arr)
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 5) {
      if (!obj[arr[i]]) {
        obj[arr[i]] = 1;
      } else {
        obj[arr[i]]++;
      }
    } else if (arr[i] == 10) {
      if (obj["5"]) {
        if (obj["5"] > 1) {
          obj["5"]--;
        } else {
          delete obj["5"];
        }
        if (!obj[arr[i]]) {
          obj[arr[i]] = 1;
        } else {
          obj[arr[i]]++;
        }
      } else {
        return false;
      }
    } else {
      if (obj["5"] && obj["10"]) {
        if (obj["5"] > 1) {
          obj["5"]--;
        } else {
          delete obj["5"];
        }
        if (obj["10"] > 1) {
          obj["10"]--;
        } else {
          delete obj["10"];
        }
      } else if (obj["5"] >= 3) {
        obj["5"]--;
        obj["5"]--;
        obj["5"]--;
        if (obj["5"] <= 0) {
          delete obj["5"];
        }
      } else {
        return false;
      }
    }
  }
  return true;
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
