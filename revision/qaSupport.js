// QA Support Ended
// Description

// You work in the quality control department of technical support for a large company. Your job is to make sure all client issues have been resolved.

// Today you need to check a copy of a dialog between a client and a technical support manager. According to the rules of work, each message of the client must be followed by one or several messages, which are the answer of a support manager. However, sometimes clients ask questions so quickly that some of the manager's answers to old questions appear after the client has asked some new questions.

// Due to the privacy policy, the full text of messages is not available to you, only the order of messages is visible, as well as the type of each message: a customer question or a response from the technical support manager. It is guaranteed that the dialog begins with the question of the client.

// You have to determine, if this dialog may correspond to the rules of work described above, or the rules are certainly breached.

// Input
// Each test contains multiple test cases. The first line contains the number of test cases t (1≤t≤10). Description of the test cases follows.

// The first line of each test case contains one integer n (1≤n≤1000) — the total number of messages in the dialog.

// The second line of each test case consists of n characters "Q" and "A", describing types of messages in the dialog in chronological order. Character "Q" denotes the message with client question, and character "A" — the message with technical support manager answer. It is guaranteed that the first character in the line equals to "Q".

// Output
// For each test case print "Yes" (without quotes) if dialog may correspond to the rules of work, or "No" (without quotes) otherwise.

// Sample Input 1

// 5
// 4
// QQAA
// 4
// QQAQ
// 3
// QAA
// 1
// Q
// 14
// QAQQAQAAQQQAAA
// Sample Output 1

// Yes
// No
// Yes
// No
// Yes
// Hint

// In the first test case the two questions from the client are followed with two specialist's answers. So this dialog may correspond to the rules of work.

// In the second test case one of the first two questions was not answered.

// In the third test case the technical support manager sent two messaged as the answer to the only message of the client.

function runProgram(input) {
  // Write code here
  input = input.trim().split("\n");
  let tc = +input[0].trim();
  let line = 1;
  for (let i = 0; i < tc; i++) {
    let n = +input[line++].trim();
    let str = input[line++].trim();
    qa(n, str);
    //   console.log(count)
  }
}
function qa(n, str) {
  let stack = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "Q") {
      stack.push(str[i]);
    }
    if (str[i] == "A") {
      stack.pop();
    }
  }
  // console.log(stack)
  let flag = false;
  for (let i = 0; i < stack.length; i++) {
    if (stack[i] == "Q") {
      flag = true;
      break;
    }
  }
  flag == false ? console.log("Yes") : console.log("No");
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
