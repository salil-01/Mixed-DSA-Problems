// Maximize Income Ended
// Description

// James is the CEO of his company, and he has a list of integersa, wherea[i]denotes the company's income forithmonth (income can be negative also). The total income of a company is the sum of all its incomes(Σa[i] , 0 <= i < n). James knows a magic trick using which he can change the sign of any integer.

// The magic trick of changing a number's sign is the operation of multiplying the number by -1.

// He decided to perform this magic trick exactlyktimes on the income arrayain order to maximize the total income of the company.He can perform magic trick on a number one, two, or more times.

// What is the maximum total company income he can achieve after doing the magic trick exactlyktimes?

// Input
// Input Format:-

// The first line of input contains two integers,nandk

// The second line containsnspace-separated integersa[0], a[1], ..., a[n-1]

// Constraints:-

// 1 <= n,k <= 10^5

// -10^4 <= a[i] <= 10^4

// Output
// .Output Format:-

// Print a single integer denoting the maximum total company income.

// Sample Input 1

// 3 2
// -1 -1 1
// Sample Output 1

// 3
// Sample Input 2

// 4 7
// 7 6 -2 1
// Sample Output 2

// 16
// Hint

// TestCase 1:a =[-1, -1, 1], k = 2

// [-1, -1, 1]->[1, -1, 1], 1st operation

// [1,-1, 1]->[1,1, 1], 2ndoperation

// total income =3

// TestCase 2:a =[7, 6, -2, 1], k = 7

// [7, 6,-2, 1]->[7, 6,2, 1], 1st operation

// perform rest 6 operation ona[3].(1 -> -1 -> 1 -> -1 -> 1 -> -1 -> 1)

// total income =16
function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  if (n == 1) {
    if (k % 2 == 0) {
      console.log(arr[0]);
    } else {
      console.log(arr[0] * -1);
    }
  } else {
    max(n, k, arr);
  }
}
function max(n, k, arr) {
  // console.log(n,k,arr
  // if(n==1 && k%2==0){
  //     return arr[0]
  // }
  let val = k;
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = 1;
    } else {
      obj[arr[i]]++;
    }
  }
  // console.log(obj);
  for (let key in obj) {
    if (key < 0) {
      val = val - obj[key];
    }
  }
  // console.log(val)
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      arr[i] = -1 * arr[i];
    }
    sum += arr[i];
  }
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let min = arr[0];
  // console.log(sum)
  if (val % 2 == 0) {
    console.log(sum);
  } else {
    console.log(sum - min);
  }
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
